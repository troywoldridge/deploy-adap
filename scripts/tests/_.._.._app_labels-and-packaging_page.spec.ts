import { test, expect } from '@playwright/test'

test('Route: /../../app/labels-and-packaging/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/labels-and-packaging/page')
  expect(await page.title()).toBe('Your Site Title')
})
