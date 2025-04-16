import { test, expect } from '@playwright/test';

test('Route: /../../app/large-format/display-board/24pt/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/large-format/display-board/24pt/page');
  expect(await page.title()).toBe('Your Site Title');
});
