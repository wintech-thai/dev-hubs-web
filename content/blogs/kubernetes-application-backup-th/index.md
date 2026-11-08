---
title: "Application Backup บน Kubernetes ฉบับ Dev Hubs"
titleTh: "Application Backup บน Kubernetes ฉบับ Dev Hubs"
listed: false
date: "2026-11-04"
author: "Phanuwat Pradabwong"
coverImage: ""
tags: ["Kubernetes", "Backup", "WordPress", "MySQL", "S3", "DevOps", "ภาษาไทย"]
excerpt: "แนวคิดและตัวอย่าง Application Backup แบบ Dev Hubs: ใช้ CronJob เก็บ MySQL dump คู่กับไฟล์แอป เข้ารหัสก่อนส่งผ่าน S3 API แล้วทดสอบกู้คืนด้วยสคริปต์จากเครื่องเรา"
excerptTh: "แนวคิดและตัวอย่าง Application Backup แบบ Dev Hubs: ใช้ CronJob เก็บ MySQL dump คู่กับไฟล์แอป เข้ารหัสก่อนส่งผ่าน S3 API แล้วทดสอบกู้คืนด้วยสคริปต์จากเครื่องเรา"
---

[Read in English](/blogs/kubernetes-application-backup)

เมื่อ Pod ของ WordPress หายไป Kubernetes สร้าง Pod ใหม่ขึ้นมาทดแทนได้ แต่ถ้าบทความถูกลบ ฐานข้อมูลเสีย หรือดิสก์ที่เก็บข้อมูลสูญหาย การสร้าง Pod ใหม่ไม่ได้ทำให้ข้อมูลเหล่านั้นกลับมาด้วย

การกู้คืนแอปอย่าง WordPress ต้องมีข้อมูลสองส่วนที่สัมพันธ์กัน คือฐานข้อมูล MySQL ซึ่งเก็บบทความ ผู้ใช้ และการตั้งค่า กับไฟล์ของแอปซึ่งเก็บรูปที่อัปโหลด ธีม และปลั๊กอิน ถ้าเก็บเฉพาะฐานข้อมูล เราอาจได้บทความกลับมาพร้อมรูปที่เปิดไม่ได้ ส่วนไฟล์รูปอย่างเดียวก็ไม่พอจะคืนบทความที่อ้างถึงรูปนั้น

บทความนี้อธิบายแนวทาง Application Backup ที่ Dev Hubs ใช้ แล้วพาลองทำกับ WordPress ตั้งแต่เก็บข้อมูลจาก Pod ของแต่ละส่วน รวมไฟล์ เข้ารหัส ส่งไปเก็บผ่าน S3 API จนถึงกู้คืนจากเครื่องเรา ขั้นตอนสุดท้ายคือการลบข้อมูลตัวอย่างแล้ว restore กลับมาเทียบกับของเดิม เพื่อยืนยันว่า backup นั้นใช้กู้ข้อมูลได้จริง

