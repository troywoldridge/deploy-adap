import { test, expect } from '@playwright/test';

test('Route: /../../app/promotional/coasters/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/promotional/coasters/page');
  expect(await page.title()).toBe('Your Site Title');
});
