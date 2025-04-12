import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Shield, AlertTriangle, FileText, Users } from "lucide-react"

export default function EticaPage() {
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
          <span className="text-gray-900 font-medium">Ética Profesional</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Ética Profesional</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce los principios éticos que rigen la conducta profesional de los ingenieros colegiados en el Perú.
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
                  <Link href="/institucional/etica" className="flex items-center text-red-700 font-medium">
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
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-8">
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Ética+Profesional"
                  alt="Ética Profesional"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6">Código de Ética del CIP</h2>
              <p className="text-gray-600 mb-6">
                El Código de Ética del Colegio de Ingenieros del Perú establece los principios y valores que deben guiar
                la conducta profesional de los ingenieros colegiados. Este código es de cumplimiento obligatorio para
                todos los miembros de la orden y su incumplimiento puede dar lugar a sanciones disciplinarias.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-red-700 mr-2" />
                  Principios Fundamentales
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Integridad:</span>
                      <p className="text-sm text-gray-600">
                        Actuar con honestidad, lealtad y transparencia en todas las actividades profesionales.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Responsabilidad:</span>
                      <p className="text-sm text-gray-600">
                        Asumir las consecuencias de las decisiones tomadas y responder por los actos profesionales.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Competencia:</span>
                      <p className="text-sm text-gray-600">
                        Mantener y mejorar continuamente los conocimientos y habilidades profesionales.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Independencia:</span>
                      <p className="text-sm text-gray-600">
                        Ejercer la profesión con autonomía, evitando influencias indebidas en el juicio profesional.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Respeto:</span>
                      <p className="text-sm text-gray-600">
                        Tratar con dignidad y consideración a colegas, clientes, empleados y a la sociedad en general.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-6">Tribunal de Ética</h2>
              <p className="text-gray-600 mb-6">
                El Tribunal de Ética es el órgano encargado de velar por el cumplimiento del Código de Ética del CIP.
                Este tribunal tiene la facultad de investigar y sancionar las infracciones éticas cometidas por los
                ingenieros colegiados.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-lg p-5">
                  <h3 className="font-bold mb-3 flex items-center">
                    <Users className="h-5 w-5 text-red-700 mr-2" />
                    Composición del Tribunal
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    El Tribunal de Ética está compuesto por ingenieros de reconocida trayectoria profesional y ética,
                    elegidos por la Asamblea Departamental.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Presidente: Ing. Ricardo Mendoza</li>
                    <li>• Vicepresidente: Ing. Laura Sánchez</li>
                    <li>• Secretario: Ing. Miguel Torres</li>
                    <li>• Vocales (3)</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-5">
                  <h3 className="font-bold mb-3 flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-700 mr-2" />
                    Procedimiento de Denuncias
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Cualquier persona puede presentar una denuncia por infracciones al Código de Ética siguiendo el
                    procedimiento establecido.
                  </p>
                  <Link href="/institucional/etica/denuncias">
                    <Button variant="outline" size="sm" className="w-full">
                      Ver procedimiento de denuncias
                    </Button>
                  </Link>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">Infracciones y Sanciones</h2>
              <p className="text-gray-600 mb-6">
                Las infracciones al Código de Ética pueden ser leves, graves o muy graves, y pueden dar lugar a las
                siguientes sanciones:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2 text-left">Tipo de Infracción</th>
                      <th className="border px-4 py-2 text-left">Sanciones</th>
                      <th className="border px-4 py-2 text-left">Ejemplos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 font-medium">Leve</td>
                      <td className="border px-4 py-2">Amonestación escrita</td>
                      <td className="border px-4 py-2 text-sm text-gray-600">
                        Incumplimiento de deberes formales, falta de respeto a colegas
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-medium">Grave</td>
                      <td className="border px-4 py-2">Suspensión temporal (hasta 6 meses)</td>
                      <td className="border px-4 py-2 text-sm text-gray-600">
                        Negligencia profesional, conflicto de intereses no declarado
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-medium">Muy Grave</td>
                      <td className="border px-4 py-2">Suspensión prolongada o expulsión</td>
                      <td className="border px-4 py-2 text-sm text-gray-600">
                        Fraude, corrupción, falsificación de documentos
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-red-800 mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Descarga el Código de Ética Completo
                </h3>
                <p className="text-gray-700 mb-4">
                  Puedes descargar el Código de Ética del CIP completo en formato PDF para su consulta detallada.
                </p>
                <Button className="bg-red-700 hover:bg-red-800 text-white w-full">
                  Descargar Código de Ética (PDF)
                </Button>
              </div>

              <h2 className="text-2xl font-bold mb-6">Capacitación en Ética Profesional</h2>
              <p className="text-gray-600 mb-6">
                El CIP CD Junín organiza regularmente cursos, talleres y conferencias sobre ética profesional para
                promover la práctica ética de la ingeniería entre sus miembros.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Próximo Taller</h3>
                  <p className="text-sm text-gray-600 mb-2">"Ética en la Ingeniería: Desafíos Contemporáneos"</p>
                  <p className="text-sm text-gray-500">Fecha: 15 de Julio, 2023 | 18:00 hrs</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Curso Virtual</h3>
                  <p className="text-sm text-gray-600 mb-2">"Responsabilidad Social del Ingeniero"</p>
                  <p className="text-sm text-gray-500">Disponible en el Aula Virtual</p>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Link href="/institucional/documentos">
                  <Button variant="outline" className="flex items-center">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Documentos Normativos
                  </Button>
                </Link>
                <Link href="/institucional/directorio">
                  <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                    Directorio <ChevronRight className="ml-2 h-4 w-4" />
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
