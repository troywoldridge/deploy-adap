import { test, expect } from '@playwright/test'

test('Route: /../../app/print-products/brochures/uv/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/print-products/brochures/uv/page')
  expect(await page.title()).toBe('Your Site Title')
})
