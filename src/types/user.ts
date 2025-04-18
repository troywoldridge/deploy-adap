export interface User {
  id: number
  name: string
  email: string
  role?: 'user' | 'admin'
  createdAt: string
  updatedAt: string
}

export interface CreateUserPayload {
  name: string
  email: string
  password: string
  role?: 'user' | 'admin'
}

export interface UpdateUserPayload {
  id: number
  name?: string
  email?: string
  password?: string
  role?: 'user' | 'admin'
}
