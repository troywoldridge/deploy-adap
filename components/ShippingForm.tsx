// src/components/ShippingForm.tsx
"use client";

import React, { useState } from "react";

interface ShippingFormProps {
  onSubmit: (data: { country: string; city: string; postalCode: string }) => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ onSubmit }) => {
  const [country, setCountry] = useState("US");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ country, city, postalCode });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" className="border px-3 py-2 w-full" />
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className="border px-3 py-2 w-full" />
      <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder="Postal Code" className="border px-3 py-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Get Shipping Estimate</button>
    </form>
  );
};

export default ShippingForm;
