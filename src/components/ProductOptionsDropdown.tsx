"use client";

import React, { useEffect, useState } from "react";
import { useProductOptions } from "@/hooks/useProductOptions";  // Import the useProductOptions hook
import { useUpdatePrice } from "@/hooks/useUpdatePrice";  // Import the useUpdatePrice hook
import { SelectedOptions } from "@/types/options";

interface Props {
  productId: number;
  onOptionsChange: (selectedOptions: { [key: string]: number }) => void;
  onPriceUpdate?: (price: string) => void;
}

const ProductOptionsDropdown: React.FC<Props> = ({ productId, onOptionsChange, onPriceUpdate }) => {
  const { data: options, isLoading, isError } = useProductOptions(productId); // Fetch options using the hook
  const [selected, setSelected] = useState<SelectedOptions>({});
  const { mutate: updatePrice } = useUpdatePrice(); // Price update mutation

  // Handle option change and price update
  const handleChange = async (group: string, optionId: number) => {
    const updated = { ...selected, [group]: optionId };
    setSelected(updated);
    onOptionsChange(updated);

    if (onPriceUpdate) {
      const selectedOptions = Object.values(updated);
      updatePrice({ productId, optionIds: selectedOptions }); // Trigger price update mutation
    }
  };

  if (isError) {
    return <p className="text-red-500">Failed to load product options.</p>;
  }

  if (isLoading) {
    return <p>Loading product options...</p>;
  }

  return (
    <div className="space-y-4">
      {options?.map((optGroup: { group: string; options: { id: number; name: string }[] }) => (
      <div key={optGroup.group}>
        <label className="block font-semibold mb-1">{optGroup.group}</label>
        <select
        className="w-full border rounded px-3 py-2"
        onChange={(e) => handleChange(optGroup.group, parseInt(e.target.value))}
        value={selected[optGroup.group] || ""}
        >
        <option value="" disabled>Select {optGroup.group}</option>
        {optGroup.options.map((opt: { id: number; name: string }) => (
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
