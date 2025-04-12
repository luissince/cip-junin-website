import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  image: string
  category: string
  location: string
}

export default function EventCard({ title, date, image, category, location }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-0 left-0 bg-red-700 text-white text-xs font-bold px-3 py-1">{category}</div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <Link
          href={`/eventos/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-red-700 hover:text-red-800 text-sm font-medium inline-flex items-center"
        >
          Más información
        </Link>
      </div>
    </div>
  )
}
