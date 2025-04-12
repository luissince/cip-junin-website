"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Search, FileText, Users, Calendar, BookOpen, Award, X, Building, Briefcase, Download } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Datos de ejemplo para la búsqueda (ampliados)
const searchData = {
  institucional: [
    { title: "Quiénes Somos", url: "/institucional/quienes-somos" },
    { title: "Directivos", url: "/institucional/directivos" },
    { title: "Documentos Normativos", url: "/institucional/documentos" },
    { title: "Ética Profesional", url: "/institucional/etica" },
    { title: "Directorio", url: "/institucional/directorio" },
    { title: "Comisiones", url: "/institucional/comisiones" },
    { title: "Historia del CIP Junín", url: "/institucional/historia" },
    { title: "Misión y Visión", url: "/institucional/mision-vision" },
  ],
  tramites: [
    { title: "Colegiatura", url: "/tramites/colegiatura" },
    { title: "Certificado de Habilidad", url: "/tramites/certificado-habilidad" },
    { title: "Cambio de Sede", url: "/tramites/cambio-sede" },
    { title: "Duplicado de Carnet", url: "/tramites/duplicado-carnet" },
    { title: "Constancia de No Adeudo", url: "/tramites/constancia-no-adeudo" },
    { title: "Alquiler de Ambientes", url: "/alquiler-ambientes" },
    { title: "Solicitud de Ambientes", url: "/tramites/solicitud-ambientes" },
    { title: "Verificar Habilidad", url: "/verificar-habilidad" },
  ],
  capacitaciones: [
    { title: "Curso de Diseño Estructural", url: "/capacitaciones/cursos/diseno-estructural" },
    { title: "Taller de Gestión de Proyectos", url: "/capacitaciones/cursos/gestion-proyectos" },
    { title: "Convenio Universidad Continental", url: "/capacitaciones/convenios/universidad-continental" },
    { title: "Aula Virtual", url: "/capacitaciones/aula-virtual" },
    { title: "Diplomado en Gestión Pública", url: "/capacitaciones/cursos/diplomado-gestion-publica" },
    { title: "Curso BIM para Ingenieros", url: "/capacitaciones/cursos/bim-ingenieros" },
    { title: "Convenio SENCICO", url: "/capacitaciones/convenios/sencico" },
    { title: "Certificación Internacional PMI", url: "/capacitaciones/cursos/certificacion-pmi" },
  ],
  noticias: [
    { title: "CIP Junín firma convenio con universidad local", url: "/sala-prensa/noticias/1" },
    { title: "Ingenieros de Junín participan en congreso internacional", url: "/sala-prensa/noticias/2" },
    { title: "Nuevo laboratorio de innovación tecnológica", url: "/sala-prensa/noticias/3" },
    { title: "Comunicado oficial sobre proceso electoral", url: "/sala-prensa/comunicados/1" },
    {
      title: "Reconocimiento al Ing. Carlos Pérez como ingeniero de la semana",
      url: "/sala-prensa/ingeniero-semana/1",
    },
    { title: "Webinar: Innovación en Ingeniería Civil", url: "/eventos/webinar-innovacion-civil" },
    { title: "Conferencia: Desafíos de la Ingeniería en el Perú", url: "/eventos/conferencia-desafios" },
  ],
  capitulos: [
    { title: "Capítulo de Ingeniería Civil", url: "/capitulos/civil" },
    { title: "Capítulo de Ingeniería de Sistemas", url: "/capitulos/sistemas" },
    { title: "Capítulo de Ingeniería Eléctrica", url: "/capitulos/electrica" },
    { title: "Capítulo de Ingeniería Mecánica", url: "/capitulos/mecanica" },
    { title: "Capítulo de Ingeniería Industrial", url: "/capitulos/industrial" },
    { title: "Capítulo de Ingeniería de Minas", url: "/capitulos/minas" },
    { title: "Actividades del Capítulo Civil", url: "/capitulos/civil/actividades" },
    { title: "Junta Directiva Capítulo Sistemas", url: "/capitulos/sistemas/directiva" },
  ],
  beneficios: [
    { title: "Beneficios para colegiados", url: "/beneficios" },
    { title: "Seguro de vida", url: "/beneficios#seguro-vida" },
    { title: "Seguro de salud", url: "/beneficios#seguro-salud" },
    { title: "Convenios con universidades", url: "/beneficios#convenios-educacion" },
    { title: "Descuentos en capacitaciones", url: "/beneficios#descuentos" },
    { title: "Fondo de apoyo social", url: "/beneficios#fondo-social" },
    { title: "Servicios de bienestar", url: "/beneficios#bienestar" },
  ],
  elecciones: [
    { title: "Proceso Electoral 2023", url: "/elecciones" },
    { title: "Cronograma Electoral", url: "/elecciones#cronograma" },
    { title: "Listas de candidatos", url: "/elecciones#candidatos" },
    { title: "Reglamento electoral", url: "/elecciones#reglamento" },
    { title: "Resultados de elecciones anteriores", url: "/elecciones/resultados-anteriores" },
    { title: "Comité Electoral", url: "/elecciones#comite" },
    { title: "Preguntas frecuentes sobre el proceso electoral", url: "/elecciones/faq" },
  ],
  intranet: [
    { title: "Acceso a Intranet", url: "/intranet" },
    { title: "Pagos en línea", url: "/intranet#pagos" },
    { title: "Certificados digitales", url: "/intranet#certificados" },
    { title: "Actualización de datos", url: "/intranet#actualizacion" },
    { title: "Estado de cuenta", url: "/intranet#estado-cuenta" },
    { title: "Descargar App CIP Junín", url: "/intranet#app" },
    { title: "Soporte técnico", url: "/intranet#soporte" },
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

const categoryIcons = {
  institucional: <Users className="h-4 w-4" />,
  tramites: <FileText className="h-4 w-4" />,
  capacitaciones: <BookOpen className="h-4 w-4" />,
  noticias: <Calendar className="h-4 w-4" />,
  capitulos: <Building className="h-4 w-4" />,
  beneficios: <Award className="h-4 w-4" />,
  elecciones: <Briefcase className="h-4 w-4" />,
  intranet: <Download className="h-4 w-4" />,
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
}

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<Record<SearchCategory, typeof searchData.institucional>>({
    institucional: [],
    tramites: [],
    capacitaciones: [],
    noticias: [],
    capitulos: [],
    beneficios: [],
    elecciones: [],
    intranet: [],
  })
  const [showResults, setShowResults] = useState(false)
  const [focusedCategory, setFocusedCategory] = useState<SearchCategory | null>(null)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Cerrar resultados al hacer clic fuera del componente
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Filtrar resultados basados en el término de búsqueda
  useEffect(() => {
    if (searchTerm.length < 2) {
      setShowResults(false)
      setSearchResults({
        institucional: [],
        tramites: [],
        capacitaciones: [],
        noticias: [],
        capitulos: [],
        beneficios: [],
        elecciones: [],
        intranet: [],
      })
      return
    }

    const term = searchTerm.toLowerCase()
    const results = {
      institucional: searchData.institucional.filter((item) => item.title.toLowerCase().includes(term)),
      tramites: searchData.tramites.filter((item) => item.title.toLowerCase().includes(term)),
      capacitaciones: searchData.capacitaciones.filter((item) => item.title.toLowerCase().includes(term)),
      noticias: searchData.noticias.filter((item) => item.title.toLowerCase().includes(term)),
      capitulos: searchData.capitulos.filter((item) => item.title.toLowerCase().includes(term)),
      beneficios: searchData.beneficios.filter((item) => item.title.toLowerCase().includes(term)),
      elecciones: searchData.elecciones.filter((item) => item.title.toLowerCase().includes(term)),
      intranet: searchData.intranet.filter((item) => item.title.toLowerCase().includes(term)),
    }

    setSearchResults(results)
    setShowResults(true)
  }, [searchTerm])

  // Manejar navegación con teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showResults) return

    // Obtener todas las categorías con resultados
    const categoriesWithResults = Object.keys(searchResults).filter(
      (cat) => searchResults[cat as SearchCategory].length > 0,
    ) as SearchCategory[]

    if (categoriesWithResults.length === 0) return

    if (e.key === "ArrowDown") {
      e.preventDefault()

      if (focusedCategory === null) {
        // Seleccionar el primer resultado de la primera categoría
        setFocusedCategory(categoriesWithResults[0])
        setFocusedIndex(0)
      } else {
        const currentCategoryIndex = categoriesWithResults.indexOf(focusedCategory)
        const currentCategory = searchResults[focusedCategory]

        if (focusedIndex < currentCategory.length - 1) {
          // Moverse al siguiente resultado en la misma categoría
          setFocusedIndex(focusedIndex + 1)
        } else if (currentCategoryIndex < categoriesWithResults.length - 1) {
          // Moverse a la siguiente categoría
          setFocusedCategory(categoriesWithResults[currentCategoryIndex + 1])
          setFocusedIndex(0)
        }
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault()

      if (focusedCategory === null) {
        // Seleccionar el último resultado de la última categoría
        const lastCategory = categoriesWithResults[categoriesWithResults.length - 1]
        setFocusedCategory(lastCategory)
        setFocusedIndex(searchResults[lastCategory].length - 1)
      } else {
        const currentCategoryIndex = categoriesWithResults.indexOf(focusedCategory)

        if (focusedIndex > 0) {
          // Moverse al resultado anterior en la misma categoría
          setFocusedIndex(focusedIndex - 1)
        } else if (currentCategoryIndex > 0) {
          // Moverse a la categoría anterior
          const prevCategory = categoriesWithResults[currentCategoryIndex - 1]
          setFocusedCategory(prevCategory)
          setFocusedIndex(searchResults[prevCategory].length - 1)
        }
      }
    } else if (e.key === "Enter" && focusedCategory !== null && focusedIndex !== -1) {
      // Navegar al resultado seleccionado
      const selectedResult = searchResults[focusedCategory][focusedIndex]
      if (selectedResult) {
        router.push(selectedResult.url)
        setShowResults(false)
        setSearchTerm("")
      }
    } else if (e.key === "Escape") {
      // Cerrar resultados
      setShowResults(false)
    }
  }

  // Verificar si hay resultados
  const hasResults = Object.values(searchResults).some((category) => category.length > 0)

  // Contar resultados totales
  const totalResults = Object.values(searchResults).reduce((total, category) => total + category.length, 0)

  // Limitar resultados por categoría para la vista previa
  const getPreviewResults = (category: SearchCategory) => {
    return searchResults[category].slice(0, 3)
  }

  // Verificar si hay más resultados de los que se muestran
  const hasMoreResults = (category: SearchCategory) => {
    return searchResults[category].length > 3
  }

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <Input
          type="search"
          placeholder="Buscar..."
          className="pr-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (searchTerm.length >= 2) setShowResults(true)
          }}
        />
        {searchTerm ? (
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 hover:text-gray-600"
            onClick={() => {
              setSearchTerm("")
              setShowResults(false)
            }}
          >
            <X className="h-4 w-4" />
          </button>
        ) : (
          <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        )}
      </div>

      {/* Resultados de búsqueda */}
      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-50 max-h-[80vh] overflow-y-auto">
          {hasResults ? (
            <div className="p-2">
              <div className="text-xs text-gray-500 px-2 py-1">
                {totalResults} resultado{totalResults !== 1 ? "s" : ""} para &quot;{searchTerm}&quot;
              </div>

              {(Object.keys(searchResults) as SearchCategory[]).map((category) => {
                if (searchResults[category].length === 0) return null

                return (
                  <div key={category} className="mb-2">
                    <div className="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-50">
                      {categoryIcons[category]}
                      <span className="ml-1">{categoryLabels[category]}</span>
                    </div>
                    <ul>
                      {getPreviewResults(category).map((result, index) => (
                        <li key={result.url}>
                          <Link
                            href={result.url}
                            className={`block px-3 py-2 text-sm hover:bg-gray-100 ${
                              focusedCategory === category && focusedIndex === index ? "bg-gray-100" : ""
                            }`}
                            onClick={() => {
                              setShowResults(false)
                              setSearchTerm("")
                            }}
                          >
                            {result.title}
                          </Link>
                        </li>
                      ))}
                      {hasMoreResults(category) && (
                        <li className="px-3 py-1">
                          <Link
                            href={`/busqueda?q=${encodeURIComponent(searchTerm)}&categoria=${category}`}
                            className="text-xs text-red-700 hover:underline"
                            onClick={() => {
                              setShowResults(false)
                            }}
                          >
                            Ver más resultados en {categoryLabels[category]}...
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                )
              })}

              <div className="mt-2 pt-2 border-t border-gray-100">
                <Link
                  href={`/busqueda?q=${encodeURIComponent(searchTerm)}`}
                  className="flex items-center justify-center px-3 py-2 text-sm text-red-700 hover:bg-gray-50 rounded"
                  onClick={() => {
                    setShowResults(false)
                  }}
                >
                  <Search className="h-4 w-4 mr-1" />
                  Ver todos los resultados
                </Link>
              </div>
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              No se encontraron resultados para &quot;{searchTerm}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  )
}
