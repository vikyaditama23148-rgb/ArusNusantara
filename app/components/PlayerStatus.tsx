export default function PlayerStatus() {
  return (
    <section className="bg-[#1a120b] text-white py-12">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-[#3c2a21] rounded-2xl p-6 shadow-lg">

          <div className="flex items-center justify-between mb-4">

            <h2 className="text-lg font-semibold">
              🎮 Status Petualang
            </h2>

            <span className="text-sm text-gray-300">
              Level 1
            </span>

          </div>

          <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">

            <div className="bg-yellow-500 h-4 w-[10%] rounded-full"></div>

          </div>

          <p className="text-sm text-gray-400 mt-2">
            0 XP • Mulai petualangan budaya untuk mendapatkan XP
          </p>

        </div>

      </div>

    </section>
  )
}