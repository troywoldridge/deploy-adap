const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const apiDir = path.resolve(__dirname, 'src/app/api') // adjust if needed

function isDynamicRoute(filePath) {
  return filePath.includes('[')
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')

  if (
    !isDynamicRoute(filePath) &&
    content.match(/export\s+async\s+function\s+GET\s*\(\s*req\s*,\s*\{\s*params\s*\}/)
  ) {
    const original = content

    // Remove the second argument from the GET function
    content = content.replace(
      /export\s+async\s+function\s+GET\s*\(\s*req\s*,\s*\{\s*params\s*\}[^)]*\)/g,
      'export async function GET(req)'
    )

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`✔️  Fixed: ${filePath}`)

      // Run Prettier on the modified file
      try {
        execSync(`npx prettier --write "${filePath}"`, { stdio: 'ignore' })
        console.log(`✨ Prettier formatted: ${filePath}`)
      } catch (err) {
        console.warn(`⚠️  Prettier failed for ${filePath} — is it installed?`)
      }

      //       Optional: auto-fix imports using tsserver or an extension (commented out)
      try {
        execSync(`npx ts-import-fix "${filePath}"`, { stdio: 'ignore' })
        console.log(`🧹 Imports fixed: ${filePath}`)
      } catch (err) {
        console.warn(`⚠️  Import fix failed for ${filePath}`)
      }
    }
  }
}

function walk(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath)
    } else if (entry.isFile() && entry.name === 'route.ts') {
      fixFile(fullPath)
    }
  }
}

walk(apiDir)
console.log('✅ Done!')
