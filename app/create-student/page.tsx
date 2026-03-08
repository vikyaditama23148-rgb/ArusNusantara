"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import bcrypt from "bcryptjs"

export default function CreateStudent(){

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [name,setName] = useState("")
const [school,setSchool] = useState("")
const [studentClass,setStudentClass] = useState("")

async function createStudent(){

const hashedPassword = await bcrypt.hash(password,10)

const { error } = await supabase
.from("students")
.insert({
username,
password, 
password_hash: hashedPassword,
name,
school,
class: studentClass
})

if(error){
alert("Gagal membuat akun")
return
}

alert("Akun siswa berhasil dibuat")

setUsername("")
setPassword("")
setName("")
setSchool("")
setStudentClass("")
}

return(

<div className="min-h-screen bg-[#1a120b] flex items-center justify-center px-6">

<div className="bg-[#F4EFE7] p-10 rounded-2xl shadow-2xl w-full max-w-md">

<h1 className="text-2xl font-bold mb-6 text-center text-[#4A2E16]">
Buat Akun Siswa
</h1>

<label className="text-sm font-medium text-[#4A2E16]">
Username
</label>

<input
placeholder="Contoh: andi4a"
value={username}
onChange={(e)=>setUsername(e.target.value)}
className="border border-[#C9942A] p-3 w-full mb-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
/>

<label className="text-sm font-medium text-[#4A2E16]">
Password
</label>

<input
type="password"
placeholder="Contoh: 123456"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="border border-[#C9942A] p-3 w-full mb-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
/>

<label className="text-sm font-medium text-[#4A2E16]">
Nama Siswa
</label>

<input
placeholder="Contoh: Andi Saputra"
value={name}
onChange={(e)=>setName(e.target.value)}
className="border border-[#C9942A] p-3 w-full mb-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
/>

<label className="text-sm font-medium text-[#4A2E16]">
Sekolah
</label>

<input
placeholder="Contoh: SDN 1 Surabaya"
value={school}
onChange={(e)=>setSchool(e.target.value)}
className="border border-[#C9942A] p-3 w-full mb-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
/>

<label className="text-sm font-medium text-[#4A2E16]">
Kelas
</label>

<input
placeholder="Contoh: 4A"
value={studentClass}
onChange={(e)=>setStudentClass(e.target.value)}
className="border border-[#C9942A] p-3 w-full mb-6 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
/>

<button
onClick={createStudent}
className="bg-[#C9942A] hover:bg-[#b58320] text-black font-semibold w-full py-3 rounded-lg transition"
>
Buat Akun
</button>

</div>

</div>

)
}