---
title: "Deep Dive into Edge Deployment with Please Deploy Framework"
titleTh: "เจาะลึกการทำ Edge Deployment แบบไม่ปวดหัวด้วย Please Deploy Framework"
date: "2025-01-15"
author: "DevHubs Team"
coverImage: ""
tags: ["DevOps", "GitOps", "Kubernetes", "K3s", "Edge Computing"]
excerpt: "Learn how Please Deploy Framework automates K3s cluster bootstrapping on Edge Servers with GitOps through ArgoCD, reducing manual work and eliminating the need to SSH into each machine."
excerptTh: "Please Deploy Framework คือชุดสคริปต์สำหรับ bootstrap K3s cluster บน Edge Server แบบอัตโนมัติ พร้อมเชื่อม GitOps ผ่าน ArgoCD ช่วยลดงาน Manual และไม่ต้อง SSH เข้าไปตั้งค่าทีละเครื่อง"
---

# เจาะลึกการทำ Edge Deployment แบบไม่ปวดหัวด้วย Please Deploy Framework

> **บทความนี้เหมาะสำหรับ:** DevOps Engineer, Platform Engineer หรือทีม Infrastructure ที่ต้องดูแล Edge Server หลายเครื่องพร้อมกัน และต้องการทำให้กระบวนการติดตั้งเป็นระบบอัตโนมัติ ผู้อ่านควรคุ้นเคยกับ Linux, Kubernetes พื้นฐาน และแนวคิด GitOps มาบ้างแล้ว

**TL;DR:** Please Deploy Framework คือชุดสคริปต์สำหรับ bootstrap K3s cluster บน Edge Server แบบอัตโนมัติ พร้อมเชื่อม GitOps ผ่าน ArgoCD ช่วยลดงาน Manual และไม่ต้อง SSH เข้าไปตั้งค่าทีละเครื่อง

---

## ความท้าทายของ Edge Deployment ใน Scale จริง

Edge Deployment ฟังดูเหมือนเป็นแค่การเอา application ไป deploy บน server ที่อยู่ปลายทาง แต่ในความเป็นจริงมันมีรายละเอียดที่ซับซ้อนกว่าที่หลายคนคิด

ตอนที่มี Edge Server แค่ไม่กี่เครื่อง การติดตั้งแบบ Manual อาจยังพอรับมือได้ เราสามารถ SSH เข้าไปทีละเครื่อง รัน command ติดตั้ง K3s ตั้งค่า network ปรับ config และ deploy workload ได้โดยใช้เวลาไม่นาน

แต่เมื่อจำนวน Edge Server เพิ่มขึ้นจากหลักหน่วยเป็นหลักสิบหรือหลักร้อย ปัญหาเดิม ๆ ก็เริ่มปรากฏขึ้น

* Server แต่ละเครื่องมี config ไม่เหมือนกัน
* เวอร์ชันของ component เริ่มแตกต่างกัน
* Config Drift เริ่มสะสมขึ้นเรื่อย ๆ
* การ upgrade ต้องทำซ้ำหลายรอบ
* การแก้ไขปัญหาต้อง SSH เข้าไปตรวจสอบทีละเครื่อง

หลายครั้งความผิดพลาดไม่ได้เกิดจาก platform แต่เกิดจาก Human Error เช่น ลืมเปิด port, ใช้ config คนละเวอร์ชัน, deploy ไฟล์ผิด environment หรือรัน command ไม่ครบตามขั้นตอน

ยิ่งมี Edge Server กระจายอยู่หลาย location การจัดการก็ยิ่งซับซ้อนขึ้น เพราะการเปลี่ยนแปลงเล็ก ๆ อาจต้องทำซ้ำกับทุก cluster

สิ่งที่ดูเหมือนเป็นงาน deploy ธรรมดา กลับกลายเป็นภาระด้าน operations ที่กินเวลามากกว่าที่หลายทีมคาดไว้ ทั้งการ deployment, upgrade และการรักษา config consistency ของทุก environment

นี่จึงเป็นเหตุผลที่หลายทีมหันมาใช้ Automation และ GitOps มากขึ้น เพื่อเปลี่ยน Edge Deployment จากงานที่ต้องทำด้วยมือ มาเป็นกระบวนการที่สามารถทำซ้ำได้ ตรวจสอบได้ และจัดการได้จากศูนย์กลาง


---

## Overview of Please Deploy Framework

เครื่องมือที่เข้ามาตอบโจทย์ปัญหานี้คือ Please Deploy Framework ซึ่งเป็น Framework ที่ออกแบบมาเพื่อติดตั้ง K3s cluster แบบอัตโนมัติและจัดการ Kubernetes platform ผ่านแนวคิด GitOps อย่างสมบูรณ์

