"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  ChevronRight,
  Filter,
  Building2,
  GraduationCap,
  BookOpen,
} from "lucide-react"
import { motion } from "framer-motion"

// Datos de ejemplo para las ofertas laborales
const jobOffers = [
  {
    id: 1,
    title: "Ingeniero Civil Residente de Obra",
    company: "Constructora Andina S.A.C.",
    location: "Huancayo, Junín",
    salary: "S/ 5,000 - S/ 7,000",
    type: "Tiempo completo",
    date: "Publicado hace 2 días",
    logo: "/placeholder.svg?height=80&width=80&text=CA",
    specialty: "Ingeniería Civil",
    experience: "3-5 años",
    featured: true,
  },
  {
    id: 2,
    title: "Desarrollador Full Stack Senior",
    company: "Tecnologías Digitales Perú",
    location: "Remoto (Perú)",
    salary: "S/ 6,000 - S/ 8,000",
    type: "Tiempo completo",
    date: "Publicado hace 3 días",
    logo: "/placeholder.svg?height=80&width=80&text=TDP",
    specialty: "Ingeniería de Sistemas",
    experience: "5+ años",
    featured: true,
  },
  {
    id: 3,
    title: "Ingeniero Eléctrico para Proyectos de Energía Renovable",
    company: "Energía Sostenible S.A.",
    location: "Huancayo, Junín",
    salary: "S/ 4,500 - S/ 6,500",
    type: "Tiempo completo",
    date: "Publicado hace 5 días",
    logo: "/placeholder.svg?height=80&width=80&text=ES",
    specialty: "Ingeniería Eléctrica",
    experience: "2-4 años",
    featured: false,
  },
  {
    id: 4,
    title: "Ingeniero de Minas - Supervisor de Seguridad",
    company: "Minera Central Andina",
    location: "La Oroya, Junín",
    salary: "S/ 7,000 - S/ 9,000",
    type: "Tiempo completo",
    date: "Publicado hace 1 semana",
    logo: "/placeholder.svg?height=80&width=80&text=MCA",
    specialty: "Ingeniería de Minas",
    experience: "5+ años",
    featured: false,
  },
  {
    id: 5,
    title: "Ingeniero Ambiental para Consultora",
    company: "EcoConsult Perú",
    location: "Huancayo, Junín",
    salary: "S/ 3,500 - S/ 5,000",
    type: "Tiempo completo",
    date: "Publicado hace 1 semana",
    logo: "/placeholder.svg?height=80&width=80&text=EC",
    specialty: "Ingeniería Ambiental",
    experience: "2-3 años",
    featured: false,
  },
  {
    id: 6,
    title: "Ingeniero Industrial - Jefe de Producción",
    company: "Industrias Metálicas del Centro",
    location: "Huancayo, Junín",
    salary: "S/ 5,500 - S/ 7,500",
    type: "Tiempo completo",
    date: "Publicado hace 10 días",
    logo: "/placeholder.svg?height=80&width=80&text=IMC",
    specialty: "Ingeniería Industrial",
    experience: "4-6 años",
    featured: false,
  },
  {
    id: 7,
    title: "Ingeniero Mecánico para Mantenimiento Industrial",
    company: "Servicios Técnicos Especializados",
    location: "Huancayo, Junín",
    salary: "S/ 4,000 - S/ 6,000",
    type: "Tiempo completo",
    date: "Publicado hace 2 semanas",
    logo: "/placeholder.svg?height=80&width=80&text=STE",
    specialty: "Ingeniería Mecánica",
    experience: "3-5 años",
    featured: false,
  },
  {
    id: 8,
    title: "Ingeniero de Sistemas - Analista de Ciberseguridad",
    company: "Banco Regional Andino",
    location: "Huancayo, Junín",
    salary: "S/ 5,000 - S/ 7,000",
    type: "Tiempo completo",
    date: "Publicado hace 2 semanas",
    logo: "/placeholder.svg?height=80&width=80&text=BRA",
    specialty: "Ingeniería de Sistemas",
    experience: "3-5 años",
    featured: false,
  },
]

