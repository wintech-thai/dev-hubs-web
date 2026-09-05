# Step 1: Build the Next.js app
FROM node:20-alpine AS builder

# Install pnpm (version pinned for reproducible builds)
RUN npm install -g pnpm@10.18.3

# Set working directory
WORKDIR /app

# Install dependencies
COPY pnpm-lock.yaml ./
COPY package.json ./

# Copy the rest of the code
COPY . .

RUN CI=true pnpm install --frozen-lockfile

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build the Next.js app
RUN pnpm run build

FROM node:20-alpine AS runner

# Install pnpm (version pinned for reproducible builds)
RUN npm install -g pnpm@10.18.3

WORKDIR /app

# Install production dependencies only
COPY pnpm-lock.yaml ./
COPY package.json ./

RUN CI=true pnpm install --prod --ignore-scripts --frozen-lockfile

# Copy the build output from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/content ./content

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000
ENV HOSTNAME="0.0.0.0"

# Expose the port the app runs on
EXPOSE 5000

# Start the app
CMD ["pnpm", "start"]
