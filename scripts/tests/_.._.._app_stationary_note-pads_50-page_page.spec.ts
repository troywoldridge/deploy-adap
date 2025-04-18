import { test, expect } from '@playwright/test'

test('Route: /../../app/stationary/note-pads/50-page/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/stationary/note-pads/50-page/page')
  expect(await page.title()).toBe('Your Site Title')
})
