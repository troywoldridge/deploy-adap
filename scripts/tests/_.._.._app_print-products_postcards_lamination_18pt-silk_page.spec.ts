import { test, expect } from '@playwright/test'

test('Route: /../../app/print-products/postcards/lamination/18pt-silk/page', async ({ page }) => {
  await page.goto(
    'http://localhost:3000/../../app/print-products/postcards/lamination/18pt-silk/page'
  )
  expect(await page.title()).toBe('Your Site Title')
})
