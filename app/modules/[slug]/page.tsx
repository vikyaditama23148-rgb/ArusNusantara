import { supabase } from "@/lib/supabaseClient"
import { notFound } from "next/navigation"
import Link from "next/link"

type Module = {
  id: string
  title: string
  slug: string
  province: string
  category: string
  description: string
  image_url: string
  nilai_budaya?: string
  fakta_unik?: string
}

export default async function ModuleDetail(
  props: { params: Promise<{ slug: string }> }
) {

  const { slug } = await props.params

  const { data } = await supabase
    .from("modules")
    .select("*")
    .eq("slug", slug)
    .single<Module>()

  if (!data) {
    notFound()
  }

  return (
    <div className="bg-[#F9F3E8] min-h-screen">

      {/* HERO IMAGE */}

      <div className="relative h-[420px] overflow-hidden">

        <img
          src={data.image_url}
          alt={data.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white px-6">

          <h1 className="text-4xl md:text-5xl font-bold">
            {data.title}
          </h1>

          <div className="flex justify-center gap-3 mt-4 flex-wrap">

            <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
              {data.province}
            </span>

            <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
              {data.category}
            </span>

          </div>

        </div>

      </div>

      {/* CONTENT */}

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        {/* BREADCRUMB */}

        <div className="text-sm text-gray-600">

          <Link href="/modules" className="hover:underline">
            Modul Budaya
          </Link>

          <span className="mx-2">/</span>

          <span className="text-[#6B3F1F] font-semibold">
            {data.title}
          </span>

        </div>

        {/* DESKRIPSI */}

        <section className="bg-white p-8 rounded-xl shadow-sm">

          <h2 className="text-2xl font-bold text-[#6B3F1F] mb-6">
            Deskripsi Budaya
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {data.description}
          </p>

        </section>

        {/* NILAI BUDAYA */}

        <section className="bg-white p-8 rounded-xl shadow-sm">

          <h2 className="text-2xl font-bold text-[#6B3F1F] mb-6">
            Nilai Budaya & Makna
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {data.nilai_budaya || "Belum tersedia informasi nilai budaya."}
          </p>

        </section>

        {/* FAKTA UNIK */}

        <section className="bg-white p-8 rounded-xl shadow-sm">

          <h2 className="text-2xl font-bold text-[#6B3F1F] mb-6">
            Fakta Unik
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {data.fakta_unik || "Belum tersedia fakta unik."}
          </p>

        </section>

        {/* QUIZ CTA */}

        <div className="text-center pt-8">

          <Link
            href={`/modules/${data.slug}/quiz`}
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#C9942A] to-[#B5451B] text-white rounded-lg font-semibold hover:scale-105 transition shadow-lg"
          >
            🎮 Mulai Quiz Interaktif
          </Link>

          <p className="text-sm text-gray-500 mt-3">
            Uji pengetahuanmu tentang budaya ini melalui quiz interaktif.
          </p>

        </div>

      </div>

    </div>
  )
}