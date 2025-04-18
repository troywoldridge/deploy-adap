import { test, expect } from '@playwright/test'

test('Route: /../../app/print-products/clings/white-opaque-clings/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/print-products/clings/white-opaque-clings/page')
  expect(await page.title()).toBe('Your Site Title')
})
