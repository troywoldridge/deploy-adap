// app/api/v1/wishlist/route.ts

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Wishlist route working!' })
}
