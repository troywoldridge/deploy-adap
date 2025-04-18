import { test, expect } from '@playwright/test'

test('Route: /../../app/print-products/brochures/gloss/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/print-products/brochures/gloss/page')
  expect(await page.title()).toBe('Your Site Title')
})
