import { test, expect } from '@playwright/test'

test('Route: /../../app/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/page')
  expect(await page.title()).toBe('Your Site Title')
})
