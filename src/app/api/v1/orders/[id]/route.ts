// src/app/api/v1/orders/[id]/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const orderId = parseInt(params.id)

  try {
    const data = await request.json()

    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: { status: data.status },
    })

    return NextResponse.json(updatedOrder, { status: 200 })
  } catch (error: any) {
    console.error(`[PATCH /api/v1/orders/${orderId}] Error:`, error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
