'use client'

import React, { useEffect, useState } from 'react'
import ProductImageGallery from '@/components/product/ProductImageGallery'
import ProductPricing from '@/components/ProductPricing'
import ProductDetailsTabs from '@/components/product/ProductDetailsTabs'
import ProductOptionsDropdown from '@/components/product/ProductOptionsDropdown'
import ShippingCalculator from '@/components/utils/ShippingCalculator'

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

interface LocalProductDetailsTabsProps {
  product: Product // Add the product prop to the interface
}

const LocalProductDetailsTabs: React.FC<LocalProductDetailsTabsProps> = ({ product, ...props }) => {
  return (
    <div>
      <h2>Product Details</h2>
      <p>{product.description}</p>
      {/* Add more details or tabs as needed */}
    </div>
  )
}

const ProfitMaximizerPage: React.FC = () => {
  const [productId] = useState(1)
  const [productData, setProductData] = useState<Product | null>(null)
  const [updatedPrice, setUpdatedPrice] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getProductData = async () => {
      try {
        const sinaliteId = 1 // Set the correct Sinalite ID here

        const response = await fetch(
          `http://192.168.0.100:8000/api/v1/products/by-sinalite/${sinaliteId}`,
          { cache: 'no-store' }
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.statusText}`)
        }

        const text = await response.text()
        console.log('Raw API Response:', text)

        if (text.trim().startsWith('{') || text.trim().startsWith('[')) {
          const data: Product = JSON.parse(text)
          setProductData(data)
          setUpdatedPrice(data.price)
          setLoading(false)
        } else {
          throw new Error('Received invalid response format from API')
        }
      } catch (err) {
        console.error('Error fetching product data:', err)
        setError('Failed to load product data. Please try again later.')
        setLoading(false)
      }
    }

    getProductData()
  }, [])

  const handlePriceUpdate = (price: string) => {
    setUpdatedPrice(price)
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-24">
        <p className="text-center text-red-500">{error}</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-24">
        <p className="text-center">Loading...</p>
      </div>
    )
  }

  if (!productData) {
    return (
      <div className="container mx-auto px-4 py-24">
        <p className="text-center">No product data found</p>
      </div>
    )
  }

  const baseURL = 'https://d12ufawtd6351k.cloudfront.net'
  const primaryImage =
    productData.image_url && productData.image_url.startsWith('http')
      ? productData.image_url
      : `${baseURL}${productData.image_url || ''}`

  const correctedImages = [
    { id: productData.id, image_url: primaryImage, alt_text: productData.name },
  ]

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-center mb-8">{productData.name}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8">
        <ProductImageGallery images={correctedImages} />
        <div className="space-y-6">
          <ProductOptionsDropdown
            productId={productId}
            onOptionsChange={(options) => {
              console.log('Selected options:', options)
              setSelectedOptions(
                Object.fromEntries(
                  Object.entries(options).map(([key, value]) => [key, value.toString()])
                )
              )
            }}
          />
          <ProductPricing
            productId={productId}
            basePrice={updatedPrice}
            pricing={productData.pricing}
            options={productData.options}
            selectedOptions={{}} // Provide appropriate selected options here
            finalPrice={updatedPrice} // Use updatedPrice as the final price for now
            price={updatedPrice} // Use updatedPrice as the price for now
          />

          <div className="flex gap-4 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow">
              Upload Artwork
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow">
              Add to Cart
            </button>
          </div>

          {/* Shipping Calculator */}
          <ShippingCalculator
            productId={productData.id}
            selectedOptions={selectedOptions}
            sinaliteId={productData.sinalite_id.toString()} // Ensure you're passing this prop correctly
          />
        </div>
      </div>

      {/* Product Details Tabs */}
      <LocalProductDetailsTabs product={productData} />
    </div>
  )
}

export default ProfitMaximizerPage
