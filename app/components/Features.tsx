export default function Features() {
  const features = [
    {
      title: "Jelajah 38 Provinsi",
      desc: "Eksplorasi rumah adat, pakaian tradisional, tarian, dan upacara adat seluruh Indonesia.",
    },
    {
      title: "Soal HOTS Interaktif",
      desc: "Latihan berpikir tingkat tinggi dengan sistem skor dan evaluasi otomatis.",
    },
    {
      title: "Pantau Progres",
      desc: "Lihat perkembangan belajar siswa secara transparan dan terstruktur.",
    },
  ]

  return (
    <section className="py-24 bg-[#F9F3E8]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-[#6B3F1F] mb-12">
          Belajar Budaya Jadi Bermakna
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-[#6B3F1F] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}