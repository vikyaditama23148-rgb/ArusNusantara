import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"

export default async function PreviewModules() {

  const { data, error } = await supabase
    .from("modules")
    .select("*")
    .limit(3)

  if (error) {
    return null
  }

  return (
    <section className="py-24 bg-[#1a120b] text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold mb-4">
            Jelajah Budaya Populer
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto">
            Beberapa budaya pilihan untuk mulai menjelajah Nusantara.
          </p>

        </div>

        {/* MODULE GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {data?.map((module) => (

            <Link
              key={module.id}
              href={`/modules/${module.slug}`}
              className="group bg-[#3c2a21] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              <div className="overflow-hidden">

                <img
                  src={module.image_url}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-lg font-semibold mb-2 text-white">
                  {module.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {module.province}
                </p>

              </div>

            </Link>

          ))}

        </div>

        {/* BUTTON */}
        <div className="text-center mt-14">

          <Link
            href="/modules"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#C9942A] to-[#B5451B] text-black font-semibold rounded-lg hover:scale-105 transition"
          >
            Lihat Semua Modul
          </Link>

        </div>

      </div>

    </section>
  )
}