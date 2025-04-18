const fs = require('fs')
const path = require('path')

// Path to your API routes directory
const ROUTES_DIR = path.join(__dirname, 'src/app/api/v1')

const walkApiRoutes = (dir) => {
  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    const filePath = path.join(dir, file)

    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      walkApiRoutes(filePath) // Recurse into directories
    } else if (filePath.endsWith('route.ts')) {
      fixRouteFile(filePath)
    }
  })
}

const fixRouteFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8')

  // Check if the route is dynamic (contains a folder with [param])
  const isDynamicRoute = filePath.includes('[') && filePath.includes(']')

  if (isDynamicRoute) {
    // Fix dynamic routes: Make sure params is correctly used for GET
    if (!content.includes('params')) {
      content = content.replace(
        'export async function GET(req:',
        'export async function GET({ params, request }: any) {'
      )
    }
  } else {
    // Fix static routes: Remove destructuring of params for static routes
    if (content.includes('params')) {
      content = content.replace(
        'export async function GET({ params, request }: any) {',
        'export async function GET(req: any) {'
      )
    }
  }

  // Write the fixed content back to the file
  fs.writeFileSync(filePath, content, 'utf-8')
  console.log(`Fixed: ${filePath}`)
}

// Start processing from the root API directory
walkApiRoutes(ROUTES_DIR)

console.log('Route fixing process completed!')
