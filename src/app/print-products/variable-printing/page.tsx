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

// Data for the Wall Calendars page
const VariablePrintingData: Sublink[] = [
  {
    label: 'Variable Printing',
    href: '/print-products/variable',
    src: 'https://d12ufawtd6351k.cloudfront.net/variable-printing.jpg',
    alt: 'Variable Printing',
    sublinks: [
      {
        label: '14pt Variable Printing',
        href: '/print-products/variable/14pt-variable',
        src: 'https://d12ufawtd6351k.cloudfront.net/14pt-variable-printing.jpg',
        alt: 'Variable Printing',
      },
    ],
  },
]

// Wall Calendars Page Component
const VariablePrintingPage: React.FC = () => {
  console.log('VariablePrintingPage loaded successfully')

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
      <h1 className="text-4xl font-bold mb-6 text-center">Variable Printing</h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        These are postcards printed with variable data. They are a perfect option for postcard
        mailers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {VariablePrintingData.map((category, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4">
            <Link href={category.href}>
              <div className="cursor-pointer">
                <Image
                  src={category.src}
                  alt={category.alt}
                  width={164}
                  height={164}
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

export default VariablePrintingPage
