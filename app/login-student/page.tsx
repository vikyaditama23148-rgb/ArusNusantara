"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"
import bcrypt from "bcryptjs"

export default function StudentLoginPage() {

  const router = useRouter()

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [loading,setLoading] = useState(false)

  const handleLogin = async () => {

    setLoading(true)

    const { data,error } = await supabase
      .from("students")
      .select("*")
      .eq("username",username)
      .single()

    if(!data){
      alert("Username tidak ditemukan")
      setLoading(false)
      return
    }

    const match = await bcrypt.compare(password, data.password_hash)

    if(!match){
      alert("Password salah")
      setLoading(false)
      return
    }

    // simpan session student di browser
    localStorage.setItem("student", JSON.stringify(data))
    localStorage.setItem("student_id", data.id)
    localStorage.setItem("student_name", data.name)

    // buat cookie agar middleware mengenali login
    document.cookie = `student=${data.username}; path=/`

    // redirect ke lobby
    router.push("/lobby")

    setLoading(false)
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#1a120b] px-6">

      <div className="w-full max-w-md">

        {/* Branding */}

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-white">
            ArusNusantara
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Login Petualang Budaya
          </p>

        </div>

        {/* Card Login */}

        <div className="bg-[#3c2a21] p-10 rounded-2xl shadow-2xl">

          <h2 className="text-xl font-semibold text-white mb-6 text-center">
            Login Siswa
          </h2>

          <label className="text-sm text-gray-200">
            Username
          </label>

          <input
            type="text"
            placeholder="Masukkan username"
            className="w-full mt-2 mb-4 p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
            onChange={(e)=>setUsername(e.target.value)}
          />

          <label className="text-sm text-gray-200">
            Password
          </label>

          <input
            type="password"
            placeholder="Masukkan password"
            className="w-full mt-2 mb-6 p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="bg-[#C9942A] hover:bg-[#b58320] text-black font-semibold w-full py-3 rounded-lg transition disabled:opacity-60"
          >
            {loading ? "Loading..." : "Masuk"}
          </button>

          {/* Kembali ke login utama */}

          <div className="text-center mt-6 text-sm text-gray-400">

            Kembali ke{" "}

            <Link
              href="/login"
              className="text-[#C9942A] font-semibold hover:underline"
            >
              Login Pengguna
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}