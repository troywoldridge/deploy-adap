import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id || isNaN(parseInt(id))) {
    return NextResponse.json({ error: 'Invalid category ID' }, { status: 400 });
  }

  try {
    const category = await prisma.category.findUnique({
      where: { id: parseInt(id) },
      include: {
        products: {
          include: {
            images: {
              select: {
                url: true,
              },
            },
          },
        },
      },
    });

    if (!category) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    return NextResponse.json(category, { status: 200 });
  } catch (error: any) {
    console.error(`[GET /api/v1/category/${id}] Error:`, error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
