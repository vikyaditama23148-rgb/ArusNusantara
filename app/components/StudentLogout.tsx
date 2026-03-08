"use client"

import { useRouter } from "next/navigation"

export default function StudentLogout(){

  const router = useRouter()

  function handleLogout(){

    // hapus localStorage
    localStorage.removeItem("student")
    localStorage.removeItem("student_id")
    localStorage.removeItem("student_name")

    // hapus cookie student secara paksa
    document.cookie = "student=; Max-Age=0; path=/"

    // redirect ke halaman utama
    router.push("/")

  }

  return(

    <button
      onClick={handleLogout}
      className="text-sm text-red-400 hover:text-red-500 transition"
    >
      Logout Siswa
    </button>

  )
}