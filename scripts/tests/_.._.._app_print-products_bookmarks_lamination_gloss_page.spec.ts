import { test, expect } from '@playwright/test'

test('Route: /../../app/print-products/bookmarks/lamination/gloss/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/print-products/bookmarks/lamination/gloss/page')
  expect(await page.title()).toBe('Your Site Title')
})
