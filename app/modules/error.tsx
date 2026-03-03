"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Terjadi Kesalahan
      </h2>

      <p className="text-gray-600 mb-6">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Coba Lagi
      </button>
    </div>
  )
}