import { test, expect } from '@playwright/test';

test('Route: /../../app/print-products/flyers/100lb-gloss-text/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/print-products/flyers/100lb-gloss-text/page');
  expect(await page.title()).toBe('Your Site Title');
});
