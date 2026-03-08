"use client"

import { useEffect, useState } from "react"
import { getStudentSession } from "@/lib/studentSession"

export default function MascotGuide() {

  const [student,setStudent] = useState<any>(null)

  useEffect(()=>{

    const data = getStudentSession()

    if(data){
      setStudent(data)
    }

  },[])

  if(!student) return null

  return (

    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">

      <div className="bg-white text-gray-800 px-4 py-2 rounded-xl shadow-lg text-sm max-w-xs">
        👋 Halo <b>{student.name || student.username}</b>!  
        Siap menjelajah budaya Nusantara hari ini?
      </div>

      <img
        src="/mascot.png"
        alt="Mascot"
        className="w-20 h-20"
      />

    </div>

  )
}