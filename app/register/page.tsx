"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function RegisterPage(){

  const router = useRouter()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading,setLoading] = useState(false)

  const handleRegister = async () => {

    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password
    })

    setLoading(false)

    if(error){
      alert(error.message)
      return
    }

    alert("Registrasi berhasil. Silakan login.")

    router.push("/login")

  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-[#1a120b] px-6">

      <div className="bg-[#3c2a21] p-10 rounded-2xl w-full max-w-md shadow-2xl">

        <h1 className="text-2xl font-bold text-white mb-8 text-center">
          Daftar Akun ArusNusantara
        </h1>

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
          onClick={handleRegister}
          className="bg-[#C9942A] hover:bg-[#b58320] text-black font-semibold w-full py-3 rounded-lg transition"
        >
          {loading ? "Loading..." : "Register"}
        </button>

      </div>

    </div>

  )
}