---
title: "Application Backup on Kubernetes the Dev Hubs Way"
titleTh: "Application Backup บน Kubernetes ฉบับ Dev Hubs"
date: "2026-11-04"
author: "Phanuwat Pradabwong"
coverImage: ""
tags: ["Kubernetes", "Backup", "WordPress", "MySQL", "S3", "DevOps"]
excerpt: "How Dev Hubs approaches application backup: collect a MySQL dump and application files in a CronJob, encrypt the bundle, upload it through the S3 API, and verify recovery with a local restore script."
excerptTh: "แนวคิดและตัวอย่าง Application Backup แบบ Dev Hubs: ใช้ CronJob เก็บ MySQL dump คู่กับไฟล์แอป เข้ารหัสก่อนส่งผ่าน S3 API แล้วทดสอบกู้คืนด้วยสคริปต์จากเครื่องเรา"
---

[อ่านฉบับภาษาไทย](/blogs/kubernetes-application-backup-th)

When a WordPress Pod disappears, Kubernetes can start another one. But if someone deletes a post, corrupts the database, or loses the disk behind a PersistentVolume, starting a new Pod will not bring that data back.

For an application like WordPress, recovery needs two things together: the MySQL database that holds posts and settings, and the application directory that holds uploaded images, themes and plugins. A database dump alone may restore a post with a broken image. A copy of the uploads directory alone cannot restore the post that refers to it.

This article explains the application backup approach used at Dev Hubs, then walks through a WordPress example: collect both parts from their Pods, encrypt the resulting bundle, store it through the S3 API, and restore it from a local machine. The important check comes at the end: delete known sample data, restore the backup, and compare what returns with the original.

