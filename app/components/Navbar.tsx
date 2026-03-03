import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          ArusNusantara
        </h1>

        <div className="space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white">
            Beranda
          </Link>
          <Link href="/modules" className="text-gray-300 hover:text-white">
            Jelajah Budaya
          </Link>
        </div>
      </div>
    </nav>
  )
}