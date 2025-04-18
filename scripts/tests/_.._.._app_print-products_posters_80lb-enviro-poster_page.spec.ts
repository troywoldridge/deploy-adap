import { test, expect } from '@playwright/test'

test('Route: /../../app/print-products/posters/80lb-enviro-poster/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/print-products/posters/80lb-enviro-poster/page')
  expect(await page.title()).toBe('Your Site Title')
})
