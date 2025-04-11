// pages/api/products/index.js

import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany(); // Get all products
    return res.status(200).json(products);
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
