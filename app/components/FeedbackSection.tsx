"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function FeedbackSection() {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [message,setMessage] = useState("")
const [loading,setLoading] = useState(false)

async function sendFeedback(){

if(!name || !email || !message){
alert("Semua field harus diisi")
return
}

setLoading(true)

const { error } = await supabase
.from("feedback")
.insert({
name,
email,
message
})

setLoading(false)

if(error){
alert("Gagal mengirim masukan")
return
}

alert("Terima kasih atas masukan Anda!")

setName("")
setEmail("")
setMessage("")
}

return(

<section className="relative z-20 py-24 px-6 bg-[#1a120b]">

<div className="max-w-3xl mx-auto">

<h2 className="text-3xl font-bold text-white text-center mb-4">
💡 Saran & Masukan
</h2>

<p className="text-gray-300 text-center mb-10">
Bantu kami mengembangkan ArusNusantara menjadi platform belajar budaya yang lebih baik.
</p>

<div className="bg-[#3c2a21] p-8 rounded-2xl shadow-2xl border border-[#6b4c35]">

<label className="block text-sm text-gray-200 mb-2">
Nama
</label>

<input
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full mb-5 p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
placeholder="Nama Anda"
/>

<label className="block text-sm text-gray-200 mb-2">
Email / Username
</label>

<input
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full mb-5 p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
placeholder="Email atau username"
/>

<label className="block text-sm text-gray-200 mb-2">
Saran atau Masukan
</label>

<textarea
value={message}
onChange={(e)=>setMessage(e.target.value)}
className="w-full mb-6 p-3 rounded-lg bg-white text-gray-800 border border-gray-300 h-32 focus:outline-none focus:ring-2 focus:ring-[#C9942A]"
placeholder="Tuliskan saran atau ide untuk pengembangan website..."
/>

<button
onClick={sendFeedback}
className="w-full bg-[#C9942A] hover:bg-[#b58320] text-black font-semibold py-3 rounded-lg transition"
>
{loading ? "Mengirim..." : "Kirim Masukan"}
</button>

</div>

</div>

</section>

)

}