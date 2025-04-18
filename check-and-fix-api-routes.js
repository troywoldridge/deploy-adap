#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const glob = require('glob')

const FIX_PRISMA = true
const FIX_ROUTE_SIGNATURES = true

const PRISMA_OLD = `import prisma from '@/lib/prisma'`
const PRISMA_NEW = `import { prisma } from '@/lib/prisma'`

// Regex to check for handler function issues
const VALID_HANDLER_REGEX =
  /export (async )?function (GET|POST|PUT|DELETE|PATCH)\(\s*req\s*(?:,\s*\{\s*params\s*:\s*\{[^}]*\}\s*\})?\s*\)/

const ROUTE_DIR = path.join(__dirname, 'src/app/api/v1')

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  let updatedContent = content
  let updated = false

  // Fix Prisma import
  if (FIX_PRISMA && content.includes(PRISMA_OLD)) {
    updatedContent = updatedContent.replace(PRISMA_OLD, PRISMA_NEW)
    console.log(`✔️  Fixed prisma import in ${filePath}`)
    updated = true
  }

  // Fix invalid route handler function signatures (basic auto-correct)
  if (FIX_ROUTE_SIGNATURES && !VALID_HANDLER_REGEX.test(content)) {
    const matches = updatedContent.match(
      /export (async )?function (GET|POST|PUT|DELETE|PATCH)\s*\(([^)]*)\)/
    )
    if (matches) {
      const [fullMatch, isAsync, method, args] = matches
      const newArgs = 'req: Request, { params }: { params: { id: string } }'
      const newSignature = `export ${isAsync || ''}function ${method}(${newArgs})`
      updatedContent = updatedContent.replace(fullMatch, newSignature)
      console.log(`⚠️  Fixed route signature in ${filePath}`)
      updated = true
    } else {
      console.warn(`❗️ Could not auto-fix route signature in ${filePath}`)
    }
  }

  if (updated) {
    fs.writeFileSync(filePath, updatedContent, 'utf8')
  }
}

function walkApiRoutes() {
  glob(`${ROUTE_DIR}/**/route.ts`, (err, files) => {
    if (err) throw err

    files.forEach((file) => {
      try {
        const stat = fs.statSync(file)
        if (stat.isDirectory()) return
        processFile(file)
      } catch (err) {
        console.error(`⛔️ Error processing ${file}: ${err.message}`)
      }
    })
  })
}

walkApiRoutes()
