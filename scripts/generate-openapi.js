const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const ts = require('ts-morph')

// Path to your API directory
const apiDir = path.resolve(__dirname, 'src/app/api/v1')

// Initialize OpenAPI structure
const openApiSpec = {
  openapi: '3.1.0',
  info: {
    title: 'My API',
    version: '1.0.0',
  },
  paths: {},
  components: {
    schemas: {},
  },
}

// Function to extract Zod schemas from the route file
function extractZodSchemas(filePath) {
  const sourceFile = new ts.Project().addSourceFileAtPath(filePath)
  const zodSchemas = {}

  sourceFile.getFunctions().forEach((func) => {
    const functionName = func.getName()
    const zodImport = func
      .getStatements()
      .map((stmt) => stmt.getText())
      .join('\n')
      .includes('zod')

    if (zodImport) {
      const schema = func.getBody().getText()
      zodSchemas[functionName] = schema
    }
  })

  return zodSchemas
}

// Function to generate OpenAPI paths from a route file
function generateOpenApiPaths(filePath) {
  const basePath = filePath.replace(`${apiDir}/`, '').replace('/route.ts', '')
  const pathSegments = basePath.split('/')
  const isDynamicRoute = pathSegments.some((segment) => segment.startsWith('['))

  const routeMethods = {}
  const sourceFile = new ts.Project().addSourceFileAtPath(filePath)

  const routeFunction = sourceFile
    .getFunctions()
    .find(
      (func) => func.getName().toUpperCase() === 'GET' || func.getName().toUpperCase() === 'POST'
    )

  // Handle HTTP methods
  if (routeFunction) {
    const method = routeFunction.getName().toUpperCase()
    const params = isDynamicRoute ? { type: 'string' } : {}

    routeMethods[method] = {
      operationId: `${method.toLowerCase()}-${pathSegments.join('-')}`,
      responses: {
        200: {
          description: 'Successful response',
        },
        400: {
          description: 'Bad request',
        },
      },
      parameters: isDynamicRoute
        ? [
            {
              name: pathSegments
                .find((segment) => segment.startsWith('['))
                .replace(/[^\w\s]/gi, ''),
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          ]
        : [],
    }

    // Extract Zod schema from the route (if present)
    const zodSchemas = extractZodSchemas(filePath)
    if (Object.keys(zodSchemas).length > 0) {
      openApiSpec.components.schemas = {
        ...openApiSpec.components.schemas,
        ...zodSchemas,
      }
    }
  }

  return routeMethods
}

// Function to walk through the routes and update the OpenAPI spec
function walkRoutesAndGenerateSpec(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkRoutesAndGenerateSpec(fullPath)
    } else if (entry.isFile() && entry.name === 'route.ts') {
      const methods = generateOpenApiPaths(fullPath)
      const relativePath = fullPath.replace(apiDir, '').replace('/route.ts', '')

      if (Object.keys(methods).length > 0) {
        openApiSpec.paths[relativePath] = methods
      }
    }
  }
}

// Start the OpenAPI spec generation
walkRoutesAndGenerateSpec(apiDir)

// Output the OpenAPI spec to a file
fs.writeFileSync(
  path.resolve(__dirname, 'public/api-docs/openapi.json'),
  JSON.stringify(openApiSpec, null, 2)
)

console.log('🚀 OpenAPI spec generated at public/api-docs/openapi.json')
