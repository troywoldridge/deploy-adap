const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const path = require("path");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends("next"),
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("prettier"),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@next/next/no-server-import-in-page": "off",
      "no-undef": "off",
      "no-redeclare": "off",
      "no-prototype-builtins": "off",
      "no-cond-assign": "off",
      "no-this-alias": "off",
    },
  },
  {
    languageOptions: {
      globals: {
        atob: "readonly",
        btoa: "readonly",
        TextEncoder: "readonly",
        TextDecoder: "readonly",
        setTimeout: "readonly",
        module: "readonly",
      },
    },
  },
];
