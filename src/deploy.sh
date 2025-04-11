#!/bin/bash

set -e

echo "Pulling latest changes..."
git pull origin main

echo "Installing dependencies with pnpm..."
cd frontend
pnpm install --frozen-lockfile
cd ..

echo "Building Docker images..."
docker-compose build

echo "Applying Prisma migrations..."
docker-compose run --rm app pnpm prisma migrate deploy

echo "Restarting services..."
docker-compose up -d

echo "Deployment completed!"
