import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Player = {
  player_name: string
  score: number
}

export default async function StudentLeaderboard(){

  const { data: players } = await supabase
    .from("leaderboard")
    .select("player_name, score")
    .eq("user_type","student")
    .order("score",{ascending:false})
    .limit(20)

  return(

    <div className="min-h-screen bg-[#1a120b] text-white py-16">

      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-3xl font-bold mb-10 text-center">
          🏫 Leaderboard Siswa
        </h1>

        <div className="space-y-4">

          {players?.map((player:Player,index:number)=>(
            <div
              key={index}
              className="flex justify-between bg-[#3c2a21] p-4 rounded-xl"
            >
              <span>
                {index+1}. {player.player_name}
              </span>

              <span className="text-yellow-400">
                {player.score} pts
              </span>
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}