const js = require('@eslint/js')
const ts = require('typescript-eslint')
const prettier = require('eslint-config-prettier')
const next = require('@next/eslint-plugin-next')

module.exports = [
  js.configs.recommended,
  ...ts.configs.recommended,
  next.recommended,
  prettier,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@next/next/no-server-import-in-page': 'off',
      'no-undef': 'off',
      'no-redeclare': 'off',
      'no-prototype-builtins': 'off',
      'no-cond-assign': 'off',
      'no-this-alias': 'off',
    },
  },
  {
    files: ['**/prisma/**/*.{ts,js}'],
    languageOptions: {
      globals: {
        Prisma: 'readonly',
      },
    },
  },
  {
    languageOptions: {
      globals: {
        atob: 'readonly',
        btoa: 'readonly',
        TextEncoder: 'readonly',
        TextDecoder: 'readonly',
        setTimeout: 'readonly',
        module: 'readonly',
      },
    },
  },
]
