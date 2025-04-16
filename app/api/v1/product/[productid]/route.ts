import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const url = req.nextUrl
  const productId = url.pathname.split('/').at(-1)

  return NextResponse.json({ message: `Product ID is ${productId}` })
}
