import React from 'react'

interface ShippingCalculatorProps {
  productId: number
  selectedOptions: { [key: string]: string }
  sinaliteId: string // Add sinaliteId here
}

interface FormState {
  city: string
  state: string
  postalCode: string
}

// Define the ShippingData interface
interface ShippingData {
  weight_per_box: number
  box_size: string
  package_size: string
  shipping_cost: number
}

const ShippingCalculator: React.FC<ShippingCalculatorProps> = ({
  productId,
  selectedOptions,
  sinaliteId,
}) => {
  const [form, setForm] = useState<FormState>({ city: '', state: '', postalCode: '' })
  const [shippingData, setShippingData] = useState<ShippingData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Create consistent option chain string
  const optionChain = useMemo(
    () => Object.values(selectedOptions).sort().join('-'),
    [selectedOptions]
  )

  const fetchShippingEstimate = async () => {
    if (!productId || !selectedOptions || !sinaliteId) {
      setError('Please select product options and ensure Sinalite ID is provided.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      console.log('🚛 Fetching shipping for product:', productId)
      console.log('Option Chain:', optionChain)
      console.log('Sinalite ID:', sinaliteId)

      const res = await fetch(
        `http://192.168.0.100:8000/api/v1/shipping-details/${productId}/${optionChain}?sinaliteId=${sinaliteId}`
      )
      const textResponse = await res.text()

      console.log('Raw Response:', textResponse)

      let data
      try {
        data = JSON.parse(textResponse)
      } catch (err) {
        console.error('Failed to parse JSON:', err)
        setError('Invalid response from the server.')
        setLoading(false)
        return
      }

      if (!res.ok || !data.weight_per_box || !data.box_size) {
        setError('Shipping details are missing or invalid.')
        setLoading(false)
        return
      }

      setShippingData(data)
    } catch (err) {
      console.error('�� Error:', err)
      setError('Failed to fetch shipping estimate.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Calculate Shipping</h3>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : shippingData ? (
        <div>
          <p>
            <strong>Weight per Box:</strong> {shippingData.weight_per_box} lbs
          </p>
          <p>
            <strong>Box Size:</strong> {shippingData.box_size}
          </p>
          <p>
            <strong>Package Size:</strong> {shippingData.package_size}
          </p>
          <p className="font-bold">
            <strong>Estimated Shipping Cost:</strong> ${shippingData.shipping_cost}
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State"
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            className="border p-2 w-full"
          />
          <button
            onClick={fetchShippingEstimate}
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Get Estimate
          </button>
        </div>
      )}
    </div>
  )
}

export default ShippingCalculator
function useState<T>(initialState: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const state = React.useState<T>(initialState)
  return state
}
function useMemo<T>(factory: () => T, deps: React.DependencyList): T {
  const [memoizedValue, setMemoizedValue] = React.useState(factory)

  React.useEffect(() => {
    setMemoizedValue(factory())
  }, deps)

  return memoizedValue
}
