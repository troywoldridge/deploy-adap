// app/api/v1/filter/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  const { category, priceRange } = request.nextUrl.searchParams;

  try {
    // Example filtering logic, customize as needed
    const filters = {};

    if (category) {
      filters['category'] = category;
    }

    if (priceRange) {
      filters['price'] = { gte: parseFloat(priceRange.split('-')[0]), lte: parseFloat(priceRange.split('-')[1]) };
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
