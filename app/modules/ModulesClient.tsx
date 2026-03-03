"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"

type Module = {
  id: string
  title: string
  slug: string
  province: string
  category: string
  image_url: string
}

type ModuleStats = {
  players: number
  topScore: number
}

export default function ModulesClient() {

  const [modules, setModules] = useState<Module[]>([])
  const [stats, setStats] = useState<Record<string, ModuleStats>>({})
  const [provinces, setProvinces] = useState<string[]>([])
  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")
  const [province, setProvince] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchProvinces()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 500)

    return () => clearTimeout(timer)
  }, [search])

  useEffect(() => {
    fetchModules()
  }, [debouncedSearch, province])

  async function fetchProvinces() {

    const { data } = await supabase
      .from("modules")
      .select("province")

    if (data) {

      const unique = Array.from(
        new Set(data.map((item) => item.province))
      )

      setProvinces(unique as string[])

    }

  }

  async function fetchModules() {

    setLoading(true)

    let query = supabase
      .from("modules")
      .select("id,title,slug,province,category,image_url")

    if (debouncedSearch) {
      query = query.ilike("title", `%${debouncedSearch}%`)
    }

    if (province) {
      query = query.eq("province", province)
    }

    const { data } = await query

    const modulesData = data || []

    setModules(modulesData)

    fetchStats(modulesData)

    setLoading(false)

  }

  async function fetchStats(modulesData: Module[]) {

    const moduleIds = modulesData.map((m) => m.id)

    if (moduleIds.length === 0) return

    const { data } = await supabase
      .from("leaderboard")
      .select("module_id,score")

    const statsMap: Record<string, ModuleStats> = {}

    moduleIds.forEach((id) => {

      const related = data?.filter((item) => item.module_id === id) || []

      statsMap[id] = {
        players: related.length,
        topScore: related.length
          ? Math.max(...related.map((r) => r.score))
          : 0
      }

    })

    setStats(statsMap)

  }

  return (

    <div className="min-h-screen bg-[#F9F3E8] relative">

      {/* ORNAMEN LATAR NUSANTARA */}

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('/batik-pattern.png')] bg-repeat"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">


        {/* HERO SECTION */}

        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-bold text-[#4A2E16] tracking-tight">
            ArusNusantara
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Jelajahi kekayaan budaya Indonesia dari Sabang sampai Merauke.
            Pelajari tradisi, rumah adat, tarian, dan berbagai warisan budaya melalui quiz interaktif.
          </p>


          <div className="mt-8">

            <Link
              href="/global-leaderboard"
              className="inline-block px-7 py-3 bg-gradient-to-r from-[#C9942A] to-[#B5451B] text-white rounded-xl font-semibold shadow-md hover:scale-105 transition"
            >
              🏆 Global Leaderboard
            </Link>

          </div>

        </div>


        {/* SEARCH + FILTER */}

        <div className="flex flex-wrap justify-center gap-4 mb-14">

          <input
            type="text"
            placeholder="Cari budaya Indonesia..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-[#E5D8C9] px-6 py-3 rounded-xl w-72 bg-white text-[#4A2E16] placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
          />

          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="border border-[#E5D8C9] px-6 py-3 rounded-xl bg-white text-[#4A2E16] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
          >

            <option value="">Semua Provinsi</option>

            {provinces.map((prov, index) => (
              <option key={index} value={prov}>
                {prov}
              </option>
            ))}

          </select>

        </div>


        {/* LOADING */}

        {loading && (
          <div className="text-center text-gray-500 mb-10">
            Memuat budaya nusantara...
          </div>
        )}


        {/* GRID MODUL */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {modules.map((module) => {

            const moduleStats = stats[module.id] || {
              players: 0,
              topScore: 0
            }

            return (

              <Link
                key={module.id}
                href={`/modules/${module.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-[#F0E5D8]"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={module.image_url}
                    alt={module.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                </div>

                <div className="p-6">

                  <span className="inline-block text-xs font-semibold bg-[#F4EFE7] text-[#6B3F1F] px-3 py-1 rounded-full mb-3">
                    {module.category}
                  </span>

                  <h2 className="font-semibold text-xl text-[#4A2E16]">
                    {module.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {module.province}
                  </p>

                  <div className="flex justify-between text-xs text-gray-500 mt-4">

                    <span>
                      👥 {moduleStats.players} pemain
                    </span>

                    <span>
                      🏆 {moduleStats.topScore}
                    </span>

                  </div>

                </div>

              </Link>

            )

          })}

        </div>


        {/* EMPTY STATE */}

        {!loading && modules.length === 0 && (

          <div className="text-center text-gray-500 mt-20">

            <p className="text-lg">
              Tidak ada budaya ditemukan.
            </p>

            <p className="text-sm mt-2">
              Coba gunakan kata kunci lain atau ubah filter provinsi.
            </p>

          </div>

        )}

      </div>

    </div>

  )

}