// adapnow-1/frontend/src/types/ProductOption.ts

export interface ProductOptionDetail {
  id: number;
  value: string;
  price_modifier?: string;
}


export interface ProductOption {
  id: number;
  name: string;
  details?: ProductOptionDetail[]; // Now optional
  sinalite_id?: number;
  option_id?: string;
  group_id?: string;
  hidden?: string;
  option_chain?: string;
  hash?: string;
  base_price?: string;
  price_modifier?: string;
  final_price?: string;
  created_at?: string;
  updated_at?: string;
}