export default function OfertasLaborales() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    specialty: "",
    location: "",
    experience: "",
    type: "",
  })
  const [showFilters, setShowFilters] = useState(false)

  // Filtrar ofertas basadas en la búsqueda y filtros
  const filteredJobs = jobOffers.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.specialty.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesSpecialty = filters.specialty ? job.specialty === filters.specialty : true
    const matchesLocation = filters.location ? job.location.includes(filters.location) : true
    const matchesExperience = filters.experience ? job.experience === filters.experience : true
    const matchesType = filters.type ? job.type === filters.type : true

    return matchesSearch && matchesSpecialty && matchesLocation && matchesExperience && matchesType
  })

  // Función para limpiar filtros
  const clearFilters = () => {
    setFilters({
      specialty: "",
      location: "",
      experience: "",
      type: "",
    })
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Cabecera */}
      <div className="bg-gradient-to-r from-red-800 to-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Bolsa de Trabajo</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Encuentra las mejores oportunidades laborales para ingenieros en la región Junín y a nivel nacional.
          </p>
        </div>
      </div>

      {/* Buscador y filtros */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 -mt-16 relative z-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar por puesto, empresa o especialidad..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="bg-red-700 hover:bg-red-800 text-white" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="mr-2 h-4 w-4" /> Filtros
            </Button>
          </div>

          {/* Filtros desplegables */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Especialidad</label>
                  <select
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
                    value={filters.specialty}
                    onChange={(e) => setFilters({ ...filters, specialty: e.target.value })}
                  >
                    <option value="">Todas las especialidades</option>
                    <option value="Ingeniería Civil">Ingeniería Civil</option>
                    <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
                    <option value="Ingeniería Eléctrica">Ingeniería Eléctrica</option>
                    <option value="Ingeniería Mecánica">Ingeniería Mecánica</option>
                    <option value="Ingeniería Industrial">Ingeniería Industrial</option>
                    <option value="Ingeniería de Minas">Ingeniería de Minas</option>
                    <option value="Ingeniería Ambiental">Ingeniería Ambiental</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
                  <select
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  >
                    <option value="">Todas las ubicaciones</option>
                    <option value="Huancayo">Huancayo</option>
                    <option value="La Oroya">La Oroya</option>
                    <option value="Tarma">Tarma</option>
                    <option value="Chanchamayo">Chanchamayo</option>
                    <option value="Remoto">Trabajo Remoto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experiencia</label>
                  <select
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
                    value={filters.experience}
                    onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                  >
                    <option value="">Cualquier experiencia</option>
                    <option value="0-2 años">0-2 años</option>
                    <option value="2-3 años">2-3 años</option>
                    <option value="3-5 años">3-5 años</option>
                    <option value="5+ años">5+ años</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de contrato</label>
                  <select
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  >
                    <option value="">Todos los tipos</option>
                    <option value="Tiempo completo">Tiempo completo</option>
                    <option value="Medio tiempo">Medio tiempo</option>
                    <option value="Proyecto">Por proyecto</option>
                    <option value="Prácticas">Prácticas</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="outline" className="mr-2" onClick={clearFilters}>
                  Limpiar filtros
                </Button>
                <Button className="bg-red-700 hover:bg-red-800 text-white">Aplicar filtros</Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Listado de ofertas */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Ofertas Laborales ({filteredJobs.length})</h2>
              <div className="text-sm text-gray-500">
                Ordenar por:
                <select className="ml-2 border-none bg-transparent focus:ring-0">
                  <option>Más recientes</option>
                  <option>Relevancia</option>
                  <option>Salario</option>
                </select>
              </div>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <Link href={`/ofertas-laborales/${job.id}`} key={job.id}>
                    <div
                      className={`bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg border-l-4 ${job.featured ? "border-red-600" : "border-transparent"}`}
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:mr-4 mb-4 md:mb-0 flex justify-center md:justify-start">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                            <Image
                              src={job.logo || "/placeholder.svg"}
                              alt={job.company}
                              width={80}
                              height={80}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                              <p className="text-gray-700 mb-2">{job.company}</p>
                            </div>
                            {job.featured && (
                              <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 md:mb-0 inline-block">
                                Destacado
                              </span>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                            <div className="flex items-center text-gray-600 text-sm">
                              <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                              {job.location}
                            </div>
                            <div className="flex items-center text-gray-600 text-sm">
                              <Briefcase className="h-4 w-4 mr-1 text-gray-400" />
                              {job.type}
                            </div>
                            <div className="flex items-center text-gray-600 text-sm">
                              <GraduationCap className="h-4 w-4 mr-1 text-gray-400" />
                              {job.specialty}
                            </div>
                            <div className="flex items-center text-gray-600 text-sm">
                              <Clock className="h-4 w-4 mr-1 text-gray-400" />
                              {job.experience}
                            </div>
                          </div>

                          <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-3 border-t border-gray-100">
                            <div className="text-lg font-semibold text-gray-800 mb-2 md:mb-0">{job.salary}</div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">{job.date}</span>
                              <span className="ml-4 text-red-700 font-medium text-sm flex items-center">
                                Ver detalles <ChevronRight className="h-4 w-4 ml-1" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No se encontraron ofertas</h3>
                <p className="text-gray-600 mb-4">
                  No hay ofertas que coincidan con tu búsqueda. Intenta con otros términos o filtros.
                </p>
                <Button variant="outline" className="mx-auto" onClick={clearFilters}>
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Para empresas */}
            <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-lg shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-3">¿Eres una empresa?</h3>
              <p className="mb-4">
                Publica tus ofertas laborales y encuentra a los mejores profesionales de ingeniería para tu equipo.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Acceso a profesionales calificados</h4>
                    <p className="text-sm text-white/80">Ingenieros colegiados y habilitados</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Publicación destacada</h4>
                    <p className="text-sm text-white/80">Mayor visibilidad para tus ofertas</p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4 bg-white text-red-800 hover:bg-gray-100">Publicar oferta</Button>
            </div>

            {/* Estadísticas */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Estadísticas</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Ingeniería Civil</span>
                    <span className="text-sm font-medium text-gray-700">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-700 h-2 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Ingeniería de Sistemas</span>
                    <span className="text-sm font-medium text-gray-700">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-700 h-2 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Ingeniería Industrial</span>
                    <span className="text-sm font-medium text-gray-700">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-700 h-2 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Otras especialidades</span>
                    <span className="text-sm font-medium text-gray-700">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-700 h-2 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total de ofertas activas:</span>
                  <span className="font-semibold">124</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-600">Nuevas esta semana:</span>
                  <span className="font-semibold">32</span>
                </div>
              </div>
            </div>

            {/* Alertas de empleo */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Alertas de empleo</h3>
              <p className="text-gray-600 mb-4">
                Recibe notificaciones cuando se publiquen nuevas ofertas que coincidan con tus intereses.
              </p>
              <div className="space-y-3 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Especialidad</label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200">
                    <option>Selecciona una especialidad</option>
                    <option>Ingeniería Civil</option>
                    <option>Ingeniería de Sistemas</option>
                    <option>Ingeniería Eléctrica</option>
                    <option>Ingeniería Mecánica</option>
                    <option>Ingeniería Industrial</option>
                    <option>Ingeniería de Minas</option>
                    <option>Ingeniería Ambiental</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>
                <div className="flex items-start">
                  <Checkbox id="terms" className="mt-1" />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    Acepto recibir alertas de empleo y comunicaciones del CIP Junín
                  </label>
                </div>
              </div>
              <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Crear alerta</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
