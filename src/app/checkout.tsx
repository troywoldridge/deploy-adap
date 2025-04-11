// src/pages/checkout.tsx

"use client";

import React, { useState } from "react";

const CheckoutPage: React.FC = () => {
  const [shippingAddress, setShippingAddress] = useState<string>("");
  const [paymentInfo, setPaymentInfo] = useState<string>("");

  const handleSubmit = () => {
    // Simulate a checkout process
    alert("Checkout complete!");
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
      <div className="space-y-6 max-w-md mx-auto">
        <div>
          <label className="block mb-2">Shipping Address</label>
          <input
            type="text"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your shipping address"
          />
        </div>
        <div>
          <label className="block mb-2">Payment Info</label>
          <input
            type="text"
            value={paymentInfo}
            onChange={(e) => setPaymentInfo(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your payment info"
          />
        </div>
        <div className="flex gap-4 mt-8">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Complete Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
