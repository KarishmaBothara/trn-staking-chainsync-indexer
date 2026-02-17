# - Install dependencies only when needed
FROM --platform=$BUILDPLATFORM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Build Resouces
FROM --platform=$BUILDPLATFORM node:18-alpine AS builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run
FROM --platform=$BUILDPLATFORM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/lib ./lib
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/schema.graphql ./schema.graphql

CMD ["node", "-r", "dotenv/config", "lib/main.js"]
