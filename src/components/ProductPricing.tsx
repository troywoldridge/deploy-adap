"use client";

import React from "react";

interface PricingOption {
  option_hash: string;
  base_price: string;
  // other properties...
}

interface ProductPricingProps {
  productId: number;
  pricing: PricingOption[]; // ✅ Add this
  selectedOptions: { [key: string]: number };
  options: {
    id: number;
    sinalite_id: number;
    group: string;
    name: string;
  }[];
  basePrice: string;
  finalPrice: string; 
  price: string;
}


const ProductPricing: React.FC<ProductPricingProps> = ({
  pricing,
  selectedOptions,
  basePrice,
  finalPrice,
}) => {
  // Ensure pricing is an array, and if it's undefined, fallback to an empty array
  const safePricing = Array.isArray(pricing) ? pricing : [];

  // Combine selected options into a string to match against option_hash
  const selectedChain = Object.values(selectedOptions || {}).join("-");

  // Find matching pricing based on the selected chain
  const matchedPricing = safePricing.find((p) => p.option_hash === selectedChain);

  // Calculate new price, falling back to basePrice if no match is found
  const newPrice = matchedPricing?.base_price ?? basePrice;

  // If the new price doesn't match the final price, handle the change
  if (parseFloat(newPrice) !== parseFloat(finalPrice)) {
    // Handle price change logic here...
  }

  return (
    <div>
      {/* Render pricing details */}
      <p>Base Price: {basePrice}</p>
      <p>Final Price: {finalPrice}</p>
      <p>New Price: {newPrice}</p>
    </div>
  );
};

export default ProductPricing;
