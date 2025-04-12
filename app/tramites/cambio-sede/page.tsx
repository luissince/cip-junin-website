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

export default function CambioSedePage() {
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
          <span className="text-gray-900 font-medium">Cambio de Sede</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Cambio de Sede</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Procedimiento para trasladar tu registro de un Consejo Departamental a otro dentro del Colegio de Ingenieros
            del Perú.
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
                  <Link href="/tramites/colegiatura" className="flex items-center text-gray-600 hover:text-red-700">
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
                  <Link href="/tramites/cambio-sede" className="flex items-center text-red-700 font-medium">
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
                  Para solicitar el cambio de sede, es necesario estar al día en sus cuotas ordinarias y no tener deudas
                  pendientes con el CIP.
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
                src="/placeholder.svg?height=400&width=800&text=Cambio+de+Sede"
                alt="Cambio de Sede"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">¿Qué es el Cambio de Sede?</h2>
                <p className="text-gray-600 mb-6">
                  El Cambio de Sede es el procedimiento mediante el cual un ingeniero colegiado solicita el traslado de
                  su registro de un Consejo Departamental a otro dentro del Colegio de Ingenieros del Perú. Este trámite
                  es necesario cuando el colegiado cambia su residencia o lugar de trabajo a otra región del país.
                </p>

                <h2 className="text-2xl font-bold mb-4">Requisitos para el Cambio de Sede</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Estar Habilitado</h3>
                      <p className="text-gray-600 text-sm">
                        Estar al día en el pago de las cuotas ordinarias y no tener deudas pendientes con el CIP.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Constancia de No Adeudo</h3>
                      <p className="text-gray-600 text-sm">
                        Obtener una Constancia de No Adeudo del Consejo Departamental de origen.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Documentos de Identidad</h3>
                      <p className="text-gray-600 text-sm">
                        DNI vigente que acredite el cambio de domicilio o documento que justifique el cambio de sede.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Pago de Derechos</h3>
                      <p className="text-gray-600 text-sm">Comprobante de pago por derecho de cambio de sede.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="font-bold mb-4">Documentos a Presentar</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>
                        Solicitud de cambio de sede dirigida al Decano Departamental (formato proporcionado por el CIP).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Constancia de No Adeudo del Consejo Departamental de origen.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Copia simple del DNI o documento que justifique el cambio de sede.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Comprobante de pago por derecho de cambio de sede.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Ficha de actualización de datos (formato proporcionado por el CIP).</span>
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

                <h2 className="text-2xl font-bold mb-4">Procedimiento de Cambio de Sede</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Solicitud de Constancia de No Adeudo</h3>
                      <p className="text-gray-600 text-sm">
                        Solicitar la Constancia de No Adeudo en el Consejo Departamental de origen.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Presentación de Documentos</h3>
                      <p className="text-gray-600 text-sm">
                        Presentar todos los documentos requeridos en la oficina del Consejo Departamental de destino o a
                        través de la plataforma virtual.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Verificación de Documentos</h3>
                      <p className="text-gray-600 text-sm">
                        El Consejo Departamental de destino verificará la documentación y la situación del colegiado.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Aprobación del Cambio</h3>
                      <p className="text-gray-600 text-sm">
                        Una vez verificados los documentos, el Consejo Departamental de destino aprobará el cambio de
                        sede.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      5
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Actualización de Registro</h3>
                      <p className="text-gray-600 text-sm">
                        Se actualizará el registro del colegiado en el sistema nacional del CIP.
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
                        <td className="border px-4 py-2 font-medium">Derecho de Cambio de Sede</td>
                        <td className="border px-4 py-2">S/. 150.00</td>
                        <td className="border px-4 py-2 text-sm text-gray-600">Pago único por el trámite</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-medium">Constancia de No Adeudo</td>
                        <td className="border px-4 py-2">S/. 50.00</td>
                        <td className="border px-4 py-2 text-sm text-gray-600">
                          Se paga en el Consejo Departamental de origen
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
                    Todos los documentos emitidos por el CIP CD Junín cuentan con código QR y firma digital que permite
                    verificar su autenticidad en tiempo real. Estos documentos son válidos tanto en formato físico como
                    digital.
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
                    <p className="text-gray-600 text-sm text-center">7 días hábiles aproximadamente</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link href="/tramites/iniciar-cambio-sede">
                    <Button className="bg-red-700 hover:bg-red-800 text-white w-full">
                      Iniciar Trámite de Cambio de Sede
                    </Button>
                  </Link>
                  <Link href="/tramites/cambio-sede/preguntas-frecuentes">
                    <Button variant="outline" className="w-full">
                      Preguntas Frecuentes
                    </Button>
                  </Link>
                </div>

                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Link href="/tramites/certificado-habilidad">
                    <Button variant="outline" className="flex items-center">
                      <ChevronLeft className="mr-2 h-4 w-4" /> Certificado de Habilidad
                    </Button>
                  </Link>
                  <Link href="/tramites/duplicado-carnet">
                    <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                      Duplicado de Carnet <ChevronRight className="ml-2 h-4 w-4" />
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
