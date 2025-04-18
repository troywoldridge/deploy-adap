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

// Define the GET method for this route
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page') || '1'
    const limit = searchParams.get('limit') || '10'
    const search = searchParams.get('search') || ''

    // Ensure page and limit are valid integers
    const pageInt = parseInt(page, 10)
    const limitInt = parseInt(limit, 10)

    if (isNaN(pageInt) || pageInt < 1) {
      return new Response(JSON.stringify({ message: 'Invalid page number' }), { status: 400 })
    }

    if (isNaN(limitInt) || limitInt < 1) {
      return new Response(JSON.stringify({ message: 'Invalid limit value' }), { status: 400 })
    }

    const skip = (pageInt - 1) * limitInt
    const take = limitInt

    // Build the where condition for search
    const where: Prisma.ProductWhereInput = search
      ? {
          OR: [
            { name: { contains: search } },
            { description: { contains: search } },
          ],
        }
      : {}

    // Query the products from Prisma
    const products = await prisma.product.findMany({
      where,
      skip,
      take,
    })

    const totalProducts = await prisma.product.count({ where })

    const response: PaginatedProductsResponse = {
      products: products.map(product => ({
        ...product,
        createdAt: product.createdAt.toISOString(),
        updatedAt: product.updatedAt.toISOString(),
      })),
      total: totalProducts,
      page: pageInt,
      totalPages: Math.ceil(totalProducts / limitInt),
    }

    return new Response(JSON.stringify(response), { status: 200 })
  } catch (error) {
    console.error('Error fetching products:', error)

    return new Response(
      JSON.stringify({
        message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : (error as Error).message,
      }),
      { status: 500 }
    )
  }
}