> **GitOps** คือแนวทางการจัดการระบบที่ใช้ Git เป็นแหล่งความจริงหนึ่งเดียว (Single Source of Truth) ทุกการเปลี่ยนแปลงค่า config ต้องผ่าน Git ก่อน จากนั้นระบบอย่าง ArgoCD จะดึงการเปลี่ยนแปลงนั้นไปใช้งานใน cluster โดยอัตโนมัติ

Framework นี้ครอบคลุมตั้งแต่ bootstrap cluster ไปจนถึงการส่งมอบ workload จริง โดยเปลี่ยนทุกขั้นตอนให้กลายเป็น workflow ที่รันซ้ำได้ ตรวจสอบย้อนหลังได้ และดูแลรักษาได้ง่ายผ่าน Git

แกนหลักของ workflow แบ่งเป็น sequential phases ที่แต่ละขั้นตอนมี clear boundary และ fail-fast เมื่อมีปัญหา แทนที่จะเป็น monolithic script ที่ debug ยาก การออกแบบแบบนี้ทำให้ระบบสามารถ recover จากความผิดพลาดได้ง่าย และทีมสามารถเข้าใจ dependency ระหว่าง component ได้ชัดเจน

---

## ทำไมต้อง Please Deploy Framework?

Please Deploy Framework ออกแบบมาเพื่อแก้ปัญหา Edge Deployment ทุกระดับ ไม่ว่าจะเป็น startup ที่มี server ไม่กี่เครื่อง หรือองค์กรขนาดใหญ่ที่มี Edge Server หลายสิบหลายร้อยเครื่อง

### ข้อดีที่โดดเด่น

**🚀 Automation ตั้งแต่วันแรก**
- ลด Human Error จากการติดตั้งด้วยมือ
- รันซ้ำได้ทุกครั้ง (Reproducible)
- ประหยัดเวลาในการ setup server ใหม่

**🔒 Security by Design**
- ใช้ DNS Challenge ไม่ต้องเปิดพอร์ต 80 สู่สาธารณะ
- Centralized Secret Management ด้วย External Secrets
- Audit trail ครบถ้วนผ่าน Git history
- RBAC และ Network Isolation ตั้งแต่ต้น

**📦 GitOps-Native**
- Git เป็น Single Source of Truth
- Rollback ง่ายด้วย Git revert
- ตรวจสอบการเปลี่ยนแปลงย้อนหลังได้ทั้งหมด
- Declarative configuration ที่อ่านและเข้าใจง่าย

**🌐 Air-gapped Ready**
- รัน Gitea ภายในเครื่องทำให้ทำงานได้แม้ internet ขาด
- ลดการพึ่งพา external services
- เหมาะกับ environment ที่มีข้อจำกัดด้านเครือข่าย

**⚡ Lightweight และ Efficient**
- ใช้ K3s ที่เบากว่า Kubernetes เต็มรูปแบบ
- Resource footprint ต่ำ เหมาะกับ Edge devices
- Bootstrap เร็ว ใช้เวลาไม่ถึง 30 นาที

**🔄 Easy Upgrade และ Maintenance**
- อัปเกรด component ผ่าน Git commit เดียว
- ArgoCD sync อัตโนมัติ
- Staged rollout ทดสอบใน staging ก่อน production

**📊 Built-in Observability**
- Prometheus + Grafana สำหรับ metrics
- Loki สำหรับ log aggregation
- Alert manager เชื่อมกับ Discord/Slack

### เหมาะกับทุกขนาดองค์กร

**Startup (1-10 servers):**
- เริ่มต้นด้วย automation ที่ถูกต้องตั้งแต่แรก
- ไม่ต้องมา refactor ทีหลังเมื่อ scale
- ประหยัดเวลาในการ manual configuration

**Growing Company (10-50 servers):**
- Scale ได้ง่ายโดยไม่ต้องเปลี่ยน architecture
- Config consistency ข้ามทุก environment
- ทีมทำงานร่วมกันได้ง่ายผ่าน Git workflow

**Enterprise (50+ servers):**
- จัดการ Edge Server หลายสิบหลายร้อยเครื่องได้อย่างมีประสิทธิภาพ
- Multi-environment support (dev, staging, production)
- Compliance-ready ด้วย audit trail ที่ครบถ้วน

---

## Evolution Path: จาก Manual สู่ GitOps

Please Deploy Framework เหมาะกับองค์กรที่กำลัง evolve จาก manual operations ไปสู่ automation ในระดับ GitOps

