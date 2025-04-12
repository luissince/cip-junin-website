import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/institucional" className="hover:text-red-700">
            Institucional
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Quiénes Somos</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Quiénes Somos</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Sección Institucional</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/institucional/quienes-somos" className="flex items-center text-red-700 font-medium">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link href="/institucional/directivos" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Directivos
                  </Link>
                </li>
                <li>
                  <Link href="/institucional/documentos" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Documentos Normativos
                  </Link>
                </li>
                <li>
                  <Link href="/institucional/etica" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Ética Profesional
                  </Link>
                </li>
                <li>
                  <Link href="/institucional/directorio" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Directorio
                  </Link>
                </li>
                <li>
                  <Link href="/institucional/comisiones" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Comisiones
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800&text=CIP+Junín"
                alt="CIP Junín"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Historia</h2>
                <p className="text-gray-600 mb-6">
                  El Colegio de Ingenieros del Perú - Consejo Departamental Junín fue fundado el 8 de junio de 1962,
                  como parte del Colegio de Ingenieros del Perú, institución autónoma con personería jurídica que
                  representa y agrupa a los ingenieros profesionales del Perú.
                </p>
                <p className="text-gray-600 mb-6">
                  A lo largo de su historia, el CIP CD Junín ha sido un actor fundamental en el desarrollo de la región,
                  aportando conocimiento técnico, promoviendo la ética profesional y contribuyendo a la formación
                  continua de los ingenieros de la región central del país.
                </p>

                <h2 className="text-2xl font-bold mb-4">Misión</h2>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 italic">
                    "Somos una institución deontológica, sin fines de lucro, que representa, integra y brinda servicios
                    de calidad a los profesionales de la ingeniería, promoviendo el desarrollo sostenible y el bienestar
                    de la sociedad peruana."
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4">Visión</h2>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 italic">
                    "Ser una institución líder, moderna y reconocida a nivel nacional e internacional, que integra a los
                    ingenieros, promueve su desarrollo profesional y contribuye al progreso del país."
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4">Valores Institucionales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Ética</h3>
                    <p className="text-gray-600 text-sm">
                      Actuamos con integridad, honestidad y transparencia en todas nuestras acciones.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Excelencia</h3>
                    <p className="text-gray-600 text-sm">
                      Buscamos la mejora continua y la calidad en todos nuestros servicios.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Compromiso</h3>
                    <p className="text-gray-600 text-sm">
                      Estamos comprometidos con el desarrollo profesional de nuestros colegiados y el progreso del país.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Innovación</h3>
                    <p className="text-gray-600 text-sm">
                      Promovemos la creatividad y la aplicación de nuevas tecnologías para el desarrollo sostenible.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Objetivos Estratégicos</h2>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
                  <li>Fortalecer la institucionalidad y el liderazgo del CIP CD Junín.</li>
                  <li>Promover el desarrollo profesional y la actualización continua de los ingenieros.</li>
                  <li>Contribuir al desarrollo sostenible de la región Junín y del país.</li>
                  <li>Velar por el ejercicio ético de la profesión de ingeniería.</li>
                  <li>Modernizar la gestión institucional y mejorar la calidad de los servicios.</li>
                </ul>

                <div className="flex justify-between mt-8">
                  <Link href="/institucional">
                    <Button variant="outline" className="flex items-center">
                      <ChevronLeft className="mr-2 h-4 w-4" /> Volver
                    </Button>
                  </Link>
                  <Link href="/institucional/directivos">
                    <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                      Directivos <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
