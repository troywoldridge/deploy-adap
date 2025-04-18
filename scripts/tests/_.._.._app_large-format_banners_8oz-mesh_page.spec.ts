import { test, expect } from '@playwright/test'

test('Route: /../../app/large-format/banners/8oz-mesh/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/large-format/banners/8oz-mesh/page')
  expect(await page.title()).toBe('Your Site Title')
})
