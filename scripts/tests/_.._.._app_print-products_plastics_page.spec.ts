import { test, expect } from '@playwright/test';

test('Route: /../../app/print-products/plastics/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/print-products/plastics/page');
  expect(await page.title()).toBe('Your Site Title');
});
