bash
CopyEdit
#!/bin/bash

echo "Deploying E-Commerce App"

echo "Pulling latest code..."
git pull origin main

echo "Building containers..."
docker-compose down
docker-compose build
docker-compose up -d

echo "Running Prisma Migrations..."
docker-compose exec frontend npx prisma migrate deploy

echo "Deployment Complete!"