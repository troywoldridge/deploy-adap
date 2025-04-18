'use client'

import React, { useEffect, useState } from 'react'
import ProductImageGallery from '@/components/product/ProductImageGallery'
import ProductPricing from '@/components/ProductPricing'
import ProductDetailsTabs from '@/components/product/ProductDetailsTabs'
import ProductOptionsDropdown from '@/components/product/ProductOptionsDropdown'
import ShippingForm from '@/components/ShippingForm'

interface Product {
  id: number
  sinalite_id: number
  sku: string
  name: string
  description: string
  price: string
  image_url: string
  images: Array<{ id: number; image_url: string; alt_text?: string }>
  attributes?: Record<string, string>
  rating?: number
  review_count?: number
  pricing: PricingType[]
  options: ProductOption[]
}

interface PricingType {
  id: number
  base_price: string
  option_hash: string
}

interface ProductOption {
  id: number
  sinalite_id: number
  group: string
  name: string
}

const Aq14Page: React.FC = () => {
  const productId = 2 // Unique ID for 14pt AQ
  const [productData, setProductData] = useState<Product | null>(null)
  const [updatedPrice, setUpdatedPrice] = useState<string>('')
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: number }>({})
  const [error, setError] = useState<string>('')
  const [shippingEstimate, setShippingEstimate] = useState<string>('')

  useEffect(() => {
    const getProductData = async () => {
      try {
        const res = await fetch(`http://192.168.0.100:8000/api/v1/products/${productId}`, {
          cache: 'no-store',
        })
        if (!res.ok) throw new Error(`Fetch failed with status ${res.status}`)
        const data: Product = await res.json()
        setProductData(data)
        setUpdatedPrice(data.price)
      } catch (err) {
        console.error('Error fetching product data:', err)
        setError('Failed to load product data. Please try again later.')
      }
    }
    getProductData()
    return () => console.log('Aq14Page unmounted')
  }, [productId])

  const handleShippingSubmit = async (formData: {
    country: string
    city: string
    postalCode: string
  }) => {
    try {
      const response = await fetch('http://192.168.0.100:8000/api/v1/shipping/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          product_id: productId,
          options: Object.values(selectedOptions),
        }),
      })

      const data = await response.json()
      setShippingEstimate(`Estimated Shipping: $${data.shipping_cost}`)
    } catch (err) {
      console.error('Shipping estimate failed', err)
      setShippingEstimate('Failed to calculate shipping.')
    }
  }

  const handlePriceUpdate = async () => {
    const query = Object.values(selectedOptions)
      .map((id) => `option_ids[]=${id}`)
      .join('&')

    try {
      const response = await fetch(
        `http://192.168.0.100:8000/api/v1/products/${productId}/price?${query}`
      )
      const data = await response.json()
      setUpdatedPrice(data.price) // price should be a string like "45.00"
    } catch (err) {
      console.error('Failed to fetch price:', err)
    }
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-24">
        <p className="text-center text-red-500">{error}</p>
      </div>
    )
  }

  if (!productData) {
    return (
      <div className="container mx-auto px-4 py-24">
        <p className="text-center">Loading...</p>
      </div>
    )
  }

  const baseURL = 'https://d12ufawtd6351k.cloudfront.net'
  const primaryImage = productData.image_url.startsWith('http')
    ? productData.image_url
    : `${baseURL}${productData.image_url}`
  const correctedImages = [
    { id: productData.id, image_url: primaryImage, alt_text: productData.name },
  ]

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-center mb-8">
        {productData.name} - 14pt AQ Business Cards
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8">
        <ProductImageGallery images={correctedImages} />
        <div className="space-y-6">
          <ProductOptionsDropdown
            productId={productId}
            onOptionsChange={setSelectedOptions}
            onPriceUpdate={handlePriceUpdate}
          />
          <ProductPricing
            productId={productId}
            basePrice={updatedPrice}
            pricing={productData.pricing}
            options={productData.options}
            selectedOptions={selectedOptions}
            finalPrice={updatedPrice}
            price={updatedPrice}
          />
          <div className="flex gap-4 flex-wrap">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded shadow">
              Upload Artwork
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded shadow">
              Calculate Shipping
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded shadow">
              Markup Calculator
            </button>
          </div>
        </div>
      </div>

      {/* Shipping Form */}
      <div className="mt-12">
        <ShippingForm onSubmit={handleShippingSubmit} />
        {shippingEstimate && (
          <p className="text-green-600 font-semibold mt-4">{shippingEstimate}</p>
        )}
      </div>

      <div className="mt-24">
        <ProductDetailsTabs
          description={productData.description}
          attributes={productData.attributes || {}}
          rating={productData.rating || 0}
          reviewCount={productData.review_count || 0}
        />
      </div>
    </div>
  )
}

export default Aq14Page
