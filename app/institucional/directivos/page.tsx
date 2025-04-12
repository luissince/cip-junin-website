import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Mail, Phone, Linkedin } from "lucide-react"

export default function DirectivosPage() {
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
          <span className="text-gray-900 font-medium">Directivos</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Consejo Directivo 2022-2024</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce a los profesionales que lideran el Colegio de Ingenieros del Perú - Consejo Departamental Junín.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Sección Institucional</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/institucional/quienes-somos"
                    className="flex items-center text-gray-600 hover:text-red-700"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link href="/institucional/directivos" className="flex items-center text-red-700 font-medium">
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
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Junta Directiva</h2>

              {/* Decano */}
              <div className="mb-12">
                <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-red-700 flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=160&width=160&text=Decano"
                      alt="Ing. Carlos Rodríguez Pérez"
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold">Ing. Carlos Rodríguez Pérez</h3>
                      <p className="text-red-700 font-medium mb-2">Decano Departamental</p>
                      <p className="text-gray-500 text-sm mb-4">CIP 45678 - Ingeniero Civil</p>
                    </div>

                    <p className="text-gray-600 mb-4">
                      Ingeniero Civil con más de 25 años de experiencia en el sector público y privado. Especialista en
                      gestión de proyectos de infraestructura y desarrollo urbano. Docente universitario y consultor
                      internacional.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href="mailto:decano@cipjunin.org.pe"
                        className="flex items-center text-sm text-gray-600 hover:text-red-700"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        decano@cipjunin.org.pe
                      </a>
                      <a href="tel:+51064123456" className="flex items-center text-sm text-gray-600 hover:text-red-700">
                        <Phone className="h-4 w-4 mr-1" />
                        +51 064 123456
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-gray-600 hover:text-red-700"
                      >
                        <Linkedin className="h-4 w-4 mr-1" />
                        Perfil LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Otros directivos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    name: "Ing. Ana Martínez Silva",
                    position: "Vice Decana",
                    cip: "CIP 56789 - Ingeniera Industrial",
                    image: "/placeholder.svg?height=120&width=120&text=Vice+Decana",
                  },
                  {
                    name: "Ing. Luis Gómez Torres",
                    position: "Director Secretario",
                    cip: "CIP 67890 - Ingeniero Mecánico",
                    image: "/placeholder.svg?height=120&width=120&text=Secretario",
                  },
                  {
                    name: "Ing. María Sánchez Díaz",
                    position: "Directora Tesorera",
                    cip: "CIP 78901 - Ingeniera Eléctrica",
                    image: "/placeholder.svg?height=120&width=120&text=Tesorera",
                  },
                  {
                    name: "Ing. Pedro López Vargas",
                    position: "Director Pro Secretario",
                    cip: "CIP 89012 - Ingeniero de Sistemas",
                    image: "/placeholder.svg?height=120&width=120&text=Pro+Secretario",
                  },
                ].map((directivo, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center gap-4">
                    <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-red-700 flex-shrink-0">
                      <Image
                        src={directivo.image || "/placeholder.svg"}
                        alt={directivo.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{directivo.name}</h3>
                      <p className="text-red-700 text-sm font-medium">{directivo.position}</p>
                      <p className="text-gray-500 text-xs">{directivo.cip}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vocales */}
              <h2 className="text-2xl font-bold mb-6">Vocales</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    name: "Ing. Roberto Chávez",
                    specialty: "Ingeniería Civil",
                    image: "/placeholder.svg?height=100&width=100&text=Vocal+1",
                  },
                  {
                    name: "Ing. Carmen Rojas",
                    specialty: "Ingeniería Ambiental",
                    image: "/placeholder.svg?height=100&width=100&text=Vocal+2",
                  },
                  {
                    name: "Ing. Jorge Mendoza",
                    specialty: "Ingeniería de Minas",
                    image: "/placeholder.svg?height=100&width=100&text=Vocal+3",
                  },
                  {
                    name: "Ing. Silvia Torres",
                    specialty: "Ingeniería Industrial",
                    image: "/placeholder.svg?height=100&width=100&text=Vocal+4",
                  },
                  {
                    name: "Ing. Daniel Paredes",
                    specialty: "Ingeniería Mecánica",
                    image: "/placeholder.svg?height=100&width=100&text=Vocal+5",
                  },
                  {
                    name: "Ing. Patricia Flores",
                    specialty: "Ingeniería de Sistemas",
                    image: "/placeholder.svg?height=100&width=100&text=Vocal+6",
                  },
                ].map((vocal, index) => (
                  <div key={index} className="bg-white border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-gray-200 mb-3">
                      <Image
                        src={vocal.image || "/placeholder.svg"}
                        alt={vocal.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-sm">{vocal.name}</h3>
                    <p className="text-gray-500 text-xs">{vocal.specialty}</p>
                  </div>
                ))}
              </div>

              {/* Información adicional */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold mb-4">Período de Gestión</h3>
                <p className="text-gray-600 mb-2">
                  La actual Junta Directiva fue elegida para el período 2022-2024, de acuerdo con el Estatuto del
                  Colegio de Ingenieros del Perú.
                </p>
                <p className="text-gray-600">
                  Las elecciones para la renovación de cargos se realizarán en noviembre de 2024.
                </p>
              </div>

              {/* Organigrama */}
              <div className="mb-8">
                <h3 className="font-bold mb-4">Organigrama Institucional</h3>
                <div className="bg-white border rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800&text=Organigrama+CIP+Junín"
                    alt="Organigrama CIP Junín"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-center mt-4">
                  <Button variant="outline" size="sm">
                    Ver organigrama completo
                  </Button>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Link href="/institucional/quienes-somos">
                  <Button variant="outline" className="flex items-center">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Quiénes Somos
                  </Button>
                </Link>
                <Link href="/institucional/documentos">
                  <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                    Documentos Normativos <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
