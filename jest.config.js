module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Handle TypeScript files
    '^.+\\.js$': 'babel-jest', // Handle JavaScript files with Babel
  },
  transformIgnorePatterns: [
    '/node_modules/(?!node-fetch|data-uri-to-buffer)', // Make sure to transform node-fetch and data-uri-to-buffer
  ],
  moduleNameMapper: {
    'node-fetch': require.resolve('node-fetch'), // Resolve node-fetch correctly
  },
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [
    '/node_modules/(?!fetch-blob|cross-fetch)/', // Allow 'fetch-blob' and 'cross-fetch' to be transformed
  ],
}
