---
title: "Docker in Production: Patterns That Actually Work"
titleTh: "Docker ใน Production: Pattern ที่ใช้งานได้จริง"
date: "2025-06-15"
author: "DevHubs Team"
coverImage: "https://picsum.photos/seed/docker-prod/800/450"
tags: ["Docker", "DevOps", "Containers", "Production"]
excerpt: "Moving Docker from development to production exposes a range of operational challenges. Learn the patterns — multi-stage builds, health checks, resource limits — that make container deployments reliable."
excerptTh: "การย้าย Docker จาก development ไป production เผยให้เห็นความท้าทายด้านการดำเนินงานมากมาย เรียนรู้ pattern ต่างๆ ที่ทำให้การ deploy container น่าเชื่อถือได้"
---

# Docker in Production: Patterns That Actually Work

Running Docker in development is straightforward. Running it reliably in production is a different story. Containers crash, images grow bloated, and resource contention can take down entire hosts. Here are the patterns that prevent these problems.

## Multi-Stage Builds

Multi-stage builds drastically reduce image size by separating the build environment from the runtime environment.

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --production=false
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["node", "server.js"]
```

## Health Checks

Always define a HEALTHCHECK so the container runtime knows when your app is actually ready.

```dockerfile
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3000/api/health || exit 1
```

## Resource Limits

Without limits, a misbehaving container can starve neighboring services. Set CPU and memory limits in your compose file or Kubernetes manifests.

```yaml
deploy:
  resources:
    limits:
      cpus: "0.5"
      memory: 512M
    reservations:
      memory: 256M
```

## Use a Non-Root User

Running as root inside a container is a significant security risk. Create a dedicated user in your Dockerfile.

```dockerfile
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
```

## Graceful Shutdown

Handle `SIGTERM` in your application so in-flight requests complete before the container stops.

```javascript
process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server closed gracefully");
    process.exit(0);
  });
});
```

## Conclusion

Production Docker deployments succeed when images are lean, containers are healthy, resources are bounded, and processes shut down gracefully. Adopt these patterns early — retrofitting them later is always harder.
