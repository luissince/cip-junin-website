import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, FileText, Download, Search, Calendar, Users, DollarSign } from "lucide-react"

export default function PortalTransparenciaPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Portal de Transparencia</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Portal de Transparencia</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Accede a la información pública del Colegio de Ingenieros del Perú - Consejo Departamental Junín.
          </p>
        </div>

        {/* Banner */}
        <div className="relative rounded-lg overflow-hidden mb-12">
          <Image
            src="/placeholder.svg?height=400&width=1200&text=Transparencia+Institucional"
            alt="Portal de Transparencia"
            width={1200}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
            <div className="max-w-xl text-white">
              <h2 className="text-3xl font-bold mb-4">Transparencia Institucional</h2>
              <p className="mb-6">
                El CIP CD Junín está comprometido con la transparencia en su gestión, poniendo a disposición de los
                colegiados y el público en general la información relevante sobre su administración.
              </p>
              <Button className="bg-red-700 hover:bg-red-800 text-white">Conoce más</Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Categorías</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/portal-transparencia/normativa"
                    className="flex items-center text-gray-600 hover:text-red-700"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Normativa Institucional
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portal-transparencia/presupuesto"
                    className="flex items-center text-gray-600 hover:text-red-700"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Presupuesto y Finanzas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portal-transparencia/adquisiciones"
                    className="flex items-center text-gray-600 hover:text-red-700"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Adquisiciones y Contrataciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portal-transparencia/acuerdos"
                    className="flex items-center text-gray-600 hover:text-red-700"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Acuerdos y Actas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portal-transparencia/memorias"
                    className="flex items-center text-gray-600 hover:text-red-700"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Memorias Institucionales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portal-transparencia/directorio"
                    className="flex items-center text-gray-600 hover:text-red-700"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Directorio de Funcionarios
                  </Link>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Solicitud de Información</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Si no encuentras la información que buscas, puedes solicitarla a través de nuestro formulario.
                </p>
                <Link href="/portal-transparencia/solicitud">
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Solicitar Información</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Documentos Recientes</h2>
                <div className="flex items-center text-sm">
                  <Search className="h-4 w-4 mr-1 text-gray-400" />
                  <span className="text-gray-500">Buscar documentos</span>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Memoria Anual 2022",
                    date: "15 Marzo, 2023",
                    category: "Memorias Institucionales",
                    size: "4.2 MB",
                  },
                  {
                    title: "Estados Financieros 2022",
                    date: "28 Febrero, 2023",
                    category: "Presupuesto y Finanzas",
                    size: "2.8 MB",
                  },
                  {
                    title: "Plan Anual de Adquisiciones 2023",
                    date: "10 Enero, 2023",
                    category: "Adquisiciones y Contrataciones",
                    size: "1.5 MB",
                  },
                  {
                    title: "Acta de Asamblea General Ordinaria",
                    date: "5 Enero, 2023",
                    category: "Acuerdos y Actas",
                    size: "3.1 MB",
                  },
                  {
                    title: "Reglamento de Ética Profesional (Actualizado)",
                    date: "20 Diciembre, 2022",
                    category: "Normativa Institucional",
                    size: "1.2 MB",
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
                          <span className="mr-3">{doc.date}</span>
                          <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                            {doc.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="shrink-0 flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span className="text-xs">{doc.size}</span>
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button variant="outline">Ver todos los documentos</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-red-700 mr-2" />
                  <h3 className="text-xl font-bold">Organigrama</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Conoce la estructura organizativa del CIP CD Junín, sus órganos de gobierno y áreas administrativas.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Organigrama"
                  alt="Organigrama"
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <Link href="/portal-transparencia/organigrama">
                  <Button variant="outline" className="w-full">
                    Ver Organigrama Completo
                  </Button>
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-6 w-6 text-red-700 mr-2" />
                  <h3 className="text-xl font-bold">Ejecución Presupuestal</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Información sobre la ejecución del presupuesto institucional, ingresos, gastos e inversiones.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Presupuesto 2023:</span>
                    <span className="text-sm">S/. 2,500,000.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Ejecutado (Junio 2023):</span>
                    <span className="text-sm">S/. 1,250,000.00</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-red-700 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                  <div className="text-right text-xs text-gray-500 mt-1">50% ejecutado</div>
                </div>
                <Link href="/portal-transparencia/presupuesto">
                  <Button variant="outline" className="w-full">
                    Ver Detalle Presupuestal
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-red-800">Ley de Transparencia y Acceso a la Información</h3>
              <p className="text-gray-700 mb-4">
                El CIP CD Junín cumple con la Ley N° 27806 - Ley de Transparencia y Acceso a la Información Pública, que
                promueve la transparencia en la gestión de las entidades y regula el derecho de acceso a la información.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/portal-transparencia/ley">
                  <Button variant="outline" className="w-full">
                    Conocer la Ley
                  </Button>
                </Link>
                <Link href="/portal-transparencia/procedimiento">
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Procedimiento de Solicitud</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
