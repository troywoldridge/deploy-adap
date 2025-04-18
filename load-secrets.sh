#!/bin/sh

echo "Loading Docker secrets into .env..."

# Create or overwrite .env file
: > .env

# Loop through expected secrets and append them to .env
for secret in \
  db_username db_password db_database \
  nextauth_secret \
  client_id client_secret \
  github_id github_secret \
  fedex_api_key shippo_api_key \
  ups_client_id ups_client_secret
do
  secret_path="/run/secrets/$secret"
  if [ -f "$secret_path" ]; then
    echo "Loading $secret"
    echo "$(echo "$secret" | awk '{print toupper($0)}')=$(cat "$secret_path")" >> .env
  fi
done

echo "Secrets loaded into .env"
