import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


// GET handler: Fetch price based on option chain hash
export async function GET(req: Request, { params }: { params: { productId: string } }) {
  const { productId } = params
  const url = new URL(req.url)
  const optionIds = url.searchParams.getAll('option_ids[]')

  try {
    // Hash the selected options (You may need a hashing function like SHA256)
    const optionsHash = generateOptionsHash(optionIds)

    // Fetch the pricing data based on the hash
    const pricingData = await prisma.productPricingData.findFirst({
      where: {
        productId,
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
    console.error('[GET /api/v1/products/[productId]/price] Error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}

// Helper function to generate a hash of the selected options
const generateOptionsHash = (optionIds: string[]): string => {
  // Simple concatenation of the optionIds (could be enhanced with a proper hash function like SHA-256)
  return optionIds.sort().join('-')
}

/ Fetch the price for a product based on selected options (hashed)
export const getPrice = async (productId: string, optionIds: string[]): Promise<PricingResponse> => {
  const query = optionIds.map((id) => `option_ids[]=${id}`).join('&')
  const res = await fetch(`/api/v1/products/${productId}/price?${query}`)

  if (!res.ok) {
    throw new Error('Failed to fetch price')
  }

  return res.json()
}