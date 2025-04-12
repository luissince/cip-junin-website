import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Search, Phone, Mail, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function DirectorioPage() {
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
          <span className="text-gray-900 font-medium">Directorio</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Directorio Institucional</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Información de contacto de las diferentes áreas y departamentos del Colegio de Ingenieros del Perú - Consejo
            Departamental Junín.
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
                  <Link href="/institucional/directorio" className="flex items-center text-red-700 font-medium">
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

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Horario de Atención</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>Lunes a Viernes:</span>
                    <span className="font-medium">8:00 am - 5:00 pm</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-medium">9:00 am - 12:00 pm</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Domingos y Feriados:</span>
                    <span className="font-medium">Cerrado</span>
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Ubicación</h3>
                <div className="bg-white rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300&text=Mapa+CIP+Junín"
                    alt="Mapa de ubicación"
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-start">
                    <MapPin className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                    <span>Av. Ingenieros 123, Huancayo, Junín, Perú</span>
                  </p>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    Ver en Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Buscador */}
              <div className="mb-8">
                <div className="relative">
                  <Input type="search" placeholder="Buscar área o departamento..." className="pl-10" />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Órganos de Gobierno */}
              <h2 className="text-2xl font-bold mb-6">Órganos de Gobierno</h2>

              <div className="space-y-4 mb-10">
                {[
                  {
                    name: "Decanato",
                    contact: "Ing. Carlos Rodríguez Pérez",
                    phone: "+51 064 123456 Anexo 101",
                    email: "decano@cipjunin.org.pe",
                  },
                  {
                    name: "Vice Decanato",
                    contact: "Ing. Ana Martínez Silva",
                    phone: "+51 064 123456 Anexo 102",
                    email: "vicedecano@cipjunin.org.pe",
                  },
                  {
                    name: "Secretaría",
                    contact: "Ing. Luis Gómez Torres",
                    phone: "+51 064 123456 Anexo 103",
                    email: "secretaria@cipjunin.org.pe",
                  },
                  {
                    name: "Tesorería",
                    contact: "Ing. María Sánchez Díaz",
                    phone: "+51 064 123456 Anexo 104",
                    email: "tesoreria@cipjunin.org.pe",
                  },
                ].map((area, index) => (
                  <div key={index} className="border rounded-lg p-5">
                    <h3 className="font-bold mb-3">{area.name}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="text-sm">{area.contact}</p>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-red-700 mr-2" />
                        <span className="text-sm">{area.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-red-700 mr-2" />
                        <span className="text-sm">{area.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Áreas Administrativas */}
              <h2 className="text-2xl font-bold mb-6">Áreas Administrativas</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  {
                    name: "Gerencia General",
                    contact: "Ing. Roberto Sánchez Vargas",
                    phone: "+51 064 123456 Anexo 110",
                    email: "gerencia@cipjunin.org.pe",
                  },
                  {
                    name: "Administración",
                    contact: "Lic. Carmen Díaz Mendoza",
                    phone: "+51 064 123456 Anexo 111",
                    email: "administracion@cipjunin.org.pe",
                  },
                  {
                    name: "Contabilidad",
                    contact: "CPC. Jorge Mendoza Pérez",
                    phone: "+51 064 123456 Anexo 112",
                    email: "contabilidad@cipjunin.org.pe",
                  },
                  {
                    name: "Recursos Humanos",
                    contact: "Lic. Patricia Flores Sánchez",
                    phone: "+51 064 123456 Anexo 113",
                    email: "rrhh@cipjunin.org.pe",
                  },
                  {
                    name: "Sistemas",
                    contact: "Ing. Daniel Paredes López",
                    phone: "+51 064 123456 Anexo 114",
                    email: "sistemas@cipjunin.org.pe",
                  },
                  {
                    name: "Comunicaciones",
                    contact: "Lic. Silvia Torres Vega",
                    phone: "+51 064 123456 Anexo 115",
                    email: "comunicaciones@cipjunin.org.pe",
                  },
                ].map((area, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">{area.name}</h3>
                    <div className="space-y-1 text-gray-600">
                      <p className="text-sm">{area.contact}</p>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-red-700 mr-2" />
                        <span className="text-sm">{area.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-red-700 mr-2" />
                        <span className="text-sm">{area.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Áreas de Servicio */}
              <h2 className="text-2xl font-bold mb-6">Áreas de Servicio</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  {
                    name: "Atención al Colegiado",
                    contact: "Srta. María López",
                    phone: "+51 064 123456 Anexo 120",
                    email: "atencion@cipjunin.org.pe",
                  },
                  {
                    name: "Trámites y Certificados",
                    contact: "Sr. Juan Pérez",
                    phone: "+51 064 123456 Anexo 121",
                    email: "tramites@cipjunin.org.pe",
                  },
                  {
                    name: "Centro de Capacitación",
                    contact: "Ing. Rosa Mendoza",
                    phone: "+51 064 123456 Anexo 122",
                    email: "capacitacion@cipjunin.org.pe",
                  },
                  {
                    name: "Biblioteca",
                    contact: "Lic. Carlos Torres",
                    phone: "+51 064 123456 Anexo 123",
                    email: "biblioteca@cipjunin.org.pe",
                  },
                ].map((area, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">{area.name}</h3>
                    <div className="space-y-1 text-gray-600">
                      <p className="text-sm">{area.contact}</p>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-red-700 mr-2" />
                        <span className="text-sm">{area.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-red-700 mr-2" />
                        <span className="text-sm">{area.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Capítulos Profesionales */}
              <h2 className="text-2xl font-bold mb-6">Capítulos Profesionales</h2>

              <div className="space-y-4 mb-10">
                {[
                  {
                    name: "Capítulo de Ingeniería Civil",
                    contact: "Ing. Roberto Sánchez Vargas - Presidente",
                    phone: "+51 064 123456 Anexo 130",
                    email: "civil@cipjunin.org.pe",
                  },
                  {
                    name: "Capítulo de Ingeniería de Sistemas",
                    contact: "Ing. María Fernández López - Presidenta",
                    phone: "+51 064 123456 Anexo 131",
                    email: "sistemas@cipjunin.org.pe",
                  },
                  {
                    name: "Capítulo de Ingeniería Eléctrica",
                    contact: "Ing. Juan Pérez Rodríguez - Presidente",
                    phone: "+51 064 123456 Anexo 132",
                    email: "electrica@cipjunin.org.pe",
                  },
                ].map((area, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">{area.name}</h3>
                    <div className="space-y-1 text-gray-600">
                      <p className="text-sm">{area.contact}</p>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-red-700 mr-2" />
                        <span className="text-sm">{area.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-red-700 mr-2" />
                        <span className="text-sm">{area.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Directorio Completo */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold mb-4">Directorio Completo</h3>
                <p className="text-gray-600 mb-4">
                  Puede descargar el directorio completo del CIP CD Junín en formato PDF para su consulta offline.
                </p>
                <Button className="bg-red-700 hover:bg-red-800 text-white">Descargar Directorio (PDF)</Button>
              </div>

              <div className="flex justify-between mt-8">
                <Link href="/institucional/etica">
                  <Button variant="outline" className="flex items-center">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Ética Profesional
                  </Button>
                </Link>
                <Link href="/institucional/comisiones">
                  <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                    Comisiones <ChevronRight className="ml-2 h-4 w-4" />
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
