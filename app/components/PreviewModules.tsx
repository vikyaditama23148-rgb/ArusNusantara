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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#6B3F1F] mb-4">
            Jelajah Budaya Populer
          </h2>
          <p className="text-gray-600">
            Beberapa budaya pilihan untuk mulai menjelajah Nusantara.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data?.map((module) => (
            <Link
              key={module.id}
              href={`/modules/${module.slug}`}
              className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <img
                src={module.image_url}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#6B3F1F] mb-2">
                  {module.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {module.province}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/modules"
            className="px-6 py-3 bg-gradient-to-r from-[#C9942A] to-[#B5451B] text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            Lihat Semua Modul
          </Link>
        </div>

      </div>
    </section>
  )
}