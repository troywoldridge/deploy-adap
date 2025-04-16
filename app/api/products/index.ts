import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany();
    return res.status(200).json(products);
  }

  if (req.method === 'POST') {
    const { name, price, description } = req.body;
    const newProduct = await prisma.product.create({
      data: { name, price, description },
    });
    return res.status(201).json(newProduct);
  }

  // fallback for unsupported methods
  return res.status(405).json({ error: 'Method not allowed' });
}
