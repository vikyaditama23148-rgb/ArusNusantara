import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Player = {
  player_name: string
  score: number
}

export default async function LeaderboardPreview() {

  const { data: players } = await supabase
    .from("leaderboard")
    .select("player_name, score")
    .order("score", { ascending: false })
    .limit(5)

  const topThree = players?.slice(0, 3) || []

  return (
    <section className="bg-[#1a120b] text-white py-12">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-[#3c2a21] rounded-2xl p-6 shadow-lg">

          <h2 className="text-lg font-semibold mb-6">
            🏆 Pemain Terbaik
          </h2>

          {/* PODIUM TOP 3 */}
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">

            {topThree.map((player: Player, index: number) => {

              const medals = ["🥇", "🥈", "🥉"]

              return (
                <div
                  key={player.player_name}
                  className="bg-[#2a1d16] p-4 rounded-xl shadow"
                >

                  <div className="text-3xl mb-2">
                    {medals[index]}
                  </div>

                  <div className="font-semibold">
                    {player.player_name}
                  </div>

                  <div className="text-yellow-400 text-sm">
                    {player.score} pts
                  </div>

                </div>
              )
            })}

          </div>

          {/* RANKING LIST */}
          <div className="space-y-3">

            {players?.map((player: Player, index: number) => {

              if (index < 3) return null

              return (
                <div
                  key={player.player_name}
                  className="flex justify-between bg-[#2a1d16] p-3 rounded-lg"
                >

                  <span>
                    {index + 1}. {player.player_name}
                  </span>

                  <span className="text-yellow-400">
                    {player.score} pts
                  </span>

                </div>
              )
            })}

          </div>

        </div>

      </div>

    </section>
  )
}