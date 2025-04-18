// src/types/pricingOption.ts

export interface PricingOption {
  id: number // Unique identifier for the pricing option
  name: string // Name of the pricing option
  price: number // Price for this option
  description?: string // Optional description for the pricing option
  currency: string // Currency (e.g., USD, EUR)
}
