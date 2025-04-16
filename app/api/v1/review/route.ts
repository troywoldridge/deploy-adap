import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { CreateReviewPayload } from '@/types/review'
import type { Review } from '@/types/review'

// GET /api/v1/reviews?productId=123
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get('productId');

  if (!productId) {
    return NextResponse.json({ error: 'Missing productId' }, { status: 400 });
  }

  try {
    const reviews = await prisma.review.findMany({
      where: { productId: parseInt(productId, 10) },
      include: { user: true },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(reviews, { status: 200 });
  } catch (error: any) {
    console.error('[GET /api/v1/review]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/v1/reviews
export async function POST(request: NextRequest) {
  try {
    const data: CreateReviewPayload = await request.json()
    const { productId, rating, comment } = data

    // Basic validation
    if (!productId || !rating || !comment) {
      return NextResponse.json(
        { error: 'Missing fields: "productId", "rating", and "comment" are required.' },
        { status: 400 }
      )
    }

    // Convert productId to a number before using it in Prisma
    const productIdNumber = parseInt(productId, 10)

    if (isNaN(productIdNumber)) {
      return NextResponse.json({ error: 'Invalid productId.' }, { status: 400 })
    }

    // In a real app, you’d extract this from the session or token
    const userId = 'user-placeholder-id'

    const newReview = await prisma.review.create({
      data: {
        productId: productIdNumber, // Ensure productId is a number
        rating,
        comment,
        userId,
      },
    })

    return NextResponse.json(newReview, { status: 201 })
  } catch (error: any) {
    console.error('[POST /api/v1/reviews] Error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
