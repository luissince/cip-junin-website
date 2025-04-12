import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  ChevronLeft,
  FileText,
  CreditCard,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
} from "lucide-react"

export default function ColegiaturaPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/tramites" className="hover:text-red-700">
            Trámites
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Colegiatura</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Colegiatura</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La colegiatura es el proceso mediante el cual un ingeniero se incorpora al Colegio de Ingenieros del Perú,
            habilitándolo para el ejercicio legal de la profesión.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Trámites en Línea</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tramites/colegiatura" className="flex items-center text-red-700 font-medium">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Colegiatura
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tramites/certificado-habilidad"
                    className="flex items-center text-gray-600 hover:text-red-700"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Certificado de Habilidad
                  </Link>
                </li>
                <li>
                  <Link href="/tramites/cambio-sede" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Cambio de Sede
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tramites/duplicado-carnet"
                    className="flex items-center text-gray-600 hover:text-red-700"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Duplicado de Carnet
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tramites/constancia-no-adeudo"
                    className="flex items-center text-gray-600 hover:text-red-700"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Constancia de No Adeudo
                  </Link>
                </li>
              </ul>

              <div className="mt-8 bg-red-50 p-4 rounded-lg border border-red-100">
                <h4 className="font-bold text-red-800 mb-2 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Importante
                </h4>
                <p className="text-sm text-red-700">
                  La colegiatura es obligatoria para el ejercicio legal de la profesión de ingeniería en el Perú, según
                  la Ley N° 28858.
                </p>
              </div>

              <div className="mt-6">
                <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Iniciar Trámite en Línea</Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800&text=Colegiatura+CIP"
                alt="Colegiatura"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">¿Qué es la Colegiatura?</h2>
                <p className="text-gray-600 mb-6">
                  La colegiatura es el proceso mediante el cual un ingeniero titulado se incorpora al Colegio de
                  Ingenieros del Perú (CIP), obteniendo su número de registro y carnet que lo acredita como miembro de
                  la orden. Este proceso es obligatorio para el ejercicio legal de la profesión de ingeniería en el
                  Perú, según lo establecido en la Ley N° 28858.
                </p>

                <h2 className="text-2xl font-bold mb-4">Requisitos para la Colegiatura</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Título Profesional</h3>
                      <p className="text-gray-600 text-sm">
                        Título profesional de Ingeniero otorgado por una universidad peruana o título revalidado si es
                        del extranjero.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Documentos de Identidad</h3>
                      <p className="text-gray-600 text-sm">
                        DNI vigente (para peruanos) o Carnet de Extranjería (para extranjeros).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Fotografías</h3>
                      <p className="text-gray-600 text-sm">
                        Tres (3) fotografías tamaño pasaporte a color con fondo blanco.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Pago de Derechos</h3>
                      <p className="text-gray-600 text-sm">
                        Comprobante de pago por derecho de colegiatura y cuota de inscripción.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="font-bold mb-4">Documentos a Presentar</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>
                        Solicitud de colegiatura dirigida al Decano Departamental (formato proporcionado por el CIP).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Copia legalizada del Título Profesional.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Copia simple del DNI o Carnet de Extranjería.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Tres (3) fotografías tamaño pasaporte a color con fondo blanco.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Comprobante de pago por derecho de colegiatura.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Ficha de datos personales (formato proporcionado por el CIP).</span>
                    </li>
                  </ul>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar Solicitud
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar Ficha de Datos
                    </Button>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Procedimiento de Colegiatura</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Presentación de Documentos</h3>
                      <p className="text-gray-600 text-sm">
                        Presentar todos los documentos requeridos en la oficina del CIP CD Junín o a través de la
                        plataforma virtual.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Verificación de Documentos</h3>
                      <p className="text-gray-600 text-sm">
                        El CIP verificará la autenticidad de los documentos presentados y la validez del título
                        profesional.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Aprobación de la Solicitud</h3>
                      <p className="text-gray-600 text-sm">
                        Una vez verificados los documentos, el Consejo Departamental aprobará la solicitud de
                        colegiatura.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Juramentación</h3>
                      <p className="text-gray-600 text-sm">
                        Participar en la ceremonia de juramentación programada por el CIP CD Junín.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      5
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Entrega de Carnet y Diploma</h3>
                      <p className="text-gray-600 text-sm">
                        Recibir el carnet de colegiado y el diploma que acredita la incorporación al CIP.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Costos</h2>
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Concepto</th>
                        <th className="border px-4 py-2 text-left">Monto</th>
                        <th className="border px-4 py-2 text-left">Observaciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2 font-medium">Derecho de Colegiatura</td>
                        <td className="border px-4 py-2">S/. 1,200.00</td>
                        <td className="border px-4 py-2 text-sm text-gray-600">Pago único por incorporación al CIP</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-medium">Cuota Semestral</td>
                        <td className="border px-4 py-2">S/. 180.00</td>
                        <td className="border px-4 py-2 text-sm text-gray-600">
                          Primera cuota semestral (obligatoria)
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-medium">Carnet de Colegiado</td>
                        <td className="border px-4 py-2">S/. 50.00</td>
                        <td className="border px-4 py-2 text-sm text-gray-600">
                          Incluye carnet físico y digital con QR
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="font-bold flex items-center mb-4">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Validación Digital
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Todos los carnets y certificados emitidos por el CIP CD Junín cuentan con código QR y firma digital
                    que permite verificar su autenticidad en tiempo real. Estos documentos son válidos tanto en formato
                    físico como digital.
                  </p>
                  <div className="flex items-center justify-center p-4 border rounded-lg bg-white">
                    <Image
                      src="/placeholder.svg?height=150&width=150&text=QR+Code"
                      alt="Código QR de validación"
                      width={150}
                      height={150}
                      className="mr-6"
                    />
                    <div>
                      <h4 className="font-bold mb-2">Verificación de Documentos</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Escanea el código QR o ingresa el código de verificación en nuestra plataforma.
                      </p>
                      <Button variant="outline" size="sm">
                        Verificar Documento
                      </Button>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Información Adicional</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <FileText className="h-10 w-10 text-red-700 mb-2" />
                    <h3 className="font-bold text-center mb-1">Trámite Virtual</h3>
                    <p className="text-gray-600 text-sm text-center">Realiza tu trámite 100% en línea</p>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <CreditCard className="h-10 w-10 text-red-700 mb-2" />
                    <h3 className="font-bold text-center mb-1">Formas de Pago</h3>
                    <p className="text-gray-600 text-sm text-center">Tarjeta, transferencia o efectivo</p>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <Clock className="h-10 w-10 text-red-700 mb-2" />
                    <h3 className="font-bold text-center mb-1">Tiempo de Trámite</h3>
                    <p className="text-gray-600 text-sm text-center">15 días hábiles aproximadamente</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link href="/tramites/iniciar-colegiatura">
                    <Button className="bg-red-700 hover:bg-red-800 text-white w-full">
                      Iniciar Trámite de Colegiatura
                    </Button>
                  </Link>
                  <Link href="/tramites/colegiatura/preguntas-frecuentes">
                    <Button variant="outline" className="w-full">
                      Preguntas Frecuentes
                    </Button>
                  </Link>
                </div>

                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Link href="/tramites">
                    <Button variant="outline" className="flex items-center">
                      <ChevronLeft className="mr-2 h-4 w-4" /> Volver a Trámites
                    </Button>
                  </Link>
                  <Link href="/tramites/certificado-habilidad">
                    <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                      Certificado de Habilidad <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
