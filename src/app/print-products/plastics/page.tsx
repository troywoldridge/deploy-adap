'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Sublink {
  label: string
  href: string
  src: string
  alt: string
  description?: string
}

// Data for the Numbered Tickets page
const PlasticsData: Sublink[] = [
  {
    label: 'Plastics',
    href: '/print-products/plastics/14pt',
    src: 'https://d12ufawtd6351k.cloudfront.net/plastics-1.webp',
    alt: 'Plastics',
    description: 'Durable plastic prints for a modern look.',
  },
]

const PlasticsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-6xl font-extrabold mb-6 text-center">Plastic Cards</h1>
      <p className="mb-8 text-center text-2xl font-bold text-gray-700">
        Plastic cards offer a durable, high-quality solution that stands up to everyday wear and
        tear. Made from premium materials, these cards deliver crisp, vibrant prints and a
        professional finish that enhances your brand’s identity. Ideal for membership, loyalty, or
        business cards, they provide a lasting impression and superior resistance to water,
        scratches, and fading.
      </p>
      {/* Center the card with flex and limit max width */}
      <div className="flex justify-center">
        {PlasticsData.map((category, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4 w-full max-w-md">
            <Link href={category.href}>
              <div className="cursor-pointer">
                <Image
                  src={category.src}
                  alt={category.alt}
                  width={256}
                  height={160}
                  className="w-full h-72 object-cover rounded-lg mb-4"
                />
                <h2 className="text-3xl font-semibold text-center mb-2">{category.label}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlasticsPage
