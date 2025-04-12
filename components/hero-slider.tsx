"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, CreditCard, Smartphone, CuboidIcon as Cube } from "lucide-react"
import Link from "next/link"

interface SlideProps {
  image: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  buttonText: string
  buttonLink: string
}

const slides: SlideProps[] = [
  {
    image: "/placeholder.svg?height=600&width=1920",
    title: "Colegio de Ingenieros del Perú",
    subtitle: "Consejo Departamental Junín",
    description: "Comprometidos con el desarrollo profesional y ético de la ingeniería peruana",
    icon: null,
    buttonText: "Conoce más sobre nosotros",
    buttonLink: "/institucional/quienes-somos",
  },
  {
    image: "/placeholder.svg?height=600&width=1920&text=Formas+de+Pago",
    title: "Múltiples formas de pago",
    subtitle: "Realiza tus pagos de forma segura",
    description:
      "Paga tus cuotas, certificados y trámites con tarjeta, transferencia o en efectivo en nuestras oficinas",
    icon: <CreditCard className="h-12 w-12 text-red-500 mb-4" />,
    buttonText: "Ver formas de pago",
    buttonLink: "/tramites/formas-pago",
  },
  {
    image: "/placeholder.svg?height=600&width=1920&text=App+Móvil",
    title: "Accede desde cualquier dispositivo",
    subtitle: "Web responsive y App Móvil",
    description: "Realiza tus trámites desde tu computadora, tablet o smartphone con nuestra plataforma digital",
    icon: <Smartphone className="h-12 w-12 text-red-500 mb-4" />,
    buttonText: "Descargar App",
    buttonLink: "/app-movil",
  },
  {
    image: "/placeholder.svg?height=600&width=1920&text=Recorrido+3D",
    title: "Conoce nuestras instalaciones",
    subtitle: "Recorrido virtual 3D",
    description: "Visita virtualmente nuestras oficinas y conoce dónde realizar tus trámites sin salir de casa",
    icon: <Cube className="h-12 w-12 text-red-500 mb-4" />,
    buttonText: "Iniciar recorrido 3D",
    buttonLink: "/recorrido-3d",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    // Auto slide every 6 seconds
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              width={1920}
              height={600}
              className="object-cover w-full h-full brightness-50"
              priority={index === 0}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 md:p-8">
              <div className="animate-fade-in-up text-center max-w-4xl">
                {index === 0 ? (
                  <Image
                    src="/placeholder.svg?height=120&width=120&text=CIP"
                    alt="Logo CIP Junín"
                    width={120}
                    height={120}
                    className="mx-auto mb-6 animate-pulse"
                  />
                ) : (
                  slide.icon
                )}
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <h2 className="text-xl md:text-3xl font-semibold mb-6">{slide.subtitle}</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {index === 0 ? (
                    <>
                      <Button className="bg-red-700 hover:bg-red-800 text-white px-6 py-6">
                        Trámites en línea <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-6"
                      >
                        {slide.buttonText} <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <Link href={slide.buttonLink}>
                      <Button className="bg-red-700 hover:bg-red-800 text-white px-6 py-6">
                        {slide.buttonText} <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-red-600" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
