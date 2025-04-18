import { test, expect } from '@playwright/test'

test('Route: /../../app/print-products/postcards/writable/14pt-writable-uv/page', async ({
  page,
}) => {
  await page.goto(
    'http://localhost:3000/../../app/print-products/postcards/writable/14pt-writable-uv/page'
  )
  expect(await page.title()).toBe('Your Site Title')
})