```
Stage 1: Manual Operations (1-5 servers)
  └─ SSH + bash scripts + documentation
  └─ เหมาะกับ: Startup, PoC, Small teams
  
Stage 2: Configuration Management (5-20 servers)
  └─ Ansible/Chef + Git + CI/CD
  └─ เหมาะกับ: Growing teams, Multiple environments
  
Stage 3: GitOps-Driven (20-100 servers) ← Please Deploy อยู่ตรงนี้
  └─ K3s + ArgoCD + Gitea + Declarative config
  └─ เหมาะกับ: Edge deployment, IoT platforms, Multi-site
  
Stage 4: Enterprise Platform (100+ servers)
  └─ Rancher/Fleet + Multi-region + Service mesh
  └─ เหมาะกับ: Large enterprises, Global infrastructure
```

Framework นี้ออกแบบมาสำหรับทีมที่อยู่ใน **Stage 2-3** และต้องการก้าวไปสู่ GitOps โดยไม่ต้องลงทุนกับ enterprise platform ที่ซับซ้อนและมีค่าใช้จ่ายสูง

---

## Architecture Overview

![PLSdeFW GCS Architecture](/blogs/please-deploy-framwork/architecture-diagram.png)

โครงสร้างของ Please Deploy Framework แบ่งออกเป็น 4 Layer หลัก เพื่อแยกความรับผิดชอบของแต่ละ component และทำให้ platform ขยายตัวได้ง่ายขึ้น

### Layer 1 - Bootstrap Layer
Bootstrap Layer ทำงานผ่านสคริปต์ `00-install-k3s.bash` โดยดาวน์โหลดและติดตั้ง K3s ด้วยค่าปรับแต่งมาตรฐานสำหรับ cluster ขนาดเล็กที่รัน embedded etcd ซึ่งเป็น datastore สำหรับ Kubernetes เพื่อรองรับการทำ High Availability ในอนาคต พร้อมปิด service Traefik ที่ติดมากับ K3s เพื่อให้ Ingress NGINX เข้ามาจัดการ traffic แทน

### Layer 2 - Secret Management Layer
Secret Layer ติดตั้งและจัดเตรียม secret management (Secrets) ผ่านสคริปต์ `01-initial-secrets.bash` โดยสร้าง Encryption Key เบื้องต้นจากไฟล์ `.env` แล้วแปลงค่าเหล่านี้ลงสู่ Kubernetes Secrets ก่อนที่ component ใดๆ จะเข้ามาเรียกใช้งาน เป็นการวางด่านแรกด้านความปลอดภัยของ environment

### Layer 3 - GitOps Layer
GitOps Layer จะติดตั้ง GitOps stack ซึ่งประกอบด้วย ArgoCD และ Gitea โดยรัน ArgoCD ควบคู่กับ Gitea ภายใน cluster เพื่อทำเป็น Git server ส่วนตัวโดยไม่ต้องพึ่งพา service ภายนอก

> **ArgoCD** คือเครื่องมือที่คอยตรวจสอบ Git Repository และนำการเปลี่ยนแปลงไปใช้กับ Kubernetes cluster โดยอัตโนมัติ
>
> **Gitea** คือ Git server แบบ self-hosted ที่รันได้ภายในเครื่อง ใช้เก็บ config โดยไม่ต้องส่งข้อมูลออกสู่ภายนอก

### Layer 4 - Addon Management Layer
Addon Layer จัดการการ platform component ผ่านไฟล์ `ApplicationSet` ซึ่งเป็น Custom Resource ของ ArgoCD ที่ช่วยสร้าง Application หลายชุดจาก template เดียว ArgoCD จะ discover clusters ที่มี label `custom: "true"` แล้วส่ง service เสริมไปรันตาม cluster เป้าหมายได้อย่างแม่นยำ

---

## Design Philosophy: Sequential Phases และ Clear Boundaries

Framework นี้ออกแบบให้แต่ละ phase มี clear boundary และ fail-fast เมื่อมีปัญหา แทนที่จะเป็น monolithic script ที่ debug ยาก

### Phase 1: Bootstrap Layer
**แนวคิด:** สร้างฐาน Kubernetes cluster ที่เตรียมพร้อมสำหรับ High Availability และ Monitoring ตั้งแต่วันแรก

**Design Decisions:**
- ใช้ embedded etcd แทน external datastore เพื่อลด dependency และเตรียมพร้อมสำหรับ multi-node HA
- ปิด Traefik (default ingress ของ K3s) เพื่อให้ NGINX เข้ามาจัดการ routing ที่ซับซ้อนกว่า โดยเฉพาะการทำงานร่วมกับ Cloudflare
- เปิด etcd metrics ตั้งแต่ต้นเพื่อให้ Prometheus สามารถเก็บข้อมูลสุขภาพของ datastore ได้ทันที
- กำหนด storage path ไปที่ `/data` เพื่อรองรับ production server ที่มักมี dedicated disk สำหรับ persistent data

