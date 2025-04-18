'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface SpecialtyCategory {
  label: string
  href: string
  src: string
  alt: string
}

const specialtyCategories: SpecialtyCategory[] = [
  {
    label: 'Metallic Foil',
    href: '/print-products/greeting-cards/specialty/metallic-foil-gc',
    src: 'https://d12ufawtd6351k.cloudfront.net/metallic-foil-gc.png',
    alt: 'Metallic Foil Greeting Cards',
  },
  {
    label: 'Spot UV',
    href: '/print-products/greeting-cards/specialty/spot-uv-gc',
    src: 'https://d12ufawtd6351k.cloudfront.net/spot-uv-gc.png',
    alt: 'Spot UV Greeting Cards',
  },
  {
    label: 'Kraft Paper',
    href: '/print-products/greeting-cards/specialty/kraft-paper-gc',
    src: 'https://d12ufawtd6351k.cloudfront.net/kraft-paper-gc.png',
    alt: 'Kraft Paper Greeting Cards',
  },
  {
    label: 'Pearl Paper',
    href: '/print-products/greeting-cards/specialty/pearl-paper-gc',
    src: 'https://d12ufawtd6351k.cloudfront.net/pearl-paper-gc.png',
    alt: 'Pearl Paper Greeting Cards',
  },
]

const SpecialtyGreetingCardsIndexPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Specialty Greeting Cards</h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        Select your specialty greeting cards option.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialtyCategories.map((cat, index) => (
          <Link key={index} href={cat.href}>
            <div className="border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer">
              <div className="relative w-full h-56">
                <Image
                  src={cat.src}
                  alt={cat.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">{cat.label}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialtyGreetingCardsIndexPage
