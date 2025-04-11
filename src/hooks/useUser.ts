import { useQuery, useMutation } from "@tanstack/react-query";
import { getUser, createUser } from "@/lib/api/users";

export const useUser = (id: number) =>
  useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });

export const useCreateUser = () =>
  useMutation({
    mutationFn: createUser,
  });
