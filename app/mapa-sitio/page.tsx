import { ArrowLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function MapaSitio() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-red-700 hover:text-red-800 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al inicio
        </Link>
      </div>

      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b">Mapa del Sitio</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sección Institucional */}
          <div>
            <h2 className="text-xl font-bold text-red-700 mb-4">Institucional</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/institucional/quienes-somos"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/institucional/directivos"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Directivos
                </Link>
              </li>
              <li>
                <Link
                  href="/institucional/comisiones"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Comisiones
                </Link>
              </li>
              <li>
                <Link
                  href="/institucional/directorio"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Directorio
                </Link>
              </li>
              <li>
                <Link
                  href="/institucional/documentos"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Documentos
                </Link>
              </li>
              <li>
                <Link
                  href="/institucional/etica"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ética Profesional
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección Trámites */}
          <div>
            <h2 className="text-xl font-bold text-red-700 mb-4">Trámites</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tramites/colegiatura"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Colegiatura
                </Link>
              </li>
              <li>
                <Link
                  href="/tramites/certificado-habilidad"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Certificado de Habilidad
                </Link>
              </li>
              <li>
                <Link
                  href="/tramites/cambio-sede"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Cambio de Sede
                </Link>
              </li>
              <li>
                <Link
                  href="/tramites/duplicado-carnet"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Duplicado de Carnet
                </Link>
              </li>
              <li>
                <Link
                  href="/tramites/constancia-no-adeudo"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Constancia de No Adeudo
                </Link>
              </li>
              <li>
                <Link
                  href="/tramites/solicitud-ambientes"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Solicitud de Ambientes
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección Capítulos */}
          <div>
            <h2 className="text-xl font-bold text-red-700 mb-4">Capítulos Profesionales</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/capitulos/civil"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ingeniería Civil
                </Link>
              </li>
              <li>
                <Link
                  href="/capitulos/sistemas"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ingeniería de Sistemas
                </Link>
              </li>
              <li>
                <Link
                  href="/capitulos/electrica"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ingeniería Eléctrica
                </Link>
              </li>
              <li>
                <Link
                  href="/capitulos/mecanica"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ingeniería Mecánica
                </Link>
              </li>
              <li>
                <Link
                  href="/capitulos/industrial"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ingeniería Industrial
                </Link>
              </li>
              <li>
                <Link
                  href="/capitulos/minas"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ingeniería de Minas
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección Capacitaciones */}
          <div>
            <h2 className="text-xl font-bold text-red-700 mb-4">Capacitaciones</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/capacitaciones"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Capacitaciones
                </Link>
              </li>
              <li>
                <Link
                  href="/capacitaciones/cursos"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Cursos
                </Link>
              </li>
              <li>
                <Link
                  href="/capacitaciones/convenios"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Convenios
                </Link>
              </li>
              <li>
                <Link
                  href="/capacitaciones/aula-virtual"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Aula Virtual
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección Eventos */}
          <div>
            <h2 className="text-xl font-bold text-red-700 mb-4">Eventos</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/eventos" className="text-gray-700 hover:text-red-700 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/eventos/proximos"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Próximos Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección Sala de Prensa */}
          <div>
            <h2 className="text-xl font-bold text-red-700 mb-4">Sala de Prensa</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sala-prensa/noticias"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Noticias
                </Link>
              </li>
              <li>
                <Link
                  href="/sala-prensa/comunicados"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Comunicados
                </Link>
              </li>
              <li>
                <Link
                  href="/sala-prensa/ingeniero-semana"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ingeniero de la Semana
                </Link>
              </li>
              <li>
                <Link
                  href="/sala-prensa/cip-tv"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  CIP TV
                </Link>
              </li>
              <li>
                <Link
                  href="/sala-prensa/galeria"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección Beneficios */}
          <div>
            <h2 className="text-xl font-bold text-red-700 mb-4">Beneficios</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/beneficios"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Beneficios
                </Link>
              </li>
              <li>
                <Link
                  href="/beneficios#seguros"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Seguros
                </Link>
              </li>
              <li>
                <Link
                  href="/beneficios#seguridad-social"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Seguridad Social
                </Link>
              </li>
              <li>
                <Link
                  href="/beneficios#capacitacion"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Capacitación
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección Alquiler de Ambientes */}
          <div>
            <h2 className="text-xl font-bold text-red-700 mb-4">Alquiler de Ambientes</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/alquiler-ambientes"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Alquiler de Ambientes
                </Link>
              </li>
              <li>
                <Link
                  href="/tramites/solicitud-ambientes"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Solicitud de Ambientes
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección Verificar Habilidad */}
          <div>
            <h2 className="text-xl font-bold text-red-700 mb-4">Verificar Habilidad</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/verificar-habilidad"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Verificar Habilidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección Otros */}
          <div>
            <h2 className="text-xl font-bold text-red-700 mb-4">Otros</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/contacto" className="text-gray-700 hover:text-red-700 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/intranet" className="text-gray-700 hover:text-red-700 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Intranet
                </Link>
              </li>
              <li>
                <Link
                  href="/intranet/app"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  App Móvil
                </Link>
              </li>
              <li>
                <Link
                  href="/libro-reclamaciones"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Libro de Reclamaciones
                </Link>
              </li>
              <li>
                <Link
                  href="/portal-transparencia"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Portal de Transparencia
                </Link>
              </li>
              <li>
                <Link href="/busqueda" className="text-gray-700 hover:text-red-700 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Búsqueda
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección Legal */}
          <div>
            <h2 className="text-xl font-bold text-red-700 mb-4">Legal</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/politica-privacidad"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-condiciones"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/mapa-sitio"
                  className="text-gray-700 hover:text-red-700 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Mapa del Sitio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
