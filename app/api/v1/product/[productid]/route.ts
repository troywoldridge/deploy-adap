// app/api/v1/product/[productid]/route.ts
import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: { productid: string } }
) {
  const { productid } = params;

  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(productid) },
    });

    if (!product) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch product' }), {
      status: 500,
    });
  }
}
