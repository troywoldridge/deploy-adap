import { test, expect } from '@playwright/test'

test('Route: /../../app/large-format/table-covers/8ft/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/large-format/table-covers/8ft/page')
  expect(await page.title()).toBe('Your Site Title')
})
