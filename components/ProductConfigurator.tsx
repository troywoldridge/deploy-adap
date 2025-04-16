'use client';

import React, { useState, useCallback } from 'react';
import { ProductOption } from '@/types/ProductOption'; // Import the centralized type

// Define a type for the product.
interface Product {
  id: number;
  price: string;
  options: ProductOption[]; // Uses the imported type with name and details
}

// Define props for the ProductConfigurator component.
interface ProductConfiguratorProps {
  product: Product;
}

const ProductConfigurator: React.FC<ProductConfiguratorProps> = ({ product }) => {
  // Store selected options as a mapping of option name to selected value.
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  // Initialize the price by converting the product's price string to a number.
  const [price, setPrice] = useState<number>(parseFloat(product.price));
  const [loading, setLoading] = useState<boolean>(false);

  // Handle changes to product options using a functional update.
  const handleOptionChange = useCallback((optionName: string, value: string) => {
    setSelectedOptions((prevOptions) => {
      const newOptions = { ...prevOptions, [optionName]: value };

      (async () => {
        setLoading(true);
        try {
          const res = await fetch(`/api/products/${product.id}/price`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ options: newOptions }),
          });
          const data = await res.json();
          // Convert the final price to a number.
          setPrice(parseFloat(data.finalPrice));
        } catch (error) {
          console.error('Error updating price:', error);
        } finally {
          setLoading(false);
        }
      })();

      return newOptions;
    });
  }, [product.id]);

  return (
    <div className="product-configurator">
      <h2>Customize Your Product</h2>
      {product.options.map((option) => (
        <div key={option.id} className="product-option">
          <label htmlFor={option.name}>{option.name}</label>
          <select
  id={option.name}
  onChange={(e) => handleOptionChange(option.name, e.target.value)}
>
  {(option.details ?? []).map((detail) => (
    <option key={detail.id} value={detail.value}>
      {detail.value}{' '}
      {detail.price_modifier ? `(+${detail.price_modifier})` : ''}
    </option>
  ))}
</select>

        </div>
      ))}

      {/* Display selected options */}
{Object.keys(selectedOptions).length > 0 && (
  <div className="selected-options">
    <h3>Selected Options:</h3>
    <ul>
      {Object.entries(selectedOptions).map(([option, value]) => (

// sourcery skip: binary-operator-identity
        <li key={option}>
          {option}: {value}
        </li>
      ))}
    </ul>
  </div>
)}


      <div className="price-display">
        <h3>
          {loading ? 'Updating price...' : `Price: $${price.toFixed(2)}`}
        </h3>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductConfigurator;
