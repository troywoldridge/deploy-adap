import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Sublink {
  label: string
  href: string
  src: string
  alt: string
  sublinks?: Sublink[]
}

const flyersData: Sublink[] = [
  {
    label: 'Flyers',
    href: '/print-products/flyers',
    src: 'https://d12ufawtd6351k.cloudfront.net/flyers.png',
    alt: 'Flyers',
    sublinks: [
      {
        label: '100lb Gloss Text',
        href: '/print-products/flyers/100lb-gloss-text',
        src: 'https://d12ufawtd6351k.cloudfront.net/flyer-3.png',
        alt: '100lb Gloss Text Flyers',
      },
      {
        label: '100lb Matte Finish',
        href: '/print-products/flyers/100lb-matte-finish',
        src: 'https://d12ufawtd6351k.cloudfront.net/flyer-2.png',
        alt: '100lb Matte Finish Flyers',
      },
      {
        label: '100lb UV',
        href: '/print-products/flyers/100lb-uv',
        src: 'https://d12ufawtd6351k.cloudfront.net/100lb-uv-f.jpg',
        alt: '100lb UV Flyers',
      },
      {
        label: '80lb Enviro Uncoated',
        href: '/print-products/flyers/80lb-enviro',
        src: 'https://d12ufawtd6351k.cloudfront.net/enviro-flyer-1.webp',
        alt: '80lb Enviro Uncoated Flyers',
      },
      {
        label: '70lb Linen Uncoated',
        href: '/print-products/flyers/70lb-linen',
        src: 'https://d12ufawtd6351k.cloudfront.net/linen-flyer-1.jpg',
        alt: '70lb Linen Uncoated Flyers',
      },
    ],
  },
]

const FlyersPage: React.FC = () => {
  // Flatten all sublinks into a single array for display.
  const allSublinks: Sublink[] = flyersData.flatMap((category) => category.sublinks || [])

  return (
    <div className="container mx-auto p-44">
      <h1 className="text-6xl font-bold mb-6 text-center">Flyers</h1>
      <p className="mb-4 text-2xl font-medium text-center">
        Explore our range of high-quality flyers, available in various finishes and styles to suit
        your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
        {allSublinks.map((sublink, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-12 max-w-sm">
            <Link href={sublink.href}>
              <div className="cursor-pointer">
                <Image
                  src={sublink.src}
                  alt={sublink.alt}
                  width={164}
                  height={164}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-center mb-2">{sublink.label}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FlyersPage
