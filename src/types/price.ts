export interface Option {
  id: string
  name: string
  group: string
}

export interface OptionItem {
  id: string
  name: string
  priceAdjust: number
  optionId: string
}

export interface PricingResponse {
  price: string
}

export interface ProductOptions {
  group: string
  options: OptionItem[]
}

export interface ProductPricingData {
  id: string
  optionsHash: string
  price: number
}

export interface ProductPricing {
  productId: string
  pricingData: ProductPricingData[]
}
