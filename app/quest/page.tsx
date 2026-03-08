"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getStudentSession } from "@/lib/studentSession"
import { createClient } from "@supabase/supabase-js"
import Link from "next/link"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Module = {
  id: string
  title: string
  slug: string
  province: string
  image_url: string
}

type Score = {
  score: number
}

export default function QuestPage() {

  const router = useRouter()

  const [modules,setModules] = useState<Module[]>([])
  const [scores,setScores] = useState<Score[]>([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{

    const student = getStudentSession()

    if(!student){
      router.push("/login-student")
      return
    }

    fetchData()

  },[])

  async function fetchData(){

    const { data: modulesData } = await supabase
      .from("modules")
      .select("*")
      .order("title")

    const { data: scoresData } = await supabase
      .from("leaderboard")
      .select("score")

    setModules(modulesData || [])
    setScores(scoresData || [])
    setLoading(false)

  }

  const totalXP =
    scores.reduce((sum,item)=> sum + item.score ,0)

  const level = Math.floor(totalXP / 500) + 1
  const progress = totalXP % 500
  const progressPercent = (progress / 500) * 100

  if(loading){
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1a120b] text-white">
        Memuat petualangan...
      </div>
    )
  }

  return (

    <div className="min-h-screen bg-[#1a120b] text-white">

      <div className="text-center py-16 px-6">

        <h1 className="text-4xl font-bold mb-4">
          🗺️ Petualangan Budaya Nusantara
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto">
          Pilih budaya dari berbagai daerah di Indonesia dan selesaikan
          quiz untuk menjadi penjelajah budaya terbaik.
        </p>

      </div>


      <div className="max-w-4xl mx-auto px-6 mb-12">

        <div className="bg-[#3c2a21] p-6 rounded-xl shadow-lg">

          <h2 className="font-semibold mb-3">
            🎮 Progress Petualang
          </h2>

          <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">
            <div
              className="bg-yellow-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <p className="text-sm text-gray-300 mt-2">
            Level {level} • {totalXP} XP
          </p>

        </div>

      </div>


      <div className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-2xl font-bold mb-2">
          🗺️ Peta Petualangan
        </h2>

        <p className="text-gray-400 mb-8">
          Mulai perjalanan budaya dari berbagai daerah di Indonesia.
        </p>

        <div className="grid md:grid-cols-3 gap-y-12 gap-x-8">

          {modules.map((module,index)=>(

            <Link
              key={module.id}
              href={`/modules/${module.slug}`}
              className="group bg-[#3c2a21] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              <div className="relative">

                <img
                  src={module.image_url}
                  className="h-44 w-full object-cover"
                />

                <div className="absolute top-3 left-3 bg-black/60 text-xs px-2 py-1 rounded">
                  {module.province}
                </div>

                <div className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                  Quest {index + 1}
                </div>

              </div>

              <div className="p-5">

                <h3 className="text-lg font-semibold mb-1">
                  {module.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  Quest budaya dari {module.province}
                </p>

                <div className="text-yellow-400 font-medium group-hover:translate-x-1 transition">
                  Mulai Quest →
                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </div>

  )

}