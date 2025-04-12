import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import Link from "next/link"

export default function SocialLinks() {
  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Síguenos en redes sociales</h2>
            <p className="text-gray-400">Mantente informado de nuestras actividades y noticias</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              className="bg-gray-800 hover:bg-red-700 transition-colors p-3 rounded-full"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://twitter.com"
              className="bg-gray-800 hover:bg-red-700 transition-colors p-3 rounded-full"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://instagram.com"
              className="bg-gray-800 hover:bg-red-700 transition-colors p-3 rounded-full"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://youtube.com"
              className="bg-gray-800 hover:bg-red-700 transition-colors p-3 rounded-full"
            >
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href="https://linkedin.com"
              className="bg-gray-800 hover:bg-red-700 transition-colors p-3 rounded-full"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
