// src/pages/upload-artwork.tsx

'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/router'

const UploadArtworkPage: React.FC = () => {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string>('')
  const [isUploading, setIsUploading] = useState<boolean>(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files ? e.target.files[0] : null
    if (uploadedFile) {
      const fileExtension = uploadedFile.name.split('.').pop()?.toLowerCase()
      if (fileExtension === 'pdf') {
        setFile(uploadedFile)
        setError('')
      } else {
        setError('Please upload a PDF file.')
      }
    }
  }

  const handleSubmit = async () => {
    if (!file) {
      setError('Please upload a PDF file.')
      return
    }

    setIsUploading(true)

    // Simulate file upload and processing
    setTimeout(() => {
      // Redirect to the CartReviewPage after file upload
      router.push('/cart-review')
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-center mb-8">Upload Your Artwork</h1>
      <div className="space-y-4 max-w-md mx-auto">
        <div>
          <label className="block mb-2">Upload Artwork (PDF only, 300dpi)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white px-5 py-2 rounded"
            disabled={isUploading}
          >
            {isUploading ? 'Uploading...' : 'Submit Artwork'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default UploadArtworkPage
