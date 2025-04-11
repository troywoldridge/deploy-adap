#!/bin/bash

set -e

echo "Pulling latest code..."
git pull origin main

echo "Building frontend..."
cd frontend
pnpm install --frozen-lockfile
pnpm build
cd ..

echo "Restarting containers..."
docker-compose up -d --build

echo "Update completed!"
