// src/types/options.ts

export interface Option {
    id: number
    name: string
    price: number
  }
  
  export interface OptionGroup {
    group: string
    options: Option[]
  }
  
  export interface Product {
    id: number
    name: string
    description: string
    price: string
  }
  
  export interface SelectedOptions {
    [key: string]: number
  }
  