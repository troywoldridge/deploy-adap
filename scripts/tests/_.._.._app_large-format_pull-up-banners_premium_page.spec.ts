import { test, expect } from '@playwright/test'

test('Route: /../../app/large-format/pull-up-banners/premium/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/large-format/pull-up-banners/premium/page')
  expect(await page.title()).toBe('Your Site Title')
})
