export interface CreateReviewPayload {
  productId: string
  rating: number
  comment: string
  title?: string // Optional, in case you want a short review title
  userId?: string // Optional if you're extracting user from session/token
}

export interface Review {
  id: string
  productId: string
  userId: string
  rating: number
  comment: string
  title?: string
  createdAt: Date
  updatedAt: Date
  user?: {
    id: string
    name: string
    email?: string
  }
}
