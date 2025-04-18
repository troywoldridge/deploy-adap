import { test, expect } from '@playwright/test'

test('Route: /../../app/large-format/h-stands/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/large-format/h-stands/page')
  expect(await page.title()).toBe('Your Site Title')
})
