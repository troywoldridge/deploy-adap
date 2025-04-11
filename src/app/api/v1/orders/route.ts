// src/app/api/v1/orders/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: { items: true },
    })
    return NextResponse.json(orders, { status: 200 })
  } catch (error: any) {
    console.error('[GET /api/v1/orders] Error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { items, ...orderData } = body

    const order = await prisma.order.create({
      data: {
        ...orderData,
        items: {
          create: items,
        },
      },
    })

    return NextResponse.json(order, { status: 201 })
  } catch (error: any) {
    console.error('[POST /api/v1/orders] Error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
