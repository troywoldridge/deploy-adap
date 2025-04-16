#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const scanPages = (dir) => {
  let routes = [];

  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      routes = routes.concat(scanPages(filePath));
    } else if (file === 'page.tsx' || file === 'index.tsx') {
      const route = path
        .relative(path.resolve('src/app'), filePath)
        .replace(/\.tsx$/, '')
        .replace(/\/index$/, ''); // optional: clean trailing /index

      routes.push(`/${route}`);
    }
  });

  return routes;
};

const generateSitemap = () => {
  const appDir = path.resolve(__dirname, '../../src/app'); // adjust if needed
  const routes = scanPages(appDir);
  const sitemap = routes.join('\n');

  fs.writeFileSync(path.join(__dirname, 'sitemap.txt'), sitemap);
  console.log('✅ Sitemap generated: sitemap.txt');
};

generateSitemap();
