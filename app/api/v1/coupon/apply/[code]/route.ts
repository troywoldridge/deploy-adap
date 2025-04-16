// app/api/v1/coupon/apply/[code]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const url = new URL(request.url);
  const rawCode = url.pathname.split('/').pop();
  const userId = request.headers.get('x-user-id'); // Assuming you're passing user ID via header

  if (!rawCode) {
    return NextResponse.json({ error: 'Missing coupon code' }, { status: 400 });
  }

  if (!userId) {
    return NextResponse.json({ error: 'Missing user ID' }, { status: 400 });
  }

  const code = rawCode.trim().toUpperCase();

  try {
    const coupon = await prisma.coupon.findFirst({
      where: {
        code: {
          equals: code,
          mode: 'insensitive',
        },
      },
    });

    if (!coupon) {
      return NextResponse.json({ error: 'Coupon not found' }, { status: 404 });
    }

    const now = new Date();
    if (
      !coupon.isActive ||
      (coupon.validFrom && now < coupon.validFrom) ||
      (coupon.validUntil && now > coupon.validUntil)
    ) {
      return NextResponse.json({ error: 'Coupon is not valid or has expired' }, { status: 400 });
    }

    // Assuming maxUses is not part of the schema, remove this check

    const existingUse = await prisma.coupon.findFirst({
      where: {
        id: coupon.id,
        users: {
          some: {
            id: userId,
          },
        },
      },
    });

    if (existingUse) {
      return NextResponse.json({ error: 'You have already used this coupon' }, { status: 400 });
    }

    // Optionally attach to cart or return the coupon
    return NextResponse.json(
      {
        id: coupon.id,
        code: coupon.code,
        type: coupon.type,
        value: coupon.value,
        validUntil: coupon.validUntil,
      },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error;
    console.error(`[POST /api/v1/coupon/apply/${code}] Error:`, err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}

