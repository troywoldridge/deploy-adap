import { test, expect } from '@playwright/test'

test('Route: /../../app/stationary/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/stationary/page')
  expect(await page.title()).toBe('Your Site Title')
})
