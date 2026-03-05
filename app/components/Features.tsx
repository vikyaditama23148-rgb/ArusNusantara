export default function Features() {

  const features = [
    {
      title: "Jelajah 38 Provinsi",
      desc: "Eksplorasi rumah adat, pakaian tradisional, tarian, dan upacara adat dari seluruh Indonesia."
    },
    {
      title: "Soal HOTS Interaktif",
      desc: "Latihan berpikir tingkat tinggi dengan sistem skor otomatis dan evaluasi pembelajaran."
    },
    {
      title: "Pantau Progres",
      desc: "Guru dapat melihat perkembangan belajar siswa secara transparan dan terstruktur."
    }
  ]

  return (

    <section className="py-24 bg-[#1a120b] text-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADER */}

        <h2 className="text-4xl font-bold mb-16">
          Belajar Budaya Jadi Bermakna
        </h2>

        {/* FEATURES GRID */}

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-[#3c2a21] p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              <h3 className="text-xl font-semibold mb-4 text-[#C9942A]">
                {item.title}
              </h3>

              <p className="text-gray-300">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}