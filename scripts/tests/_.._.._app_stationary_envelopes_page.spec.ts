import { test, expect } from '@playwright/test';

test('Route: /../../app/stationary/envelopes/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/stationary/envelopes/page');
  expect(await page.title()).toBe('Your Site Title');
});