### Phase 2: Secret Management Layer
**แนวคิด:** สร้าง Secret และ Credential ทั้งหมดก่อนที่ component อื่นจะเริ่มทำงาน เพื่อป้องกัน Race Condition

**Design Decisions:**
- ใช้ Idempotency pattern ทำให้สคริปต์รันซ้ำได้โดยไม่สร้างค่าซ้ำ
- ใช้ polling loop รอจนกว่า Secret จะถูกสร้างสำเร็จ แทนการ assume ว่าทุกอย่างเสร็จทันที (เพราะ Kubernetes Job ทำงานแบบ asynchronous)
- แยก Secret เป็น 2 ชั้น: `initial-secret` (generated) และ `initial-secret-preset` (from .env file) เพื่อแยก auto-generated values กับ user-provided values

**ข้อดี:** ความปลอดภัยสูง และป้องกัน Race Condition ได้อย่างมีประสิทธิภาพ

### Phase 3: Core Addons Layer
**แนวคิด:** ติดตั้ง 5 core components ที่จำเป็นสำหรับ GitOps platform โดยใช้ K3s HelmChart CRD แทน Helm CLI

**Design Decisions:**
- **ArgoCD:** GitOps controller ที่เป็นหัวใจของ automation
- **NGINX Ingress:** ใช้ hostPort แทน LoadBalancer เพื่อลด complexity บน Edge environment
- **External Secrets:** ดึง Secret จาก central store แทนการ hardcode ในแต่ละ cluster
- **Cert-Manager:** ใช้ DNS Challenge แทน HTTP Challenge เพราะ Edge Server มักอยู่หลัง NAT
- **Gitea:** Local Git server เพื่อรองรับ air-gapped deployment

**ข้อดี:** ได้ความสามารถในการทำงานโดยไม่ต้องพึ่ง internet ตลอดเวลา และมี flexibility สูง

### Phase 4: GitOps Bootstrap Layer
**แนวคิด:** เชื่อม ArgoCD กับ Git repository และเริ่มต้น continuous sync workflow

**Design Decisions:**
- รองรับทั้งการดึงจาก GitHub โดยตรง และการดึงจาก Gitea ภายในเครื่อง
- ใช้ cluster label `custom: "true"` เพื่อให้ ApplicationSet คัดเลือก target cluster ได้อย่างยืดหยุ่น
- ใช้ git-sync-job ดึงโค้ดจาก remote มาเก็บใน local Gitea เพื่อรองรับ air-gapped scenario

**ข้อดี:** Flexibility สูง สามารถเลือกได้ว่าจะดึง config จากไหน และรองรับทั้ง online และ offline deployment

---

## โครงสร้าง Repository และ GitOps Pattern

โครงสร้างโฟลเดอร์ของโปรเจกต์สะท้อนแนวคิด separation of concerns และ progressive deployment:

```
please-deploy/
├── 00-configs/          # Core addon definitions
├── 00-install-k3s.bash  # Phase 1: Cluster bootstrap
├── 01-initial-secrets.bash  # Phase 2: Secret management
├── 02-initial-addons.bash   # Phase 3: Core components
├── 04-boot-strap.bash       # Phase 4: GitOps activation
├── 01-bootstrap/        # ArgoCD connection configs
├── 03-monitoring/       # Observability stack configs
└── 99-deployments/
    ├── applications/    # ApplicationSet definitions (1 file per service)
    └── manifests/       # Helm values per service
```

### GitOps Pattern: Declarative และ Auditable

แนวคิดหลักของ GitOps คือการใช้ Git เป็น Single Source of Truth ทำให้ทุกการเปลี่ยนแปลงมี audit trail และ rollback ได้ง่าย

**ข้อดีของ GitOps Pattern:**
- **Single Source of Truth:** ทุกการเปลี่ยนแปลงผ่าน Git เท่านั้น
- **Audit Trail:** ดูประวัติการเปลี่ยนแปลงได้ทั้งหมดผ่าน Git history
- **Rollback ง่าย:** Git revert แล้ว ArgoCD sync ให้อัตโนมัติ
- **Declarative:** บอกว่าต้องการอะไร ไม่ใช่ทำอย่างไร
- **Collaboration:** ทีมทำงานร่วมกันได้ง่ายผ่าน Git workflow
- **Version Control:** ทุก config มี version history ครบถ้วน

---

## Key Components และ Design Rationale

