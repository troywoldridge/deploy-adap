// src/types/product.ts

export interface Product {
    id: number;
    sinalite_id: string;
    sku: string;
    name: string;
    brand: string;
    description: string;
    category: string;
    enabled: number;
    created_at: string;
    updated_at: string;
    is_featured: number;
    is_trending: number;
    deleted_at: string | null;
    slug: string;
    price: string;
    stock_quantity: number;
    stock_status: string;
    weight: number | null;
    length: number | null;
    width: number | null;
    height: number | null;
    min_order_qty: number;
    max_order_qty: number | null;
    shipping_class: string;
    taxable: number;
    rating: number | null;            // ← ensure rating is included
    review_count: number;             // ← ensure review_count is included
    attributes: Record<string, string> | null; // ← ensure attributes is included
    tags: string[] | null;
    supplier_id: number;
    product_type: string;
    customizable: number;
    expiration_date: string | null;
    video_url: string | null;
    image_url: string;
    images: ProductImage[];
    options: ProductOption[];
    pricing: PricingType[];
  }
  
  export interface ProductImage {
    id: number;
    Sinalite_id: number;
    s3_key: string;
    image_url: string;
    alt_text?: string;
    is_primary: boolean;
  }
  
  export interface ProductOption {
    id: number;
    sinalite_id: number;
    group: string;
    name: string;
    hidden: boolean;
  }
  
  export interface PricingType {
    id: number;
    sinalite_id: number;
    base_price: string;
    discount?: string | null;
    final_price?: string | null;
    option_hash: string;
  }
  