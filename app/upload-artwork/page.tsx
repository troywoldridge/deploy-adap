"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";

const UploadArtworkPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      setError("File must be under 10MB.");
      return;
    }

    setError("");
    setFile(selectedFile);
  };

  const handleContinue = () => {
    if (!file) {
      setError("Please upload a valid PDF.");
      return;
    }

    // Save to localStorage or context if needed
    localStorage.setItem("uploadedArtwork", file.name); // Save filename only (or handle upload backend later)

    // Redirect to cart review
    router.push("/cart-review");
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-24 shadow rounded border">
      <h1 className="text-2xl font-bold mb-4">Upload Your Artwork</h1>
      <p className="mb-4 text-sm text-gray-600">
        Please upload a high-resolution PDF (300 DPI recommended).
      </p>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="mb-4"
      />

      {file && (
        <p className="text-green-600 mb-2">Uploaded: {file.name}</p>
      )}

      {error && (
        <p className="text-red-500 mb-2">{error}</p>
      )}

      <button
        onClick={handleContinue}
        className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700"
      >
        Continue to Cart
      </button>
    </div>
  );
};

export default UploadArtworkPage;