หลังจาก GitOps เริ่มทำงานสมบูรณ์แล้ว ArgoCD จะ sync และ deploy services เหล่านี้เข้าสู่ cluster โดยอัตโนมัติ มาดูแนวคิดเบื้องหลังการเลือกใช้แต่ละ component:

### Cert-Manager + DNS Challenge Pattern

**ปัญหา:** Edge Server มักอยู่หลัง NAT หรือ firewall ทำให้ Let's Encrypt ไม่สามารถเข้าถึงพอร์ต 80 เพื่อทำ HTTP Challenge ได้

**แนวทาง:** ใช้ DNS Challenge ผ่าน Cloudflare API แทน ทำให้ไม่ต้องเปิดพอร์ต 80 สู่สาธารณะ

**ข้อดี:** 
- ปลอดภัยกว่า ไม่ต้องเปิดพอร์ต
- ทำงานได้แม้ server อยู่หลัง NAT
- SSL certificate ต่ออายุอัตโนมัติ

### External Secrets Pattern

**ปัญหา:** การ hardcode Secret ในแต่ละ cluster ทำให้ยากต่อการ rotate และมีความเสี่ยงด้านความปลอดภัย

**แนวทาง:** ใช้ ClusterSecretStore ดึง Secret จาก `initial-secret-preset` ที่เป็น central source

**ข้อดี:**
- Secret rotation ง่าย (แก้ที่เดียว sync ทุกที่)
- ลด Secret sprawl
- Centralized management ทำให้ควบคุมได้ง่าย

### Ingress Pattern: NGINX + Cloudflare Proxy

**ปัญหา:** Edge Server มี Public IP ที่เปลี่ยนแปลงได้ และต้องการซ่อน origin server

**แนวทาง:** 
- ใช้ NGINX Ingress กับ `hostPort` แทน LoadBalancer
- ใช้ DDNS updater อัปเดต Cloudflare DNS อัตโนมัติ
- ใช้ Cloudflare Proxy ซ่อน origin IP

**ข้อดี:**
- ไม่ต้องจ่ายค่า LoadBalancer
- Origin IP ถูกซ่อนโดย Cloudflare
- DDoS protection จาก Cloudflare
- SSL termination ที่ Cloudflare edge

### Monitoring Stack Pattern

**ปัญหา:** Prometheus Operator มี CRD จำนวนมาก ถ้าติดตั้งพร้อมกับ core components จะทำให้ Kubernetes API overwhelmed

**แนวทาง:** แยก monitoring ออกมาติดตั้งในขั้นตอนสุดท้าย พร้อมใช้ polling loop รอให้ CRD พร้อมก่อน

**ข้อดี:**
- ลด race condition ระหว่างการติดตั้ง
- Monitoring ไม่ block core platform
- Observability ครบถ้วนด้วย Prometheus + Grafana + Loki

### Local Git Server (Gitea) Pattern

**ปัญหา:** Edge Server อาจอยู่ใน air-gapped environment หรือมี internet ที่ไม่เสถียร

**แนวทาง:** รัน Gitea ภายใน cluster และใช้ git-sync-job ดึงโค้ดจาก remote มาเก็บไว้ local

**ข้อดี:**
- ทำงานได้แม้ internet ขาด
- Latency ต่ำกว่าการดึงจาก GitHub ตลอดเวลา
- Data sovereignty - config ไม่ออกนอก cluster
- Backup และ disaster recovery ง่ายขึ้น

---

## Deployment Workflow: From Bare Metal to GitOps

![PLSdeFW GCS Architecture](/blogs/please-deploy-framwork/deployment-workflow.png)

การ bootstrap Edge Server ใหม่เป็นกระบวนการ sequential ที่แต่ละขั้นตอนมี dependency ชัดเจน:

### ทำไมต้องเป็นลำดับนี้?

**Dependency Chain:**
1. **K3s ก่อน (`00-install-k3s.bash`)** → ไม่มี cluster ก็ไม่มีที่รัน component อื่น
2. **Secrets ก่อน Addons (`01-initial-secrets.bash`)** → Gitea ต้องการ admin password, Cert-Manager ต้องการ Cloudflare API key
3. **Addons ก่อน Bootstrap (`02-initial-addons.bash`)** → ArgoCD ต้องพร้อมก่อนจึงจะเชื่อม Git ได้
4. **Bootstrap ก่อน Monitoring (`04-boot-strap.bash`)** → Monitoring ต้องการ CRD จาก Prometheus Operator ซึ่งต้องรอให้ API server พร้อม
5. **Monitoring สุดท้าย (`03-install-monitoring.bash`)** → ติดตั้งหลังจาก core platform พร้อมแล้ว

