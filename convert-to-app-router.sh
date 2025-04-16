#!/bin/bash

# Navigate to /src/app directory
cd /var/www/deploy-adap/src/app || exit 1

echo "🔁 Renaming index.tsx/js to page.tsx/js..."
find . -type f \( -name 'index.tsx' -o -name 'index.js' \) ! -path './api/*' | while read -r file; do
  dir=$(dirname "$file")
  ext="${file##*.}"
  mv "$file" "$dir/page.$ext"
  echo "✅ Renamed $file → $dir/page.$ext"
done

echo ""
echo "📦 Moving [slug].ts/js into folders with page.ts/js..."
find . -type f \( -name '[[]*[]].js' -o -name '[[]*[]].ts' \) ! -path './api/*' | while read -r file; do
  dir=$(dirname "$file")
  filename=$(basename "$file")
  name="${filename%.*}"
  ext="${filename##*.}"

  mkdir -p "$dir/$name"
  mv "$file" "$dir/$name/page.$ext"
  echo "✅ Moved $file → $dir/$name/page.$ext"
done

echo ""
echo "🎉 Conversion complete. You're now fully App Router compliant!"
