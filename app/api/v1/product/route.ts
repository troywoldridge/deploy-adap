// src/app/api/v1/product/route.ts
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET handler: Fetch all products with related data
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        images: true,
        options: true,
        reviews: true,
      },
    })
    return NextResponse.json(products, { status: 200 })
  } catch (error: any) {
    console.error('[GET /api/v1/product] Error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}

// POST handler: Create a new product
export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Example validation: ensure the product has at least a name and price.
    if (!data.name || typeof data.price !== 'number') {
      return NextResponse.json(
        { error: 'Invalid input: "name" (string) and "price" (number) are required.' },
        { status: 400 }
      )
    }

    const product = await prisma.product.create({ data })

    return NextResponse.json(product, { status: 201 })
  } catch (error: any) {
    console.error('[POST /api/v1/product] Error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}

