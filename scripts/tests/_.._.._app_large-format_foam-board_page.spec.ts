import { test, expect } from '@playwright/test'

test('Route: /../../app/large-format/foam-board/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/large-format/foam-board/page')
  expect(await page.title()).toBe('Your Site Title')
})
