import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: { productid: string } }
) {
  const productid = parseInt(params.productid, 10);
  const optionIds = req.nextUrl.searchParams.getAll('option_ids[]');

  if (isNaN(productid)) {
    return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
  }

  if (!optionIds.length) {
    return NextResponse.json({ error: 'No options provided' }, { status: 400 });
  }

  try {
    const optionsHash = generateOptionsHash(optionIds);

    const pricingData = await prisma.productPricingData.findFirst({
      where: {
        productId: productid,
        optionsHash,
      },
    });

    if (!pricingData) {
      return NextResponse.json(
        { error: 'Price not found for the selected options' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { price: pricingData.price.toFixed(2) },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`[GET /api/v1/product/${productid}/price] Error:`, error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// Helper function
const generateOptionsHash = (optionIds: string[]): string => {
  return optionIds.sort().join('-');
};
