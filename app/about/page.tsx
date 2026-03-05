export default function AboutPage() {

return (

<div className="min-h-screen bg-[#1a120b] text-white px-6 py-20">

<div className="max-w-5xl mx-auto">

{/* TITLE */}

<h1 className="text-4xl font-bold mb-6 text-center">
Tentang ArusNusantara
</h1>

<p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
ArusNusantara adalah platform pembelajaran budaya Indonesia berbasis
eksplorasi interaktif yang dirancang untuk membantu siswa memahami
keragaman budaya Nusantara melalui pengalaman belajar yang menyenangkan.
</p>


{/* VISI */}

<div className="bg-[#3c2a21] p-8 rounded-xl mb-10">

<h2 className="text-2xl font-semibold mb-4">
Visi
</h2>

<p className="text-gray-300 leading-relaxed">
Menjadi platform pembelajaran budaya digital yang mampu menghubungkan
generasi muda dengan kekayaan budaya Indonesia melalui teknologi
interaktif, gamifikasi, dan eksplorasi pengetahuan yang menarik.
</p>

</div>


{/* MISI */}

<div className="bg-[#3c2a21] p-8 rounded-xl mb-10">

<h2 className="text-2xl font-semibold mb-4">
Misi
</h2>

<ul className="list-disc list-inside text-gray-300 space-y-2">

<li>
Menyediakan materi budaya Nusantara yang menarik dan mudah dipahami
oleh siswa.
</li>

<li>
Menggunakan pendekatan gamifikasi untuk meningkatkan motivasi belajar.
</li>

<li>
Mendorong pelestarian budaya Indonesia melalui teknologi digital.
</li>

<li>
Membangun komunitas pembelajar budaya Indonesia secara global.
</li>

</ul>

</div>


{/* TEKNOLOGI */}

<div className="bg-[#3c2a21] p-8 rounded-xl mb-10">

<h2 className="text-2xl font-semibold mb-4">
Teknologi yang Digunakan
</h2>

<div className="grid md:grid-cols-2 gap-4 text-gray-300">

<div>Next.js</div>
<div>Supabase</div>
<div>Tailwind CSS</div>
<div>Vercel Deployment</div>

</div>

</div>


{/* DEVELOPER */}

<div className="bg-[#3c2a21] p-8 rounded-xl">

<h2 className="text-2xl font-semibold mb-4">
Developer
</h2>

<div className="text-gray-300 space-y-2">

<div className="text-white font-semibold">
Viky Aditama
</div>

<div>
Mahasiswa Universitas PGRI Sumenep
</div>

<div>
Pengembang platform edukasi berbasis teknologi digital yang berfokus
pada inovasi pembelajaran dan pelestarian budaya Indonesia. Dalam Tahap Pengembangan
</div>

</div>

</div>

</div>

</div>

)

}