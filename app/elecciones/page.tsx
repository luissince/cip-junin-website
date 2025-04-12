import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, Clock, AlertCircle, CheckCircle, HelpCircle, FileText, Vote } from "lucide-react"

export default function EleccionesPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Elecciones</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Elecciones CIP CD Junín</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Información sobre el proceso electoral para la elección de autoridades del Colegio de Ingenieros del Perú -
            Consejo Departamental Junín.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-lg overflow-hidden mb-12">
          <Image
            src="/placeholder.svg?height=400&width=1200&text=Elecciones+CIP+Junín"
            alt="Elecciones CIP Junín"
            width={1200}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
            <div className="max-w-xl text-white">
              <h2 className="text-3xl font-bold mb-4">Voto Electrónico No Presencial</h2>
              <p className="mb-6">
                El CIP CD Junín ha implementado el sistema de Voto Electrónico No Presencial (VENP) para las elecciones
                de autoridades, permitiendo a los colegiados ejercer su derecho al voto de manera segura y desde
                cualquier lugar.
              </p>
              <Button className="bg-red-700 hover:bg-red-800 text-white">Conocer más sobre el VENP</Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Próximas Elecciones</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-red-700 mr-2" />
                  <div>
                    <h4 className="font-medium">Fecha de Elecciones:</h4>
                    <p className="text-gray-600">15 de Noviembre, 2024</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-red-700 mr-2" />
                  <div>
                    <h4 className="font-medium">Horario de Votación:</h4>
                    <p className="text-gray-600">8:00 am - 5:00 pm</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-6">
                <h4 className="font-bold text-red-800 mb-2 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Importante
                </h4>
                <p className="text-sm text-red-700">
                  Para poder ejercer su derecho al voto, debe estar habilitado y al día en sus cuotas ordinarias hasta
                  el mes de Octubre de 2024.
                </p>
              </div>

              <div className="space-y-2">
                <Link href="/elecciones/padron-electoral">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Consultar Padrón Electoral
                  </Button>
                </Link>
                <Link href="/elecciones/listas-candidatos">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Listas de Candidatos
                  </Button>
                </Link>
                <Link href="/elecciones/reglamento">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Reglamento Electoral
                  </Button>
                </Link>
                <Link href="/elecciones/resultados">
                  <Button variant="outline" className="w-full justify-start">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Resultados Anteriores
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Voto Electrónico No Presencial (VENP)</h2>
              <p className="text-gray-600 mb-6">
                El Colegio de Ingenieros del Perú ha implementado el sistema de Voto Electrónico No Presencial (VENP)
                para las elecciones de autoridades, en colaboración con la Oficina Nacional de Procesos Electorales
                (ONPE). Este sistema permite a los colegiados ejercer su derecho al voto de manera segura, confiable y
                desde cualquier lugar con acceso a internet.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Ventajas del VENP
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Facilidad para ejercer el voto desde cualquier lugar.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Mayor participación de los colegiados.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Resultados inmediatos y transparentes.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Seguridad y confidencialidad del voto.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Reducción de costos operativos.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold mb-3 flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Requisitos para Votar
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Estar habilitado y al día en sus cuotas ordinarias.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Contar con un dispositivo con acceso a internet (computadora, tablet o smartphone).</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>
                        Tener actualizado su correo electrónico y número de celular en la base de datos del CIP.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>Recibir las credenciales de acceso al sistema VENP.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">¿Cómo funciona el VENP?</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Recepción de Credenciales</h4>
                    <p className="text-gray-600 text-sm">
                      Días antes de la elección, recibirá un correo electrónico y un mensaje de texto con sus
                      credenciales de acceso al sistema VENP.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Ingreso al Sistema</h4>
                    <p className="text-gray-600 text-sm">
                      El día de la elección, ingrese al sistema VENP a través del enlace proporcionado, utilizando sus
                      credenciales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Emisión del Voto</h4>
                    <p className="text-gray-600 text-sm">
                      Seleccione la lista de candidatos de su preferencia y confirme su voto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Confirmación</h4>
                    <p className="text-gray-600 text-sm">
                      Recibirá una constancia de votación en su correo electrónico como comprobante de haber ejercido su
                      derecho al voto.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold mb-4">Seguridad del Sistema VENP</h3>
                <p className="text-gray-600 mb-4">
                  El sistema VENP cuenta con múltiples medidas de seguridad para garantizar la integridad,
                  confidencialidad y transparencia del proceso electoral:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                    <span>Cifrado de extremo a extremo para proteger la información.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                    <span>Autenticación de dos factores para verificar la identidad del votante.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                    <span>Auditoría en tiempo real del proceso electoral.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                    <span>Respaldo técnico de la ONPE, garantizando la transparencia del proceso.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mb-4">Cronograma Electoral</h3>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2 text-left">Actividad</th>
                      <th className="border px-4 py-2 text-left">Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Convocatoria a Elecciones</td>
                      <td className="border px-4 py-2">15 de Agosto, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Publicación del Padrón Electoral</td>
                      <td className="border px-4 py-2">1 de Septiembre, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Inscripción de Listas de Candidatos</td>
                      <td className="border px-4 py-2">15 de Septiembre - 15 de Octubre, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Publicación de Listas Inscritas</td>
                      <td className="border px-4 py-2">20 de Octubre, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Campaña Electoral</td>
                      <td className="border px-4 py-2">21 de Octubre - 13 de Noviembre, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Envío de Credenciales VENP</td>
                      <td className="border px-4 py-2">10 de Noviembre, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Día de la Elección</td>
                      <td className="border px-4 py-2">15 de Noviembre, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Publicación de Resultados</td>
                      <td className="border px-4 py-2">15 de Noviembre, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Juramentación de Nuevas Autoridades</td>
                      <td className="border px-4 py-2">2 de Enero, 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mb-4">Multas por No Votar</h3>
              <p className="text-gray-600 mb-4">
                De acuerdo con el Reglamento Electoral del CIP, los colegiados habilitados que no ejerzan su derecho al
                voto sin causa justificada serán sancionados con una multa equivalente a:
              </p>
              <div className="bg-red-50 p-5 rounded-lg mb-8">
                <h4 className="font-bold text-red-800 mb-3">Multa por No Votar: S/. 100.00</h4>
                <p className="text-gray-700 mb-2">
                  La multa deberá ser cancelada dentro de los 30 días calendario posteriores a la fecha de la elección.
                  Después de este plazo, se aplicará un recargo del 10% mensual.
                </p>
                <p className="text-gray-700">
                  Los colegiados que no cancelen la multa no podrán realizar trámites en el CIP hasta regularizar su
                  situación.
                </p>
              </div>

              <h3 className="text-xl font-bold mb-4">Preguntas Frecuentes</h3>
              <div className="space-y-4 mb-8">
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2">¿Qué pasa si no recibo mis credenciales?</h4>
                  <p className="text-sm text-gray-600">
                    Si no recibe sus credenciales hasta el 12 de noviembre, debe comunicarse con la Mesa de Ayuda
                    Electoral al correo elecciones@cipjunin.org.pe o al teléfono +51 064 123456 anexo 150.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2">¿Puedo votar si no estoy habilitado?</h4>
                  <p className="text-sm text-gray-600">
                    No. Para ejercer su derecho al voto, debe estar habilitado y al día en sus cuotas ordinarias hasta
                    el mes de octubre de 2024. Puede regularizar su situación hasta el 31 de octubre.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2">¿Qué dispositivos puedo usar para votar?</h4>
                  <p className="text-sm text-gray-600">
                    Puede votar desde cualquier dispositivo con acceso a internet: computadora, laptop, tablet o
                    smartphone. El sistema VENP es compatible con los principales navegadores web.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2">¿Cómo justifico mi inasistencia?</h4>
                  <p className="text-sm text-gray-600">
                    Si por motivos de fuerza mayor no puede ejercer su derecho al voto, debe presentar una solicitud de
                    justificación dentro de los 15 días posteriores a la elección, adjuntando los documentos que
                    sustenten su inasistencia.
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Link href="/elecciones/simulacro">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">
                    <Vote className="h-5 w-5 mr-2" />
                    Participar en Simulacro de Votación
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

function Users(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
