import { test, expect } from '@playwright/test';

test('Route: /../../app/stationary/ncr-forms/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/stationary/ncr-forms/page');
  expect(await page.title()).toBe('Your Site Title');
});
