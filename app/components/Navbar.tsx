"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Navbar() {

  const router = useRouter()

  const [student,setStudent] = useState<any>(null)

  useEffect(()=>{

    const data = localStorage.getItem("student")

    if(data){
      setStudent(JSON.parse(data))
    }

  },[])

  function handleLogout(){

    localStorage.removeItem("student")

    setStudent(null)

    router.push("/")
  }

  return (

    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-white">
          ArusNusantara
        </h1>

        <div className="flex items-center space-x-6">

          <Link href="/" className="text-gray-300 hover:text-white">
            Beranda
          </Link>

          <Link href="/modules" className="text-gray-300 hover:text-white">
            Jelajah Budaya
          </Link>
          <Link 
            href="/student-leaderboard" className="text-gray-300 hover:text-white">
            Leaderboard Siswa
          </Link>

          {/* jika siswa login */}
          {student && (
            <div className="flex items-center space-x-4">

              <span className="text-sm text-yellow-400">
                👤 {student.name || student.username}
              </span>

              <button
                onClick={handleLogout}
                className="text-sm text-red-400 hover:text-red-500"
              >
                Logout
              </button>

            </div>
          )}

        </div>

      </div>

    </nav>

  )
}