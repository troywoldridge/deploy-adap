export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  }

  if (req.method === 'POST') {
    const { name, price, description } = req.body;
    const newProduct = await prisma.product.create({
      data: { name, price, description },
    });
    res.status(201).json(newProduct);
  }
}
