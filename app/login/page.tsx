"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabaseBrowser } from "@/lib/supabaseBrowser"

export default function LoginPage() {

  const router = useRouter()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading,setLoading] = useState(false)

  const handleLogin = async () => {

    setLoading(true)

    const { error } = await supabaseBrowser.auth.signInWithPassword({
      email,
      password
    })

    setLoading(false)

    if(error){
      alert(error.message)
      return
    }

    router.push("/")
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
            Jelajahi budaya Indonesia dari Sabang sampai Merauke
          </p>

        </div>

        {/* Card Login */}

        <div className="bg-[#3c2a21] p-10 rounded-2xl shadow-2xl">

          <h2 className="text-xl font-semibold text-white mb-6 text-center">
            Login Akun
          </h2>

          <label className="text-sm text-gray-200">
            Email
          </label>

          <input
            type="email"
            placeholder="example@email.com"
            className="w-full mt-2 mb-4 p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
            onChange={(e)=>setEmail(e.target.value)}
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
            {loading ? "Loading..." : "Login"}
          </button>

          {/* Register */}

          <div className="text-center mt-6 text-sm text-gray-300">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="text-[#C9942A] font-semibold hover:underline"
            >
              Register
            </Link>
          </div>

          {/* Login Siswa */}

          <div className="text-center mt-3 text-sm text-gray-400">

            Atau masuk sebagai{" "}

            <Link
              href="/login-student"
              className="text-[#C9942A] font-semibold hover:underline"
            >
              Siswa
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}