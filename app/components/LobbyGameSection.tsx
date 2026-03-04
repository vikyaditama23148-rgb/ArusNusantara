import Link from "next/link"

export default function LobbyGameSection() {
  return (
    <section className="bg-[#1a120b] text-white py-16">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          🎮 Mode Petualangan Budaya
        </h2>

        <p className="text-gray-300 mb-8">
          Jelajahi budaya Indonesia seperti bermain game. Pilih quest,
          selesaikan quiz, dan kumpulkan XP untuk naik level.
        </p>

        <Link
          href="/quest"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-xl transition"
        >
          Mulai Petualangan
        </Link>

      </div>

    </section>
  )
}