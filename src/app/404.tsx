// src/pages/404.tsx
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-lg">Oops! Page not found.</p>
      <Link href="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded">
        Go Home
      </Link>
    </div>
  );
}
