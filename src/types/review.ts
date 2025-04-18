export interface CreateReviewPayload {
  productId: number
  rating: number
  comment: string
  title?: string // Optional, in case you want a short review title
  userId?: string // Optional if you're extracting user from session/token
}

export interface Review {
  id: number
  productId: number
  userId: string
  rating: number
  comment: string | null
  title?: string
  createdAt: Date
  updatedAt: Date
  user?: {
    id: string
    name: string
    email?: string
  }
}
