import { supabase } from "@/lib/supabaseClient"
import Link from "next/link"
import { unstable_noStore as noStore } from "next/cache"

type Player = {
  id: string
  player_name: string
  score: number
  total_question: number
}

export default async function Leaderboard({
  params,
  searchParams
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ player?: string }>
}) {

  noStore()

  const { slug } = await params
  if (slug === "global") {
  return null
}
  const { player } = await searchParams

  const { data: module } = await supabase
    .from("modules")
    .select("id,title")
    .eq("slug", slug)
    .single()

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Modul tidak ditemukan
      </div>
    )
  }

  const { data } = await supabase
    .from("leaderboard")
    .select("*")
    .eq("module_id", module.id)
    .order("score", { ascending: false })

  const players: Player[] = data || []

  const topThree = players.slice(0,3)
  const others = players.slice(3)

  return (

    <div className="min-h-screen bg-[#F9F3E8] py-16 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-[#4A2E16] mb-10">
          🏆 Leaderboard Budaya Nusantara
        </h1>

        {players.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6 text-center text-gray-700">
            Belum ada pemain.
          </div>
        )}

        {/* PODIUM TOP 3 */}

        {topThree.length > 0 && (

          <div className="grid grid-cols-3 gap-4 mb-10 text-center">

            {/* JUARA 2 */}

            <div className="bg-gray-100 p-4 rounded-xl shadow">

              {topThree[1] && (
                <>
                  <div className="text-3xl mb-2">🥈</div>

                  <p className="font-bold text-gray-800">
                    {topThree[1].player_name}
                  </p>

                  <p className="text-[#C9942A] font-semibold">
                    {topThree[1].score}/{topThree[1].total_question}
                  </p>
                </>
              )}

            </div>

            {/* JUARA 1 */}

            <div className="bg-yellow-100 p-5 rounded-xl shadow scale-110 border-2 border-yellow-400">

              {topThree[0] && (
                <>
                  <div className="text-4xl mb-2">🥇</div>

                  <p className="font-bold text-gray-900 text-lg">
                    {topThree[0].player_name}
                  </p>

                  <p className="text-[#C9942A] font-bold">
                    {topThree[0].score}/{topThree[0].total_question}
                  </p>
                </>
              )}

            </div>

            {/* JUARA 3 */}

            <div className="bg-orange-100 p-4 rounded-xl shadow">

              {topThree[2] && (
                <>
                  <div className="text-3xl mb-2">🥉</div>

                  <p className="font-bold text-gray-800">
                    {topThree[2].player_name}
                  </p>

                  <p className="text-[#C9942A] font-semibold">
                    {topThree[2].score}/{topThree[2].total_question}
                  </p>
                </>
              )}

            </div>

          </div>

        )}

        {/* LIST RANKING */}

        {others.length > 0 && (

          <div className="bg-white rounded-xl shadow-lg p-6">

            {others.map((playerItem, index) => {

              const rank = index + 4

              const highlight =
                player && playerItem.player_name === player

              return (

                <div
                  key={playerItem.id}
                  className={`flex justify-between items-center p-4 border-b border-gray-200 rounded-lg transition
                  
                  ${highlight
                    ? "bg-green-100 border-green-400 font-semibold"
                    : "hover:bg-[#FFF7E7]"}
                  
                  `}
                >

                  <span className="text-gray-800">
                    {rank}. {playerItem.player_name}
                  </span>

                  <span className="font-bold text-[#C9942A]">
                    {playerItem.score}/{playerItem.total_question}
                  </span>

                </div>

              )

            })}

          </div>

        )}

        <div className="text-center mt-10">

          <Link
            href={`/modules/${slug}`}
            className="px-6 py-3 bg-gradient-to-r from-[#C9942A] to-[#B5451B] text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            Kembali ke Modul
          </Link>

        </div>

      </div>

    </div>
  )
}