**Fail-Fast Design:**
ถ้าขั้นตอนใดล้มเหลว ขั้นตอนถัดไปจะไม่รัน ทำให้ debug ง่ายกว่าการรัน monolithic script ที่พังครึ่งทาง

---

## Security by Design: แนวคิดความปลอดภัยที่คิดมาตั้งแต่ต้น

Framework นี้ออกแบบ Edge platform โดยคำนึงถึง Security by Design ตั้งแต่ต้น ลด attack surface ผ่านการกำหนดค่าและ architectural decisions อย่างเป็นระบบ

### Defense in Depth Strategy

**Layer 1: Network Security**
- **ไม่เปิดพอร์ต 80 สู่สาธารณะ:** ใช้ DNS Challenge แทน HTTP Challenge
- **จำกัดพอร์ตที่เปิด:** NGINX ใช้ `hostPort` รับ traffic เฉพาะ 80/443
- **ซ่อน Origin IP:** ใช้ Cloudflare Proxy ป้องกันการโจมตีตรง
- **ซ่อน Admin Interfaces:** Dashboard ทั้งหมดอยู่ที่ URL path ย่อย เช่น `/tools/argocd`

**Layer 2: Access Control**
- **Least Privilege RBAC:** Secret manager มีเพียง `get`, `create`, `patch` ไม่มีสิทธิ์ `delete`
- **ปิดการสมัครสมาชิก:** Gitea ตั้ง `DISABLE_REGISTRATION: true`
- **Namespace Isolation:** แต่ละ service รันใน namespace แยก

**Layer 3: Secret Management**
- **Secret Rotation:** `refreshInterval: 1m` ทำให้ Secret อัปเดตทุกนาที
- **Centralized Secrets:** ใช้ ClusterSecretStore เป็น single source of truth
- **No Hardcoded Secrets:** ทุก Secret ดึงจาก External Secrets

**Layer 4: Supply Chain Security**
- **Git as Audit Trail:** ทุกการเปลี่ยนแปลงผ่าน Git commit
- **Declarative Config:** ไม่มี imperative commands ที่ bypass audit
- **Local Git Server:** ลดการพึ่งพา external services

### ข้อดีด้านความปลอดภัย

Framework นี้มอบความปลอดภัยหลายระดับ:

**🔐 Network Security**
- ไม่ต้องเปิดพอร์ต 80 สู่สาธารณะ
- จำกัดพอร์ตที่เปิดเฉพาะ 80/443
- Origin IP ถูกซ่อนโดย Cloudflare
- Admin interfaces ซ่อนอยู่ที่ URL path ย่อย

**🔑 Access Control**
- Least Privilege RBAC
- ปิดการสมัครสมาชิกใน Gitea
- Namespace Isolation

**🔒 Secret Management**
- Secret rotation อัตโนมัติทุกนาที
- Centralized secrets ผ่าน ClusterSecretStore
- ไม่มี hardcoded secrets ใน Git

**📝 Audit และ Compliance**
- ทุกการเปลี่ยนแปลงมี Git commit history
- Declarative config ตรวจสอบได้
- Rollback ง่ายผ่าน Git revert

---

## Upgrade Strategy: GitOps-Driven Change Management

จุดเด่นที่ทรงพลังของการออกแบบด้วย GitOps คือกระบวนการอัปเกรดที่เป็นระบบและตรวจสอบได้

### Upgrade Workflow

![PLSdeFW GCS Architecture](/blogs/please-deploy-framwork/upgrade-workflow-simple.png)

### Branch-per-Environment Strategy

กลยุทธ์สำคัญคือพารามิเตอร์ `targetRevision: "{{name}}"` ใน ApplicationSet ที่ล็อก cluster แต่ละรายไว้กับ Git branch ที่มีชื่อตรงกัน

**ตัวอย่าง Upgrade Flow:**

1. **Test on Staging First**
   ```bash
   git checkout staging
   # แก้ไข version ใน addons-cert-manager.yaml
   git commit -m "Upgrade cert-manager to 1.20.0"
   git push origin staging
   ```
   ArgoCD จะ sync ไปยัง cluster ที่ชื่อ `staging` เท่านั้น

2. **Verify and Promote to Production**
   ```bash
   git checkout main
   git merge staging
   git push origin main
   ```
   ArgoCD จะ sync ไปยัง cluster ที่ชื่อ `main`

### Rollback Strategy

**Scenario 1: Rollback ผ่าน Git**
```bash
git revert <commit-hash>
git push
```
ArgoCD จะ detect และ sync กลับไปยังเวอร์ชันเก่าอัตโนมัติ

**Scenario 2: Rollback ผ่าน ArgoCD UI**
- เข้า ArgoCD UI
- เลือก Application ที่ต้องการ rollback
- คลิก "History and Rollback"
- เลือก revision ที่ต้องการ

