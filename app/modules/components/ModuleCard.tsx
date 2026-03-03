import Link from "next/link"

type Module = {
  id: string
  title: string
  slug: string
  province: string
  image_url: string
}

export default function ModuleCard({ module }: { module: Module }) {
  return (
    <Link
      href={`/modules/${module.slug}`}
      className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition block"
    >
      <img
        src={module.image_url}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg">
          {module.title}
        </h2>

        <p className="text-gray-500 text-sm">
          {module.province}
        </p>
      </div>
    </Link>
  )
}