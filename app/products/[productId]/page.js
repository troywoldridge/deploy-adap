// pages/api/products/[productId].js

import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  const { productId } = req.query;

  if (req.method === 'GET') {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(productId) },
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(product);
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