### ข้อดีของ GitOps Upgrade

**✅ ข้อดีที่โดดเด่น:**
- **Audit Trail:** ดูประวัติการ upgrade ได้ทั้งหมด
- **Rollback ง่าย:** Git revert แล้ว sync อัตโนมัติ
- **Staged Rollout:** Test ใน staging ก่อน promote ไป production
- **Declarative:** บอกว่าต้องการเวอร์ชันอะไร ไม่ใช่ทำอย่างไร
- **Zero Downtime:** ArgoCD ทำ rolling update อัตโนมัติ
- **Consistency:** ทุก cluster ได้ version เดียวกัน

---

## ตัวอย่างการนำ Framework ไปใช้งาน

Framework นี้ไม่ได้เป็นเพียงแนวคิดทางทฤษฎี แต่รองรับโจทย์ธุรกิจจริง:

1.  **แพลตฟอร์มเซนเซอร์ความปลอดภัย (Security Sensor Platform)**: รับ-ส่งข้อมูลจากเซนเซอร์ IoT ที่ติดตั้งในพื้นที่หน้างาน เพื่อประเมินภัยคุกคามแบบ real-time
2.  **ระบบ Edge หลายสภาพแวดล้อม (Multi-environment Edge)**: แยกการตั้งค่าและ traffic ระหว่าง Dev กับ Prod อย่างชัดเจน โดยใช้ codebase ชุดเดียวกัน

---

## Lessons Learned และ Best Practices

การสร้าง Framework ชุดนี้ตกผลึกเป็นบทเรียนและ best practices หลายข้อ

### ✅ What Worked Well

**1. Sequential Phases with Clear Boundaries**
การแยก bootstrap เป็น sequential scripts ช่วยให้แต่ละ layer มี clear boundary และ fail-fast เมื่อมีปัญหา แทนที่จะเป็น monolithic script ที่ debug ยาก

**2. K3s HelmChart CRD over Helm CLI**
การใช้ `HelmChart` Custom Resource แทนการเขียนสคริปต์ Helm CLI ช่วยให้จัดการ lifecycle ของ service หลักได้แบบ Declarative ซึ่งตรวจสอบและ rollback ได้ง่ายกว่ามาก

**3. Local Git for Air-gapped Readiness**
การรัน Gitea ภายในเครื่องช่วยลดการพึ่งพา external services Platform ยังทำงานได้ตามปกติแม้อินเทอร์เน็ตจะขาดหาย ซึ่งสำคัญมากสำหรับ Edge deployment

**4. Secrets-First Approach**
การสร้าง Secret เป็นขั้นตอนแรกสุดช่วยป้องกัน Race Condition ที่เกิดเมื่อ component อื่นเริ่มทำงานก่อนที่ key หลักจะพร้อม

**5. Separate Monitoring Installation**
การแยก monitoring ออกมาติดตั้งต่างหาก พร้อมลูปรอความพร้อม ช่วยหลีกเลี่ยงปัญหา Kubernetes API ยังไม่พร้อมประมวลผล CRD ขนาดใหญ่

### 🎯 Best Practices

**1. ใช้ Idempotency Pattern**
```bash
# ✅ ทำแบบนี้
kubectl apply -f config.yaml
# หรือ
kubectl create secret generic my-secret --dry-run=client -o yaml | kubectl apply -f -
```
ทำให้สคริปต์รันซ้ำได้โดยไม่ error

**2. ใช้ Immutable Tags**
```yaml
# ✅ ทำแบบนี้
image: nginx:1.25.3
```
ทำให้ deployment reproducible และ predictable

**3. Implement Health Checks**
```bash
# รอให้ component พร้อมก่อนทำงานต่อ
until kubectl get secret initial-secret -n default; do
  sleep 2
done
```

**4. Document Technical Decisions**
```bash
# บันทึก TODO และ Technical Debt ไว้ในโค้ด
# TODO: Use immutable tag instead of "latest"
```
ทำให้ทีมรู้ว่าต้องกลับมาแก้จุดไหน

**5. Use GitOps for Everything**
ทุกการเปลี่ยนแปลงผ่าน Git เพื่อให้มี audit trail ครบถ้วน

---

## Future Roadmap: Beyond Edge Deployment

ทิศทางการพัฒนาในอนาคตมุ่งเน้นไปที่การขยายขีดความสามารถและเพิ่ม automation

**1. Multi-node High Availability**
- Framework ใช้ `--cluster-init` รองรับ etcd แล้ว
- ขั้นถัดไปคือสคริปต์เสริมสำหรับเชื่อม server สำรองเข้ามาทำ load balancing
- เพิ่มความน่าเชื่อถือและ uptime ของ platform

