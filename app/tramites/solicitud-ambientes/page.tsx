import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, ChevronRight, Clock, CalendarIcon, FileText, BookOpen, Users, Building } from "lucide-react"

export default function SolicitudAmbientesPage() {
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
          <span className="text-gray-900 font-medium">Solicitud de Uso de Ambientes</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Solicitud de Uso de Ambientes para Colegiados</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Como miembro habilitado del CIP CD Junín, puede solicitar el uso de nuestros ambientes para actividades
            relacionadas con el ejercicio profesional.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Information Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-start">
              <div className="hidden sm:block mr-6">
                <div className="p-3 rounded-full bg-red-100">
                  <Building className="h-10 w-10 text-red-700" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Información sobre el trámite</h2>
                <p className="text-gray-600 mb-6">
                  El CIP CD Junín pone a disposición de sus colegiados habilitados el uso de los diferentes ambientes
                  para la realización de eventos relacionados con el ejercicio profesional de la ingeniería, con tarifas
                  especiales y facilidades.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Clock className="h-4 w-4 text-red-700 mr-2" />
                      Tiempo de atención
                    </h3>
                    <p className="text-sm text-gray-600">
                      La solicitud será respondida en un plazo máximo de 48 horas hábiles.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <FileText className="h-4 w-4 text-red-700 mr-2" />
                      Requisitos
                    </h3>
                    <p className="text-sm text-gray-600">
                      Estar colegiado y habilitado. Completar el formulario de solicitud.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <CalendarIcon className="h-4 w-4 text-red-700 mr-2" />
                      Anticipación
                    </h3>
                    <p className="text-sm text-gray-600">
                      Solicitar con mínimo 7 días de anticipación a la fecha del evento.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <BookOpen className="h-4 w-4 text-red-700 mr-2" />
                      Reglamento
                    </h3>
                    <p className="text-sm text-gray-600">
                      <Link href="#" className="text-red-700 hover:underline">
                        Descargar reglamento de uso de ambientes
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ambientes Disponibles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-6">Ambientes disponibles para colegiados</h2>

            <div className="space-y-4 mb-6">
              <div className="border rounded-lg p-4">
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="sm:w-1/4 mb-4 sm:mb-0 sm:mr-4">
                    <Image
                      src="/placeholder.svg?height=150&width=150&text=Auditorio"
                      alt="Auditorio Principal"
                      width={150}
                      height={150}
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="sm:w-3/4">
                    <h3 className="font-bold text-lg mb-2">Auditorio Principal</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Capacidad: 250 personas. Ideal para conferencias, ceremonias y eventos de gran formato.
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Users className="h-4 w-4 text-red-700 mr-1" />
                      <span>Tarifas para colegiados: S/. 250.00 (medio día) - S/. 450.00 (día completo)</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Ver detalles
                      </Button>
                      <Button size="sm" className="bg-red-700 hover:bg-red-800 text-white">
                        Solicitar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="sm:w-1/4 mb-4 sm:mb-0 sm:mr-4">
                    <Image
                      src="/placeholder.svg?height=150&width=150&text=Sala+Conf"
                      alt="Sala de Conferencias"
                      width={150}
                      height={150}
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="sm:w-3/4">
                    <h3 className="font-bold text-lg mb-2">Sala de Conferencias</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Capacidad: 80 personas. Ideal para seminarios, talleres y capacitaciones.
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Users className="h-4 w-4 text-red-700 mr-1" />
                      <span>Tarifas para colegiados: S/. 150.00 (medio día) - S/. 250.00 (día completo)</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Ver detalles
                      </Button>
                      <Button size="sm" className="bg-red-700 hover:bg-red-800 text-white">
                        Solicitar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="sm:w-1/4 mb-4 sm:mb-0 sm:mr-4">
                    <Image
                      src="/placeholder.svg?height=150&width=150&text=Sala+Reuniones"
                      alt="Sala de Reuniones"
                      width={150}
                      height={150}
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="sm:w-3/4">
                    <h3 className="font-bold text-lg mb-2">Sala de Reuniones</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Capacidad: 20 personas. Ideal para reuniones de trabajo y pequeñas capacitaciones.
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Users className="h-4 w-4 text-red-700 mr-1" />
                      <span>Tarifas para colegiados: S/. 80.00 (medio día) - S/. 150.00 (día completo)</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Ver detalles
                      </Button>
                      <Button size="sm" className="bg-red-700 hover:bg-red-800 text-white">
                        Solicitar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-sm">
              <p className="text-gray-600">
                <span className="font-semibold">Nota: </span>
                Los precios incluyen equipos básicos (proyector, ecran, sistema de sonido). Servicios adicionales como
                coffee break, personal de apoyo, etc., tienen un costo extra.
              </p>
            </div>
          </div>

          {/* Solicitud Form */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-6">Formulario de Solicitud</h2>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <div className="p-1 bg-blue-100 rounded-full mr-3 shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-blue-700 text-sm">
                    Todos los campos marcados con (*) son obligatorios. Complete cuidadosamente la información
                    solicitada para agilizar el proceso de evaluación de su solicitud.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">1. Datos del Solicitante</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="numero-cip" className="block text-sm font-medium text-gray-700 mb-1">
                      Número de CIP (*)
                    </label>
                    <Input id="numero-cip" type="text" placeholder="Ej: 123456" />
                  </div>
                  <div>
                    <label htmlFor="dni" className="block text-sm font-medium text-gray-700 mb-1">
                      DNI (*)
                    </label>
                    <Input id="dni" type="text" placeholder="Ej: 12345678" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="nombre-completo" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombres y Apellidos Completos (*)
                    </label>
                    <Input id="nombre-completo" type="text" placeholder="Ingrese su nombre completo" />
                  </div>
                  <div>
                    <label htmlFor="celular" className="block text-sm font-medium text-gray-700 mb-1">
                      Celular (*)
                    </label>
                    <Input id="celular" type="tel" placeholder="Ej: 999999999" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo Electrónico (*)
                    </label>
                    <Input id="email" type="email" placeholder="correo@ejemplo.com" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">2. Información del Evento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="nombre-evento" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre del Evento (*)
                    </label>
                    <Input id="nombre-evento" type="text" placeholder="Ingrese el nombre del evento" />
                  </div>
                  <div>
                    <label htmlFor="tipo-evento" className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de Evento (*)
                    </label>
                    <select
                      id="tipo-evento"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="conferencia">Conferencia</option>
                      <option value="capacitacion">Capacitación</option>
                      <option value="seminario">Seminario</option>
                      <option value="taller">Taller</option>
                      <option value="reunion">Reunión Profesional</option>
                      <option value="ceremonia">Ceremonia</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cantidad-personas" className="block text-sm font-medium text-gray-700 mb-1">
                      Cantidad estimada de asistentes (*)
                    </label>
                    <Input id="cantidad-personas" type="number" placeholder="Ej: 50" />
                  </div>
                  <div>
                    <label htmlFor="fecha-evento" className="block text-sm font-medium text-gray-700 mb-1">
                      Fecha del Evento (*)
                    </label>
                    <Input id="fecha-evento" type="date" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="hora-inicio" className="block text-sm font-medium text-gray-700 mb-1">
                        Hora de Inicio (*)
                      </label>
                      <Input id="hora-inicio" type="time" />
                    </div>
                    <div>
                      <label htmlFor="hora-fin" className="block text-sm font-medium text-gray-700 mb-1">
                        Hora de Fin (*)
                      </label>
                      <Input id="hora-fin" type="time" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">
                      Breve descripción del evento (*)
                    </label>
                    <Textarea
                      id="descripcion"
                      placeholder="Describa el propósito y las actividades del evento"
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">3. Solicitud de Ambiente y Recursos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ambiente" className="block text-sm font-medium text-gray-700 mb-1">
                      Ambiente solicitado (*)
                    </label>
                    <select
                      id="ambiente"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="auditorio">Auditorio Principal</option>
                      <option value="sala-conferencias">Sala de Conferencias</option>
                      <option value="sala-reuniones">Sala de Reuniones</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="duracion" className="block text-sm font-medium text-gray-700 mb-1">
                      Duración (*)
                    </label>
                    <select
                      id="duracion"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="medio-dia">Medio día (4 horas)</option>
                      <option value="dia-completo">Día completo (8 horas)</option>
                      <option value="personalizado">Personalizado</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Equipos y servicios adicionales requeridos:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <input
                          id="proyector"
                          type="checkbox"
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label htmlFor="proyector" className="ml-2 block text-sm text-gray-600">
                          Proyector y Ecran
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="sonido"
                          type="checkbox"
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label htmlFor="sonido" className="ml-2 block text-sm text-gray-600">
                          Sistema de Sonido
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="wifi"
                          type="checkbox"
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label htmlFor="wifi" className="ml-2 block text-sm text-gray-600">
                          Acceso a Internet WiFi
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="coffee"
                          type="checkbox"
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label htmlFor="coffee" className="ml-2 block text-sm text-gray-600">
                          Servicio de Coffee Break
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="microfono"
                          type="checkbox"
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label htmlFor="microfono" className="ml-2 block text-sm text-gray-600">
                          Micrófonos inalámbricos
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="mesas"
                          type="checkbox"
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label htmlFor="mesas" className="ml-2 block text-sm text-gray-600">
                          Mesas adicionales
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="observaciones" className="block text-sm font-medium text-gray-700 mb-1">
                      Observaciones o requerimientos especiales
                    </label>
                    <Textarea
                      id="observaciones"
                      placeholder="Indique cualquier requerimiento especial para su evento"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">4. Declaración y Compromiso</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5 mt-1">
                      <input
                        id="terminos"
                        type="checkbox"
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                    </div>
                    <label htmlFor="terminos" className="ml-2 text-sm text-gray-600">
                      Declaro conocer el reglamento de uso de ambientes del CIP CD Junín y me comprometo a cumplir con
                      todas las disposiciones establecidas. Asimismo, me hago responsable por cualquier daño que pudiera
                      ocasionarse durante el desarrollo del evento. (*)
                    </label>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5 mt-1">
                      <input
                        id="veracidad"
                        type="checkbox"
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                    </div>
                    <label htmlFor="veracidad" className="ml-2 text-sm text-gray-600">
                      Declaro que la información proporcionada es veraz y que el evento a realizarse corresponde a
                      actividades relacionadas con el ejercicio profesional de la ingeniería. (*)
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button className="bg-red-700 hover:bg-red-800 text-white px-8 py-2">Enviar Solicitud</Button>
              </div>
            </div>
          </div>

          {/* Proceso */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-6">Proceso de la solicitud</h2>

            <div className="relative">
              {/* Línea vertical conectora */}
              <div className="absolute left-4 top-2 h-[calc(100%-32px)] w-0.5 bg-gray-200"></div>

              <div className="space-y-8">
                <div className="flex">
                  <div className="relative flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 mr-4 z-10">
                    <span className="font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Envío de solicitud</h3>
                    <p className="text-gray-600 text-sm">
                      Complete y envíe el formulario de solicitud con todos los datos requeridos. Asegúrese de que su
                      número CIP y su estado de habilidad estén actualizados.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="relative flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 mr-4 z-10">
                    <span className="font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Evaluación de la solicitud</h3>
                    <p className="text-gray-600 text-sm">
                      El CIP CD Junín evaluará su solicitud considerando la disponibilidad del ambiente, el tipo de
                      evento y su relación con actividades profesionales de ingeniería.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="relative flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 mr-4 z-10">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Notificación de aprobación</h3>
                    <p className="text-gray-600 text-sm">
                      Recibirá un correo electrónico con la aprobación de su solicitud, el monto a pagar y las
                      instrucciones para completar el proceso.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="relative flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 mr-4 z-10">
                    <span className="font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Pago y confirmación</h3>
                    <p className="text-gray-600 text-sm">
                      Realice el pago correspondiente en las oficinas del CIP CD Junín o mediante transferencia bancaria
                      y envíe el comprobante para confirmar la reserva del ambiente.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="relative flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 mr-4 z-10">
                    <span className="font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Uso del ambiente</h3>
                    <p className="text-gray-600 text-sm">
                      En la fecha y hora indicadas, presente su documento de identidad en la recepción del CIP para
                      acceder al ambiente reservado. Recuerde cumplir con todas las normas de uso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
