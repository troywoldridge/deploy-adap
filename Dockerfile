# ---------- Base Build Stage ----------
    FROM node:20-alpine AS base

    ARG GITHUB_ID
    ARG GITHUB_SECRET
    ARG NEXTAUTH_SECRET
    ARG CLIENT_ID
    ARG CLIENT_SECRET
    ARG UPS_CLIENT_ID
    ARG UPS_CLIENT_SECRET
    ARG FEDEX_API_KEY
    ARG SHIPPO_API_KEY
    ARG DB_USERNAME
    ARG DB_PASSWORD
    ARG DB_DATABASE
    
    # 👇 These become environment variables for `next build`
    ENV GITHUB_ID=$GITHUB_ID \
    GITHUB_SECRET=$GITHUB_SECRET \
    NEXTAUTH_SECRET=$NEXTAUTH_SECRET \
    GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID \
    GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET \
    UPS_CLIENT_ID=$UPS_CLIENT_ID \
    UPS_CLIENT_SECRET=$UPS_CLIENT_SECRET \
    FEDEX_API_KEY=$FEDEX_API_KEY \
    SHIPPO_API_KEY=$SHIPPO_API_KEY \
    DB_USERNAME=$DB_USERNAME \
    DB_PASSWORD=$DB_PASSWORD \
    DB_DATABASE=$DB_DATABASE \
    NODE_ENV=production

    
    WORKDIR /app
    
    # Copy deps first
    COPY package.json pnpm-lock.yaml ./
    RUN npm install -g pnpm && pnpm install --frozen-lockfile
    
    # Copy source code
    COPY . .
    
    # Prisma client
    RUN pnpm exec prisma generate
    
    # ✅ Build will now have env vars directly available
    RUN pnpm run build
    
    # ---------- Runtime Stage ----------
    FROM node:20-alpine AS runner
    WORKDIR /app
    
    COPY --from=base /app/node_modules ./node_modules
    COPY --from=base /app/public ./public
    COPY --from=base /app/.next ./.next
    COPY --from=base /app/package.json ./
    
    # Include production env file (optional — for runtime, not build)
    COPY .env.production .env.production
    
    ENV NODE_ENV=production
    EXPOSE 3000
    
    CMD ["pnpm", "start"]
    