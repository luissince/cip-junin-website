import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

interface NewsCardProps {
  title: string
  date: string
  image: string
  excerpt: string
}

export default function NewsCard({ title, date, image, excerpt }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{excerpt}</p>
        <Link
          href={`/noticias/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-red-700 hover:text-red-800 text-sm font-medium inline-flex items-center"
        >
          Leer más
        </Link>
      </div>
    </div>
  )
}
