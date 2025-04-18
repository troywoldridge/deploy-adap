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

const FoldedBusinessCardsData: Sublink[] = [
  {
    label: 'Folded Business Cards',
    href: '/print-products/folded-business-cards',
    src: 'https://d12ufawtd6351k.cloudfront.net/folded-business-cards.jpg',
    alt: 'Folded Business Cards',
    sublinks: [
      {
        label: '14pt UV (High Gloss)',
        href: '/print-products/folded-business-cards/14pt-uv-fb',
        src: 'https://d12ufawtd6351k.cloudfront.net/14pt-uv-fb',
        alt: '14pt UV Folded Business Cards',
      },
      {
        label: '14pt Matte Finish',
        href: '/print-products/folded-business-cards/14pt-matte-fb',
        src: 'https://d12ufawtd6351k.cloudfront.net/14pt-matte-finish-fb',
        alt: '14pt Matte Finish Folded Business Cards',
      },
      {
        label: '13pt Enviro Uncoated',
        href: '/print-products/folded-business-cards/13pt-enviro-fb',
        src: 'https://d12ufawtd6351k.cloudfront.net/13pt-enviro-fb',
        alt: '13pt Enviro Uncoated Folded Business Cards',
      },
    ],
  },
]

// Wall Calendars Page Component
const FoldedBusinessCardsPage: React.FC = () => {
  console.log('DigitalSheetsPage loaded successfully')

  // Recursive function to render sublinks
  const renderSublinks = (sublinks: Sublink[]) => (
    <ul className="ml-6 border-l border-gray-300 pl-4">
      {sublinks.map((sublink, index) => (
        <li key={index} className="mb-4">
          <Link href={sublink.href}>
            <div className="flex items-start gap-4 hover:bg-gray-100 p-2 rounded-lg transition">
              <Image
                src={sublink.src}
                alt={sublink.alt}
                width={64}
                height={64}
                className="w-16 h-16 object-cover rounded"
              />
              <span className="font-medium text-lg">{sublink.label}</span>
            </div>
          </Link>
          {sublink.sublinks && renderSublinks(sublink.sublinks)}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Digital Sheets</h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        Folded Business Cards stand out from the crowd. With extra design space for your client to
        make a good impression, wholesale Folded Business Cards are essential to successful
        networking.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FoldedBusinessCardsData.map((category, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4">
            <Link href={category.href}>
              <div className="cursor-pointer">
                <Image
                  src={category.src}
                  alt={category.alt}
                  width={150}
                  height={150}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-center mb-2">{category.label}</h2>
              </div>
            </Link>
            {category.sublinks && renderSublinks(category.sublinks)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoldedBusinessCardsPage
