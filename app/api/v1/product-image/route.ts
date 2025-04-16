// app/api/v1/product-image/route.ts

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Product image endpoint not implemented yet' }, { status: 501 })
}
