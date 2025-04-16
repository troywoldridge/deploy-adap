import { test, expect } from '@playwright/test';

test('Route: /../../app/upload-artwork/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/upload-artwork/page');
  expect(await page.title()).toBe('Your Site Title');
});
