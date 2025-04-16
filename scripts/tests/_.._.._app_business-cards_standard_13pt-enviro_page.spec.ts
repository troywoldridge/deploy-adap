import { test, expect } from '@playwright/test';

test('Route: /../../app/business-cards/standard/13pt-enviro/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/business-cards/standard/13pt-enviro/page');
  expect(await page.title()).toBe('Your Site Title');
});
