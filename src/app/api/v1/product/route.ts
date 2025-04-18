import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

/**
 * @swagger
 * /api/products:
 *   get:
 *     description: Get a list of all products
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 */
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

export async function GET(req: Request, { params }: { params: { id: string } }) {
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

    const where: Prisma.ProductWhereInput = search
      ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {}

    const [products, total] = await Promise.all([
      prisma.product.findMany({ where, skip, take: limit }),
      prisma.product.count({ where }),
    ])

    const response: PaginatedProductsResponse = {
      products: products.map((product) => ({
        ...product,
        createdAt: product.createdAt.toISOString(),
        updatedAt: product.updatedAt.toISOString(),
      })),
      total,
      page,
      totalPages: Math.ceil(total / limit),
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
