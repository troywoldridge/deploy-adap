import { test, expect } from '@playwright/test';

test('Route: /../../app/large-format/aluminum-signs/aluminum-floor-graphics-20mil/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/large-format/aluminum-signs/aluminum-floor-graphics-20mil/page');
  expect(await page.title()).toBe('Your Site Title');
});
