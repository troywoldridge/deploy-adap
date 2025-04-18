'use client'

import { useEffect, useState } from 'react'

interface Product {
  id: number
  name: string
  description: string
  price: number
  createdAt: string
  updatedAt: string
}

interface PaginatedResponse {
  products: Product[]
  total: number
  page: number
  totalPages: number
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [searchTerm, setSearchTerm] = useState<string>('')

  // Use debouncing to delay API call after the user stops typing
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm)
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearchTerm(searchTerm), 500)
    return () => clearTimeout(timer) // Cleanup timer on effect cleanup
  }, [searchTerm])

  const fetchProducts = async (page = currentPage, limit = 10, search = debouncedSearchTerm) => {
    try {
      const res = await fetch(`/api/products?page=${page}&limit=${limit}&search=${search}`)
      if (!res.ok) {
        throw new Error('Failed to fetch products')
      }
      const data: PaginatedResponse = await res.json()
      setProducts(data.products)
      setTotalPages(data.totalPages)
      setCurrentPage(data.page)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handlePageChange = (newPage: number): void => {
    if (newPage > 0 && newPage <= totalPages) {
      setLoading(true)
      setCurrentPage(newPage)
      fetchProducts(newPage)
    }
  }

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchTerm(event.target.value)
    setLoading(true)
    setCurrentPage(1) // Reset to page 1 on new search
  }

  // Fetch products whenever the page or search term changes
  useEffect(() => {
    fetchProducts(currentPage)
  }, [currentPage, debouncedSearchTerm])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>Products</h1>

      {/* Search bar */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search products..."
        className="border p-2 mb-4"
      />

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous Page"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next Page"
        >
          Next
        </button>
      </div>
    </div>
  )
}
