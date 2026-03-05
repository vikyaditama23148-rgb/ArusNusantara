"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { exportStudentPDF } from "@/lib/exportStudentPDF"

export default function GenerateStudents(){

const [names,setNames] = useState("")
const [school,setSchool] = useState("")
const [studentClass,setStudentClass] = useState("")
const [created,setCreated] = useState<any[]>([])

async function generate(){

const list = names
.split("\n")
.map(n=>n.trim())
.filter(n=>n.length>0)

const students = list.map((name)=>{

const username =
name
.toLowerCase()
.replace(/\s+/g,"")

return{
username,
password:"123456",
name,
school,
class:studentClass
}

})

const { error } = await supabase
.from("students")
.insert(students)

if(error){
alert("Gagal membuat akun")
return
}

setCreated(students)

alert("Akun siswa berhasil dibuat")

}

async function downloadFromDatabase(){

if(!school || !studentClass){
alert("Isi sekolah dan kelas terlebih dahulu")
return
}

const { data, error } = await supabase
.from("students")
.select("*")
.eq("school",school)
.eq("class",studentClass)

if(error){
alert("Gagal mengambil data siswa")
return
}

if(!data || data.length === 0){
alert("Tidak ada akun siswa ditemukan")
return
}

exportStudentPDF(data)

}

return(

<div className="min-h-screen bg-[#1a120b] flex items-center justify-center px-6">

<div className="bg-[#F4EFE7] p-10 rounded-2xl shadow-2xl max-w-lg w-full">

<h1 className="text-2xl font-bold mb-6 text-center text-[#4A2E16]">
Generate Akun Siswa
</h1>

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
className="border border-[#C9942A] p-3 w-full mb-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
/>

<label className="text-sm font-medium text-[#4A2E16]">
Daftar Nama Siswa
</label>

<textarea
placeholder="1 baris = 1 siswa"
value={names}
onChange={(e)=>setNames(e.target.value)}
className="border border-[#C9942A] p-3 w-full mb-6 rounded-lg h-40 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
/>

<button
onClick={generate}
className="bg-[#C9942A] hover:bg-[#b58320] text-black font-semibold w-full py-3 rounded-lg transition"
>
Generate Akun
</button>

<button
onClick={()=>{
if(created.length === 0){
alert("Generate akun terlebih dahulu")
return
}
exportStudentPDF(created)
}}
className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
>
Download PDF Akun Baru
</button>

<button
onClick={downloadFromDatabase}
className="w-full mt-3 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
>
Download PDF dari Database
</button>

{created.length>0 && (

<div className="mt-8 bg-white p-4 rounded-lg border border-gray-200">

<h2 className="font-semibold mb-3 text-[#4A2E16]">
Akun yang berhasil dibuat
</h2>

<div className="text-sm space-y-1 text-gray-800">

{created.map((s,i)=>(

<div key={i}>
{s.name} — {s.username} / 123456
</div>

))}

</div>

</div>

)}

</div>

</div>

)
}