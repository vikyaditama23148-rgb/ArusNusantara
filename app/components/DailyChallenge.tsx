export default function DailyChallenge() {
  return (
    <section className="bg-[#1a120b] text-white py-12">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-[#3c2a21] rounded-2xl p-6 shadow-lg">

          <h2 className="text-lg font-semibold mb-4">
            🔥 Tantangan Hari Ini
          </h2>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-300">
                Selesaikan 1 quiz budaya hari ini
              </p>

              <p className="text-sm text-gray-400">
                Hadiah: 50 XP
              </p>

            </div>

            <span className="bg-yellow-500 text-black text-sm px-4 py-2 rounded-lg font-semibold">
              Belum Selesai
            </span>

          </div>

        </div>

      </div>

    </section>
  )
}