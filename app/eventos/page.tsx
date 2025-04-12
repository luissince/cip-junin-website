import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, MapPin, LucideClock, Users, ExternalLink, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function EventosPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Eventos</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Eventos</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entérate de los próximos eventos, conferencias, talleres y actividades organizadas por el Colegio de
            Ingenieros del Perú - Consejo Departamental Junín.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-lg overflow-hidden mb-12">
          <Image
            src="/placeholder.svg?height=400&width=1200&text=Eventos+CIP+Junín"
            alt="Eventos CIP Junín"
            width={1200}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
            <div className="max-w-xl text-white">
              <h2 className="text-3xl font-bold mb-4">Congreso Nacional de Ingeniería 2023</h2>
              <p className="mb-6">
                No te pierdas el evento más importante del año para los ingenieros peruanos. Conferencias, talleres y
                networking con los mejores profesionales del país.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-red-700 hover:bg-red-800 text-white">Inscribirme ahora</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Más información
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros y Búsqueda */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold">Encuentra eventos</h2>
            <div className="relative max-w-xs w-full">
              <Input type="search" placeholder="Buscar eventos..." className="pl-10" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center border rounded-md px-3 py-1.5">
              <span className="text-sm mr-2">Categoría:</span>
              <select className="text-sm bg-transparent focus:outline-none">
                <option value="">Todas</option>
                <option value="conferencia">Conferencias</option>
                <option value="taller">Talleres</option>
                <option value="congreso">Congresos</option>
                <option value="seminario">Seminarios</option>
                <option value="networking">Networking</option>
                <option value="social">Eventos Sociales</option>
              </select>
            </div>

            <div className="flex items-center border rounded-md px-3 py-1.5">
              <span className="text-sm mr-2">Mes:</span>
              <select className="text-sm bg-transparent focus:outline-none">
                <option value="">Todos</option>
                <option value="07-2023">Julio 2023</option>
                <option value="08-2023">Agosto 2023</option>
                <option value="09-2023">Septiembre 2023</option>
                <option value="10-2023">Octubre 2023</option>
                <option value="11-2023">Noviembre 2023</option>
                <option value="12-2023">Diciembre 2023</option>
              </select>
            </div>

            <Button variant="outline" size="sm" className="flex items-center">
              <Filter className="h-4 w-4 mr-1" />
              Más filtros
            </Button>

            <Button variant="outline" size="sm" className="flex items-center ml-auto">
              <Calendar className="h-4 w-4 mr-1" />
              Vista de Calendario
            </Button>
          </div>
        </div>

        {/* Eventos Destacados */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Eventos Destacados</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Congreso Nacional de Ingeniería 2023",
                date: "15-17 Julio, 2023",
                time: "9:00 am - 6:00 pm",
                location: "Centro de Convenciones CIP Junín",
                category: "Congreso",
                image: "/placeholder.svg?height=300&width=600&text=Congreso+Nacional",
                description:
                  "El evento más importante del año para los ingenieros peruanos. Tres días de conferencias, talleres y networking con los mejores profesionales del país.",
                featured: true,
              },
              {
                title: "Foro: Infraestructura Sostenible en la Región Central",
                date: "22 Julio, 2023",
                time: "4:00 pm - 8:00 pm",
                location: "Auditorio CIP Junín",
                category: "Foro",
                image: "/placeholder.svg?height=300&width=600&text=Foro+Infraestructura",
                description:
                  "Un espacio de diálogo y reflexión sobre los desafíos y oportunidades para el desarrollo de infraestructura sostenible en la región central del Perú.",
                featured: true,
              },
            ].map((evento, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image src={evento.image || "/placeholder.svg"} alt={evento.title} fill className="object-cover" />
                  <div className="absolute top-0 left-0 bg-red-700 text-white text-xs font-bold px-3 py-1">
                    {evento.category}
                  </div>
                  {evento.featured && (
                    <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1">
                      Destacado
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3">{evento.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-red-700 mr-2" />
                      <span>{evento.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <LucideClock className="h-4 w-4 text-red-700 mr-2" />
                      <span>{evento.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-red-700 mr-2" />
                      <span>{evento.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{evento.description}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={`/eventos/${index + 1}`}>
                      <Button className="bg-red-700 hover:bg-red-800 text-white">Más información</Button>
                    </Link>
                    <Link href={`/eventos/inscripcion/${index + 1}`}>
                      <Button variant="outline">Inscribirme</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Próximos Eventos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Próximos Eventos</h2>

          <div className="space-y-6">
            {[
              {
                title: "Seminario: Gestión de Riesgos en Proyectos de Construcción",
                date: "29 Julio, 2023",
                time: "6:00 pm - 9:00 pm",
                location: "Auditorio CIP Junín",
                category: "Seminario",
                image: "/placeholder.svg?height=150&width=300&text=Seminario",
                speakers: ["Ing. Carlos Rodríguez", "Ing. Ana Torres"],
              },
              {
                title: "Workshop: Diseño de PCB con Software Libre",
                date: "5 Agosto, 2023",
                time: "9:00 am - 1:00 pm",
                location: "Laboratorio de Electrónica CIP",
                category: "Taller",
                image: "/placeholder.svg?height=150&width=300&text=Workshop",
                speakers: ["Ing. Luis Gómez"],
              },
              {
                title: "Conferencia: Innovación en la Ingeniería Civil",
                date: "12 Agosto, 2023",
                time: "5:00 pm - 7:00 pm",
                location: "Virtual - Zoom",
                category: "Conferencia",
                image: "/placeholder.svg?height=150&width=300&text=Conferencia",
                speakers: ["Ing. María Sánchez", "Ing. Pedro López"],
              },
              {
                title: "Networking: Ingenieros Emprendedores",
                date: "19 Agosto, 2023",
                time: "7:00 pm - 10:00 pm",
                location: "Terraza CIP Junín",
                category: "Networking",
                image: "/placeholder.svg?height=150&width=300&text=Networking",
                speakers: [],
              },
            ].map((evento, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="relative h-40 md:h-auto">
                    <Image src={evento.image || "/placeholder.svg"} alt={evento.title} fill className="object-cover" />
                    <div className="absolute top-0 left-0 bg-red-700 text-white text-xs font-bold px-3 py-1">
                      {evento.category}
                    </div>
                  </div>
                  <div className="md:col-span-3 p-6">
                    <h3 className="font-bold text-lg mb-3">{evento.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-red-700 mr-2" />
                        <span>{evento.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <LucideClock className="h-4 w-4 text-red-700 mr-2" />
                        <span>{evento.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-red-700 mr-2" />
                        <span>{evento.location}</span>
                      </div>
                      {evento.speakers.length > 0 && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 text-red-700 mr-2" />
                          <span>Ponentes: {evento.speakers.join(", ")}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link href={`/eventos/${index + 3}`}>
                        <Button variant="outline" size="sm">
                          Más información
                        </Button>
                      </Link>
                      <Link href={`/eventos/inscripcion/${index + 3}`}>
                        <Button className="bg-red-700 hover:bg-red-800 text-white" size="sm">
                          Inscribirme
                        </Button>
                      </Link>
                      {evento.location.includes("Virtual") && (
                        <Button variant="outline" size="sm" className="flex items-center">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Enlace virtual
                        </Button>
                      )}
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        Añadir a calendario
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline">Ver más eventos</Button>
          </div>
        </section>

        {/* Eventos Pasados */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Eventos Pasados</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Día de la Ingeniería Peruana",
                date: "8 Junio, 2023",
                category: "Ceremonia",
                image: "/placeholder.svg?height=150&width=250&text=Día+Ingeniería",
              },
              {
                title: "Conferencia: Tecnologías Emergentes en la Ingeniería",
                date: "25 Mayo, 2023",
                category: "Conferencia",
                image: "/placeholder.svg?height=150&width=250&text=Conferencia",
              },
              {
                title: "Taller: BIM para Proyectos de Infraestructura",
                date: "13 Mayo, 2023",
                category: "Taller",
                image: "/placeholder.svg?height=150&width=250&text=Taller+BIM",
              },
              {
                title: "Seminario: Seguridad en Obras Civiles",
                date: "29 Abril, 2023",
                category: "Seminario",
                image: "/placeholder.svg?height=150&width=250&text=Seminario",
              },
            ].map((evento, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-40">
                  <Image src={evento.image || "/placeholder.svg"} alt={evento.title} fill className="object-cover" />
                  <div className="absolute top-0 left-0 bg-gray-700 text-white text-xs font-bold px-3 py-1">
                    {evento.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2 line-clamp-2">{evento.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar className="h-4 w-4 text-red-700 mr-2" />
                    <span>{evento.date}</span>
                  </div>
                  <Link href={`/eventos/pasados/${index + 1}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Ver detalles
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/eventos/archivo">
              <Button variant="outline">Ver archivo completo</Button>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">¿Quieres organizar un evento?</h2>
              <p className="mb-6">
                El CIP CD Junín pone a disposición de sus colegiados y de empresas e instituciones del sector sus
                instalaciones para la realización de eventos académicos, profesionales y corporativos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/alquiler-ambientes">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Conocer ambientes</Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Contactar
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500&text=Ambientes+CIP"
                alt="Ambientes CIP"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Suscripción */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Mantente informado</h2>
              <p className="text-gray-600 mb-4">
                Suscríbete a nuestro boletín de eventos y recibe información actualizada sobre los próximos eventos,
                conferencias y actividades del CIP CD Junín.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Tu correo electrónico" className="flex-grow" />
                <Button className="bg-red-700 hover:bg-red-800 text-white">Suscribirme</Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                <Calendar className="h-12 w-12 text-red-700" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function User(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
