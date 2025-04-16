# --- Base Builder ---
FROM node:20-alpine AS builder

# Needed for bcrypt + Prisma
RUN apk add --no-cache curl python3 make g++

# Set working directory
WORKDIR /app

# Copy only package files for caching
COPY package.json pnpm-lock.yaml ./

# Enable Corepack and use pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install deps
RUN pnpm install

# Copy the rest of the source
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the app
RUN pnpm run build


# --- Final Production Image ---
FROM node:20-alpine AS runner

# Install curl for healthchecks
RUN apk add --no-cache curl

WORKDIR /app

# Copy only what's needed for production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose port
EXPOSE 3000

# Run app
CMD ["pnpm", "start"]
