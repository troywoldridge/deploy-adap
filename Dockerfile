# ---------- Base Build Stage ----------
    FROM node:20-alpine AS base

    # Arguments for environment variables passed during build
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
    
    # Set environment variables to be used in the build and runtime stages
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
    
    # Set working directory
    WORKDIR /app
    
    # Copy package.json and pnpm-lock.yaml before installing dependencies
    COPY package.json pnpm-lock.yaml ./
    
    # Install pnpm globally and install dependencies using pnpm
    RUN npm install -g pnpm && pnpm install --frozen-lockfile
    
    # Copy the rest of the application source code
    COPY . .
    
    # Run Prisma client generation (ensure prisma is set up)
    RUN pnpm exec prisma generate
    
    # Run the build process (this should use environment variables)
    RUN pnpm run build
    
    # ---------- Runtime Stage ----------
    FROM node:20-alpine AS runner
    
    # Set working directory for the runtime container
    WORKDIR /app
    
    # Copy node_modules, public files, .next build folder, and package.json from the build stage
    COPY --from=base /app/node_modules ./node_modules
    COPY --from=base /app/public ./public
    COPY --from=base /app/.next ./.next
    COPY --from=base /app/package.json ./
    
    # Optionally copy .env.production for runtime environment
    COPY .env.production .env.production
    
    # Set runtime environment to production
    ENV NODE_ENV=production
    
    # Expose port 3000 for the Next.js app
    EXPOSE 3000
    
    # Start the application using pnpm
    CMD ["pnpm", "start"]
    