**2. GUI Dashboard สำหรับ Operator**
- พัฒนาหน้าเว็บให้ผู้ใช้ที่ไม่คุ้นชิน CLI สามารถควบคุมและติดตามงาน Sync ของแอปพลิเคชันได้
- Real-time monitoring และ alerting
- One-click deployment และ rollback

**3. AI-assisted Operations**
- ใช้ AI วิเคราะห์ log และแจ้งเตือนจาก Edge Server
- Auto-remediation สำหรับปัญหาที่พบบ่อย
- Predictive maintenance และ capacity planning

---

## บทสรุป: จาก Manual Operations สู่ GitOps-Driven Infrastructure

Please Deploy Framework แก้ปัญหาที่ทีม Infrastructure เจอทุกวัน ด้วยการแปลงกระบวนการ Edge Deployment ที่เคยซับซ้อนและเสี่ยงต่อ Human Error ให้กลายเป็นระบบที่รันซ้ำได้และตรวจสอบได้ ผ่านแนวคิด GitOps ที่ใช้ Git เป็นศูนย์กลางของทุกการเปลี่ยนแปลง

### Key Takeaways

**1. Sequential Phases ลด Complexity**
การแยก bootstrap เป็น 4 phases ที่มี clear boundaries ทำให้ debug ง่ายและ fail-fast เมื่อมีปัญหา

**2. GitOps ให้ Audit Trail และ Rollback**
ทุกการเปลี่ยนแปลงผ่าน Git commit ทำให้ตรวจสอบย้อนหลังได้และ rollback ง่าย

**3. Air-gapped Ready ด้วย Local Gitea**
การรัน Git server ภายในเครื่องทำให้ platform ทำงานได้แม้ internet ขาด

**4. Security by Design ตั้งแต่ต้น**
ใช้ DNS Challenge, centralized secrets, RBAC และ network isolation ลด attack surface

**5. เหมาะกับทุกขนาดองค์กร**
ไม่ว่าจะมี 1 server หรือ 100 servers Framework นี้ช่วยให้การจัดการเป็นระบบและ scale ได้ง่าย

### ทำไมต้องเริ่มใช้ตั้งแต่วันนี้?

**🚀 สำหรับ Startup:**
- เริ่มต้นด้วย automation ที่ถูกต้องตั้งแต่แรก
- ไม่ต้องมา refactor ทีหลังเมื่อ scale
- ประหยัดเวลาและลด Human Error

**📈 สำหรับ Growing Company:**
- Scale ได้ง่ายโดยไม่ต้องเปลี่ยน architecture
- Config consistency ข้ามทุก environment
- ทีมทำงานร่วมกันได้ง่ายผ่าน Git workflow

**🏢 สำหรับ Enterprise:**
- จัดการ Edge Server หลายสิบหลายร้อยเครื่องได้อย่างมีประสิทธิภาพ
- Multi-environment support (dev, staging, production)
- Compliance-ready ด้วย audit trail ที่ครบถ้วน

### จาก Concept สู่ Production

Framework นี้ไม่ได้เป็นเพียงแนวคิดทางทฤษฎี แต่ถูกใช้งานจริงใน use cases ต่างๆ:
1. **Security Sensor Platform (IoT)** - รับ-ส่งข้อมูลจากเซนเซอร์ real-time
2. **Multi-environment Edge** - แยก Dev/Prod อย่างชัดเจน

### Next Steps

หากสนใจนำแนวคิดนี้ไปปรับใช้:

1. **เริ่มจาก Single Server** - ทดสอบกับ server ทดสอบก่อน
2. **ปรับแต่งตาม Context** - แต่ละองค์กรมี requirements ต่างกัน
3. **วัดผล Metrics** - ติดตาม deployment time, error rate, MTTR
4. **Scale Gradually** - เพิ่ม server ทีละน้อยและเรียนรู้จากประสบการณ์

### ดูโค้ดต้นฉบับ

หากสนใจดูโค้ดต้นฉบับและ implementation details สามารถดูได้ที่:
- **Control Plane:** [github.com/wintech-thai/please-protect-rproxy](https://github.com/wintech-thai/please-protect-rproxy)
- **Data Plane:** [github.com/wintech-thai/please-protect-rproxy-data-plane](https://github.com/wintech-thai/please-protect-rproxy-data-plane)

---

**Please Deploy Framework: GitOps-Driven Edge Deployment ที่ทำให้การจัดการ Infrastructure เป็นเรื่องง่าย ไม่ว่าคุณจะมี server กี่เครื่อง**
