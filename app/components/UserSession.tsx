import { createSupabaseServer } from "@/lib/supabaseServer"

export default async function UserSession() {

  const supabase = await createSupabaseServer()

  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <div className="text-sm text-gray-500">
        Belum login
      </div>
    )
  }

  return (
    <div className="text-sm text-green-700 font-medium">
      Login sebagai: {user.email}
    </div>
  )
}