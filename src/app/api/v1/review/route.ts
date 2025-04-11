// src/app/api/v1/reviews/route.ts

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { CreateReviewPayload } from '@/types/review'

// GET handler: Fetch reviews for a product
export async function GET(request: Request, { params }: { params: { productId: string } }) {
  try {
    const reviews = await prisma.review.findMany({
      where: { productId: params.productId },
      include: { user: true }, // Include user information if needed
    })
    return NextResponse.json(reviews, { status: 200 })
  } catch (error: any) {
    console.error('[GET /api/v1/reviews] Error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}

// POST handler: Create a new review
export async function POST(request: Request) {
  try {
    const data: CreateReviewPayload = await request.json()
    const { productId, rating, comment } = data

    if (!productId || !rating || !comment) {
      return NextResponse.json(
        { error: 'Invalid input: "productId", "rating" and "comment" are required.' },
        { status: 400 }
      )
    }

    const newReview = await prisma.review.create({
      data: {
        productId,
        rating,
        comment,
        userId: 'userId-placeholder', // Placeholder, replace with actual user session
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

// DELETE handler: Delete a review
export async function DELETE(request: Request, { params }: { params: { reviewId: string } }) {
  try {
    const reviewId = params.reviewId

    await prisma.review.delete({
      where: { id: reviewId },
    })

    return NextResponse.json({ message: 'Review deleted' }, { status: 200 })
  } catch (error: any) {
    console.error('[DELETE /api/v1/reviews] Error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
