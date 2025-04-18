import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface Product {
  id: number
  name: string
  description: string | null
  price: number
  createdAt: string
  updatedAt: string
}

interface PaginatedProductsResponse {
  products: Product[]
  total: number
  page: number
  totalPages: number
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const page = parseInt(searchParams.get('page') || '1', 10)
    const limit = parseInt(searchParams.get('limit') || '10', 10)
    const search = searchParams.get('search') || ''

    if (isNaN(page) || page < 1) {
      return NextResponse.json({ message: 'Invalid page number' }, { status: 400 })
    }

    if (isNaN(limit) || limit < 1) {
      return NextResponse.json({ message: 'Invalid limit value' }, { status: 400 })
    }

    const skip = (page - 1) * limit

    // Using raw query for case-insensitive search
    const products = await prisma.$queryRaw<Product[]>`
      SELECT * FROM Product
      WHERE LOWER(name) LIKE LOWER(${`%${search}%`}) 
      OR LOWER(description) LIKE LOWER(${`%${search}%`})
      LIMIT ${limit} OFFSET ${skip}
    `

    const total = await prisma.$queryRaw<{ count: number }[]>`
      SELECT COUNT(*) as count FROM Product
      WHERE LOWER(name) LIKE LOWER(${`%${search}%`}) 
      OR LOWER(description) LIKE LOWER(${`%${search}%`})
    `

    const response: PaginatedProductsResponse = {
      products: products.map((product) => ({
        ...product,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
      })),
      total: total[0].count,
      page,
      totalPages: Math.ceil(total[0].count / limit),
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching products:', error)

    return NextResponse.json(
      {
        message:
          process.env.NODE_ENV === 'production'
            ? 'Internal Server Error'
            : (error as Error).message,
      },
      { status: 500 }
    )
  }
}
