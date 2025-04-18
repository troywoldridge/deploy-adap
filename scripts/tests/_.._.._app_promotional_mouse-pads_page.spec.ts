import { test, expect } from '@playwright/test'

test('Route: /../../app/promotional/mouse-pads/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/promotional/mouse-pads/page')
  expect(await page.title()).toBe('Your Site Title')
})
