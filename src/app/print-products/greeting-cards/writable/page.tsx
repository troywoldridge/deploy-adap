'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface WritableCategory {
  label: string
  href: string
  src: string
  alt: string
}

const writableCategories: WritableCategory[] = [
  {
    label: '13pt Enviro Uncoated',
    href: '/print-products/greeting-cards/writable/13pt-enviro-gc',
    src: 'https://d12ufawtd6351k.cloudfront.net/13pt-enviro-gc.jpg',
    alt: '13pt Enviro Uncoated Greeting Cards',
  },
  {
    label: '14pt Writable + AQ (C1S)',
    href: '/print-products/greeting-cards/writable/14pt-writable-aq',
    src: 'https://d12ufawtd6351k.cloudfront.net/14pt-writable-aq-gc.jpg',
    alt: '14pt Writable + AQ (C1S) Greeting Cards',
  },
  {
    label: '14pt Writable + UV',
    href: '/print-products/greeting-cards/writable/14pt-writable-uv',
    src: 'https://d12ufawtd6351k.cloudfront.net/14pt-writable-uv-gc.jpg',
    alt: '14pt Writable + UV Greeting Cards',
  },
]

const WritableGreetingCardsIndexPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Writable Greeting Cards</h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        Select your writable greeting cards option.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {writableCategories.map((cat, index) => (
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

export default WritableGreetingCardsIndexPage
