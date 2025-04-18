'use client'

import React, { useEffect, useState } from 'react'
import ProductImageGallery from '@/components/product/ProductImageGallery'
import ProductPricing from '@/components/ProductPricing'
import ProductOptionsDropdown from '@/components/product/ProductOptionsDropdown'
import ShippingForm from '@/components/ShippingForm'
import { PricingOption } from '@/types/pricingOption'

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
  weight_per_box: string
  number_of_boxes: string
  box_size: string
}

interface ProductOption {
  id: number
  sinalite_id: number
  group: string
  name: string
}

const EnviroPage: React.FC = () => {
  const productId = 13 // Unique ID for 13pt Enviro
  const [productData, setProductData] = useState<Product | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: number }>({})
  const [finalPrice, setFinalPrice] = useState<string>('0.00') // To store the final price
  const [error, setError] = useState<string>('')
  const [pricingData, setPricingData] = useState<PricingOption[]>([])

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await fetch(`http://192.168.0.100:8000/api/v1/products/${productId}`, {
          cache: 'no-store',
        })

        if (!res.ok) throw new Error(`Fetch failed with status ${res.status}`)

        const data: Product = await res.json()
        setProductData(data)
      } catch (err) {
        console.error('Error fetching product data:', err)
        setError('Failed to load product data. Please try again later.')
      }
    }

    fetchProductData()
  }, [productId])

  const fetchFinalPrice = async (updatedOptions: { [key: string]: number }) => {
    const optionChain = Object.values(updatedOptions)
      .map(Number)
      .sort((a, b) => a - b)
      .join('-')

    console.log('Generated option_chain:', optionChain) // Make sure this is being generated as expected.

    try {
      const priceRes = await fetch(`http://192.168.0.100:8000/api/v1/calculateFinalPrice`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: productId,
          options: updatedOptions, // Pass selected options here
        }),
      })
      const responseBody = await priceRes.text() // Log response text for debugging
      console.log('API Response Text:', responseBody) // Check what the backend is returning

      if (!priceRes.ok) {
        throw new Error(`Failed to fetch price: ${responseBody}`)
      }

      const priceData = await priceRes.json()
      console.log('Fetched Price Data:', priceData) // Log price data

      if (priceData && priceData.final_price) {
        setFinalPrice(priceData.final_price.toFixed(2)) // Update the final price
      } else {
        console.error('No final price returned from API.')
        setFinalPrice('0.00') // Set default price if no final price is found
      }
    } catch (err) {
      console.error('Error fetching price:', err)
      setFinalPrice('0.00') // Reset price if there's an error
    }
  }

  const handleOptionsChange = (selectedOptions: { [key: string]: number }) => {
    setSelectedOptions(selectedOptions) // Update selected options
    fetchFinalPrice(selectedOptions) // Recalculate the price whenever options change
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

  // Rename `pricingData` from productData to `initialPricingData`
  const initialPricingData = productData?.pricing?.[0] // Get first pricing entry
  const weight =
    parseFloat(initialPricingData?.weight_per_box || '0') *
    parseInt(initialPricingData?.number_of_boxes || '1')
  const [length, width, height] = initialPricingData?.box_size?.split(' x ').map(Number) || [
    0, 0, 0,
  ]

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-center mb-8">
        {productData.name} - 13pt Enviro Business Cards
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8">
        {/* Product Image Gallery */}
        <ProductImageGallery images={productData.images} />

        <div className="space-y-6">
          {/* Product Options Dropdown */}
          <ProductOptionsDropdown productId={productId} onOptionsChange={handleOptionsChange} />

          {/* Dynamic Pricing Component */}
          <ProductPricing
            pricing={[initialPricingData]} // Ensure this is wrapped in an array
            selectedOptions={selectedOptions} // An object like { Quantity: 12, Size: 22 }
            basePrice={productData?.price || '0.00'} // Ensure you have a base price
            finalPrice={finalPrice} // The final price you calculated
            productId={productData?.id || 0} // Pass the product ID
            options={productData?.options || []} // Pass the product options
            price={productData?.price || '0.00'} // Pass the price of the product
          />

          <div className="flex gap-4 flex-wrap">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded shadow">
              Upload Artwork
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnviroPage
