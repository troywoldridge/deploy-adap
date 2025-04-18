'use client'

import React, { useState, useEffect } from 'react'

interface ProductOption {
  group: string
  name: string
  price_modifier: number
}
interface GroupedOptions {
  [groupName: string]: ProductOption[]
}

interface Props {
  productId: number
  basePrice: number
  groupedOptions: GroupedOptions
}

export default function ProductForm({ productId, basePrice, groupedOptions }: Props) {
  const [selected, setSelected] = useState<Record<string, string>>({})
  const [price, setPrice] = useState(basePrice)

  // If you have a custom-size feature, here's how you'd do it:
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')

  // Initialize each group to the first option
  useEffect(() => {
    const defaults: Record<string, string> = {}
    for (const groupName in groupedOptions) {
      const firstOpt = groupedOptions[groupName][0]
      if (firstOpt) {
        defaults[groupName] = firstOpt.name
      }
    }
    setSelected(defaults)
  }, [groupedOptions])

  function handleChange(groupName: string, value: string) {
    setSelected((prev) => ({ ...prev, [groupName]: value }))
  }

  const isCustomSizeSelected = selected['CustomSize'] === 'Yes (enter dimensions)'

  // Recalculate price if user changes an option or custom size dims
  useEffect(() => {
    if (!productId || !Object.keys(selected).length) return

    async function fetchPrice() {
      try {
        const payload = {
          ...selected,
          width: isCustomSizeSelected ? width : null,
          height: isCustomSizeSelected ? height : null,
        }

        const res = await fetch(`/api/products/${productId}/price`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        const data = await res.json()
        if (data.success) {
          setPrice(data.price)
        }
      } catch (err) {
        console.error('Price update error:', err)
      }
    }

    fetchPrice()
  }, [selected, productId, width, height, isCustomSizeSelected])

  return (
    <div className="bg-gray-100 p-4 rounded shadow max-w-sm">
      {Object.entries(groupedOptions).map(([groupName, options]) => (
        <div key={groupName} className="mb-4">
          <label className="block font-semibold mb-1">{groupName}</label>
          <select
            className="w-full p-2 border rounded"
            value={selected[groupName] || ''}
            onChange={(e) => handleChange(groupName, e.target.value)}
          >
            {options.map((opt) => (
              <option key={opt.name} value={opt.name}>
                {opt.name}
              </option>
            ))}
          </select>
        </div>
      ))}

      {/* If user picks custom size, show fields */}
      {isCustomSizeSelected && (
        <div className="mb-4 bg-white p-2 rounded">
          <label className="block mb-1">Width (inches)</label>
          <input
            type="number"
            className="border p-1 w-full mb-2"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <label className="block mb-1">Height (inches)</label>
          <input
            type="number"
            className="border p-1 w-full"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      )}

      <div className="text-xl font-bold mt-4">Price: ${price.toFixed(2)}</div>

      <button
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700"
        onClick={() => alert(`Added to cart at $${price.toFixed(2)}`)}
      >
        Add to Cart
      </button>
    </div>
  )
}
