import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

export default apiClient
