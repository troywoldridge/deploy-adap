import { test, expect } from '@playwright/test'

test('Route: /../../app/apparel/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/apparel/page')
  expect(await page.title()).toBe('Your Site Title')
})
