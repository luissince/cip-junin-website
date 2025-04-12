import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Calendar,
  Filter,
  Search,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Award,
  ClockIcon,
  MapPinIcon,
  UserIcon,
  Download,
} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function CapacitacionesPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Capacitaciones</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Capacitaciones</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra cursos, talleres y programas de capacitación diseñados para el desarrollo profesional de los
            ingenieros en todas las especialidades.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-lg overflow-hidden mb-12">
          <Image
            src="/placeholder.svg?height=400&width=1200&text=Capacitaciones+CIP+Junín"
            alt="Capacitaciones CIP Junín"
            width={1200}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
            <div className="max-w-xl text-white">
              <h2 className="text-3xl font-bold mb-4">Desarrolla tu potencial profesional</h2>
              <p className="mb-6">
                El CIP Junín ofrece programas de capacitación de alta calidad impartidos por profesionales con amplia
                experiencia en la industria y la academia.
              </p>
              <Link href="/capacitaciones/aula-virtual">
                <Button className="bg-red-700 hover:bg-red-800 text-white">Explorar Aula Virtual</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Filtros y Búsqueda */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold">Encuentra tu capacitación ideal</h2>
            <div className="relative max-w-xs w-full">
              <Input type="search" placeholder="Buscar capacitaciones..." className="pl-10" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center border rounded-md px-3 py-1.5">
              <span className="text-sm mr-2">Especialidad:</span>
              <select className="text-sm bg-transparent focus:outline-none">
                <option value="">Todas</option>
                <option value="civil">Ingeniería Civil</option>
                <option value="sistemas">Ingeniería de Sistemas</option>
                <option value="electrica">Ingeniería Eléctrica</option>
                <option value="mecanica">Ingeniería Mecánica</option>
                <option value="industrial">Ingeniería Industrial</option>
                <option value="minas">Ingeniería de Minas</option>
              </select>
            </div>

            <div className="flex items-center border rounded-md px-3 py-1.5">
              <span className="text-sm mr-2">Modalidad:</span>
              <select className="text-sm bg-transparent focus:outline-none">
                <option value="">Todas</option>
                <option value="presencial">Presencial</option>
                <option value="virtual">Virtual</option>
                <option value="hibrido">Híbrido</option>
              </select>
            </div>

            <div className="flex items-center border rounded-md px-3 py-1.5">
              <span className="text-sm mr-2">Duración:</span>
              <select className="text-sm bg-transparent focus:outline-none">
                <option value="">Todas</option>
                <option value="corta">Corta ({"<"} 8 horas)</option>
                <option value="media">Media (8-24 horas)</option>
                <option value="larga">Larga ({">"} 24 horas)</option>
              </select>
            </div>

            <Button variant="outline" size="sm" className="flex items-center">
              <Filter className="h-4 w-4 mr-1" />
              Más filtros
            </Button>
          </div>
        </div>

        {/* Secciones Principales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Cursos Destacados */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Cursos Destacados</h2>
                <Link
                  href="/capacitaciones/cursos"
                  className="text-red-700 hover:text-red-800 font-medium flex items-center"
                >
                  Ver todos <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="space-y-6">
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
                            <ClockIcon className="h-4 w-4 text-red-700 mr-2" />
                            <span>{curso.time}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPinIcon className="h-4 w-4 text-red-700 mr-2" />
                            <span>{curso.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <UserIcon className="h-4 w-4 text-red-700 mr-2" />
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
            </section>

            {/* Próximos Cursos */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Próximos Cursos</h2>
                <Link
                  href="/capacitaciones/cursos"
                  className="text-red-700 hover:text-red-800 font-medium flex items-center"
                >
                  Ver todos <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            </section>

            {/* Programas de Especialización */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-red-700 mr-2" />
                <h2 className="text-2xl font-bold">Programas de Especialización</h2>
              </div>

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
                        <ClockIcon className="h-4 w-4 text-red-700 mr-2" />
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
            </section>
          </div>

          <div className="lg:col-span-1">
            {/* Próximos Webinars */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Próximos Webinars</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Innovación en la Ingeniería: Retos y Oportunidades",
                    date: "20 Julio, 2023",
                    time: "19:00 hrs",
                    speaker: "Ing. Carlos López",
                  },
                  {
                    title: "Inteligencia Artificial aplicada a la Ingeniería",
                    date: "27 Julio, 2023",
                    time: "18:30 hrs",
                    speaker: "Ing. Laura Rodríguez",
                  },
                  {
                    title: "Sostenibilidad en Proyectos de Ingeniería",
                    date: "3 Agosto, 2023",
                    time: "19:30 hrs",
                    speaker: "Ing. Pedro Gómez",
                  },
                ].map((webinar, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-bold text-sm mb-2">{webinar.title}</h3>
                    <div className="flex items-center text-xs text-gray-500 mb-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>
                        {webinar.date} | {webinar.time}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <UserIcon className="h-3 w-3 mr-1" />
                      <span>Ponente: {webinar.speaker}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full text-xs">
                      Inscribirme
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link href="/capacitaciones/webinars" className="text-red-700 hover:text-red-800 text-sm font-medium">
                  Ver todos los webinars
                </Link>
              </div>
            </div>

            {/* Aula Virtual */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="h-40 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Aula+Virtual"
                  alt="Aula Virtual"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <BookOpen className="h-5 w-5 text-red-700 mr-2" />
                  Aula Virtual
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Accede a nuestra plataforma de aprendizaje en línea con cursos exclusivos para colegiados disponibles
                  las 24 horas.
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-red-700 mt-0.5 mr-2" />
                    <span className="text-sm text-gray-600">Más de 50 cursos disponibles</span>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-red-700 mt-0.5 mr-2" />
                    <span className="text-sm text-gray-600">Certificación digital verificable</span>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-red-700 mt-0.5 mr-2" />
                    <span className="text-sm text-gray-600">Aprende a tu propio ritmo</span>
                  </div>
                </div>
                <Link href="/capacitaciones/aula-virtual">
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Ingresar al Aula Virtual</Button>
                </Link>
              </div>
            </div>

            {/* Convenios Educativos */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 text-red-700 mr-2" />
                Convenios Educativos
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                El CIP CD Junín mantiene convenios con instituciones educativas que ofrecen descuentos y beneficios
                especiales para colegiados.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  "/placeholder.svg?height=60&width=120&text=Universidad+1",
                  "/placeholder.svg?height=60&width=120&text=Universidad+2",
                  "/placeholder.svg?height=60&width=120&text=Instituto+1",
                  "/placeholder.svg?height=60&width=120&text=Instituto+2",
                ].map((logo, index) => (
                  <div key={index} className="bg-gray-50 p-2 rounded flex items-center justify-center">
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt={`Convenio ${index + 1}`}
                      width={120}
                      height={60}
                      className="h-10 w-auto"
                    />
                  </div>
                ))}
              </div>
              <Link href="/capacitaciones/convenios">
                <Button variant="outline" className="w-full">
                  Ver Convenios
                </Button>
              </Link>
            </div>

            {/* Calendario */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Calendar className="h-5 w-5 text-red-700 mr-2" />
                Calendario de Capacitaciones
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  Descarga el calendario completo de capacitaciones del mes actual:
                </p>
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  Calendario Julio 2023 (PDF)
                </Button>
              </div>
              <Link href="/capacitaciones/calendario">
                <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Ver Calendario Completo</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
