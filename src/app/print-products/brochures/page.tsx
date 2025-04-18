'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Sublink {
  label: string
  href: string
  src: string
  alt: string
}

const brochureOptions: Sublink[] = [
  {
    label: '100lb Gloss Text',
    href: '/print-products/brochures/gloss',
    src: 'https://d12ufawtd6351k.cloudfront.net/brochure-1.png',
    alt: '100lb Gloss Text Brochures',
  },
  {
    label: '100lb Matte Finish',
    href: '/print-products/brochures/matte',
    src: 'https://d12ufawtd6351k.cloudfront.net/brochure-4.png',
    alt: '100lb Matte Finish Brochures',
  },
  {
    label: '100lb UV',
    href: '/print-products/brochures/uv',
    src: 'https://d12ufawtd6351k.cloudfront.net/brochure-3.png',
    alt: '100lb UV Brochures',
  },
  {
    label: '80lb Enviro Uncoated',
    href: '/print-products/brochures/enviro',
    src: 'https://d12ufawtd6351k.cloudfront.net/brochure-2.png',
    alt: '80lb Enviro Uncoated Brochures',
  },
]

const BrochuresPage: React.FC = () => {
  return (
    <div className="container mx-16 p-12">
      <h1 className="text-6xl font-bold mb-6 text-center">Brochures</h1>
      <p className="mb-4 text-2xl text-center">
        Explore our range of high-quality brochures, available in a variety of finishes and styles.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {brochureOptions.map((option, index) => (
          <Link key={index} href={option.href}>
            <div className="border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer">
              <div className="relative w-full h-80">
                <Image
                  src={option.src}
                  alt={option.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">{option.label}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BrochuresPage
