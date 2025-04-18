import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CardItem {
  label: string
  href: string
  src: string
  alt: string
}

const matteCardsData: CardItem[] = [
  {
    label: '13pt Enviro Uncoated',
    href: '/print-products/postcards/writable/13pt-enviro',
    src: 'https://d12ufawtd6351k.cloudfront.net/enviro-pc-1.webp',
    alt: '13pt Enviro Uncoated Postcards',
  },
  {
    label: '13pt Linen Uncoated',
    href: '/print-products/postcards/writable/13pt-linen',
    src: 'https://d12ufawtd6351k.cloudfront.net/13pt-linen-pc.png',
    alt: '13pt Linen Postcards',
  },
  {
    label: '14pt Writable + AQ',
    href: '/print-products/postcards/writable/14pt-aq',
    src: 'https://d12ufawtd6351k.cloudfront.net/aq-pc-2.webp',
    alt: '14pt Writable + AQ Postcards',
  },
  {
    label: '14pt Writable + UV',
    href: '/print-products/postcards/writable/14pt-uv',
    src: 'https://d12ufawtd6351k.cloudfront.net/silk-lam-pc-3.webp',
    alt: '14pt Writable + UV',
  },
]

const WritablePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* Outer container with a max width */}
      <div className="max-w-8xl w-full px-4 mb-24">
        <h1 className="text-center text-6xl font-bold mb-6">Writable Postcards</h1>
        <p className="text-center text-xl font-medium mb-8">
          Discover our writable postcards, designed with a sophisticated matte finish that provides
          the perfect surface for your personal notes and messages.
        </p>

        {/* Grid for 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {matteCardsData.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg p-4 flex flex-col items-center text-center bg-white"
            >
              <Link href={item.href}>
                <div className="cursor-pointer">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={205}
                    height={250}
                    className="mx-auto object-cover rounded-lg mb-2"
                  />
                  <h2 className="text-xl font-semibold">{item.label}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WritablePage
