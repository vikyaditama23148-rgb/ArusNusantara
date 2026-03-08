"use client"

import Link from "next/link"
import StudentLogout from "@/app/components/StudentLogout"

export default function LobbyPage(){

return(

<div className="min-h-screen bg-[#1a120b] text-white px-6 py-10">

<div className="max-w-6xl mx-auto">

{/* HEADER */}

<div className="flex justify-between items-center mb-12">

<div>

<h1 className="text-3xl md:text-4xl font-bold">
ArusNusantara
</h1>

<p className="text-gray-400 text-sm mt-1">
Mulai petualangan budaya Nusantara
</p>

</div>

<StudentLogout/>

</div>


{/* PROGRESS */}

<div className="bg-[#3c2a21] p-6 rounded-xl mb-10 shadow-lg">

<h2 className="font-semibold mb-3">
🎮 Progress Petualang
</h2>

<div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">

<div
className="bg-yellow-500 h-4"
style={{width:"30%"}}
/>

</div>

<p className="text-sm text-gray-300 mt-2">
Level 1 • 150 XP
</p>

</div>


{/* MENU GRID */}

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

{/* QUEST */}

<Link
href="/quest"
className="bg-[#3c2a21] p-6 rounded-xl hover:scale-105 transition shadow-lg text-center"
>

<div className="text-4xl mb-3">
🗺️
</div>

<h3 className="font-semibold">
Quest
</h3>

<p className="text-xs text-gray-400 mt-1">
Petualangan budaya
</p>

</Link>


{/* MODULES */}

<Link
href="/modules"
className="bg-[#3c2a21] p-6 rounded-xl hover:scale-105 transition shadow-lg text-center"
>

<div className="text-4xl mb-3">
📚
</div>

<h3 className="font-semibold">
Modul Budaya
</h3>

<p className="text-xs text-gray-400 mt-1">
Belajar budaya
</p>

</Link>


{/* GAMES */}

<Link
href="/games"
className="bg-[#3c2a21] p-6 rounded-xl hover:scale-105 transition shadow-lg text-center"
>

<div className="text-4xl mb-3">
🎮
</div>

<h3 className="font-semibold">
Mini Games
</h3>

<p className="text-xs text-gray-400 mt-1">
Game budaya
</p>

</Link>


{/* GLOBAL LEADERBOARD */}

<Link
href="/global-leaderboard"
className="bg-[#3c2a21] p-6 rounded-xl hover:scale-105 transition shadow-lg text-center"
>

<div className="text-4xl mb-3">
🏆
</div>

<h3 className="font-semibold">
Leaderboard
</h3>

<p className="text-xs text-gray-400 mt-1">
Semua pemain
</p>

</Link>


{/* STUDENT LEADERBOARD */}

<Link
href="/student-leaderboard"
className="bg-[#3c2a21] p-6 rounded-xl hover:scale-105 transition shadow-lg text-center"
>

<div className="text-4xl mb-3">
👑
</div>

<h3 className="font-semibold">
Leaderboard Siswa
</h3>

<p className="text-xs text-gray-400 mt-1">
Ranking siswa
</p>

</Link>

</div>


{/* FOOTER */}

<div className="mt-14 text-center text-gray-400 text-sm">

<p>
Jelajahi budaya Nusantara dari Sabang sampai Merauke
</p>

</div>

</div>

</div>

)

}