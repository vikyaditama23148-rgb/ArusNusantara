import { supabase } from "@/lib/supabaseClient"

export default async function TestPage() {
  const { data, error } = await supabase
    .from("modules")
    .select("*")

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Test Supabase</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}