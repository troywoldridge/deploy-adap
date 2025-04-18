import { test, expect } from '@playwright/test'

test('Route: /../../app/print-products/greeting-cards/writable/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/print-products/greeting-cards/writable/page')
  expect(await page.title()).toBe('Your Site Title')
})
