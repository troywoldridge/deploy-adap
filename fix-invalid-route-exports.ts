// fix-invalid-route-exports.ts
import fs from 'fs'
import path from 'path'
import glob from 'fast-glob'

const ROUTE_DIR = 'src/app/api/v1'

async function fixRoutes() {
  const files = await glob(`${ROUTE_DIR}/**/route.ts`)

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8')
    let modified = false

    content = content.replace(/export\s+const\s+handle([A-Z]+)\s*=/g, (_, method) => {
      modified = true
      const upper = method.toUpperCase()
      return `export const ${upper} =`
    })

    if (modified) {
      fs.writeFileSync(file, content, 'utf8')
      console.log(`✅ Fixed: ${file}`)
    } else {
      console.log(`✔️ Already good: ${file}`)
    }
  }
}

fixRoutes().catch((err) => {
  console.error('❌ Error fixing routes:', err)
  process.exit(1)
})
