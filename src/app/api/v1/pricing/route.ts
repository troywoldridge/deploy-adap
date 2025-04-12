// app/api/v1/pricing/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Pricing endpoint not implemented yet' }, { status: 501 })
}
