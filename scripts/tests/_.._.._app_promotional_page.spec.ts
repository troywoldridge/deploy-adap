import { test, expect } from '@playwright/test';

test('Route: /../../app/promotional/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/promotional/page');
  expect(await page.title()).toBe('Your Site Title');
});
