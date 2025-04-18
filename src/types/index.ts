// src/types/index.ts

export interface PricingOption {
  id: number
  base_price: string
  option_hash: string
  weight_per_box: string
  number_of_boxes: string
  box_size: string
}

export interface SelectedOptions {
  [key: string]: number
}
