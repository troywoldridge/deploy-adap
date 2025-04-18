// src/components/product/ProductDetailsTabs.tsx

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface ProductDetailsTabsProps {
  description: string
  attributes: Record<string, string> | null
  rating: number | null
  reviewCount: number
}

const ProductDetailsTabs: React.FC<ProductDetailsTabsProps> = ({
  description,
  attributes,
  rating,
  reviewCount,
}) => {
  return (
    <Tabs defaultValue="details">
      <TabsList>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="reviews">Reviews ({reviewCount})</TabsTrigger>
      </TabsList>

      <TabsContent value="details">
        <div className="p-4 bg-white shadow rounded">
          <p className="mb-4">{description}</p>
          {attributes && (
            <ul>
              {Object.entries(attributes).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          )}
        </div>
      </TabsContent>

      <TabsContent value="reviews">
        <div className="p-4 bg-white shadow rounded">
          <p>Rating: {rating ?? 'No ratings yet.'}</p>
          <p>{reviewCount} reviews</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default ProductDetailsTabs
