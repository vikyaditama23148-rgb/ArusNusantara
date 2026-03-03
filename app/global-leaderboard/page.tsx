import { supabase } from "@/lib/supabaseClient"
import { unstable_noStore as noStore } from "next/cache"
import Link from "next/link"

type Player = {
  player_name: string
  total_score: number
  games: number
}

export default async function GlobalLeaderboard({
  searchParams
}: {
  searchParams: Promise<{ player?: string }>
}) {

  noStore()

  const { player } = await searchParams

  const { data, error } = await supabase
    .from("leaderboard")
    .select("player_name,score")

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Terjadi kesalahan mengambil data leaderboard.
      </div>
    )
  }

  const playersMap: Record<string, Player> = {}

  data?.forEach((row) => {

    if (!playersMap[row.player_name]) {
      playersMap[row.player_name] = {
        player_name: row.player_name,
        total_score: 0,
        games: 0
      }
    }

    playersMap[row.player_name].total_score += row.score
    playersMap[row.player_name].games += 1

  })

  const players = Object.values(playersMap).sort(
    (a, b) => b.total_score - a.total_score
  )

  const topThree = players.slice(0, 3)
  const others = players.slice(3)

  return (

    <div className="min-h-screen bg-[#F9F3E8] py-16 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-[#4A2E16] mb-12">
          🏆 Global Leaderboard
        </h1>

        {/* PODIUM */}

        {topThree.length > 0 && (

          <div className="grid grid-cols-3 gap-4 mb-10 text-center">

            {/* JUARA 2 */}
            <div className="bg-gray-100 p-4 rounded-xl shadow">

              {topThree[1] && (
                <>
                  <div className="text-3xl mb-2">🥈</div>
                  <p className="font-bold text-[#4A2E16]">{topThree[1].player_name}</p>
                  <p className="text-[#C9942A]">
                    {topThree[1].total_score} poin
                  </p>
                </>
              )}

            </div>

            {/* JUARA 1 */}
            <div className="bg-yellow-100 p-5 rounded-xl shadow scale-110 border-2 border-yellow-400">

              {topThree[0] && (
                <>
                  <div className="text-4xl mb-2">🥇</div>
                  <p className="font-bold text-lg text-[#4A2E16]">
                    {topThree[0].player_name}
                  </p>
                  <p className="text-[#C9942A] font-bold">
                    {topThree[0].total_score} poin
                  </p>
                </>
              )}

            </div>

            {/* JUARA 3 */}
            <div className="bg-orange-100 p-4 rounded-xl shadow">

              {topThree[2] && (
                <>
                  <div className="text-3xl mb-2">🥉</div>
                  <p className="font-bold text-[#4A2E16]">{topThree[2].player_name}</p>
                  <p className="text-[#C9942A]">
                    {topThree[2].total_score} poin
                  </p>
                </>
              )}

            </div>

          </div>

        )}

        {/* LIST RANKING */}

        <div className="bg-white rounded-xl shadow-lg p-6">

          {others.map((player, index) => (

            <div
              key={player.player_name}
              className="flex justify-between items-center p-4 border-b border-gray-200"
            >

              <div>

                <span className="font-semibold text-[#4A2E16]">
                  {index + 4}. {player.player_name}
                </span>

                <p className="text-sm text-gray-500">
                  {player.games} permainan
                </p>

              </div>

              <span className="font-bold text-[#C9942A]">
                {player.total_score} poin
              </span>

            </div>

          ))}

          {players.length === 0 && (
            <p className="text-center text-gray-500">
              Belum ada pemain.
            </p>
          )}

        </div>

        <div className="text-center mt-10">

          <Link
            href="/modules"
            className="px-6 py-3 bg-gradient-to-r from-[#C9942A] to-[#B5451B] text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            Kembali ke Modul
          </Link>

        </div>

      </div>

    </div>
  )
}