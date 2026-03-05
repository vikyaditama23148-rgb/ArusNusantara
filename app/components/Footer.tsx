import Link from "next/link"

export default function Footer() {
  return (

    <footer className="bg-[#1a120b] text-gray-300 border-t border-[#3c2a21]">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>

            <h3 className="text-xl font-bold text-white mb-4">
              ArusNusantara
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              Platform pembelajaran budaya Indonesia berbasis eksplorasi
              interaktif yang dirancang untuk membantu siswa mengenal
              kekayaan budaya Nusantara secara menyenangkan dan bermakna.
            </p>

          </div>


          {/* NAVIGATION */}
          <div>

            <h4 className="text-white font-semibold mb-4">
              Navigasi
            </h4>

            <div className="flex flex-col space-y-3">

              <Link
                href="/"
                className="hover:text-white transition"
              >
                Beranda
              </Link>

              <Link
                href="/modules"
                className="hover:text-white transition"
              >
                Jelajah Budaya
              </Link>

              <Link
                href="/student-leaderboard"
                className="hover:text-white transition"
              >
                Leaderboard Siswa
              </Link>

              <Link
                href="/about"
                className="hover:text-white transition"
              >
                Tentang
              </Link>

            </div>

          </div>


          {/* DEVELOPER */}
          <div>

            <h4 className="text-white font-semibold mb-4">
              Developer
            </h4>

            <p className="text-sm text-gray-400">
              Dikembangkan oleh
            </p>

            <p className="text-sm text-white font-medium mt-1">
              Viky Aditama
            </p>

            <p className="text-sm text-gray-400 mt-2">
              Universitas PGRI Sumenep
            </p>

            <p className="text-sm text-gray-400">
              Program Studi Pendidikan Guru Sekolah Dasar
            </p>

          </div>

        </div>

      </div>


      {/* COPYRIGHT */}

      <div className="border-t border-[#3c2a21] text-center py-6 text-sm text-gray-500">

        © {new Date().getFullYear()} ArusNusantara. Semua hak dilindungi.

      </div>

    </footer>

  )
}