import { test, expect } from '@playwright/test'

test('Route: /../../app/large-format/banners/13oz-matte/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/large-format/banners/13oz-matte/page')
  expect(await page.title()).toBe('Your Site Title')
})
