import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Each card’s data
interface CardItem {
  label: string
  href: string
  src: string
  alt: string
}

// Two Lamination postcard options
const LaminationData: CardItem[] = [
  {
    label: '18pt Gloss Lamination',
    href: '/print-products/postcards/lamination/18pt-gloss',
    src: 'https://d12ufawtd6351k.cloudfront.net/gloss-lam-pc-1.webp',
    alt: '18pt Gloss Lamination Postcards',
  },
  {
    label: '18pt Matte Silk Lamination',
    href: '/print-products/postcards/lamination/18pt-silk',
    src: 'https://d12ufawtd6351k.cloudfront.net/silk-lam-pc-2.webp',
    alt: '18pt Silk Lamination Postcards',
  },
]

const LaminationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-8xl w-full px-4 mb-24">
        <h1 className="text-center text-6xl font-bold mb-6">Laminated Postcards</h1>
        <p className="text-center text-3xl mb-8">
          Explore our range of Laminated postcards for a vivid shine and reflective finish.
        </p>

        {/* Grid for 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LaminationData.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg p-4 flex flex-col items-center text-center bg-white"
            >
              <Link href={item.href}>
                <div className="cursor-pointer">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={350}
                    height={250}
                    className="mx-auto object-cover rounded-lg mb-2"
                  />
                  <h2 className="text-2xl font-semibold">{item.label}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LaminationPage
