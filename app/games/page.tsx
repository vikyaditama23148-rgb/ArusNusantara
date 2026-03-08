"use client"

import Link from "next/link"

export default function Page(){

  return (

    <main className="min-h-screen bg-[#1a120b] text-white px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">

        <h1 className="text-4xl font-bold mb-3">
          🗺 Petualangan Nusantara
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto">
          Pilih pulau untuk memulai Word Search budaya.
          Jelajahi Indonesia sambil bermain dan kumpulkan pengalaman belajar.
        </p>

      </div>


      {/* MAP CONTAINER */}
      <div className="relative max-w-4xl mx-auto mb-16">

        {/* MAP IMAGE */}
        <img
          src="/nusantara-map.jpg"
          alt="Peta Nusantara"
          className="w-full rounded-xl opacity-90"
        />

        {/* ISLAND BUTTONS */}

        <Link
          href="/games/sumatra"
          className="absolute top-[38%] left-[20%] -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold shadow hover:bg-yellow-400"
        >
          Sumatra
        </Link>

        <Link
          href="/games/jawa"
          className="absolute top-[58%] left-[42%] -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold shadow hover:bg-yellow-400"
        >
          Jawa
        </Link>

        <Link
          href="/games/kalimantan"
          className="absolute top-[38%] left-[52%] -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold shadow hover:bg-yellow-400"
        >
          Kalimantan
        </Link>

        <Link
          href="/games/sulawesi"
          className="absolute top-[48%] left-[68%] -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold shadow hover:bg-yellow-400"
        >
          Sulawesi
        </Link>

        <Link
          href="/games/papua"
          className="absolute top-[48%] left-[88%] -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold shadow hover:bg-yellow-400"
        >
          Papua
        </Link>

      </div>


      {/* ALTERNATIVE MENU (MOBILE FRIENDLY) */}

      <div className="max-w-3xl mx-auto">

        <h2 className="text-2xl font-semibold text-center mb-6">
          Pilih Wilayah
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">

          <Link href="/games/sumatra" className="bg-[#3c2a21] hover:bg-[#C9942A] text-center rounded-xl py-4 font-semibold transition">
            🌋 Sumatra
          </Link>

          <Link href="/games/jawa" className="bg-[#3c2a21] hover:bg-[#C9942A] text-center rounded-xl py-4 font-semibold transition">
            🏯 Jawa
          </Link>

          <Link href="/games/kalimantan" className="bg-[#3c2a21] hover:bg-[#C9942A] text-center rounded-xl py-4 font-semibold transition">
            🌳 Kalimantan
          </Link>

          <Link href="/games/sulawesi" className="bg-[#3c2a21] hover:bg-[#C9942A] text-center rounded-xl py-4 font-semibold transition">
            ⛰ Sulawesi
          </Link>

          <Link href="/games/papua" className="bg-[#3c2a21] hover:bg-[#C9942A] text-center rounded-xl py-4 font-semibold transition">
            🦜 Papua
          </Link>

        </div>

      </div>

    </main>
  )
}