import { useState } from "react";

export default function ShippingButton({ onCalculate }: { onCalculate: () => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async () => {
    setLoading(true);
    setError("");

    try {
      await onCalculate(); // Calls the function from parent component
    } catch (err) {
      // Since errorMessage is not used, you can directly set the error state here
      console.error("Error fetching UPS data:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Calculating..." : "Calculate Shipping"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
