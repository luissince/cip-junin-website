"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  FileText,
  Users,
  Calendar,
  BookOpen,
  Award,
  ChevronRight,
  Building,
  Briefcase,
  Download,
} from "lucide-react"

// Datos de ejemplo para la búsqueda (ampliados)
const searchData = {
  institucional: [
    {
      title: "Quiénes Somos",
      url: "/institucional/quienes-somos",
      description:
        "Conoce nuestra misión, visión y valores institucionales del Colegio de Ingenieros del Perú - CD Junín.",
    },
    {
      title: "Directivos",
      url: "/institucional/directivos",
      description: "Información sobre el actual Consejo Directivo del CIP Junín y sus funciones.",
    },
    {
      title: "Documentos Normativos",
      url: "/institucional/documentos",
      description: "Accede a estatutos, reglamentos y códigos de ética profesional del CIP.",
    },
    {
      title: "Ética Profesional",
      url: "/institucional/etica",
      description: "Conoce nuestro código de ética y los valores que guían nuestra profesión.",
    },
    {
      title: "Directorio",
      url: "/institucional/directorio",
      description: "Directorio completo de ingenieros colegiados en el CD Junín.",
    },
    {
      title: "Comisiones",
      url: "/institucional/comisiones",
      description: "Información sobre las comisiones de trabajo del CIP Junín.",
    },
    {
      title: "Historia del CIP Junín",
      url: "/institucional/historia",
      description: "Recorrido histórico por los hitos más importantes del Consejo Departamental Junín.",
    },
    {
      title: "Misión y Visión",
      url: "/institucional/mision-vision",
      description: "Conoce nuestra misión, visión y objetivos estratégicos.",
    },
  ],
  tramites: [
    {
      title: "Colegiatura",
      url: "/tramites/colegiatura",
      description: "Información sobre el proceso de colegiatura para nuevos ingenieros.",
    },
    {
      title: "Certificado de Habilidad",
      url: "/tramites/certificado-habilidad",
      description: "Cómo obtener tu certificado de habilidad profesional.",
    },
    {
      title: "Cambio de Sede",
      url: "/tramites/cambio-sede",
      description: "Procedimiento para realizar el cambio de sede departamental.",
    },
    {
      title: "Duplicado de Carnet",
      url: "/tramites/duplicado-carnet",
      description: "Pasos para solicitar un duplicado de carnet de colegiado.",
    },
    {
      title: "Constancia de No Adeudo",
      url: "/tramites/constancia-no-adeudo",
      description: "Cómo obtener tu constancia de no adeudo al CIP.",
    },
    {
      title: "Alquiler de Ambientes",
      url: "/alquiler-ambientes",
      description: "Información sobre el alquiler de ambientes del CIP Junín.",
    },
    {
      title: "Solicitud de Ambientes",
      url: "/tramites/solicitud-ambientes",
      description: "Procedimiento para solicitar el uso de ambientes para colegiados.",
    },
    {
      title: "Verificar Habilidad",
      url: "/verificar-habilidad",
      description: "Verifica la habilidad profesional de ingenieros colegiados.",
    },
  ],
  capacitaciones: [
    {
      title: "Curso de Diseño Estructural",
      url: "/capacitaciones/cursos/diseno-estructural",
      description: "Curso especializado en diseño estructural para ingenieros civiles.",
    },
    {
      title: "Taller de Gestión de Proyectos",
      url: "/capacitaciones/cursos/gestion-proyectos",
      description: "Taller práctico sobre metodologías de gestión de proyectos.",
    },
    {
      title: "Convenio Universidad Continental",
      url: "/capacitaciones/convenios/universidad-continental",
      description: "Detalles del convenio educativo con la Universidad Continental.",
    },
    {
      title: "Aula Virtual",
      url: "/capacitaciones/aula-virtual",
      description: "Accede a nuestra plataforma de aprendizaje en línea con cursos exclusivos.",
    },
    {
      title: "Diplomado en Gestión Pública",
      url: "/capacitaciones/cursos/diplomado-gestion-publica",
      description: "Programa de especialización en gestión pública para ingenieros.",
    },
    {
      title: "Curso BIM para Ingenieros",
      url: "/capacitaciones/cursos/bim-ingenieros",
      description: "Aprende a utilizar la metodología BIM en proyectos de ingeniería.",
    },
    {
      title: "Convenio SENCICO",
      url: "/capacitaciones/convenios/sencico",
      description: "Beneficios del convenio con SENCICO para colegiados.",
    },
    {
      title: "Certificación Internacional PMI",
      url: "/capacitaciones/cursos/certificacion-pmi",
      description: "Preparación para la certificación internacional en gestión de proyectos.",
    },
  ],
  noticias: [
    {
      title: "CIP Junín firma convenio con universidad local",
      url: "/sala-prensa/noticias/1",
      description:
        "El Colegio de Ingenieros del Perú - CD Junín firmó un importante convenio de colaboración académica.",
    },
    {
      title: "Ingenieros de Junín participan en congreso internacional",
      url: "/sala-prensa/noticias/2",
      description:
        "Una delegación de ingenieros de nuestra sede participó en el Congreso Internacional de Ingeniería Civil.",
    },
    {
      title: "Nuevo laboratorio de innovación tecnológica",
      url: "/sala-prensa/noticias/3",
      description:
        "El CIP Junín inauguró un moderno laboratorio de innovación tecnológica para el desarrollo de proyectos.",
    },
    {
      title: "Comunicado oficial sobre proceso electoral",
      url: "/sala-prensa/comunicados/1",
      description: "Comunicado del Comité Electoral sobre el próximo proceso de elecciones.",
    },
    {
      title: "Reconocimiento al Ing. Carlos Pérez como ingeniero de la semana",
      url: "/sala-prensa/ingeniero-semana/1",
      description: "Destacamos la trayectoria profesional del Ing. Carlos Pérez en el sector minero.",
    },
    {
      title: "Webinar: Innovación en Ingeniería Civil",
      url: "/eventos/webinar-innovacion-civil",
      description: "Participa en nuestro webinar sobre las últimas innovaciones en ingeniería civil.",
    },
    {
      title: "Conferencia: Desafíos de la Ingeniería en el Perú",
      url: "/eventos/conferencia-desafios",
      description: "Conferencia magistral sobre los retos actuales de la ingeniería peruana.",
    },
  ],
  capitulos: [
    {
      title: "Capítulo de Ingeniería Civil",
      url: "/capitulos/civil",
      description: "Información sobre el capítulo de Ingeniería Civil del CIP Junín.",
    },
    {
      title: "Capítulo de Ingeniería de Sistemas",
      url: "/capitulos/sistemas",
      description: "Información sobre el capítulo de Ingeniería de Sistemas del CIP Junín.",
    },
    {
      title: "Capítulo de Ingeniería Eléctrica",
      url: "/capitulos/electrica",
      description: "Información sobre el capítulo de Ingeniería Eléctrica del CIP Junín.",
    },
    {
      title: "Capítulo de Ingeniería Mecánica",
      url: "/capitulos/mecanica",
      description: "Información sobre el capítulo de Ingeniería Mecánica del CIP Junín.",
    },
    {
      title: "Capítulo de Ingeniería Industrial",
      url: "/capitulos/industrial",
      description: "Información sobre el capítulo de Ingeniería Industrial del CIP Junín.",
    },
    {
      title: "Capítulo de Ingeniería de Minas",
      url: "/capitulos/minas",
      description: "Información sobre el capítulo de Ingeniería de Minas del CIP Junín.",
    },
    {
      title: "Actividades del Capítulo Civil",
      url: "/capitulos/civil/actividades",
      description: "Calendario de actividades organizadas por el capítulo de Ingeniería Civil.",
    },
    {
      title: "Junta Directiva Capítulo Sistemas",
      url: "/capitulos/sistemas/directiva",
      description: "Conoce a los miembros de la junta directiva del capítulo de Ingeniería de Sistemas.",
    },
  ],
  beneficios: [
    {
      title: "Beneficios para colegiados",
      url: "/beneficios",
      description: "Conoce todos los beneficios disponibles para los ingenieros colegiados.",
    },
    {
      title: "Seguro de vida",
      url: "/beneficios#seguro-vida",
      description: "Información sobre el seguro de vida para colegiados.",
    },
    {
      title: "Seguro de salud",
      url: "/beneficios#seguro-salud",
      description: "Detalles sobre el seguro de salud disponible para colegiados y familiares.",
    },
    {
      title: "Convenios con universidades",
      url: "/beneficios#convenios-educacion",
      description: "Convenios educativos con universidades locales e internacionales.",
    },
    {
      title: "Descuentos en capacitaciones",
      url: "/beneficios#descuentos",
      description: "Descuentos exclusivos en cursos y programas de capacitación.",
    },
    {
      title: "Fondo de apoyo social",
      url: "/beneficios#fondo-social",
      description: "Información sobre el fondo de apoyo social para colegiados.",
    },
    {
      title: "Servicios de bienestar",
      url: "/beneficios#bienestar",
      description: "Servicios de bienestar y recreación disponibles en nuestra sede.",
    },
  ],
  elecciones: [
    {
      title: "Proceso Electoral 2023",
      url: "/elecciones",
      description: "Información completa sobre el proceso electoral 2023 del CIP Junín.",
    },
    {
      title: "Cronograma Electoral",
      url: "/elecciones#cronograma",
      description: "Fechas importantes del proceso electoral.",
    },
    {
      title: "Listas de candidatos",
      url: "/elecciones#candidatos",
      description: "Conoce las listas de candidatos para las próximas elecciones.",
    },
    {
      title: "Reglamento electoral",
      url: "/elecciones#reglamento",
      description: "Reglamento que rige el proceso electoral del CIP.",
    },
    {
      title: "Resultados de elecciones anteriores",
      url: "/elecciones/resultados-anteriores",
      description: "Consulta los resultados de procesos electorales anteriores.",
    },
    {
      title: "Comité Electoral",
      url: "/elecciones#comite",
      description: "Miembros del comité electoral y sus funciones.",
    },
    {
      title: "Preguntas frecuentes sobre el proceso electoral",
      url: "/elecciones/faq",
      description: "Respuestas a las preguntas más frecuentes sobre las elecciones.",
    },
  ],
  intranet: [
    {
      title: "Acceso a Intranet",
      url: "/intranet",
      description: "Portal de acceso a servicios exclusivos para colegiados.",
    },
    {
      title: "Pagos en línea",
      url: "/intranet#pagos",
      description: "Realiza tus pagos de cuotas y otros servicios en línea.",
    },
    {
      title: "Certificados digitales",
      url: "/intranet#certificados",
      description: "Solicita y descarga tus certificados digitales.",
    },
    {
      title: "Actualización de datos",
      url: "/intranet#actualizacion",
      description: "Mantén actualizada tu información personal y profesional.",
    },
    {
      title: "Estado de cuenta",
      url: "/intranet#estado-cuenta",
      description: "Consulta tu estado de cuenta y pagos pendientes.",
    },
    {
      title: "Descargar App CIP Junín",
      url: "/intranet#app",
      description: "Descarga nuestra aplicación móvil para acceder a servicios desde tu celular.",
    },
    {
      title: "Soporte técnico",
      url: "/intranet#soporte",
      description: "Contacta con nuestro equipo de soporte técnico para resolver dudas.",
    },
  ],
}

