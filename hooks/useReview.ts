import { useEffect, useState } from 'react'

export interface Review {
  id: string
  productId: string
  userId: string
  rating: number
  comment: string
  createdAt: string
  user?: {
    name?: string
    email?: string
    // add more if you're including more user fields
  }
}

interface UseReviewsOptions {
  productId: string
}

export function useReviews({ productId }: UseReviewsOptions) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!productId) return

    const fetchReviews = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`/api/v1/reviews?productId=${productId}`)
        const data = await res.json()

        if (!res.ok) throw new Error(data.error || 'Failed to load reviews')
        setReviews(data)
      } catch (err: any) {
        setError(err.message || 'Unexpected error')
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [productId])

  const submitReview = async (review: Omit<Review, 'id' | 'userId' | 'createdAt'>) => {
    setError(null)
    try {
      const res = await fetch('/api/v1/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to submit review')

      // Optional: Refresh list after submit
      setReviews(prev => [data, ...prev])
      return { success: true }
    } catch (err: any) {
      setError(err.message)
      return { success: false }
    }
  }

  return { reviews, loading, error, submitReview }
}
