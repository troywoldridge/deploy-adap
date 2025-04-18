// src/lib/api/users.ts

import apiClient from '@/lib/api-client'
import { User } from '@/types/user' // Ensure the User type is correctly exported

// Get all users
export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await apiClient.get('/users')
    return response.data as User[]
  } catch (error) {
    console.error('Error fetching users:', error)
    throw new Error('Failed to fetch users')
  }
}

// Get a single user
export const getUserById = async (userId: number): Promise<User> => {
  try {
    const response = await apiClient.get(`/users/${userId}`)
    return response.data as User
  } catch (error) {
    console.error('Error fetching user:', error)
    throw new Error('Failed to fetch user')
  }
}

// Create a user
export const createUser = async (user: Partial<User>): Promise<User> => {
  try {
    const response = await apiClient.post('/users', user)
    return response.data as User
  } catch (error) {
    console.error('Error creating user:', error)
    throw new Error('Failed to create user')
  }
}

// Update a user
export const updateUser = async (userId: number, user: Partial<User>): Promise<User> => {
  try {
    const response = await apiClient.put(`/users/${userId}`, user)
    return response.data as User
  } catch (error) {
    console.error('Error updating user:', error)
    throw new Error('Failed to update user')
  }
}

// Delete a user
export const deleteUser = async (userId: number): Promise<void> => {
  try {
    await apiClient.delete(`/users/${userId}`)
  } catch (error) {
    console.error('Error deleting user:', error)
    throw new Error('Failed to delete user')
  }
}
