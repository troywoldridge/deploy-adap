# ============================
# Stage 1 — Build
# ============================
FROM node:18-alpine AS builder

WORKDIR /var/www/src

COPY . .

RUN corepack enable \
  && corepack prepare pnpm@latest --activate \
  && pnpm install \
  && pnpm run build

# ============================
# Stage 2 — Runtime
# ============================
FROM node:18-alpine AS runner

WORKDIR /var/www/src

COPY --from=builder /var/www/src ./

EXPOSE 3000

CMD ["pnpm", "start"]
