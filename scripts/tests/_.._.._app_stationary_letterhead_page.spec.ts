import { test, expect } from '@playwright/test';

test('Route: /../../app/stationary/letterhead/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/stationary/letterhead/page');
  expect(await page.title()).toBe('Your Site Title');
});
