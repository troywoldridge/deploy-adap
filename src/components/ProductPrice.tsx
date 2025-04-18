'use client'

import React, { useEffect } from 'react'
import { usePrice } from '@/hooks/usePrice'

interface Props {
  productId: string
  optionIds: string[] // Selected option IDs (the hash will be generated based on these)
}

const ProductPrice: React.FC<Props> = ({ productId, optionIds }) => {
  const { price, loading, error, fetchPrice } = usePrice(productId)

  useEffect(() => {
    fetchPrice(optionIds)
  }, [optionIds, fetchPrice])

  return (
    <div>
      {loading && <p>Loading price...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && <p>Price: ${price}</p>}
    </div>
  )
}

export default ProductPrice
