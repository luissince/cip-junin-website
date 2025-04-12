"use client"

import { useState, useEffect } from "react"
import { X, Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentModal, setCurrentModal] = useState("evento")

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const eventos = [
    {
      id: 1,
      title: "Congreso Nacional de Ingeniería 2023",
      date: "15-17 Julio, 2023",
      time: "9:00 am - 6:00 pm",
      location: "Centro de Convenciones CIP Junín",
      image: "/placeholder.svg?height=300&width=500&text=Congreso+Nacional",
      description:
        "No te pierdas el evento más importante del año para los ingenieros peruanos. Conferencias, talleres y networking con los mejores profesionales del país.",
    },
    {
      id: 2,
      title: "Seminario: Gestión de Riesgos en Proyectos",
      date: "29 Julio, 2023",
      time: "6:00 pm - 9:00 pm",
      location: "Auditorio CIP Junín",
      image: "/placeholder.svg?height=300&width=500&text=Seminario+Gestión",
      description:
        "Aprende las mejores prácticas para la gestión de riesgos en proyectos de ingeniería con expertos del sector.",
    },
    {
      id: 3,
      title: "Workshop: Diseño de PCB con Software Libre",
      date: "5 Agosto, 2023",
      time: "9:00 am - 1:00 pm",
      location: "Laboratorio de Electrónica CIP",
      image: "/placeholder.svg?height=300&width=500&text=Workshop+PCB",
      description:
        "Taller práctico para aprender a diseñar circuitos impresos utilizando herramientas de software libre.",
    },
  ]

  const currentEvent = eventos[0]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-1"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Cerrar</span>
        </button>

        {currentModal === "evento" && (
          <>
            <div className="relative h-56">
              <Image
                src={currentEvent.image || "/placeholder.svg"}
                alt={currentEvent.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                ¡Evento Destacado!
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{currentEvent.title}</h3>
              <p className="text-gray-600 mb-4">{currentEvent.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="h-4 w-4 text-red-700 mr-2" />
                  <span>{currentEvent.date}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 text-red-700 mr-2" />
                  <span>{currentEvent.time}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm col-span-2">
                  <MapPin className="h-4 w-4 text-red-700 mr-2" />
                  <span>{currentEvent.location}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Link href={`/eventos/${currentEvent.id}`} className="flex-1">
                  <Button className="bg-red-700 hover:bg-red-800 text-white w-full">Más información</Button>
                </Link>
                <Button variant="outline" onClick={() => setIsOpen(false)} className="border-gray-300">
                  Más tarde
                </Button>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="flex space-x-2">
                  {eventos.map((evento, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === 0 ? "bg-red-700" : "bg-gray-300"}`}
                      onClick={() => {
                        /* Cambiar al evento correspondiente */
                      }}
                    />
                  ))}
                </div>
                <button
                  className="text-sm text-red-700 hover:text-red-800 font-medium"
                  onClick={() => setCurrentModal("eventos")}
                >
                  Ver todos los eventos
                </button>
              </div>
            </div>
          </>
        )}

        {currentModal === "eventos" && (
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Próximos Eventos</h3>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {eventos.map((evento, index) => (
                <div key={index} className="flex gap-3 border-b border-gray-100 pb-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={evento.image || "/placeholder.svg"} alt={evento.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{evento.title}</h4>
                    <div className="flex items-center text-gray-600 text-xs mt-1">
                      <Calendar className="h-3 w-3 text-red-700 mr-1" />
                      <span>{evento.date}</span>
                    </div>
                    <button
                      className="text-xs text-red-700 hover:text-red-800 font-medium mt-2"
                      onClick={() => {
                        // Mostrar el evento seleccionado
                        setCurrentModal("evento")
                      }}
                    >
                      Ver detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link href="/eventos">
                <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Ver todos los eventos</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
