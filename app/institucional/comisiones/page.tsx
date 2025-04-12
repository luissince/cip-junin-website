import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Users, Calendar, Mail, Phone } from "lucide-react"

export default function ComisionesPage() {
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
          <span className="text-gray-900 font-medium">Comisiones</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Comisiones</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce las comisiones que trabajan en el Colegio de Ingenieros del Perú - Consejo Departamental Junín para
            el desarrollo de la ingeniería y el bienestar de los colegiados.
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
                  <Link href="/institucional/directorio" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Directorio
                  </Link>
                </li>
                <li>
                  <Link href="/institucional/comisiones" className="flex items-center text-red-700 font-medium">
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
              <h2 className="text-2xl font-bold mb-6">Comisiones del CIP CD Junín</h2>
              <p className="text-gray-600 mb-8">
                Las comisiones son órganos de apoyo del Consejo Departamental que se encargan de desarrollar actividades
                específicas en beneficio de los colegiados y de la sociedad. Están conformadas por ingenieros colegiados
                que trabajan de manera voluntaria y comprometida con el desarrollo de la ingeniería en la región.
              </p>

              {/* Comisiones Permanentes */}
              <h3 className="text-xl font-bold mb-4">Comisiones Permanentes</h3>

              <div className="space-y-6 mb-10">
                {[
                  {
                    name: "Comisión de Ética y Defensa Profesional",
                    description:
                      "Vela por el cumplimiento del Código de Ética del CIP y defiende los intereses profesionales de los ingenieros colegiados.",
                    members: [
                      "Ing. Ricardo Mendoza Torres - Presidente",
                      "Ing. Laura Sánchez Díaz - Secretaria",
                      "Ing. Miguel Torres Vega - Vocal",
                    ],
                    image: "/placeholder.svg?height=200&width=300&text=Comisión+Ética",
                  },
                  {
                    name: "Comisión de Asuntos Municipales y Regionales",
                    description:
                      "Coordina con los gobiernos locales y regionales para promover la participación de los ingenieros en proyectos de desarrollo.",
                    members: [
                      "Ing. Carlos Pérez Rodríguez - Presidente",
                      "Ing. María Fernández López - Secretaria",
                      "Ing. Juan Díaz Mendoza - Vocal",
                    ],
                    image: "/placeholder.svg?height=200&width=300&text=Comisión+Municipal",
                  },
                  {
                    name: "Comisión de Capacitación y Desarrollo Profesional",
                    description:
                      "Organiza cursos, talleres y eventos para la actualización y especialización de los ingenieros colegiados.",
                    members: [
                      "Ing. Ana Martínez Silva - Presidenta",
                      "Ing. Pedro López Vargas - Secretario",
                      "Ing. Carmen Rojas Díaz - Vocal",
                    ],
                    image: "/placeholder.svg?height=200&width=300&text=Comisión+Capacitación",
                  },
                ].map((comision, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-48 md:h-full">
                        <Image
                          src={comision.image || "/placeholder.svg"}
                          alt={comision.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h4 className="font-bold text-lg mb-2">{comision.name}</h4>
                        <p className="text-gray-600 text-sm mb-4">{comision.description}</p>
                        <h5 className="font-medium text-sm mb-2">Integrantes:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {comision.members.map((member, idx) => (
                            <li key={idx}>{member}</li>
                          ))}
                        </ul>
                        <div className="mt-4">
                          <Button variant="outline" size="sm">
                            Ver más información
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comisiones Especiales */}
              <h3 className="text-xl font-bold mb-4">Comisiones Especiales</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    name: "Comisión de Eventos y Actividades Sociales",
                    description:
                      "Organiza eventos sociales, culturales y deportivos para la integración de los colegiados.",
                    president: "Ing. Roberto Chávez Mendoza",
                  },
                  {
                    name: "Comisión de Publicaciones y Difusión",
                    description: "Gestiona las publicaciones y la difusión de las actividades del CIP CD Junín.",
                    president: "Ing. Silvia Torres Vega",
                  },
                  {
                    name: "Comisión de Infraestructura y Mantenimiento",
                    description: "Supervisa el mantenimiento y mejora de las instalaciones del CIP CD Junín.",
                    president: "Ing. Jorge Mendoza Pérez",
                  },
                  {
                    name: "Comisión de Relaciones Interinstitucionales",
                    description: "Establece y mantiene relaciones con otras instituciones públicas y privadas.",
                    president: "Ing. Patricia Flores Sánchez",
                  },
                ].map((comision, index) => (
                  <div key={index} className="border rounded-lg p-5">
                    <h4 className="font-bold mb-2">{comision.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{comision.description}</p>
                    <p className="text-sm font-medium">Presidente: {comision.president}</p>
                  </div>
                ))}
              </div>

              {/* Comisiones Temporales */}
              <h3 className="text-xl font-bold mb-4">Comisiones Temporales</h3>

              <div className="space-y-4 mb-10">
                {[
                  {
                    name: "Comisión Organizadora del Congreso Regional de Ingeniería 2023",
                    period: "Enero - Agosto 2023",
                    description:
                      "Encargada de la organización del Congreso Regional de Ingeniería que se realizará en Agosto de 2023.",
                  },
                  {
                    name: "Comisión de Revisión del Reglamento Interno",
                    period: "Marzo - Junio 2023",
                    description:
                      "Encargada de revisar y proponer modificaciones al Reglamento Interno del CIP CD Junín.",
                  },
                ].map((comision, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold mb-1">{comision.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{comision.description}</p>
                      </div>
                      <div className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {comision.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cómo participar */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold mb-4 flex items-center">
                  <Users className="h-5 w-5 text-red-700 mr-2" />
                  ¿Cómo participar en las Comisiones?
                </h3>
                <p className="text-gray-600 mb-4">
                  Los ingenieros colegiados habilitados pueden participar en las comisiones del CIP CD Junín. Para ello,
                  deben presentar una solicitud dirigida al Decano Departamental, indicando la comisión de su interés y
                  adjuntando su CV.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Requisitos:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ser ingeniero colegiado habilitado</li>
                      <li>• No tener sanciones éticas vigentes</li>
                      <li>• Compromiso de participación activa</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Beneficios:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Desarrollo profesional</li>
                      <li>• Networking con otros profesionales</li>
                      <li>• Contribución al desarrollo de la ingeniería</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Postular a una Comisión</Button>
                </div>
              </div>

              {/* Calendario de reuniones */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 text-red-700 mr-2" />
                  Calendario de Reuniones
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Comisión</th>
                        <th className="border px-4 py-2 text-left">Día</th>
                        <th className="border px-4 py-2 text-left">Hora</th>
                        <th className="border px-4 py-2 text-left">Lugar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Comisión de Ética</td>
                        <td className="border px-4 py-2">Primer lunes de cada mes</td>
                        <td className="border px-4 py-2">18:00 hrs</td>
                        <td className="border px-4 py-2">Sala de Reuniones 1</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Comisión de Capacitación</td>
                        <td className="border px-4 py-2">Segundo miércoles de cada mes</td>
                        <td className="border px-4 py-2">19:00 hrs</td>
                        <td className="border px-4 py-2">Sala de Reuniones 2</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Comisión de Asuntos Municipales</td>
                        <td className="border px-4 py-2">Tercer jueves de cada mes</td>
                        <td className="border px-4 py-2">18:30 hrs</td>
                        <td className="border px-4 py-2">Sala de Reuniones 1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Contacto */}
              <div className="bg-red-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-red-800 mb-4">Contacto para Comisiones</h3>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="space-y-2 mb-4 md:mb-0">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-700">comisiones@cipjunin.org.pe</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-700">+51 064 123456 Anexo 105</span>
                    </div>
                  </div>
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Contactar</Button>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Link href="/institucional/directorio">
                  <Button variant="outline" className="flex items-center">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Directorio
                  </Button>
                </Link>
                <Link href="/institucional">
                  <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                    Volver a Institucional <ChevronRight className="ml-2 h-4 w-4" />
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