type SearchCategory =
  | "institucional"
  | "tramites"
  | "capacitaciones"
  | "noticias"
  | "capitulos"
  | "beneficios"
  | "elecciones"
  | "intranet"
  | "todos"

const categoryIcons = {
  institucional: <Users className="h-5 w-5" />,
  tramites: <FileText className="h-5 w-5" />,
  capacitaciones: <BookOpen className="h-5 w-5" />,
  noticias: <Calendar className="h-5 w-5" />,
  capitulos: <Building className="h-5 w-5" />,
  beneficios: <Award className="h-5 w-5" />,
  elecciones: <Briefcase className="h-5 w-5" />,
  intranet: <Download className="h-5 w-5" />,
  todos: <Search className="h-5 w-5" />,
}

const categoryLabels = {
  institucional: "Institucional",
  tramites: "Trámites",
  capacitaciones: "Capacitaciones",
  noticias: "Noticias y Eventos",
  capitulos: "Capítulos Profesionales",
  beneficios: "Beneficios",
  elecciones: "Elecciones",
  intranet: "Intranet",
  todos: "Todos los resultados",
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const queryParam = searchParams.get("q") || ""
  const categoryParam = searchParams.get("categoria") as SearchCategory | null

  const [searchTerm, setSearchTerm] = useState(queryParam)
  const [activeTab, setActiveTab] = useState<SearchCategory>(categoryParam || "todos")

  // Filtrar resultados basados en el término de búsqueda
  const getFilteredResults = () => {
    if (!searchTerm) return {}

    const term = searchTerm.toLowerCase()
    return {
      institucional: searchData.institucional.filter(
        (item) => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term),
      ),
      tramites: searchData.tramites.filter(
        (item) => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term),
      ),
      capacitaciones: searchData.capacitaciones.filter(
        (item) => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term),
      ),
      noticias: searchData.noticias.filter(
        (item) => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term),
      ),
      capitulos: searchData.capitulos.filter(
        (item) => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term),
      ),
      beneficios: searchData.beneficios.filter(
        (item) => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term),
      ),
      elecciones: searchData.elecciones.filter(
        (item) => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term),
      ),
      intranet: searchData.intranet.filter(
        (item) => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term),
      ),
    }
  }

  const results = getFilteredResults()

  // Contar resultados totales
  const totalResults = Object.values(results).reduce((total, category) => total + category.length, 0)

  // Manejar la búsqueda
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // La búsqueda ya se realiza automáticamente al cambiar searchTerm
    // Esto es solo para manejar el envío del formulario
  }

  // Resaltar términos de búsqueda en el texto
  const highlightText = (text: string) => {
    if (!searchTerm) return text

    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"))
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="bg-yellow-200 font-medium">
          {part}
        </span>
      ) : (
        part
      ),
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Resultados de búsqueda</h1>

        {/* Formulario de búsqueda */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Input
                type="search"
                placeholder="Buscar en CIP Junín..."
                className="pr-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button type="submit" className="bg-red-700 hover:bg-red-800">
              Buscar
            </Button>
          </form>
        </div>

        {searchTerm ? (
          <>
            {/* Resumen de resultados */}
            <div className="mb-6">
              <p className="text-gray-600">
                Se encontraron {totalResults} resultado{totalResults !== 1 ? "s" : ""} para &quot;{searchTerm}&quot;
              </p>
            </div>

            {/* Tabs de categorías */}
            <Tabs
              defaultValue="todos"
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as SearchCategory)}
              className="mb-8"
            >
              <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 mb-6">
                <TabsTrigger value="todos" className="flex items-center gap-1">
                  {categoryIcons.todos}
                  <span className="hidden sm:inline">Todos</span>
                  <span className="ml-1 text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">{totalResults}</span>
                </TabsTrigger>
                <TabsTrigger value="institucional" className="flex items-center gap-1">
                  {categoryIcons.institucional}
                  <span className="hidden sm:inline">Institucional</span>
                  <span className="ml-1 text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">
                    {results.institucional?.length || 0}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="tramites" className="flex items-center gap-1">
                  {categoryIcons.tramites}
                  <span className="hidden sm:inline">Trámites</span>
                  <span className="ml-1 text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">
                    {results.tramites?.length || 0}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="capacitaciones" className="flex items-center gap-1">
                  {categoryIcons.capacitaciones}
                  <span className="hidden sm:inline">Capacitaciones</span>
                  <span className="ml-1 text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">
                    {results.capacitaciones?.length || 0}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="noticias" className="flex items-center gap-1">
                  {categoryIcons.noticias}
                  <span className="hidden sm:inline">Noticias</span>
                  <span className="ml-1 text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">
                    {results.noticias?.length || 0}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="capitulos" className="flex items-center gap-1">
                  {categoryIcons.capitulos}
                  <span className="hidden sm:inline">Capítulos</span>
                  <span className="ml-1 text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">
                    {results.capitulos?.length || 0}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="beneficios" className="flex items-center gap-1">
                  {categoryIcons.beneficios}
                  <span className="hidden sm:inline">Beneficios</span>
                  <span className="ml-1 text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">
                    {results.beneficios?.length || 0}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="elecciones" className="flex items-center gap-1">
                  {categoryIcons.elecciones}
                  <span className="hidden sm:inline">Elecciones</span>
                  <span className="ml-1 text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">
                    {results.elecciones?.length || 0}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="intranet" className="flex items-center gap-1">
                  {categoryIcons.intranet}
                  <span className="hidden sm:inline">Intranet</span>
                  <span className="ml-1 text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">
                    {results.intranet?.length || 0}
                  </span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="todos">
                {totalResults > 0 ? (
                  <div className="space-y-8">
                    {Object.entries(results).map(([category, items]) => {
                      if (items.length === 0) return null

                      return (
                        <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden">
                          <div className="flex items-center px-6 py-3 bg-gray-50 border-b">
                            {categoryIcons[category as SearchCategory]}
                            <h2 className="ml-2 font-semibold">{categoryLabels[category as SearchCategory]}</h2>
                          </div>
                          <ul className="divide-y divide-gray-100">
                            {items.map((item) => (
                              <li key={item.url} className="p-4 hover:bg-gray-50">
                                <Link href={item.url} className="block">
                                  <h3 className="text-lg font-medium text-red-700 mb-1">{highlightText(item.title)}</h3>
                                  <p className="text-gray-600 mb-2 text-sm">{highlightText(item.description)}</p>
                                  <div className="text-sm text-gray-500 flex items-center">
                                    <span className="text-red-600">{item.url}</span>
                                    <ChevronRight className="ml-1 h-3 w-3" />
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <div className="text-gray-400 mb-4">
                      <Search className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No se encontraron resultados</h3>
                    <p className="text-gray-600 mb-4">
                      No hemos encontrado resultados para &quot;{searchTerm}&quot;. Por favor, intenta con otros
                      términos.
                    </p>
                    <div className="text-sm text-gray-500">
                      Sugerencias:
                      <ul className="mt-2 list-disc list-inside">
                        <li>Verifica la ortografía de las palabras</li>
                        <li>Utiliza palabras más generales</li>
                        <li>Utiliza menos palabras o palabras clave</li>
                      </ul>
                    </div>
                  </div>
                )}
              </TabsContent>

              {(
                [
                  "institucional",
                  "tramites",
                  "capacitaciones",
                  "noticias",
                  "capitulos",
                  "beneficios",
                  "elecciones",
                  "intranet",
                ] as const
              ).map((category) => (
                <TabsContent key={category} value={category}>
                  {results[category]?.length > 0 ? (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <ul className="divide-y divide-gray-100">
                        {results[category].map((item) => (
                          <li key={item.url} className="p-4 hover:bg-gray-50">
                            <Link href={item.url} className="block">
                              <h3 className="text-lg font-medium text-red-700 mb-1">{highlightText(item.title)}</h3>
                              <p className="text-gray-600 mb-2 text-sm">{highlightText(item.description)}</p>
                              <div className="text-sm text-gray-500 flex items-center">
                                <span className="text-red-600">{item.url}</span>
                                <ChevronRight className="ml-1 h-3 w-3" />
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                      <div className="text-gray-400 mb-4">{categoryIcons[category]}</div>
                      <h3 className="text-xl font-semibold mb-2">No hay resultados en {categoryLabels[category]}</h3>
                      <p className="text-gray-600">
                        No hemos encontrado resultados para &quot;{searchTerm}&quot; en esta categoría.
                      </p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Ingresa un término para buscar</h2>
            <p className="text-gray-600">Puedes buscar información sobre trámites, capacitaciones, noticias y más.</p>
          </div>
        )}
      </div>
    </main>
  )
}
