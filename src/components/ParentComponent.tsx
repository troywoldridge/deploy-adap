"use client";

import React, { useState } from "react";
import ProductOptionsDropdown from "@/components/ProductOptionsDropdown";
import ProductPricing from "@/components/ProductPricing";

interface PricingType {
  id: number;
  base_price: string;
  option_hash: string;
}

interface ProductOption {
  id: number;
  sinalite_id: number;
  group: string;
  name: string;
}

const ParentComponent: React.FC = () => {
  const productId = 1;

  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: number }>({});
  const [price, setPrice] = useState("0.00");
  const [pricingData, setPricingData] = useState<PricingType[]>([]);
  const [productOptions, setProductOptions] = useState<ProductOption[]>([]);

  // You can set real pricing + options after initial fetch
  const handleOptionsChange = (options: { [key: string]: number }) => {
    setSelectedOptions(options);

    // Later: you can add a fetch here like
    // fetch(`/api/products/${productId}/price?option_ids[]=...`)
    // and update pricing data + price from backend
  };

  const handlePriceUpdate = (newPrice: string) => {
    setPrice(newPrice);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Product Configurator</h1>

      <div className="space-y-6">
        <ProductOptionsDropdown
          productId={productId}
          onOptionsChange={handleOptionsChange}
          onPriceUpdate={handlePriceUpdate}
        />

        <ProductPricing
          productId={productId}
          selectedOptions={selectedOptions}
          finalPrice={price}
          price={price}
          basePrice={price}
          pricing={pricingData}
          options={productOptions}
        />

        <p className="text-lg font-medium">
          Final Price: <span className="text-green-600">${price}</span>
        </p>
      </div>
    </div>
  );
};

export default ParentComponent;
