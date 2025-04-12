import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Calendar, Clock, MapPin, Award } from "lucide-react"

export default function CursosPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/capacitaciones" className="hover:text-red-700">
            Capacitaciones
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Cursos</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Cursos y Capacitaciones</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mantente actualizado con nuestros cursos, talleres y programas de capacitación profesional diseñados para
            ingenieros.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Capacitaciones</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/capacitaciones/cursos" className="flex items-center text-red-700 font-medium">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link href="/capacitaciones/convenios" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Convenios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capacitaciones/aula-virtual"
                    className="flex items-center text-gray-600 hover:text-red-700"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Aula Virtual
                  </Link>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Filtrar por Especialidad</h3>
                <ul className="space-y-2">
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Ingeniería Civil
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Ingeniería de Sistemas
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Ingeniería Eléctrica
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Ingeniería Mecánica
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Ingeniería Industrial
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Ingeniería de Minas
                    </button>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Filtrar por Modalidad</h3>
                <ul className="space-y-2">
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Presencial
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Virtual
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Híbrido
                    </button>
                  </li>
                </ul>
              </div>

              <div className="mt-8 bg-red-50 p-4 rounded-lg border border-red-100">
                <h4 className="font-bold text-red-800 mb-2">Beneficios para Colegiados</h4>
                <p className="text-sm text-red-700 mb-4">
                  Los ingenieros colegiados habilitados tienen descuentos especiales en todos nuestros cursos y
                  capacitaciones.
                </p>
                <Link href="/intranet">
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Ingresar a Intranet</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {/* Cursos Destacados */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Cursos Destacados</h2>

              <div className="space-y-6 mb-6">
                {[
                  {
                    title: "Diseño Sísmico de Edificaciones según la Norma E.030",
                    image: "/placeholder.svg?height=200&width=300&text=Curso+Diseño+Sísmico",
                    date: "15-17 Julio, 2023",
                    time: "18:00 - 21:00 hrs",
                    location: "Auditorio CIP Junín",
                    instructor: "Ing. Roberto Sánchez Vargas",
                    category: "Ingeniería Civil",
                    modality: "Presencial",
                    price: "S/. 250.00",
                    discount: "S/. 180.00 (Colegiados)",
                  },
                  {
                    title: "Ciberseguridad para Ingenieros: Protección de Infraestructuras Críticas",
                    image: "/placeholder.svg?height=200&width=300&text=Curso+Ciberseguridad",
                    date: "22-24 Julio, 2023",
                    time: "19:00 - 22:00 hrs",
                    location: "Virtual - Zoom",
                    instructor: "Ing. María Fernández López",
                    category: "Ingeniería de Sistemas",
                    modality: "Virtual",
                    price: "S/. 200.00",
                    discount: "S/. 150.00 (Colegiados)",
                  },
                ].map((curso, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src={curso.image || "/placeholder.svg"}
                          alt={curso.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 left-0 bg-red-700 text-white text-xs font-bold px-3 py-1">
                          {curso.category}
                        </div>
                        <div className="absolute top-0 right-0 bg-blue-700 text-white text-xs font-bold px-3 py-1">
                          {curso.modality}
                        </div>
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h3 className="font-bold text-lg mb-3">{curso.title}</h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 text-red-700 mr-2" />
                            <span>{curso.date}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 text-red-700 mr-2" />
                            <span>{curso.time}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 text-red-700 mr-2" />
                            <span>{curso.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <UsersIcon className="h-4 w-4 text-red-700 mr-2" />
                            <span>Instructor: {curso.instructor}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                          <div>
                            <p className="text-gray-500 text-sm line-through">{curso.price}</p>
                            <p className="text-red-700 font-bold">{curso.discount}</p>
                          </div>
                          <Link href={`/capacitaciones/cursos/${index + 1}`}>
                            <Button className="mt-3 sm:mt-0 bg-red-700 hover:bg-red-800 text-white">
                              Ver detalles
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline">Ver todos los cursos destacados</Button>
              </div>
            </div>

            {/* Próximos Cursos */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Próximos Cursos</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  {
                    title: "Gestión de Proyectos PMI",
                    image: "/placeholder.svg?height=150&width=300&text=PMI",
                    date: "1-3 Julio, 2023",
                    category: "Ingeniería Industrial",
                    modality: "Presencial",
                  },
                  {
                    title: "Energías Renovables",
                    image: "/placeholder.svg?height=150&width=300&text=Energías",
                    date: "8-10 Julio, 2023",
                    category: "Ingeniería Eléctrica",
                    modality: "Presencial",
                  },
                  {
                    title: "BIM para Proyectos de Infraestructura",
                    image: "/placeholder.svg?height=150&width=300&text=BIM",
                    date: "15-17 Julio, 2023",
                    category: "Ingeniería Civil",
                    modality: "Virtual",
                  },
                  {
                    title: "Automatización Industrial con PLC",
                    image: "/placeholder.svg?height=150&width=300&text=PLC",
                    date: "22-24 Julio, 2023",
                    category: "Ingeniería Mecánica",
                    modality: "Híbrido",
                  },
                ].map((curso, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div className="relative h-40">
                      <Image src={curso.image || "/placeholder.svg"} alt={curso.title} fill className="object-cover" />
                      <div className="absolute top-0 left-0 bg-red-700 text-white text-xs font-bold px-2 py-1">
                        {curso.category}
                      </div>
                      <div className="absolute top-0 right-0 bg-blue-700 text-white text-xs font-bold px-2 py-1">
                        {curso.modality}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2">{curso.title}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Calendar className="h-4 w-4 text-red-700 mr-2" />
                        <span>{curso.date}</span>
                      </div>
                      <Link href={`/capacitaciones/cursos/${index + 5}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline">Ver todos los próximos cursos</Button>
              </div>
            </div>

            {/* Programas de Especialización */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="h-6 w-6 text-red-700 mr-2" />
                Programas de Especialización
              </h2>

              <div className="space-y-6 mb-6">
                {[
                  {
                    title: "Especialización en Gestión de Proyectos de Construcción",
                    duration: "6 meses",
                    start: "Agosto 2023",
                    description:
                      "Programa completo para profesionales que desean especializarse en la gestión de proyectos de construcción, abarcando aspectos técnicos, financieros y legales.",
                    certification: "Certificación por el CIP y la Universidad Nacional de Ingeniería",
                  },
                  {
                    title: "Especialización en Transformación Digital para Ingenieros",
                    duration: "4 meses",
                    start: "Septiembre 2023",
                    description:
                      "Programa diseñado para ingenieros que desean adquirir competencias en tecnologías digitales, innovación y gestión del cambio en entornos industriales.",
                    certification: "Certificación por el CIP y Microsoft",
                  },
                ].map((programa, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-3">{programa.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-red-700 mr-2" />
                        <span>Duración: {programa.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-red-700 mr-2" />
                        <span>Inicio: {programa.start}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{programa.description}</p>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Award className="h-4 w-4 text-red-700 mr-2" />
                      <span>{programa.certification}</span>
                    </div>
                    <Link href={`/capacitaciones/programas/${index + 1}`}>
                      <Button className="bg-red-700 hover:bg-red-800 text-white">Más información</Button>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline">Ver todos los programas</Button>
              </div>
            </div>

            {/* Calendario de Capacitaciones */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-red-700 mr-2" />
                Calendario de Capacitaciones
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2 text-left">Curso</th>
                      <th className="border px-4 py-2 text-left">Fecha</th>
                      <th className="border px-4 py-2 text-left">Modalidad</th>
                      <th className="border px-4 py-2 text-left">Categoría</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Gestión de Proyectos PMI</td>
                      <td className="border px-4 py-2">1-3 Julio, 2023</td>
                      <td className="border px-4 py-2">Presencial</td>
                      <td className="border px-4 py-2">Ingeniería Industrial</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Energías Renovables</td>
                      <td className="border px-4 py-2">8-10 Julio, 2023</td>
                      <td className="border px-4 py-2">Presencial</td>
                      <td className="border px-4 py-2">Ingeniería Eléctrica</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Diseño Sísmico de Edificaciones</td>
                      <td className="border px-4 py-2">15-17 Julio, 2023</td>
                      <td className="border px-4 py-2">Presencial</td>
                      <td className="border px-4 py-2">Ingeniería Civil</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Ciberseguridad para Ingenieros</td>
                      <td className="border px-4 py-2">22-24 Julio, 2023</td>
                      <td className="border px-4 py-2">Virtual</td>
                      <td className="border px-4 py-2">Ingeniería de Sistemas</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">BIM para Proyectos de Infraestructura</td>
                      <td className="border px-4 py-2">15-17 Julio, 2023</td>
                      <td className="border px-4 py-2">Virtual</td>
                      <td className="border px-4 py-2">Ingeniería Civil</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Automatización Industrial con PLC</td>
                      <td className="border px-4 py-2">22-24 Julio, 2023</td>
                      <td className="border px-4 py-2">Híbrido</td>
                      <td className="border px-4 py-2">Ingeniería Mecánica</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center mt-6">
                <Button variant="outline">Descargar Calendario Completo (PDF)</Button>
              </div>
            </div>

            {/* Instructores */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <UsersIcon className="h-6 w-6 text-red-700 mr-2" />
                Nuestros Instructores
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                {[
                  {
                    name: "Ing. Roberto Sánchez Vargas",
                    specialty: "Ingeniería Civil",
                    image: "/placeholder.svg?height=150&width=150&text=Instructor+1",
                  },
                  {
                    name: "Ing. María Fernández López",
                    specialty: "Ingeniería de Sistemas",
                    image: "/placeholder.svg?height=150&width=150&text=Instructor+2",
                  },
                  {
                    name: "Ing. Juan Pérez Rodríguez",
                    specialty: "Ingeniería Eléctrica",
                    image: "/placeholder.svg?height=150&width=150&text=Instructor+3",
                  },
                  {
                    name: "Ing. Carmen Díaz Mendoza",
                    specialty: "Ingeniería Industrial",
                    image: "/placeholder.svg?height=150&width=150&text=Instructor+4",
                  },
                  {
                    name: "Ing. Jorge Mendoza Pérez",
                    specialty: "Ingeniería Mecánica",
                    image: "/placeholder.svg?height=150&width=150&text=Instructor+5",
                  },
                  {
                    name: "Ing. Patricia Flores Sánchez",
                    specialty: "Ingeniería de Minas",
                    image: "/placeholder.svg?height=150&width=150&text=Instructor+6",
                  },
                ].map((instructor, index) => (
                  <div key={index} className="flex flex-col items-center p-4 border rounded-lg">
                    <div className="w-24 h-24 relative rounded-full overflow-hidden mb-3">
                      <Image
                        src={instructor.image || "/placeholder.svg"}
                        alt={instructor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-center mb-1">{instructor.name}</h3>
                    <p className="text-sm text-gray-600 text-center">{instructor.specialty}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline">Ver todos los instructores</Button>
              </div>
            </div>

            {/* Testimonios */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Testimonios de Participantes</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  {
                    name: "Ing. Carlos Martínez",
                    course: "Diseño Sísmico de Edificaciones",
                    testimonial:
                      "Excelente curso, muy completo y con aplicaciones prácticas que me han ayudado a mejorar mi desempeño profesional. Recomendado al 100%.",
                    image: "/placeholder.svg?height=60&width=60&text=CM",
                  },
                  {
                    name: "Ing. Laura Rodríguez",
                    course: "Gestión de Proyectos PMI",
                    testimonial:
                      "La metodología de enseñanza y el material proporcionado fueron de gran calidad. Los conocimientos adquiridos me han permitido implementar mejoras significativas en mi trabajo.",
                    image: "/placeholder.svg?height=60&width=60&text=LR",
                  },
                  {
                    name: "Ing. Pedro Gómez",
                    course: "Ciberseguridad para Ingenieros",
                    testimonial:
                      "Un curso muy necesario en estos tiempos. Los instructores dominan el tema y las sesiones prácticas fueron muy útiles para entender los conceptos.",
                    image: "/placeholder.svg?height=60&width=60&text=PG",
                  },
                  {
                    name: "Ing. Ana Torres",
                    course: "BIM para Proyectos de Infraestructura",
                    testimonial:
                      "Aprendí mucho sobre las nuevas tecnologías BIM y su aplicación en proyectos reales. El curso superó mis expectativas.",
                    image: "/placeholder.svg?height=60&width=60&text=AT",
                  },
                ].map((testimonio, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start mb-3">
                      <div className="w-12 h-12 relative rounded-full overflow-hidden mr-3">
                        <Image
                          src={testimonio.image || "/placeholder.svg"}
                          alt={testimonio.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonio.name}</h4>
                        <p className="text-sm text-gray-500">{testimonio.course}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm italic">"{testimonio.testimonial}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Link href="/capacitaciones">
                <Button variant="outline" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Capacitaciones
                </Button>
              </Link>
              <Link href="/capacitaciones/convenios">
                <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                  Convenios <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
