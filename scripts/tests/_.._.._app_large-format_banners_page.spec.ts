import { test, expect } from '@playwright/test';

test('Route: /../../app/large-format/banners/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/large-format/banners/page');
  expect(await page.title()).toBe('Your Site Title');
});
