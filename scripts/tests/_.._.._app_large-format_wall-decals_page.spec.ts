import { test, expect } from '@playwright/test'

test('Route: /../../app/large-format/wall-decals/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/large-format/wall-decals/page')
  expect(await page.title()).toBe('Your Site Title')
})
