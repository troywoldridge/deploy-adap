const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const apiDir = path.resolve(__dirname, 'src/app/api')
const nextServerImportRegex = /import\s*\{[^}]*\}\s*from\s*['"]next\/server['"];\n?/g

const REST_METHODS = ['GET', 'POST', 'PUT', 'DELETE']

function getParamNames(filePath) {
  const match = filePath.match(/\[(\w+)\]/g)
  return match ? match.map((p) => p.replace(/[\[\]]/g, '')) : []
}

function getParamTypeBlock(params) {
  return params.length ? `{ params: { ${params.map((p) => `${p}: string`).join(', ')} } }` : ''
}

function generateHandler(method, params) {
  const paramBlock = getParamTypeBlock(params)
  const zodBlock =
    method === 'POST' || method === 'PUT'
      ? `
  // const schema = z.object({
  //   name: z.string(),
  //   price: z.number(),
  // });
  // const body = await req.json();
  // const validated = schema.parse(body);
    `.trim()
      : ''

  return `\n/**\n * @swagger\n * /api/endpoint:\n *   ${method.toLowerCase()}:\n *     description: ${method} handler\n */\nexport async function ${method}(req: NextRequest${paramBlock ? `, context: ${paramBlock}` : ''}) {\n  try {\n    ${zodBlock}\n    return NextResponse.json({ message: "${method} OK" })\n  } catch (err) {\n    console.error(err)\n    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })\n  }\n}`
}

function fixRouteFile(filePath) {
  let code = fs.readFileSync(filePath, 'utf8')
  const original = code

  const usedIdentifiers = new Set()
  const paramNames = getParamNames(filePath)

  // Remove existing imports
  code = code.replace(nextServerImportRegex, '')

  // Track what's already there
  if (code.includes('NextRequest')) usedIdentifiers.add('NextRequest')
  if (code.includes('NextResponse')) usedIdentifiers.add('NextResponse')

  // Remove all current method exports so we can fully regenerate
  code = code.replace(/export\s+async\s+function\s+(GET|POST|PUT|DELETE)[\s\S]*?\n\}/g, '')

  // Ensure usedIdentifiers for methods
  usedIdentifiers.add('NextRequest')
  usedIdentifiers.add('NextResponse')

  // Add new handlers
  for (const method of REST_METHODS) {
    code += '\n' + generateHandler(method, paramNames) + '\n'
  }

  // Finalize with import
  const importLine = `import { ${Array.from(usedIdentifiers).sort().join(', ')} } from 'next/server';\n`
  code = importLine + code.trimStart()

  fs.writeFileSync(filePath, code, 'utf8')
  console.log(`✅ Updated: ${filePath}`)

  try {
    execSync(`npx prettier --write "${filePath}"`, { stdio: 'ignore' })
    console.log(`✨ Prettier formatted: ${filePath}`)
  } catch {
    console.warn(`⚠️ Prettier failed: ${filePath}`)
  }

  // Create test stub
  const testPath = filePath.replace(/\.ts$/, '.test.ts')
  if (!fs.existsSync(testPath)) {
    const testContent = `// TODO: Add tests for ${path.relative(process.cwd(), filePath)}
import { describe, it, expect } from 'vitest'

describe('${path.basename(filePath)}', () => {
  it('should handle requests correctly', async () => {
    // Add actual test logic here
    expect(true).toBe(true)
  })
})
`
    fs.writeFileSync(testPath, testContent, 'utf8')
    console.log(`🧪 Test stub created: ${testPath}`)
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath)
    } else if (entry.isFile() && entry.name === 'route.ts') {
      fixRouteFile(fullPath)
    }
  }
}

walk(apiDir)
console.log('🚀 All route.ts files upgraded!')
