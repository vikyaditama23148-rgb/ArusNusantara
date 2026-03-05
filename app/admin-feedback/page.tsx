import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Feedback = {
id:string
name:string
email:string
message:string
created_at:string
}

export default async function AdminFeedback(){

const { data } = await supabase
.from("feedback")
.select("*")
.order("created_at",{ascending:false})

return(

<div className="min-h-screen bg-[#1a120b] text-white px-6 py-16">

<div className="max-w-4xl mx-auto">

<h1 className="text-3xl font-bold mb-10">
📩 Saran & Masukan Pengguna
</h1>

<div className="space-y-6">

{data?.map((item:Feedback)=>{

return(

<div
key={item.id}
className="bg-[#3c2a21] p-6 rounded-xl shadow-lg border border-[#6b4c35]"
>

<div className="flex justify-between mb-3">

<div>

<div className="font-semibold">
{item.name}
</div>

<div className="text-sm text-gray-300">
{item.email}
</div>

</div>

<div className="text-sm text-gray-400">
{new Date(item.created_at).toLocaleDateString()}
</div>

</div>

<p className="text-gray-200">
{item.message}
</p>

</div>

)

})}

</div>

</div>

</div>

)

}