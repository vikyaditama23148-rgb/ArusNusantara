"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
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
    return
  }

    const match = await bcrypt.compare(password, data.password_hash)

  if(!match){
    alert("Password salah")
    return
  }

    localStorage.setItem("student", JSON.stringify(data))
    localStorage.setItem("student_id", data.id)
    localStorage.setItem("student_name", data.name)

    router.push("/quest")
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#1a120b] px-6">

      <div className="bg-[#3c2a21] p-10 rounded-2xl w-full max-w-md shadow-2xl">

        <h1 className="text-2xl font-bold text-white mb-8 text-center">
          Login Siswa
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded-lg"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-[#C9942A] w-full py-3 rounded-lg font-semibold"
        >
          {loading ? "Loading..." : "Login"}
        </button>

      </div>

    </div>
  )
}