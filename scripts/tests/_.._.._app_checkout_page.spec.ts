import { test, expect } from '@playwright/test';

test('Route: /../../app/checkout/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/checkout/page');
  expect(await page.title()).toBe('Your Site Title');
});
