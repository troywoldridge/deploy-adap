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

const DoorHangersData: Sublink[] = [
  {
    label: 'Door Hangers',
    href: '/print-products/door-hangers',
    src: 'https://d12ufawtd6351k.cloudfront.net/door-hanger.jpg',
    alt: 'Door Hangers',
    sublinks: [
      {
        label: 'AQ Door Hangers',
        href: '/print-products/door-hangers/14pt-aq-dh',
        src: 'https://d12ufawtd6351k.cloudfront.net/14pt-aq-dh.jpg',
        alt: '14pt AQ Door Hangers',
      },
      {
        label: '14pt UV (High Gloss)',
        href: '/print-products/door-hangers/14pt-uv-dh',
        src: 'https://d12ufawtd6351k.cloudfront.net/14pt-uv-dh.jpg',
        alt: '14pt UV Door Hangers',
      },
      {
        label: '14pt Matte',
        href: '/print-products/door-hangers/14pt-matte-dh',
        src: 'https://d12ufawtd6351k.cloudfront.net/14pt-matte-dh',
        alt: '14pt Matte Door Hangers',
      },
      {
        label: '13pt Enviro Uncoated',
        href: '/print-products/door-hangers/13pt-enviro-dh',
        src: 'https://d12ufawtd6351k.cloudfront.net/13pt-enviro-dh.jpg',
        alt: '13pt Enviro Door Hangers',
      },
    ],
  },
]

// Wall Calendars Page Component
const DoorHangersPage: React.FC = () => {
  console.log('DoorHangersPage loaded successfully')

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
                width={164}
                height={164}
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
      <h1 className="text-4xl font-bold mb-6 text-center">Door Hangers</h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        Door Hangers are highly effective marketing tools that are immediately noticed when opening
        the door.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DoorHangersData.map((category, index) => (
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

export default DoorHangersPage
