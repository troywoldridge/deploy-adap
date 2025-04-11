import { User } from "@prisma/client";

export const getUser = async (id: number): Promise<User | null> => {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
};

export const createUser = async (data: { name: string; email: string; password: string }) => {
  const res = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create user");
  return res.json();
};
