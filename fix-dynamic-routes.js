const fs = require('fs')
const path = require('path')

// Define the folder where your API routes are located
const ROUTE_DIR = path.join(__dirname, 'src/app/api/v1')

// Recursively walk through the directory and modify files
const walkDir = (dir) => {
  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      walkDir(fullPath) // Recursively go deeper into folders
    } else if (file.endsWith('route.ts')) {
      updateFile(fullPath)
    }
  })
}

// Update the file to use correct API route handler structure
const updateFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8')

  if (content.includes('params')) {
    // If already using "params", we don't want to break the file
    return
  }

  // Check if this is a dynamic route (e.g., containing `[id]`)
  if (filePath.includes('[id]')) {
    const updatedContent = content.replace(
      'export async function GET(req: Request) {',
      'export async function GET(req: NextRequest, { params }: { params: { id: string } }) {'
    )
    fs.writeFileSync(filePath, updatedContent)
    console.log(`Updated: ${filePath}`)
  }
}

// Start walking through the directory and fixing files
walkDir(ROUTE_DIR)
