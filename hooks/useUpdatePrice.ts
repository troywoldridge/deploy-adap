import { useEffect, useState } from 'react';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { SelectedOptions } from '@/types/options';

interface UpdatePricePayload {
  productId: number;
  optionIds: number[];
}

interface PriceResponse {
  price: string;
}

export function useUpdatePrice(onPriceUpdate?: (price: string) => void) {
  // Define selectedOptions as a state or get it from context/prop
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});

  // Mutation to update the price
  const mutation = useMutation<PriceResponse, Error, UpdatePricePayload>({
    mutationFn: async ({ productId, optionIds }: UpdatePricePayload): Promise<PriceResponse> => {
      const query = optionIds.map(id => `option_ids[]=${id}`).join('&');
      const res = await fetch(`/api/v1/pricing?productId=${productId}&${query}`);

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.error || 'Failed to fetch price');
      }

      return res.json(); // expected to return { price: "12.34" }
    },
    onSuccess: (data) => {
      if (onPriceUpdate) {
        onPriceUpdate(data.price);
      }
    },
    onError: (error) => {
      console.error('Price update failed:', error);
    },
  });

  // useEffect to update price when selectedOptions change
  useEffect(() => {
    async function fetchPrice() {
      try {
        const optionIds = Object.values(selectedOptions); // Assumes selectedOptions is an object with option IDs as values
        const res = await fetch(`/api/v1/pricing?option_ids=${optionIds.join(',')}`);
        const data = await res.json();
        if (res.ok) {
          onPriceUpdate?.(data.price); // Calling onPriceUpdate with fetched price
        } else {
          console.error('Price fetch error:', data.error);
        }
      } catch (error) {
        console.error('Error fetching price:', error);
      }
    }

    // Trigger price fetch only when selectedOptions has values
    if (Object.keys(selectedOptions).length > 0) {
      fetchPrice();
    }
  }, [selectedOptions, onPriceUpdate]); // Dependencies

  // Return mutation object along with the selected options setter
  return {
    setSelectedOptions,  // You can expose the function to update selected options if needed
    mutation,            // Return mutation object to use in components
  };
}