โค้ดตัวอย่างอยู่ที่ [application-backup-demo](https://github.com/devops-skill-experts/application-backup-demo) มีทั้ง manifests, ตัวรัน backup, สคริปต์ restore และคู่มือสำหรับทดลองทำทีละขั้นด้วยตัวเอง

## อ่านก่อนเริ่ม

ตัวอย่างนี้กู้โพสต์และรูปกลับเข้า WordPress และ MySQL ชุดเดิม หาก PVC สูญหายหรือต้องกู้ไปยังคลัสเตอร์ใหม่ ให้เตรียมแอป ฐานข้อมูล PVC และ Secret ที่จำเป็นในปลายทาง รวมถึง private key ของ age สำหรับถอดรหัส backup ก่อน

แนวทางของ Dev Hubs ให้ CronJob สร้าง Backup Pod เพื่อเก็บฐานข้อมูลและไฟล์แอป ส่งไปยัง object storage ผ่าน S3 แล้วใช้สคริปต์บนเครื่องผู้ใช้กู้ข้อมูลกลับเข้า Kubernetes ตัวอย่างใช้ WordPress และ MySQL ซึ่งมี PVC แยกกัน

เริ่มที่ [Quick Start](https://github.com/devops-skill-experts/application-backup-demo#quick-start) บน Mac Apple Silicon ที่เปิด Kubernetes แบบ kubeadm ใน Docker Desktop

### เลือกอ่านตามสิ่งที่ต้องการ

**เข้าใจวิธีทำ:** [ข้อมูลที่ต้องเก็บ](#backup-data) → [เส้นทางไฟล์](#architecture) → [ขั้นตอนภายใน backup](#backup-flow)

**ลงมือทำ:** [เตรียม lab](#prepare-lab) → [สั่ง backup](#run-backup) → [restore](#restore) → [ตรวจผล](#verify)

**ประเมินก่อนใช้จริง:** [ข้อจำกัด](#production)

<a id="backup-data"></a>

## 1. เราต้องสำรองข้อมูลอะไรบ้าง?

PVC ช่วยให้ข้อมูลยังอยู่เมื่อเปลี่ยน Pod แต่ข้อมูลนั้นยังเป็นข้อมูลชุดที่แอปใช้งานอยู่ ส่วน backup คือสำเนาอีกชุดที่เก็บไว้สำหรับกู้คืนเมื่อข้อมูลใช้งานมีปัญหา

| ส่วนประกอบ | ข้อมูลในตัวอย่างนี้ | วิธีเก็บข้อมูล |
| --- | --- | --- |
| MySQL Pod + PVC | บทความ ผู้ใช้ การตั้งค่า และข้อมูล attachment ใน `/var/lib/mysql` | ใช้ `mysqldump` ส่งออก SQL แล้วบีบอัด |
| WordPress Pod + PVC | ไฟล์ใน `/var/www/html` รวม uploads, ธีม และปลั๊กอิน | เก็บเป็น archive แบบ `tar.gz` |
| Backup Pod | พื้นที่ชั่วคราวสำหรับ dump, archive และ manifest | รวมเป็น ZIP เข้ารหัส แล้วอัปโหลด |
| Object storage | ไฟล์สำรองที่เข้ารหัสแล้ว ลงท้าย `.zip.age` | ดาวน์โหลดเมื่อจะ restore |

ฝั่งฐานข้อมูลเราใช้ logical dump โดยให้ MySQL ส่งออกข้อมูลในรูปแบบที่ import กลับได้ แทนการคัดลอก data directory ขณะที่ฐานข้อมูลกำลังทำงาน ส่วน archive ของแอปเก็บไฟล์ที่ต้องใช้คู่กับข้อมูลในฐานข้อมูล

ตำแหน่งเก็บไฟล์ขึ้นอยู่กับ image ที่ใช้ ตัวอย่างนี้ใช้ official WordPress image จึงเก็บจาก `/var/www/html` ถ้าเปลี่ยน image หรือประยุกต์กับแอปอื่น เช่น SnipeIT ต้องตรวจ data directory และ configuration ของแอปนั้นก่อน

<a id="architecture"></a>

## 2. ภาพรวม: ให้ Backup Pod เป็นตัวประสานงาน

![แผนภาพ backup และ restore: MySQL กับ WordPress ส่งข้อมูลให้ Backup Pod เข้ารหัสและอัปโหลดไปยัง object storage แล้วแจ้ง Discord จากนั้นเครื่อง local ดาวน์โหลด ตรวจไฟล์ และกู้ข้อมูลกลับเข้าแต่ละ Pod](/blogs/kubernetes-application-backup/architecture-th.svg?v=4)

*ด้านบนคือเส้นทาง backup ภายใน Kubernetes ส่วนด้านล่างคือเส้นทาง restore จากเครื่อง local*

Backup Pod ใช้ `kubectl exec` เรียกคำสั่งภายใน Pod ของ MySQL และ WordPress แล้วใช้ `kubectl cp` ย้ายผลลัพธ์กลับมารวมในพื้นที่ชั่วคราวของตัวเอง แต่ละแอปจึงอ่านข้อมูลจาก storage ของตัวเองได้ โดยไม่ต้องนำ PVC ของแอปมา mount ใน Backup Pod

หัวใจของวิธีนี้คือแยกการเก็บข้อมูลออกจากการจัดเก็บระยะยาว แต่ละ Pod ส่งออกข้อมูลในรูปแบบที่กู้คืนได้ ส่วน Backup Pod รับผิดชอบการรวมไฟล์ เข้ารหัส และส่งไปยัง storage

### ไฟล์แต่ละช่วงอยู่ที่ไหน?

| ช่วง | ตำแหน่ง | หลังจบงาน |
| --- | --- | --- |
| Dump MySQL | `/tmp/backup-demo-*.sql.gz` ใน MySQL Pod | ตัวรันล้างไฟล์ชั่วคราว |
| Archive WordPress | `/tmp/backup-demo-*.tar.gz` ใน WordPress Pod | ตัวรันล้างไฟล์ชั่วคราว |
| รวมและเข้ารหัส | พื้นที่ชั่วคราวใต้ `/workspace` ใน Backup Pod | ไม่ใช้เป็นที่เก็บ backup ระยะยาว |
| เก็บ backup | Object storage ผ่าน S3 | เก็บไว้สำหรับกู้คืน |
| ดาวน์โหลดและถอดรหัส | `.local/restore-*` บนเครื่องที่รัน restore | สคริปต์ล้างเมื่อจบงาน |
| Import และคืนไฟล์ | ส่งผ่าน `/tmp` ของ Pod แล้ว import เข้า MySQL / copy ไป `/var/www/html` | ข้อมูลที่กู้แล้วอยู่ใน PVC ของแอป |

Private key อยู่ที่ `.local/age-key.txt` บนเครื่องเรา ไม่ได้ส่งไปเก็บคู่กับ object บน storage

<a id="backup-flow"></a>

## 3. Backup หนึ่งรอบทำงานอย่างไร?

สคริปต์ `app-backup.rb` ของ Dev Hubs ประสานการ dump, archive, รวม ZIP, อัปโหลดผ่าน S3 และแจ้ง Discord ตัวอย่างนี้เดินตามลำดับเดียวกันและเพิ่ม manifest สำหรับตรวจ checksum กับการเข้ารหัสด้วย age ก่อนอัปโหลด

### ส่งออกข้อมูลจาก MySQL

เริ่มจากเลือก MySQL Pod ที่พร้อมใช้งาน แล้วเรียก dump helper ภายใน Pod นั้น ตัวอย่าง Bash ด้านล่างแสดงส่วนส่งออกฐานข้อมูล โดยใช้ credentials จาก environment ของ MySQL Pod:

**ภายใน MySQL Pod — ตัวอย่างสิ่งที่ dump helper ทำ ไม่ใช่คำสั่งให้รันบนเครื่องเรา**

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

**ผลที่ต้องเห็น:** ได้ SQL dump ที่บีบอัดไว้ใน `$out` ของ MySQL Pod

`--single-transaction` ช่วยให้ dump เห็นข้อมูลของตาราง InnoDB อย่างสอดคล้องกันใน transaction โดยยังมีข้อจำกัดของ MySQL เช่น การเปลี่ยน schema ระหว่าง dump ส่วน helper ใช้ `pipefail` เพื่อให้คำสั่งล้มเหลวเมื่อ dump มีปัญหา แม้คำสั่ง gzip ที่ต่อท้ายจะจบสำเร็จก็ตาม

ความสอดคล้องในฐานข้อมูลยังไม่ได้หมายความว่า archive ของไฟล์แอปที่เก็บทีหลังเป็น snapshot เวลาเดียวกัน เรื่องนี้ต้องพิจารณาเพิ่มเมื่อแอปมีการเขียนข้อมูลระหว่าง backup

### เก็บไฟล์ของแอป

ขั้นต่อไปเรียก `tar` ภายใน WordPress Pod:

**ภายใน WordPress Pod — ตัวอย่างสิ่งที่ตัวรันสั่งผ่าน exec**

```bash
archive=/tmp/backup-demo-example.tar.gz
tar -czf "$archive" -C /var/www/html .
```

**ผลที่ต้องเห็น:** ได้ archive ใน `$archive` ของ WordPress Pod

จากนั้นใช้ `kubectl cp` ย้ายทั้ง SQL dump และ archive กลับมายัง Backup Pod เพื่อรวมเป็น backup ชุดเดียวกัน การวาง archive ไว้ใต้ `/tmp` ช่วยให้ไฟล์ที่กำลังสร้างอยู่นอก directory ที่นำมาเก็บ

ระหว่างทดลองควรงดแก้บทความและอัปโหลดไฟล์ เพราะฐานข้อมูลกับไฟล์ถูกเก็บคนละจังหวะ ถ้าแอปมีการเขียนข้อมูลตลอดเวลา ต้องออกแบบการหยุดเขียนชั่วคราวหรือวิธี snapshot ที่ประสานข้อมูลสองส่วนให้ตรงกันก่อน

เช่น หากมีคนลบรูปหลัง MySQL dump แต่ก่อน `tar` ฐานข้อมูลที่กู้คืนอาจยังอ้างถึงรูปที่ไม่มีใน archive แม้ checksum ของทั้งสองไฟล์จะผ่าน เพราะ checksum ตรวจความสมบูรณ์ของแต่ละไฟล์ ส่วนความสอดคล้องของข้อมูลต้องควบคุมตลอดช่วงที่เก็บทั้งสองส่วน

### รวมไฟล์ เข้ารหัส และอัปโหลด

**ทำงานใน Backup Pod** — รวมไฟล์ชั่วคราวแล้วส่งเฉพาะไฟล์ที่เข้ารหัสไป storage

ก่อนรวม ZIP ตัวรันสร้าง `manifest.json` เพื่อบันทึกชนิดแอป ชนิดฐานข้อมูล data path และค่า SHA-256 ของไฟล์ข้อมูลทั้งสองส่วน สคริปต์ restore ใช้ข้อมูลนี้ตรวจว่าได้ไฟล์ครบและเนื้อหาไม่เปลี่ยนไป

```text
app-<timestamp>-<run-id>.zip
├── db-<timestamp>-<run-id>.sql.gz
├── files-<timestamp>-<run-id>.tar.gz
└── manifest.json
```

จากนั้นเข้ารหัส ZIP ด้วย public recipient ของ age ก่อนอัปโหลด Backup Pod ต้องใช้เพียง public recipient ส่วน private key เก็บไว้บนเครื่องที่ใช้ restore และควรมีสำเนาที่เก็บอย่างปลอดภัยแยกไว้ เพราะหาก key หาย แม้มีไฟล์ backup ก็ไม่สามารถเปิดข้อมูลได้

ไฟล์ที่เก็บบน storage จะมี object key รูปแบบนี้:

```text
wordpress/app-<timestamp>-<run-id>.zip.age
```

เมื่ออัปโหลดสำเร็จ ตัวรันพิมพ์ `BACKUP_RESULT` ซึ่งมี object key ขนาดไฟล์ และ checksum จากนั้นพยายามแจ้งผลผ่าน Discord หากกำหนด `DISCORD_WEBHOOK` แล้วจึงล้างไฟล์ชั่วคราว ควรตรวจสถานะ Job และ logs ร่วมด้วย เพราะการส่งแจ้งเตือนอาจล้มเหลวแยกจากงาน backup ได้

<a id="prepare-lab"></a>

## 4. เตรียม lab ตัวอย่าง

ก่อนรันตัวอย่าง ให้เตรียม Kubernetes cluster, WordPress และ MySQL ที่มี PVC แยกกัน และ object storage ที่ Backup Pod เข้าถึงได้ จากนั้นเตรียม lab และบันทึกข้อมูลตั้งต้นตามคู่มือ

ทำขั้นที่ 1–2 ใน [Quick Start](https://github.com/devops-skill-experts/application-backup-demo#quick-start) เพื่อเตรียม lab และบันทึกข้อมูลก่อน backup

<a id="run-backup"></a>

## 5. สั่ง backup จาก CronJob

เมื่อแอปและ storage พร้อมแล้ว ขั้นต่อไปคือเตรียม Backup Pod ให้มีเครื่องมือ dump/copy/archive, ตัวเข้ารหัส และ S3 client พร้อมสิทธิ์เข้าถึงแอป ตัวอย่างรวมเครื่องมือเหล่านี้ไว้ใน runner image และใช้สคริปต์เตรียม public recipient กับ Secret:

**บนเครื่องเรา จากโฟลเดอร์ repo — เตรียม backup runner**

```bash
docker build -f backup/Dockerfile -t application-backup-demo/runner:lab-v1 .
bash scripts/deploy-backup.sh
```

**ผลที่ต้องเห็น:** มี runner image และ CronJob `app-backup` ซึ่งยัง suspend อยู่

เลือก kubectl ใน runner ให้เข้ากันได้กับ Kubernetes ที่ใช้งาน โดยกำหนดผ่าน build argument `KUBECTL_VERSION` ตามคำแนะนำใน README

ใน repo มี ServiceAccount และ RBAC ระดับ namespace สำหรับค้นหา Pod และเรียกคำสั่งภายใน Pod สิทธิ์เหล่านี้เข้าถึงข้อมูลของแอปได้ จึงควรจำกัดขอบเขตให้ตรงกับแอปที่ต้อง backup

ส่วนที่ตัดมาจาก CronJob ด้านล่างแสดงตารางเวลาและ runner image ที่ Kubernetes ใช้สร้าง Backup Pod ดู manifest ฉบับเต็มใน repo

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

ความหมายคือตั้งเวลาตีสองตามเวลาไทย แต่พักการทำงานอัตโนมัติไว้ก่อนด้วย `suspend: true` เราจะเริ่มจากสั่ง Job เองหนึ่งรอบเพื่อดูว่าทุกขั้นตอนทำงานครบ:

**บนเครื่องเรา — สั่ง Job หนึ่งรอบ**

ทำขั้นที่ 3 ใน [Quick Start](https://github.com/devops-skill-experts/application-backup-demo#quick-start)

**ผลที่ต้องเห็น:** Job เป็น Complete และ logs มี `BACKUP_RESULT`; เก็บ `object_key` ไว้ใช้ restore

ใน logs ควรเห็นขั้นตอน dump, archive, เข้ารหัส และอัปโหลด ตามด้วย `BACKUP_RESULT` หาก Job ล้มเหลว ให้ตรวจ logs และรายละเอียดจาก `kubectl describe job` ก่อนทำขั้นตอนต่อไป

เก็บค่า `object_key` จาก `BACKUP_RESULT` ไว้ ค่านี้ระบุไฟล์บน storage ที่จะนำมากู้คืนในขั้นต่อไป

หลังสั่ง Job เองผ่านแล้ว ควรทดสอบ scheduler แยกอีกครั้ง โดยตั้ง schedule ให้ถี่ขึ้นชั่วคราวและเปลี่ยน `suspend: false` รอ Job ที่ controller สร้างขึ้นจริงแล้วตรวจผล จากนั้นคืน schedule เดิมและพัก CronJob ก่อนทดลอง restore ส่วน `Forbid` ช่วยป้องกัน Job ตามเวลาของ CronJob เดียวกันทำงานซ้อนกัน แต่ Job ที่สั่งเองยังต้องจัดลำดับไม่ให้ชนกัน

สำหรับ Discord ให้ตั้งค่า webhook ผ่าน Secret ชื่อ `backup-storage` ใน key `DISCORD_WEBHOOK` ก่อนสร้าง Job โดย CronJob จะอ่านค่าผ่าน `envFrom` หลังตั้งค่าให้ตรวจการส่งจริงทั้งกรณีสำเร็จและล้มเหลว รายละเอียดการจัดการ Secret อยู่ใน README

<a id="restore"></a>

## 6. Restore จากเครื่องเรา

ในแนวทางของ Dev Hubs ตัวเรียก `run-restore-wp-sgl.bash` ตั้งค่าปลายทางแล้วเรียก `restore-wordpress.rb` จากเครื่องผู้ใช้ ตัวอย่างนี้ใช้ `restore.py` จากเครื่องผู้ใช้เช่นกัน โดยรองรับไฟล์ `.zip.age` ของ demo สคริปต์ดาวน์โหลด ถอดรหัสและตรวจไฟล์ แล้วส่ง SQL และไฟล์แอปกลับเข้า Pod ที่มีอยู่

ทำขั้นที่ 4 ใน [Quick Start](https://github.com/devops-skill-experts/application-backup-demo#quick-start) บน Mac เพื่ออ่าน `object_key` จาก `.local/backup-result.json` ของ Job รอบนี้ จากนั้นสคริปต์จะดาวน์โหลด ถอดรหัส และตรวจไฟล์โดยไม่แก้ข้อมูลแอป ไปต่อเมื่อเห็น `Preflight matches this backup` เท่านั้น

การทดลองลบข้อมูลต่อจากนี้ใช้กับ lab ที่สร้างไว้เท่านั้น ควรหยุดการเขียนข้อมูลอื่นและตรวจว่าไม่มี backup Job ทำงานอยู่ แล้วลบบทความกับรูปตัวอย่าง:

**บนเครื่องเรา — ลบเฉพาะข้อมูลตัวอย่างใน disposable lab**

ทำขั้นที่ 5 ใน [Quick Start](https://github.com/devops-skill-experts/application-backup-demo#quick-start)

**ผลที่ต้องเห็น:** สถานะ post, attachment และ image file ใน `after-delete.json` เป็นไม่มีอยู่

ตรวจให้แน่ใจว่าบทความ attachment และไฟล์รูปหายไปแล้ว **อย่ารัน `seed.php` ซ้ำหลังลบ** เพราะจะกลายเป็นการสร้างข้อมูลใหม่แทนการพิสูจน์ว่ากู้คืนจาก backup ได้

จากนั้นรัน restore:

**บนเครื่องเรา — เขียนทับฐานข้อมูลและคืนไฟล์ของ lab**

ก่อนยืนยัน ให้ตรวจ context และ namespace ที่แสดงใน preflight พัก CronJob และตรวจว่าไม่มี backup Job ทำงานอยู่ คำสั่งนี้ลบและสร้างฐานข้อมูลใหม่แล้วคัดลอกไฟล์ทับของเดิม ไฟล์ที่เพิ่มหลัง backup อาจยังค้างอยู่ หากต้องการให้ชุดไฟล์ตรงกับ archive ให้กู้ลงพื้นที่ไฟล์แอปที่เตรียมให้ว่าง

```bash
python3 scripts/restore.py "$object_key" --confirm-lab-restore
```

**ผลที่ต้องเห็น:** สคริปต์จบสำเร็จ; ต้องตรวจเทียบข้อมูลในขั้นถัดไปก่อนสรุปว่ากู้ครบ

Flag นี้ยืนยันให้เขียนทับฐานข้อมูลของ lab เมื่อผ่านการตรวจไฟล์แล้ว สคริปต์เปิด maintenance mode ของ WordPress ลบและสร้างฐานข้อมูลใหม่ import SQL dump แล้ว copy ไฟล์แอปกลับ โดยเก็บ `wp-config.php` ของปลายทางไว้ เพื่อให้ค่าเชื่อมต่อฐานข้อมูลยังตรงกับ environment นั้น เมื่อเสร็จจึงปิด maintenance mode และล้างไฟล์ชั่วคราว

Preflight ช่วยลดโอกาสเริ่ม restore ด้วยไฟล์เสีย แต่ไม่ได้ทำให้การ restore ทั้งชุดสำเร็จหรือล้มเหลวพร้อมกันทุกส่วน หาก import หรือ copy ไฟล์ล้มเหลวกลางทาง แอปอาจอยู่ในสถานะที่คืนข้อมูลได้เพียงบางส่วน สคริปต์พยายามปิด maintenance mode ในขั้นล้างงานแม้ restore ล้มเหลว ให้ตรวจสถานะแอปและจัดการ maintenance ก่อนเปิดให้บริการอีกครั้ง

<a id="verify"></a>

## 7. ตรวจว่าข้อมูลกลับมาครบ รวมถึงไฟล์รูป

เก็บสถานะหลัง restore แล้วเทียบกับก่อน backup:

**บนเครื่องเรา — เทียบผลกับ baseline**

ทำขั้นที่ 6 ใน [Quick Start](https://github.com/devops-skill-experts/application-backup-demo#quick-start) เพื่อบันทึกผลหลัง restore แล้วเทียบกับ baseline

**ผลที่ต้องเห็น:** `diff` ไม่แสดงความแตกต่างและจบด้วย exit code 0 เมื่อข้อมูลตรงกัน

ตรวจทั้ง post ID, hash ของเนื้อหา, attachment, hash ของรูป และ hash ของ `wp-config.php` จากนั้นเปิดบทความกับรูปผ่าน browser ด้วย

การตรวจ HTTP ต้องดูเนื้อหาที่ตอบกลับร่วมกับ status code เพราะบางแอป redirect URL ของไฟล์ที่หายไปไปยังหน้า HTML ซึ่งตอบ HTTP 200 ได้ สำหรับรูปควรตรวจชนิดเนื้อหาและ checksum ของไฟล์ที่ดาวน์โหลดกลับมาด้วย

ทดสอบกรณีใช้ private key ผิดและ archive ที่มีข้อมูลไม่ครบด้วย ทั้งสองกรณีควรหยุดก่อนแก้ฐานข้อมูล พร้อมตรวจว่าข้อมูลเดิมยังอยู่ การตรวจเช่นนี้ช่วยยืนยันว่าระบบปฏิเสธ backup ที่ใช้กู้คืนไม่ได้

<a id="production"></a>

## 8. ก่อนนำไปใช้กับแอปจริง ต้องตัดสินใจอะไรเพิ่ม?

ลำดับการทำงานนี้ประยุกต์กับแอปอื่นได้ แต่ต้องกำหนดให้ชัดว่าต้องกู้คืนอะไร และยอมรับการสูญเสียข้อมูลหรือเวลาหยุดระบบได้เท่าไร

| ประเด็น | สิ่งที่ต้องกำหนด |
| --- | --- |
| จุดเวลาที่ต้องกู้คืนได้ | ยอมเสียข้อมูลล่าสุดได้เท่าไร เพื่อกำหนดความถี่ของ backup |
| ความสอดคล้องของข้อมูล | ทำอย่างไรให้การเขียนฐานข้อมูลกับการเปลี่ยนไฟล์สัมพันธ์กันระหว่างเก็บข้อมูล |
| เวลาที่ใช้กู้คืน | วัดเวลาดาวน์โหลด ถอดรหัส import และคืนไฟล์จริง |
| Configuration ของแอป | ไฟล์ใดควรเก็บค่าของปลายทาง และ secrets ใดต้องกู้คืนได้ เช่น `APP_KEY` ของ SnipeIT |
| Storage | เก็บแยกจากระบบแอป และกำหนดอายุการเก็บข้อมูล |
| Encryption key | มีวิธีกู้ key ที่ไม่ขึ้นอยู่กับเครื่องแอปหรือ bucket เพียงแห่งเดียว |
| Monitoring | ตรวจพบ Job ล้มเหลว รอบ backup ที่หายไป และการแจ้งเตือนที่ส่งไม่สำเร็จ |
| วิธีคืนไฟล์ | Demo copy ทับไฟล์เดิม จึงอาจเหลือไฟล์ที่สร้างหลังวัน backup หากต้องการสถานะตรงตาม backup ต้องออกแบบการคืนลงปลายทางว่างให้เหมาะสม |

ควรฝึก restore ด้วยข้อมูลที่รู้ค่าตั้งต้นเป็นระยะ เพื่อยืนยันว่า backup กู้ข้อมูลอะไรกลับมาได้บ้าง และต้องใช้เวลานานเท่าไรเมื่อจำเป็นต้องใช้งานจริง

## แหล่งอ้างอิงและคู่มือประกอบ

- [โค้ดประกอบบทความ](https://github.com/devops-skill-experts/application-backup-demo): manifests, backup runner และสคริปต์ restore
- [แนวทาง backup ของ Dev Hubs](https://github.com/wintech-thai/onix-v2-jobs/blob/5a408fd57dba04d9a63b1e5af7ff63f74385b482/scripts-ruby/app-backup.rb): การ dump ฐานข้อมูล เก็บไฟล์แอป และส่งไปยัง storage
- [ตัวเรียก restore จากเครื่อง local](https://github.com/wintech-thai/utility-scripts/blob/fd65b2bcd2f3455e7649e81ded3d537fe4f27da1/run-restore-wp-sgl.bash): กำหนด environment แล้วเรียกสคริปต์ Ruby
- [แนวทาง restore](https://github.com/wintech-thai/utility-scripts/blob/fd65b2bcd2f3455e7649e81ded3d537fe4f27da1/restore-wordpress.rb): การนำฐานข้อมูลและไฟล์กลับเข้าแอป

ตัวอย่างในบทความเพิ่มขั้นตอนเข้ารหัสด้วย age ก่อนอัปโหลดจากแนวทาง backup ต้นฉบับ ส่วนวิธีติดตั้งตามระบบปฏิบัติการ การแก้ปัญหาเฉพาะ environment และหลักฐานทดสอบแยกไว้ใน README และเอกสารประกอบของ repo

คู่มืออ่านต่อ: [Quick Start](https://github.com/devops-skill-experts/application-backup-demo#quick-start) · [Manual walkthrough](https://github.com/devops-skill-experts/application-backup-demo/blob/main/docs/MANUAL-WALKTHROUGH.md)
