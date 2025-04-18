import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { CreateReviewPayload } from '@/types/review'
import type { Review } from '@/types/review'

/**
 * @swagger
 * /api/endpoint:
 *   get:
 *     summary: Get product reviews
 *     parameters:
 *       - in: query
 *         name: productId
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter reviews by product ID
 *     responses:
 *       200:
 *         description: List of reviews
 */
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { searchParams } = new URL(req.url)
    const productId = searchParams.get('productId')

    const reviews = await prisma.review.findMany({
      where: productId
        ? {
            productId: parseInt(productId, 10),
          }
        : undefined,
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })

    return NextResponse.json(reviews)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

/**
 * @swagger
 * /api/endpoint:
 *   post:
 *     summary: Create a review
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateReviewPayload'
 *     responses:
 *       201:
 *         description: Review created
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as CreateReviewPayload

    const newReview = await prisma.review.create({
      data: {
        ...body,
        userId: body.userId ?? '', // Ensure userId is a string or provide a default value
      },
    })

    return NextResponse.json(newReview, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

/**
 * @swagger
 * /api/endpoint:
 *   put:
 *     summary: Update data (example)
 *     responses:
 *       200:
 *         description: PUT operation successful
 */
export async function PUT() {
  try {
    // Placeholder: add validation and DB logic
    return NextResponse.json({ message: 'PUT OK' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

/**
 * @swagger
 * /api/endpoint:
 *   delete:
 *     summary: Delete data (example)
 *     responses:
 *       200:
 *         description: DELETE operation successful
 */
export async function DELETE() {
  try {
    // Placeholder: add logic to delete something
    return NextResponse.json({ message: 'DELETE OK' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
