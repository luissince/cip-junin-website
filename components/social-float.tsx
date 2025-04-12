"use client"

import { useState } from "react"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, MessageCircle, X } from "lucide-react"
import Link from "next/link"

export default function SocialFloat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Social Icons */}
      <div
        className={`flex flex-col gap-2 mb-2 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      >
        <Link
          href="https://facebook.com"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link
          href="https://twitter.com"
          className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link
          href="https://instagram.com"
          className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link
          href="https://youtube.com"
          className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <Youtube className="h-5 w-5" />
          <span className="sr-only">YouTube</span>
        </Link>
        <Link
          href="https://linkedin.com"
          className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "bg-gray-700 hover:bg-gray-800 rotate-45" : "bg-red-700 hover:bg-red-800"
        } text-white`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        <span className="sr-only">{isOpen ? "Cerrar" : "Redes sociales"}</span>
      </button>
    </div>
  )
}
