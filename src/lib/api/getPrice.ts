export const getPrice = async (productId: string, optionIds: string[]): Promise<{ price: string }> => {
  const query = optionIds.map((id) => `option_ids[]=${id}`).join('&')
  const res = await fetch(`/api/v1/product/${productId}/price?${query}`)

  if (!res.ok) {
    throw new Error('Failed to fetch price')
  }

  return res.json()
}
