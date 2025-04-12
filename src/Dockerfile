# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN corepack enable \
  && corepack prepare pnpm@latest --activate \
  && pnpm install \
  && pnpm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["pnpm", "start"]
