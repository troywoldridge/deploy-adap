'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface ImageType {
  id: number
  image_url: string
  alt_text?: string
}

interface ProductImageGalleryProps {
  images: ImageType[]
}

export default function ProductImageGallery({ images }: ProductImageGalleryProps) {
  // Check if images is an array and has elements
  const safeImages = Array.isArray(images) ? images : []
  const [mainImage, setMainImage] = useState(safeImages?.[0]?.image_url || '')

  if (safeImages.length === 0) {
    return <p>No images available</p> // Gracefully handle the case where no images are passed
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      {/* Main Image Container */}
      <div className="w-full mt-20 h-[400px] bg-gray-100 rounded-lg shadow flex items-center justify-center">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={safeImages[0]?.alt_text || 'Main Product Image'}
            width={400}
            height={400}
            className="rounded-lg shadow"
          />
        ) : (
          <p>No image available</p>
        )}
      </div>

      {/* Thumbnail Images */}
      {safeImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto mt-4">
          {safeImages.slice(1).map((image) => (
            <div
              key={image.id}
              onClick={() => setMainImage(image.image_url)}
              className="cursor-pointer transition-transform transform hover:scale-105"
            >
              <Image
                src={image.image_url}
                alt={image.alt_text || 'Product Thumbnail'}
                width={100}
                height={75}
                className="rounded shadow object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
