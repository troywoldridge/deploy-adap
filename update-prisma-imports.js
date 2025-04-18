const fs = require('fs')
const path = require('path')

// Define the directory where the API routes are located
const apiDirectory = path.join(__dirname, 'src/app/api/v1')

// Function to recursively update all files
function updatePrismaImports(directory) {
  const files = fs.readdirSync(directory)

  files.forEach((file) => {
    const fullPath = path.join(directory, file)

    // If the file is a directory, recursively update it
    if (fs.statSync(fullPath).isDirectory()) {
      updatePrismaImports(fullPath)
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      // Read the file content
      const content = fs.readFileSync(fullPath, 'utf-8')

      // Replace the incorrect Prisma import
      const updatedContent = content.replace(
        /import\s+prisma\s+from\s+['"]@\/lib\/prisma['"]/g,
        "import { prisma } from '@/lib/prisma'"
      )

      // If the content is updated, write it back to the file
      if (updatedContent !== content) {
        fs.writeFileSync(fullPath, updatedContent, 'utf-8')
        console.log(`Updated import in: ${fullPath}`)
      }
    }
  })
}

// Start the update from the API directory
updatePrismaImports(apiDirectory)
