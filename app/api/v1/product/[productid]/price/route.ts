import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET handler: Fetch price based on option chain hash
export async function GET(req: NextRequest) {
  const url = req.nextUrl
  const productid = url.pathname.split('/').at(-2) // Extract productid from URL

  if (!productid) {
    return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
  }

  const optionIds = url.searchParams.getAll('option_ids[]')

  try {
    const optionsHash = generateOptionsHash(optionIds)

    const pricingData = await prisma.productPricingData.findFirst({
      where: {
        productId: parseInt(productid, 10),
        optionsHash,
      },
    })

    if (!pricingData) {
      return NextResponse.json(
        { error: 'Price not found for the selected options' },
        { status: 404 }
      )
    }

    return NextResponse.json({ price: pricingData.price.toFixed(2) }, { status: 200 })
  } catch (error: any) {
    console.error(`[GET /api/v1/product/${productid}/price] Error:`, error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}

// Helper function
const generateOptionsHash = (optionIds: string[]): string => {
  return optionIds.sort().join('-')
}
