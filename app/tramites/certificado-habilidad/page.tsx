import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, FileText, CreditCard, Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function CertificadoHabilidadPage() {
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
          <span className="text-gray-900 font-medium">Certificado de Habilidad</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Certificado de Habilidad</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            El Certificado de Habilidad es el documento que acredita que el ingeniero se encuentra habilitado para el
            ejercicio profesional.
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
                  <Link href="/tramites/certificado-habilidad" className="flex items-center text-red-700 font-medium">
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
                  Para obtener el Certificado de Habilidad, es necesario estar al día en sus cuotas ordinarias y no
                  tener deudas pendientes con el CIP.
                </p>
              </div>

              <div className="mt-6">
                <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Verificar Habilidad</Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800&text=Certificado+de+Habilidad"
                alt="Certificado de Habilidad"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">¿Qué es el Certificado de Habilidad?</h2>
                <p className="text-gray-600 mb-6">
                  El Certificado de Habilidad es el documento oficial emitido por el Colegio de Ingenieros del Perú que
                  acredita que un ingeniero colegiado se encuentra habilitado para el ejercicio profesional. Este
                  certificado es requerido para firmar planos, documentos técnicos, participar en licitaciones,
                  concursos públicos y otros trámites oficiales.
                </p>

                <h2 className="text-2xl font-bold mb-4">Tipos de Certificados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">Certificado de Obra</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Para la firma de planos, memorias descriptivas y otros documentos técnicos relacionados con obras.
                    </p>
                    <p className="text-sm font-medium text-red-700">Costo: S/. 50.00</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">Certificado de Proyecto</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Para la firma de proyectos, estudios técnicos y documentos relacionados con la fase de diseño.
                    </p>
                    <p className="text-sm font-medium text-red-700">Costo: S/. 50.00</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">Certificado de Supervisión</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Para acreditar la habilidad en actividades de supervisión y fiscalización de obras.
                    </p>
                    <p className="text-sm font-medium text-red-700">Costo: S/. 50.00</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">Certificado de Consultoría</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Para servicios de consultoría, asesoría técnica y peritajes.
                    </p>
                    <p className="text-sm font-medium text-red-700">Costo: S/. 50.00</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Pasos para obtener el Certificado</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Verificar estado de habilidad</h3>
                      <p className="text-gray-600 text-sm">
                        Asegúrese de estar al día en sus cuotas ordinarias y no tener deudas pendientes con el CIP.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Realizar el pago correspondiente</h3>
                      <p className="text-gray-600 text-sm">
                        Puede realizar el pago en línea a través de nuestra plataforma o en las oficinas del CIP Junín.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Solicitar el certificado</h3>
                      <p className="text-gray-600 text-sm">
                        Complete el formulario en línea indicando el tipo de certificado que requiere y el propósito del
                        mismo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Recibir el certificado</h3>
                      <p className="text-gray-600 text-sm">
                        El certificado digital estará disponible para su descarga inmediatamente después de la
                        verificación del pago.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Información Adicional</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <FileText className="h-10 w-10 text-red-700 mb-2" />
                    <h3 className="font-bold text-center mb-1">Formato Digital</h3>
                    <p className="text-gray-600 text-sm text-center">Certificado con firma digital válida legalmente</p>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <CreditCard className="h-10 w-10 text-red-700 mb-2" />
                    <h3 className="font-bold text-center mb-1">Formas de Pago</h3>
                    <p className="text-gray-600 text-sm text-center">Tarjeta, transferencia o efectivo</p>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <Clock className="h-10 w-10 text-red-700 mb-2" />
                    <h3 className="font-bold text-center mb-1">Tiempo de Entrega</h3>
                    <p className="text-gray-600 text-sm text-center">Inmediato (digital) / 24h (físico)</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="font-bold flex items-center mb-4">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Verificación de Autenticidad
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Todos los certificados de habilidad emitidos por el CIP Junín cuentan con un código QR y un código
                    de verificación que permite comprobar su autenticidad en nuestro portal web.
                  </p>
                  <Link href="/verificar-certificado">
                    <Button variant="outline" className="w-full">
                      Verificar Certificado
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link href="/tramites/solicitar-certificado">
                    <Button className="bg-red-700 hover:bg-red-800 text-white w-full">
                      Solicitar Certificado en Línea
                    </Button>
                  </Link>
                  <Link href="/tramites/certificado-habilidad/preguntas-frecuentes">
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
                  <Link href="/tramites/colegiatura">
                    <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                      Colegiatura <ChevronRight className="ml-2 h-4 w-4" />
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
