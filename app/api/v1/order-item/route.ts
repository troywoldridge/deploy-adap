// src/app/api/v1/order-item/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const orderItems = await prisma.orderItem.findMany();
    return NextResponse.json(orderItems, { status: 200 });
  } catch (error: any) {
    console.error('[GET /api/v1/order-item] Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const newOrderItem = await prisma.orderItem.create({
      data: {
        quantity: data.quantity,
        price: data.price,
        order: {
          connect: { id: data.orderId }, // 👈 required
        },
        product: {
          connect: { id: data.productId }, // 👈 required
        },
      },
    });

    return NextResponse.json(newOrderItem, { status: 201 });
  } catch (error: any) {
    console.error('[POST /api/v1/order-item] Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
export async function DELETE(request: NextRequest) {
  const url = request.nextUrl.pathname;
  const id = url.split('/').pop();

  try {
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    await prisma.orderItem.delete({
      where: { id: Number(id) }, // 👈 Fix: convert to number
    });

    return NextResponse.json({ message: 'Order item deleted' }, { status: 200 });
  } catch (error: any) {
    console.error('[DELETE /api/v1/order-item] Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
