// components/ProductDetail.tsx
import { useState, useEffect } from 'react';

const ProductDetail = ({ productId }: { productId: string }) => {
  const [product, setProduct] = useState<{ name: string; description: string } | null>(null);
  const [options, setOptions] = useState<{ id: string; name: string }[]>([]);
  const [pricing, setPricing] = useState<{ price: number } | null>(null);
  
  useEffect(() => {
    const fetchProductData = async () => {
      const productRes = await fetch(`/api/products/${productId}`);
      const productData = await productRes.json();
      setProduct(productData);

      const optionsRes = await fetch(`/api/products/${productId}/options`);
      const optionsData = await optionsRes.json();
      setOptions(optionsData);
      
      const pricingRes = await fetch(`/api/products/${productId}/pricing`);
      const pricingData = await pricingRes.json();
      setPricing(pricingData);
    };
    
    fetchProductData();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div>
        <h2>Options</h2>
        {/* Render options dynamically based on options state */}
        {options.map(option => (
          <div key={option.id}>{option.name}</div>
        ))}
      </div>
      <div>
        <h2>Pricing</h2>
        {/* Render pricing dynamically */}
        <div>{pricing ? `$${pricing.price}` : 'Loading pricing...'}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
