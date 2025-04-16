#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const generateTest = (route) => {
  const testFileName = path.join(__dirname, 'tests', `${route.replace(/\//g, '_') || 'root'}.spec.ts`);
  const testContent = `import { test, expect } from '@playwright/test';

test('Route: ${route}', async ({ page }) => {
  await page.goto('http://localhost:3000${route}');
  expect(await page.title()).toBe('Your Site Title');
});
`;

  fs.mkdirSync(path.dirname(testFileName), { recursive: true });
  fs.writeFileSync(testFileName, testContent);
  console.log('✅ Generated test:', testFileName);
};

const generateTests = () => {
  const sitemapPath = path.join(__dirname, 'sitemap.txt');

  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ Error: sitemap.txt not found! Please generate it first with "generate-routes"');
    process.exit(1);
  }

  const sitemap = fs.readFileSync(sitemapPath, 'utf8').split('\n').filter(Boolean);

  sitemap.forEach((route) => {
    generateTest(route);
  });
};

generateTests();
