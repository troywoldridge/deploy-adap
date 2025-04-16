"use client";

import React, { useEffect, useState } from "react";

interface Props {
  productId: number;
  onOptionsChange: (selectedOptions: { [key: string]: number }) => void;
  onPriceUpdate?: (price: string) => void;
}

const ProductOptionsDropdown: React.FC<Props> = ({ productId, onOptionsChange, onPriceUpdate }) => {
  const [options, setOptions] = useState<{ group: string; options: { id: number; name: string }[] }[]>([]);
  const [selected, setSelected] = useState<{ [key: string]: number }>({});
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const res = await fetch(`http://192.168.0.100:8000/api/v1/products/${productId}/options`);
        if (!res.ok) throw new Error(`Failed with status ${res.status}`);
        const data = await res.json();
        setOptions(data);
      } catch (err) {
        console.error("Failed to fetch product options:", err);
        setError("Failed to load product options.");
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, [productId]);

  const handleChange = (group: string, optionId: number) => {
    const updated = { ...selected, [group]: optionId };
    setSelected(updated);
    onOptionsChange(updated); // 🔁 Notify parent component of selected options

    // 🔽 Optional: If your pricing is tied to selection, call price update
    if (onPriceUpdate) {
      // This is placeholder logic, replace with real dynamic pricing call if needed
      const mockPrice = (Math.random() * 100).toFixed(2); // Example only
      onPriceUpdate(mockPrice);
    }
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (loading) {
    return <p>Loading product options...</p>;
  }

  return (
    <div className="space-y-4">
      {options.map((optGroup) => (
        <div key={optGroup.group}>
          <label className="block font-semibold mb-1">{optGroup.group}</label>
          <select
            className="w-full border rounded px-3 py-2"
            onChange={(e) => handleChange(optGroup.group, parseInt(e.target.value))}
            value={selected[optGroup.group] || ""}
          >
            <option value="" disabled>Select {optGroup.group}</option>
            {optGroup.options.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default ProductOptionsDropdown;

