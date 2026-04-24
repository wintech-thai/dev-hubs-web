---
title: "Kubernetes Security Best Practices for Production"
titleTh: "แนวทางความปลอดภัย Kubernetes สำหรับ Production"
date: "2025-05-10"
author: "DevHubs Team"
coverImage: "https://picsum.photos/seed/kubernetes/800/450"
tags: ["Kubernetes", "Security", "Cloud Native", "DevSecOps"]
excerpt: "Running Kubernetes securely in production requires more than just deploying workloads. From RBAC and network policies to Pod Security Admission, here's how to lock down your cluster."
excerptTh: "การรัน Kubernetes อย่างปลอดภัยใน Production ต้องการมากกว่าแค่การ deploy workloads ตั้งแต่ RBAC และ Network Policy ไปจนถึง Pod Security Admission นี่คือวิธีล็อคกลุ่มของคุณให้แน่น"
---

# Kubernetes Security Best Practices for Production

Kubernetes has become the de-facto standard for container orchestration, but its flexibility also means there are many ways to misconfigure it. A poorly secured cluster can expose sensitive workloads, secrets, and internal APIs to attackers.

## 1. Enable Role-Based Access Control (RBAC)

RBAC should always be enabled. Apply the principle of least privilege — grant only the permissions each service account actually needs.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
  namespace: default
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "list", "watch"]
```

## 2. Use Network Policies

By default, all pods in a Kubernetes cluster can communicate with each other. Network Policies let you restrict traffic between pods.

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
  namespace: production
spec:
  podSelector: {}
  policyTypes:
    - Ingress
    - Egress
```

## 3. Enable Pod Security Admission

Pod Security Admission (PSA) replaced Pod Security Policies in Kubernetes 1.25+. Apply the `restricted` profile to namespaces that run untrusted workloads.

```bash
kubectl label namespace production \
  pod-security.kubernetes.io/enforce=restricted \
  pod-security.kubernetes.io/warn=restricted
```

## 4. Scan Container Images

Never run unscanned images in production. Integrate image scanning into your CI/CD pipeline using tools like Trivy or Grype.

```bash
trivy image myapp:latest --exit-code 1 --severity HIGH,CRITICAL
```

## 5. Rotate Secrets Regularly

Store secrets in a vault (e.g., HashiCorp Vault, AWS Secrets Manager) and mount them dynamically. Avoid hardcoding secrets in ConfigMaps or environment variables baked into images.

## Conclusion

Kubernetes security is a layered discipline. Start with RBAC and network policies, enforce Pod Security standards, scan your images, and manage secrets properly. Each layer adds friction for attackers and reduces your blast radius if a component is compromised.
