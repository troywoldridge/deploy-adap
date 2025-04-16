#!/bin/sh

# Read secrets from files
DB_USER=$(cat /run/secrets/db_username)
DB_PASS=$(cat /run/secrets/db_password)
DB_NAME=$(cat /run/secrets/db_database)
DB_HOST=${DB_HOST:-localhost}
DB_PORT=${DB_PORT:-3306}

# Export full DATABASE_URL
export DATABASE_URL="mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}"

# Start the app
exec pnpm start
