import { test, expect } from '@playwright/test'

test('Route: /../../app/promotional/keychains/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/promotional/keychains/page')
  expect(await page.title()).toBe('Your Site Title')
})