Source code: [application-backup-demo](https://github.com/devops-skill-experts/application-backup-demo). The repository contains the manifests, backup runner, local restore script and a separate manual walkthrough.

## Before you start

This example recovers a post and image into the existing WordPress and MySQL deployments. If a PVC is lost or recovery targets a new cluster, first prepare the application, database, PVCs and required Secrets at the destination, and make the age private key available for decryption.

Dev Hubs uses a Kubernetes CronJob to collect the database and application files in a backup Pod, upload them through S3, and recover them from a script on the operator’s machine. The example uses WordPress and MySQL with separate PVCs.

The lab code and walkthrough will be available once the files are uploaded to the example repository.

### Choose your route

**Understand the approach:** [data to collect](#backup-data) → [where files go](#architecture) → [backup internals](#backup-flow).

**Try it yourself:** [prepare the lab](#prepare-lab) → [run a backup](#run-backup) → [restore](#restore) → [verify recovery](#verify).

**Assess it for real use:** [limitations](#production).

<a id="backup-data"></a>

## 1. What are we backing up?

A PVC keeps data across Pod replacement, but it is still the application's working storage. The backup creates another recoverable copy, outside that working directory.

| Component | Data in this example | How we collect it |
| --- | --- | --- |
| MySQL Pod + PVC | Posts, users, settings and attachment records in `/var/lib/mysql` | Run `mysqldump`, then compress the SQL output |
| WordPress Pod + PVC | Files under `/var/www/html`, including uploads, themes and plugins | Create a `tar.gz` archive |
| Backup Pod | Temporary workspace for the dump, file archive and manifest | Package as ZIP, encrypt, then upload |
| Object storage | Encrypted `.zip.age` objects | Download when a restore is needed |

We use a logical database dump instead of copying MySQL's live data directory. The dump asks MySQL to export database contents in a form that can be imported later. The application archive captures the files that must accompany those records.

The data path depends on the application image. This example uses the official WordPress image and `/var/www/html`; another image or an application such as SnipeIT needs its own path and configuration review.

<a id="architecture"></a>

## 2. Architecture: a backup Pod coordinates the work

![Backup and restore architecture: MySQL and WordPress send data to a backup Pod for encryption and S3 upload, followed by a Discord notification. A local script downloads, validates and restores both parts.](/blogs/kubernetes-application-backup/architecture.svg?v=4)

*Top: backup runs inside Kubernetes. Bottom: restore runs from your local machine.*

The backup Pod does not mount the application's PVCs. It uses `kubectl exec` to run commands inside the existing Pods and `kubectl cp` to bring the output into its own temporary workspace. This lets each component read its own storage while one Job coordinates the backup.

This approach separates data collection from long-term storage. Each application Pod exports recoverable data; the backup Pod assembles the bundle, encrypts it and sends it to storage.

### Where does each file live?

| Stage | Location | After the operation |
| --- | --- | --- |
| MySQL dump | `/tmp/backup-demo-*.sql.gz` in the MySQL Pod | Runner cleans up the temporary file |
| WordPress archive | `/tmp/backup-demo-*.tar.gz` in the WordPress Pod | Runner cleans up the temporary file |
| Packaging and encryption | Temporary workspace under `/workspace` in the Backup Pod | Not used for long-term backup storage |
| Backup storage | Object storage via S3 | Retained for recovery |
| Download and decryption | `.local/restore-*` on the restore machine | Script cleans up on exit |
| Import and file recovery | Staged through Pod `/tmp`, then imported into MySQL / copied to `/var/www/html` | Recovered data resides in the application PVCs |

The private key stays at `.local/age-key.txt` on your machine. It is not stored alongside the backup object.

<a id="backup-flow"></a>

## 3. What happens during one backup?

The Dev Hubs `app-backup.rb` script coordinates the dump, archive, ZIP packaging, S3 upload and Discord notification. This example follows the same sequence and adds a checksum manifest and age encryption before upload.

### Export the database

Start by selecting a Ready MySQL Pod and running the dump helper inside it. The Bash excerpt below exports the database using credentials from the MySQL Pod environment:

**Inside the MySQL Pod — helper excerpt, not a command for your local shell**

```bash
set -euo pipefail
: "${MYSQL_USER:?}" "${MYSQL_PASSWORD:?}" "${MYSQL_DATABASE:?}"
export MYSQL_PWD="$MYSQL_PASSWORD"
out=/tmp/backup-demo-example.sql.gz
mysqldump --user="$MYSQL_USER" \
  --single-transaction --skip-lock-tables \
  --no-tablespaces --set-gtid-purged=OFF \
  "$MYSQL_DATABASE" | gzip > "$out"
```

**Expected result:** A compressed SQL dump at `$out` inside the MySQL Pod.

`--single-transaction` provides a consistent transactional view for InnoDB tables during the dump, subject to MySQL's limitations such as concurrent schema changes. It does not make the later application file archive part of the same snapshot. The helper uses `pipefail` so a failed dump cannot be hidden by a successful gzip command.

### Archive the application files

Next, run this archive command inside the WordPress Pod:

**Inside the WordPress Pod — excerpt executed by the runner**

```bash
archive=/tmp/backup-demo-example.tar.gz
tar -czf "$archive" -C /var/www/html .
```

**Expected result:** An application archive at `$archive` inside the WordPress Pod.

Use `kubectl cp` to bring the compressed SQL dump and application archive into the backup Pod. Creating the archive under `/tmp` keeps the output outside the directory being archived. Keep application writes quiet while collecting both parts: the database and files are collected at different times. A busy application needs a coordinated maintenance or snapshot strategy to establish one recovery point.

For example, deleting an image after the MySQL dump but before `tar` can leave the restored database pointing to an image missing from the archive. Both checksums can pass because they verify each file’s integrity. Consistency requires coordinating writes throughout the collection of both parts.

### Bundle, encrypt and upload

**Runs in the Backup Pod** — package the temporary files and upload the encrypted bundle.

Before creating the ZIP, the runner writes `manifest.json` with the application type, database type, data path and SHA-256 hashes of both payloads. The restore script uses it to check that the expected files are present and intact.

```text
app-<timestamp>-<run-id>.zip
├── db-<timestamp>-<run-id>.sql.gz
├── files-<timestamp>-<run-id>.tar.gz
└── manifest.json
```

The ZIP is encrypted with an age public recipient before upload. The backup Pod only needs the public recipient; the private key stays on the restore machine. Store a separate copy of that private key securely, because losing it makes the encrypted backup unusable.

The object key has this shape:

```text
wordpress/app-<timestamp>-<run-id>.zip.age
```

After the upload, the runner prints `BACKUP_RESULT` with the object key, size and checksum. It then attempts a Discord notification if `DISCORD_WEBHOOK` is configured, and cleans up temporary files. Check Job status and logs as well as notifications: a notification failure is reported separately from the backup result.

<a id="prepare-lab"></a>

## 4. Prepare the example lab

The example needs a Kubernetes cluster, WordPress and MySQL with separate PVCs, and object storage reachable from the backup Pod. Follow the walkthrough to prepare the lab and record a baseline.

[Manual walkthrough](https://github.com/devops-skill-experts/application-backup-demo/blob/main/docs/MANUAL-WALKTHROUGH.md)

<a id="run-backup"></a>

## 5. Run a backup from the CronJob

Once the application and storage are ready, prepare the backup Pod with collection tools, encryption, an S3 client and permission to access the application. The example packages these tools in a runner image and prepares its public recipient and storage Secret:

**On your local machine, repository root — prepare the backup runner**

```bash
docker build -f backup/Dockerfile -t application-backup-demo/runner:lab-v1 .
bash scripts/deploy-backup.sh
```

**Expected result:** The runner image and suspended `app-backup` CronJob are available.

Choose a runner kubectl version compatible with the target cluster. Set the `KUBECTL_VERSION` build argument as described in the repository README.

The repository includes ServiceAccount and namespace-scoped RBAC permissions for finding Pods and executing commands. These are powerful permissions: keep the backup identity scoped to the applications it needs to access.

This CronJob excerpt shows the schedule and the runner image Kubernetes uses for the backup Pod. Use the full manifest in the repository.

```yaml
spec:
  schedule: "0 2 * * *"
  timeZone: Asia/Bangkok
  suspend: true
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      template:
        spec:
          containers:
            - name: backup
              image: application-backup-demo/runner:lab-v1
          restartPolicy: Never
```

This describes a 02:00 Bangkok schedule, initially suspended so setup does not trigger unattended backups. Start one Job manually first:

**On your local machine — create one backup Job**

Follow this step in the [lab walkthrough](https://github.com/devops-skill-experts/application-backup-demo/blob/main/docs/MANUAL-WALKTHROUGH.md).

**Expected result:** The Job completes and logs contain `BACKUP_RESULT`; keep its `object_key` for restore.

Look for the dump, archive, encryption and upload steps, followed by `BACKUP_RESULT`. If the Job fails, inspect its logs and `kubectl describe job` before continuing.

Save the `object_key` from `BACKUP_RESULT`. It identifies the stored object to use in the restore step.

Once a manual Job succeeds, test the scheduler separately by temporarily setting a short schedule and `suspend: false`, waiting for a controller-created Job, and checking its output. Restore the intended schedule and suspend it again before the restore exercise. `Forbid` prevents overlapping controller-created Jobs from the same CronJob; manually created Jobs still need coordination.

For Discord, configure `DISCORD_WEBHOOK` in the `backup-storage` Secret before creating a Job. The CronJob reads the value through `envFrom`. Verify actual delivery for both successful and failed runs; Secret management details belong in the repository README.

<a id="restore"></a>

## 6. Restore from the local machine

Dev Hubs runs `run-restore-wp-sgl.bash` on the operator’s machine to configure the target and invoke `restore-wordpress.rb`. The example also runs locally, using `restore.py` for the demo’s `.zip.age` files. It downloads, decrypts and validates the backup, then sends SQL and application files back to the existing Pods.

Set the object key from your successful backup and run the preflight first:

**On your local machine — validate before changing data**

```bash
object_key="wordpress/app-<timestamp>-<run-id>.zip.age"
python3 scripts/restore.py "$object_key" --check-only
```

**Expected result:** `CHECK_RESULT` includes `validated: true`. Compare `object_key`, `bytes` and `sha256` with `BACKUP_RESULT` before deleting data.

Replace the example value above before running it. The check downloads the encrypted object, decrypts it using `.local/age-key.txt`, verifies the ZIP and manifest, checks the payload hashes and validates archive entries. It stops before modifying application data.

For the recovery exercise, use only the disposable lab. Pause other writers and ensure no backup Job is active, then delete the sample post and image:

**On your local machine — delete sample data in the disposable lab only**

Follow this step in the [lab walkthrough](https://github.com/devops-skill-experts/application-backup-demo/blob/main/docs/MANUAL-WALKTHROUGH.md).

**Expected result:** `after-delete.json` reports the post, attachment and image file as absent.

Check that the post, attachment and image file are absent. Do not run `seed.php` again after deletion; that would recreate the sample and invalidate the recovery check.

Now restore:

**On your local machine — replace the lab database and recover files**

Before confirming, check the context and namespace printed by preflight, suspend the CronJob, and verify no backup Job is active. This command replaces the database and overlays the application files. Files created after the backup can remain. To match the archive’s file set, restore into an application file area prepared to be empty.

```bash
python3 scripts/restore.py "$object_key" --confirm-lab-restore
```

**Expected result:** The script finishes successfully; compare the recovered data in the next step.

The flag confirms replacement of the lab database. After validation, the script enables WordPress maintenance mode, drops and recreates the database, imports the dump and copies archived application files back. It preserves the destination's `wp-config.php` so its database connection settings stay appropriate to that environment, then removes maintenance mode and temporary files.

Preflight reduces the chance of starting a restore with a broken archive. It does not make restore atomic: a failure during import or file copying can still leave a partially restored application. Cleanup attempts to remove maintenance mode even if restore fails. Check the application and manage maintenance before returning it to service.

<a id="verify"></a>

## 7. Verify the recovery, including the image

Record the restored state:

**On your local machine — compare against the baseline**

Use the commands in the [lab walkthrough](https://github.com/devops-skill-experts/application-backup-demo/blob/main/docs/MANUAL-WALKTHROUGH.md) for this step. Then compare with `diff -u .local/before-backup.json .local/after-restore.json`.

**Expected result:** `diff` prints no differences and exits with code 0 when the records match.

Compare the post ID, content hash, attachment existence, image hash and `wp-config.php` hash. Then open the post and image in the browser. Check HTTP response content as well as status: an application may redirect a missing image URL to an HTML page that returns HTTP 200. Verify the image content type and downloaded checksum.

Also test an incorrect private key and an incomplete archive. Both should fail before modifying the database. Check that the existing application data remains intact after each failure.

<a id="production"></a>

## 8. What changes before using this with a real application?

The same sequence can support another application, but its recovery contract needs to be explicit.

| Decision | What to establish |
| --- | --- |
| Recovery point | How much recent data can be lost, and therefore how often backups must run |
| Consistency | How to coordinate database writes and file changes during collection |
| Recovery time | How long download, decryption, import and file restoration actually take |
| Application configuration | Which environment-specific files to preserve and which secrets must be recoverable, such as SnipeIT's `APP_KEY` |
| Storage | Separate failure domain and retention rules |
| Encryption keys | Secure key recovery independent of the application machine and bucket |
| Monitoring | Detect failed Jobs, missing scheduled backups and failed notifications |
| Restore semantics | The demo copies files over existing files; files created after the backup can remain. Exact recovery needs a deliberate clean destination strategy |

A useful backup routine includes repeated restore exercises with known data. That is how we establish what the backup can recover, and how long recovering it will take.

## References and supporting guides

- [Example repository](https://github.com/devops-skill-experts/application-backup-demo): manifests, backup runner and restore script
- [Dev Hubs backup approach](https://github.com/wintech-thai/onix-v2-jobs/blob/5a408fd57dba04d9a63b1e5af7ff63f74385b482/scripts-ruby/app-backup.rb): database dump, application archive and storage upload
- [Local restore entry point](https://github.com/wintech-thai/utility-scripts/blob/fd65b2bcd2f3455e7649e81ded3d537fe4f27da1/run-restore-wp-sgl.bash): sets environment values and invokes the Ruby restore script
- [Restore approach](https://github.com/wintech-thai/utility-scripts/blob/fd65b2bcd2f3455e7649e81ded3d537fe4f27da1/restore-wordpress.rb): returning the database and files to the application

The article's example adds age encryption before upload to the original backup approach. OS-specific installation, environment troubleshooting and detailed test evidence are kept in the repository README and supporting documentation.

Continue with: [README](https://github.com/devops-skill-experts/application-backup-demo#readme) · [Manual walkthrough](https://github.com/devops-skill-experts/application-backup-demo/blob/main/docs/MANUAL-WALKTHROUGH.md)
