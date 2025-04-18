import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NotepadType {
  label: string
  href: string
  src: string
  alt: string
  description: string
}

const notepadTypes: NotepadType[] = [
  {
    label: '25 Page Notepads',
    href: '/note-pads/25-page', // Adjust to your actual route
    src: 'https://d12ufawtd6351k.cloudfront.net/notepad-1.webp',
    alt: '25-page Notepads',
    description: 'Convenient 25-page notepads for quick notes and memos.',
  },
  {
    label: '50 Page Notepads',
    href: '/note-pads/50-page', // Adjust to your actual route
    src: 'https://d12ufawtd6351k.cloudfront.net/notepad-2.webp',
    alt: '50-page Notepads',
    description: '50-page notepads for longer use and more extensive note-taking.',
  },
]

const NotepadIndex: React.FC = () => {
  return (
    <div className="container py-8">
      <h1 className="mb-4 text-center">Notepads</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {notepadTypes.map((type, index) => (
          <div key={index} className="col">
            <div className="card h-100 text-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: '200px', overflow: 'hidden' }}
              >
                <Image
                  src={type.src}
                  alt={type.alt}
                  width={200}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{type.label}</h5>
                <p className="card-text">{type.description}</p>
              </div>
              <div className="card-footer bg-white border-0">
                <Link href={type.href} className="btn btn-primary">
                  Browse {type.label}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotepadIndex
