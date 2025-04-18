function ensureImport(content: string, importLine: string): string {
  const importSource = 'next/server'
  const importName = importLine.match(/import\s+{\s*(\w+)\s*}/)?.[1]
  if (!importName) return content

  // Collect all named imports from 'next/server'
  const importRegex = /import\s+{([^}]+)}\s+from\s+['"]next\/server['"];?/g
  let allImports: Set<string> = new Set()
  let match: RegExpExecArray | null

  while ((match = importRegex.exec(content))) {
    const names = match[1].split(',').map((n) => n.trim())
    names.forEach((n) => allImports.add(n))
  }

  // Add the requested import if not already there
  if (!allImports.has(importName)) {
    allImports.add(importName)
  }

  // Remove all current 'next/server' imports
  content = content.replace(importRegex, '').trim()

  // Re-add the clean import at the top
  const cleanedImport = `import { ${Array.from(allImports).sort().join(', ')} } from 'next/server';\n`

  // Insert after any other imports, or at top
  const firstImport = content.match(/^import .+?;[\r\n]+/)
  if (firstImport) {
    return content.replace(firstImport[0], cleanedImport + firstImport[0])
  }

  return cleanedImport + content
}
