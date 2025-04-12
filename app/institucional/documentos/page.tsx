import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, FileText, Download, Search, Calendar, ExternalLink } from "lucide-react"

export default function DocumentosPage() {
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
          <span className="text-gray-900 font-medium">Documentos Normativos</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Documentos Normativos</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Accede a los documentos normativos que rigen el funcionamiento del Colegio de Ingenieros del Perú - Consejo
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
                  <Link href="/institucional/documentos" className="flex items-center text-red-700 font-medium">
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

              <div className="mt-8">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Buscar documentos..."
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Documentos Nacionales</h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Estatuto del Colegio de Ingenieros del Perú",
                    date: "Actualizado: 15 Marzo, 2022",
                    description:
                      "Documento que establece la organización, funciones y atribuciones del CIP a nivel nacional.",
                    size: "2.5 MB",
                  },
                  {
                    title: "Reglamento General del CIP",
                    date: "Actualizado: 10 Enero, 2022",
                    description: "Normas que regulan el funcionamiento del Colegio de Ingenieros del Perú.",
                    size: "3.1 MB",
                  },
                  {
                    title: "Código de Ética del CIP",
                    date: "Actualizado: 5 Mayo, 2021",
                    description: "Principios éticos que rigen la conducta profesional de los ingenieros colegiados.",
                    size: "1.2 MB",
                  },
                  {
                    title: "Reglamento de Elecciones Generales",
                    date: "Actualizado: 20 Julio, 2022",
                    description: "Normas que regulan los procesos electorales para la elección de autoridades del CIP.",
                    size: "1.8 MB",
                  },
                ].map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start">
                      <FileText className="h-10 w-10 text-red-700 mr-4 shrink-0" />
                      <div>
                        <h3 className="font-bold">{doc.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{doc.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="shrink-0 flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span className="text-xs">{doc.size}</span>
                    </Button>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6">Documentos Departamentales</h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Reglamento Interno CD Junín",
                    date: "Actualizado: 5 Febrero, 2023",
                    description: "Normas específicas que regulan el funcionamiento del Consejo Departamental Junín.",
                    size: "1.7 MB",
                  },
                  {
                    title: "Manual de Organización y Funciones",
                    date: "Actualizado: 12 Abril, 2023",
                    description: "Descripción de la estructura organizativa y funciones de cada área del CD Junín.",
                    size: "2.3 MB",
                  },
                  {
                    title: "Reglamento de Capítulos Profesionales",
                    date: "Actualizado: 8 Junio, 2022",
                    description: "Normas que regulan el funcionamiento de los capítulos profesionales del CD Junín.",
                    size: "1.5 MB",
                  },
                  {
                    title: "Directiva de Certificados de Habilidad",
                    date: "Actualizado: 20 Enero, 2023",
                    description: "Procedimientos para la emisión de certificados de habilidad profesional.",
                    size: "1.1 MB",
                  },
                  {
                    title: "Plan Estratégico Institucional 2022-2026",
                    date: "Publicado: 15 Diciembre, 2021",
                    description: "Objetivos estratégicos y líneas de acción del CD Junín para el período 2022-2026.",
                    size: "3.5 MB",
                  },
                ].map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start">
                      <FileText className="h-10 w-10 text-red-700 mr-4 shrink-0" />
                      <div>
                        <h3 className="font-bold">{doc.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{doc.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="shrink-0 flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span className="text-xs">{doc.size}</span>
                    </Button>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6">Leyes y Normativas</h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Ley N° 24648 - Ley del Colegio de Ingenieros del Perú",
                    date: "Publicada: 20 Enero, 1987",
                    description:
                      "Ley que crea el Colegio de Ingenieros del Perú como institución autónoma con personería jurídica.",
                    external: true,
                  },
                  {
                    title: "Ley N° 28858 - Ley que complementa la Ley N° 16053",
                    date: "Publicada: 13 Julio, 2006",
                    description: "Ley que regula el trabajo de los ingenieros y la colegiatura obligatoria.",
                    external: true,
                  },
                  {
                    title: "Decreto Supremo N° 016-2008-VIVIENDA",
                    date: "Publicado: 5 Junio, 2008",
                    description: "Reglamento de la Ley N° 28858 que regula la actividad profesional de los ingenieros.",
                    external: true,
                  },
                ].map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start">
                      <FileText className="h-10 w-10 text-blue-700 mr-4 shrink-0" />
                      <div>
                        <h3 className="font-bold">{doc.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{doc.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="shrink-0 flex items-center">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span className="text-xs">Ver en línea</span>
                    </Button>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold mb-4">Validación de Documentos</h3>
                <p className="text-gray-600 mb-4">
                  Todos los documentos oficiales del CIP CD Junín cuentan con firma digital y código QR para verificar
                  su autenticidad. Puede validar cualquier documento a través de nuestro sistema de verificación en
                  línea.
                </p>
                <Link href="/verificar-documento">
                  <Button variant="outline" className="w-full">
                    Verificar Autenticidad de Documentos
                  </Button>
                </Link>
              </div>

              <div className="flex justify-between mt-8">
                <Link href="/institucional/directivos">
                  <Button variant="outline" className="flex items-center">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Directivos
                  </Button>
                </Link>
                <Link href="/institucional/etica">
                  <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                    Ética Profesional <ChevronRight className="ml-2 h-4 w-4" />
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
