import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
    include: {
      wishlist: true,
      reviews: true,
      orders: true,
      achievements: true,
      Gamification: true,
    },
  });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
  
  return NextResponse.json(user);
}
