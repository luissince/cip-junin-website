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

export default function ConstanciaNoAdeudoPage() {
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
          <span className="text-gray-900 font-medium">Constancia de No Adeudo</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Constancia de No Adeudo</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Documento que certifica que el ingeniero colegiado no tiene deudas pendientes con el Colegio de Ingenieros
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
                  <Link href="/tramites/constancia-no-adeudo" className="flex items-center text-red-700 font-medium">
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
                  La Constancia de No Adeudo es un requisito indispensable para realizar trámites como cambio de sede,
                  renuncia al CIP o para fines personales del colegiado.
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
                src="/placeholder.svg?height=400&width=800&text=Constancia+de+No+Adeudo"
                alt="Constancia de No Adeudo"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">¿Qué es la Constancia de No Adeudo?</h2>
                <p className="text-gray-600 mb-6">
                  La Constancia de No Adeudo es un documento oficial emitido por el Colegio de Ingenieros del Perú que
                  certifica que el ingeniero colegiado no tiene deudas pendientes con la institución. Este documento es
                  necesario para realizar diversos trámites como cambio de sede, renuncia al CIP o para fines personales
                  del colegiado.
                </p>

                <h2 className="text-2xl font-bold mb-4">Requisitos para la Constancia de No Adeudo</h2>
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
                      <h3 className="font-bold mb-1">Solicitud</h3>
                      <p className="text-gray-600 text-sm">
                        Presentar la solicitud de Constancia de No Adeudo indicando el motivo o fin para el cual se
                        requiere.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Pago de Derechos</h3>
                      <p className="text-gray-600 text-sm">
                        Comprobante de pago por derecho de emisión de la Constancia de No Adeudo.
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
                        Solicitud de Constancia de No Adeudo dirigida al Decano Departamental (formato proporcionado por
                        el CIP).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Comprobante de pago por derecho de emisión de la Constancia de No Adeudo.</span>
                    </li>
                  </ul>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar Solicitud
                    </Button>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Procedimiento para obtener la Constancia</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Presentación de Documentos</h3>
                      <p className="text-gray-600 text-sm">
                        Presentar la solicitud y el comprobante de pago en la oficina del CIP CD Junín o a través de la
                        plataforma virtual.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Verificación de Estado de Cuenta</h3>
                      <p className="text-gray-600 text-sm">
                        El CIP verificará que el colegiado no tenga deudas pendientes por cuotas ordinarias, multas u
                        otros conceptos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Emisión de la Constancia</h3>
                      <p className="text-gray-600 text-sm">
                        Una vez verificado que no existen deudas, se procederá a la emisión de la Constancia de No
                        Adeudo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Entrega de la Constancia</h3>
                      <p className="text-gray-600 text-sm">
                        La constancia estará disponible para su recojo en las oficinas del CIP CD Junín o podrá ser
                        descargada en formato digital con firma electrónica a través de la plataforma virtual.
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
                        <td className="border px-4 py-2 font-medium">Constancia de No Adeudo</td>
                        <td className="border px-4 py-2">S/. 50.00</td>
                        <td className="border px-4 py-2 text-sm text-gray-600">
                          Incluye versión física y digital con firma electrónica
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
                    Todas las constancias emitidas por el CIP CD Junín cuentan con código QR y firma digital que permite
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
                      <h4 className="font-bold mb-2">Verificación de Documento</h4>
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
                    <p className="text-gray-600 text-sm text-center">3 días hábiles aproximadamente</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link href="/tramites/iniciar-constancia-no-adeudo">
                    <Button className="bg-red-700 hover:bg-red-800 text-white w-full">
                      Iniciar Trámite de Constancia
                    </Button>
                  </Link>
                  <Link href="/tramites/constancia-no-adeudo/preguntas-frecuentes">
                    <Button variant="outline" className="w-full">
                      Preguntas Frecuentes
                    </Button>
                  </Link>
                </div>

                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Link href="/tramites/duplicado-carnet">
                    <Button variant="outline" className="flex items-center">
                      <ChevronLeft className="mr-2 h-4 w-4" /> Duplicado de Carnet
                    </Button>
                  </Link>
                  <Link href="/tramites">
                    <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                      Ver todos los Trámites <ChevronRight className="ml-2 h-4 w-4" />
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
