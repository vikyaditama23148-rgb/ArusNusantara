"use client"

import { useRouter } from "next/navigation"

export default function StudentLogout(){

  const router = useRouter()

  function handleLogout(){

    localStorage.removeItem("student")

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