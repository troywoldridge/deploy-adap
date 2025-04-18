// src/hooks/useUsers.ts

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '@/lib/api/users'
import { User } from '@/types/user'

// Fetch all users
export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: api.getUsers,
  })
}

// Fetch a single user by ID
export const useUser = (userId: number) => {
  return useQuery<User>({
    queryKey: ['user', userId],
    queryFn: () => api.getUserById(userId),
    enabled: !!userId,
  })
}

// Create a user
export const useCreateUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: api.createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}

// Update a user
export const useUpdateUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: { userId: number; user: Partial<User> }) =>
      api.updateUser(data.userId, data.user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}

// Delete a user
export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (userId: number) => api.deleteUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}
