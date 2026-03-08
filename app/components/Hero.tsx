export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden px-4">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1209] via-[#3B2416] to-[#6B3F1F]" />

      {/* Overlay pattern subtle */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]" />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Label */}
        <div className="inline-block px-3 py-1.5 mb-5 border border-[#C9942A] text-[#E8C06A] text-xs sm:text-sm rounded-full tracking-wide uppercase">
          Platform Edukasi Budaya Indonesia
        </div>

        {/* Title */}
        <h1 className="font-extrabold text-white mb-5 leading-tight
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl">
          Arus<span className="text-[#E8C06A]">Nusantara</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 mx-auto mb-8 leading-relaxed
        text-sm
        sm:text-base
        md:text-lg
        max-w-md
        md:max-w-xl">
          Menjelajah Budaya, Menguatkan Karakter Bangsa.
          Platform pembelajaran interaktif untuk mengenal kekayaan 38 provinsi Indonesia.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">

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