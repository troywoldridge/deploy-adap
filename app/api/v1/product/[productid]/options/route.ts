import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Extract productId from URL
    const segments = request.nextUrl.pathname.split('/');
    const productId = parseInt(segments[segments.indexOf('product') + 1], 10);

    if (isNaN(productId)) {
      return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
    }

    // Fetch option groups and their options from the database
    const optionGroups = await prisma.optionGroup.findMany({
      where: { productId },
      include: {
        options: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    // Format the response structure
    const formattedOptionGroups = optionGroups.map(group => ({
      group: group.name,
      options: group.options.map(opt => ({
        id: opt.id,
        name: opt.name,
      })),
    }));

    return NextResponse.json(formattedOptionGroups, { status: 200 });
  } catch (error: any) {
    console.error('[GET /api/v1/product/[productid]/options] Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
