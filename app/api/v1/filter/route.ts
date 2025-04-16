import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get('category');
  const priceRange = request.nextUrl.searchParams.get('priceRange');

  try {
    const filters: any = {};

    if (category) {
      filters['category'] = category;
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(parseFloat);
      filters['price'] = { gte: min, lte: max };
    }

    const filteredProducts = await prisma.product.findMany({
      where: filters,
    });

    return NextResponse.json(filteredProducts, { status: 200 });
  } catch (error: any) {
    console.error('[GET /api/v1/filter] Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
