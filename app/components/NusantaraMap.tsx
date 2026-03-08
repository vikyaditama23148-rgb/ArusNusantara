"use client"

import Link from "next/link"

const islands = [
  {name:"Sumatra", top:"35%", left:"20%", link:"/games/sumatra"},
  {name:"Jawa", top:"55%", left:"40%", link:"/games/jawa"},
  {name:"Kalimantan", top:"35%", left:"50%", link:"/games/kalimantan"},
  {name:"Sulawesi", top:"45%", left:"65%", link:"/games/sulawesi"},
  {name:"Papua", top:"45%", left:"85%", link:"/games/papua"}
]

export default function NusantaraMap(){

  return (

    <div className="relative max-w-4xl mx-auto mb-16 aspect-[16/9]">

      <img
  src="/nusantara-map.jpg"
  alt="Peta Nusantara"
  className="w-full h-auto object-contain rounded-xl"
/>

      {islands.map((island)=>(
        <Link
          key={island.name}
          href={island.link}
          className="
          absolute
          transform -translate-x-1/2 -translate-y-1/2
          bg-yellow-500
          text-black
          px-3 py-1
          rounded-full
          text-sm
          font-semibold
          hover:bg-yellow-400
          transition
          shadow-lg
          "
          style={{
            top:island.top,
            left:island.left
          }}
        >
          {island.name}
        </Link>
      ))}

    </div>
  )
}