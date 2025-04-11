import { useState, useEffect } from 'react'
import { getPrice } from '@/lib/api/price'
import { PricingResponse } from '@/types/price'

export const usePrice = (productId: string) => {
  const [price, setPrice] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const fetchPrice = async (optionIds: string[]) => {
    setLoading(true)
    setError('')

    try {
      const data: PricingResponse = await getPrice(productId, optionIds)
      setPrice(data.price)
    } catch (err) {
      setError('Failed to fetch price')
    } finally {
      setLoading(false)
    }
  }

  return {
    price,
    loading,
    error,
    fetchPrice,
  }
}
