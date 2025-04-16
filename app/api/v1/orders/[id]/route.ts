import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(request: NextRequest) {
  return NextResponse.json({ message: 'PATCH /orders/[id] not implemented' }, { status: 501 })
}
