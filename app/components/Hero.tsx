export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1209] via-[#3B2416] to-[#6B3F1F]" />

      {/* Overlay pattern subtle */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]" />

      <div className="relative z-10 px-6">

        <div className="inline-block px-4 py-2 mb-6 border border-[#C9942A] text-[#E8C06A] text-sm rounded-full tracking-wide uppercase">
          Platform Edukasi Budaya Indonesia
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Arus<span className="text-[#E8C06A]">Nusantara</span>
        </h1>

        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed">
          Menjelajah Budaya, Menguatkan Karakter Bangsa.
          Platform pembelajaran interaktif untuk mengenal kekayaan 38 provinsi Indonesia.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/modules"
            className="px-6 py-3 bg-gradient-to-r from-[#C9942A] to-[#B5451B] text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            Mulai Jelajah
          </a>

          <a
            href="/modules"
            className="px-6 py-3 border border-[#C9942A] text-[#E8C06A] rounded-lg hover:bg-[#C9942A]/20 transition"
          >
            Lihat Modul
          </a>
        </div>

      </div>
    </section>
  )
}