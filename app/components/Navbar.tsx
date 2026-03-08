"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getStudentSession } from "@/lib/studentSession"

export default function Navbar() {

  const router = useRouter()

  const [student,setStudent] = useState<any>(null)
  const [menuOpen,setMenuOpen] = useState(false)

  useEffect(()=>{

    const studentData = getStudentSession()

    if(studentData){
      setStudent(studentData)
    }

  },[])

  function handleLogout(){

    localStorage.removeItem("student")

    setStudent(null)

    router.push("/")
  }

  return (

    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50">

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold text-white">
          ArusNusantara
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">

          <Link href="/" className="text-gray-300 hover:text-white">
            Beranda
          </Link>

          <Link href="/modules" className="text-gray-300 hover:text-white">
            Jelajah Budaya
          </Link>

          <Link 
            href="/student-leaderboard" 
            className="text-gray-300 hover:text-white"
          >
            Leaderboard Siswa
          </Link>

          <Link href="/about" className="text-gray-300 hover:text-white">
            Tentang
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

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={()=>setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">

          <div className="flex flex-col px-6 py-4 space-y-4">

            <Link href="/" className="text-gray-300 hover:text-white">
              Beranda
            </Link>

            <Link href="/modules" className="text-gray-300 hover:text-white">
              Jelajah Budaya
            </Link>

            <Link 
              href="/student-leaderboard"
              className="text-gray-300 hover:text-white"
            >
              Leaderboard Siswa
            </Link>

            <Link href="/about" className="text-gray-300 hover:text-white">
              Tentang
            </Link>

            {student && (
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-700">

                <span className="text-sm text-yellow-400">
                  👤 {student.name || student.username}
                </span>

                <button
                  onClick={handleLogout}
                  className="text-sm text-red-400 hover:text-red-500 text-left"
                >
                  Logout
                </button>

              </div>
            )}

          </div>

        </div>
      )}

    </nav>

  )
}