import { test, expect } from '@playwright/test'

test('Route: /../../app/large-format/foam-board/4mm/page', async ({ page }) => {
  await page.goto('http://localhost:3000/../../app/large-format/foam-board/4mm/page')
  expect(await page.title()).toBe('Your Site Title')
})
