import { test, expect } from '@playwright/test'

test('Route: /../../app/large-format/floor-graphics/custom/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/large-format/floor-graphics/custom/page')
  expect(await page.title()).toBe('Your Site Title')
})
