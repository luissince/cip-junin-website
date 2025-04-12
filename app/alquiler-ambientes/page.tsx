import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Users, MapPin, Calendar, Clock, Check } from "lucide-react"

export default function AlquilerAmbientesPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Alquiler de Ambientes</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Alquiler de Ambientes</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            El CIP CD Junín pone a disposición de sus colegiados y de empresas e instituciones del sector sus
            instalaciones para la realización de eventos académicos, profesionales y corporativos.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-lg overflow-hidden mb-12">
          <Image
            src="/placeholder.svg?height=400&width=1200&text=Ambientes+CIP+Junín"
            alt="Ambientes CIP Junín"
            width={1200}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
            <div className="max-w-xl text-white">
              <h2 className="text-3xl font-bold mb-4">Espacios para tus eventos</h2>
              <p className="mb-6">
                Contamos con modernos ambientes equipados con tecnología audiovisual, internet de alta velocidad y todas
                las comodidades para el éxito de tu evento.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#ambientes">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Ver ambientes</Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Solicitar información
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Ambientes */}
        <section id="ambientes" className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Nuestros Ambientes</h2>

          <div className="space-y-12">
            {/* Auditorio Principal */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Auditorio+Principal"
                    alt="Auditorio Principal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Auditorio Principal</h3>
                  <p className="text-gray-600 mb-4">
                    Amplio auditorio con capacidad para 250 personas, ideal para conferencias, congresos, ceremonias y
                    eventos de gran formato. Cuenta con sistema de sonido profesional, proyector, pantalla gigante y
                    cabina de traducción simultánea.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-700">Capacidad: 250 personas</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-700">1er piso</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-700">Disponible 24/7</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-700">Reserva anticipada</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Equipamiento incluido:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Sistema de sonido</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Proyector HD</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Pantalla gigante</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Micrófonos inalámbricos</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Atril</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Internet WiFi</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Aire acondicionado</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Estacionamiento</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-red-700 hover:bg-red-800 text-white">Ver galería de fotos</Button>
                    <Link href="/contacto">
                      <Button variant="outline">Solicitar cotización</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sala de Conferencias */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="order-1 lg:order-2 relative h-64 lg:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Sala+de+Conferencias"
                    alt="Sala de Conferencias"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-2 lg:order-1 p-6">
                  <h3 className="text-2xl font-bold mb-3">Sala de Conferencias</h3>
                  <p className="text-gray-600 mb-4">
                    Espacio versátil con capacidad para 80 personas, ideal para seminarios, talleres, reuniones
                    corporativas y capacitaciones. Cuenta con mesas modulares que permiten diferentes configuraciones
                    según las necesidades del evento.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-700">Capacidad: 80 personas</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-700">2do piso</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-700">8:00 am - 10:00 pm</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-700">Disponibilidad inmediata</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Equipamiento incluido:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Proyector</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Ecran</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Sistema de audio</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Pizarra interactiva</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Internet WiFi</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Mesas modulares</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Aire acondicionado</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Coffee break (opcional)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-red-700 hover:bg-red-800 text-white">Ver galería de fotos</Button>
                    <Link href="/contacto">
                      <Button variant="outline">Solicitar cotización</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sala de Reuniones */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Sala+de+Reuniones"
                    alt="Sala de Reuniones"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Sala de Reuniones</h3>
                  <p className="text-gray-600 mb-4">
                    Espacio ejecutivo con capacidad para 20 personas, ideal para reuniones de directorio, comisiones
                    técnicas, entrevistas y pequeñas capacitaciones. Ambiente privado y confortable.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-700">Capacidad: 20 personas</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-700">3er piso</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-700">8:00 am - 8:00 pm</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-700">Reserva 24h antes</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Equipamiento incluido:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Smart TV</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Conexiones HDMI</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Mesa de directorio</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Sillas ejecutivas</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Internet WiFi</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Pizarra</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Aire acondicionado</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-1" />
                        <span>Servicio de café</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-red-700 hover:bg-red-800 text-white">Ver galería de fotos</Button>
                    <Link href="/contacto">
                      <Button variant="outline">Solicitar cotización</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifas */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Tarifas y Condiciones</h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Tarifas preferenciales</h3>
                  <p className="text-gray-600 mb-4">
                    Contamos con tarifas especiales para colegiados CIP, instituciones educativas y entidades públicas.
                    Las tarifas varían según el ambiente, horario y duración del evento.
                  </p>

                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-bold mb-2">Colegiados CIP</h4>
                      <p className="text-sm text-gray-600">
                        Los ingenieros colegiados habilitados tienen un descuento del 30% sobre la tarifa regular.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-bold mb-2">Instituciones Educativas</h4>
                      <p className="text-sm text-gray-600">
                        Las universidades y centros educativos tienen un descuento del 20% sobre la tarifa regular.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-bold mb-2">Entidades Públicas</h4>
                      <p className="text-sm text-gray-600">
                        Las entidades del Estado tienen un descuento del 15% sobre la tarifa regular.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-bold mb-2">Empresas Privadas</h4>
                      <p className="text-sm text-gray-600">
                        Contamos con tarifas corporativas para empresas que requieren nuestros ambientes de forma
                        recurrente.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Condiciones de alquiler</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600">La reserva se confirma con el pago del 50% del monto total.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600">El saldo debe ser cancelado 24 horas antes del evento.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        En caso de cancelación, se debe comunicar con 48 horas de anticipación para la devolución del
                        80% del adelanto.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        El horario de alquiler incluye el tiempo de instalación y desmontaje.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        Se requiere un depósito de garantía que será devuelto después de verificar el estado del
                        ambiente.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        El CIP CD Junín no se responsabiliza por objetos olvidados en las instalaciones.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        Servicios adicionales como catering, coffee break, equipos especiales, etc., tienen un costo
                        adicional.
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Link href="/contacto">
                      <Button className="w-full bg-red-700 hover:bg-red-800 text-white">
                        Solicitar cotización personalizada
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">¿Necesitas un espacio para tu evento?</h2>
              <p className="mb-6">
                Contáctanos y te ayudaremos a encontrar el ambiente ideal para tu evento. Nuestro equipo está disponible
                para brindarte toda la información que necesites.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contacto">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Contactar ahora</Button>
                </Link>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Descargar brochure
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Foto+1"
                  alt="Ambiente CIP"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Foto+2"
                  alt="Ambiente CIP"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Foto+3"
                  alt="Ambiente CIP"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Foto+4"
                  alt="Ambiente CIP"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">¿Con cuánta anticipación debo reservar?</h3>
                <p className="text-sm text-gray-600">
                  Recomendamos reservar con al menos 2 semanas de anticipación para garantizar la disponibilidad,
                  especialmente para el Auditorio Principal. Para eventos grandes o en temporada alta, se sugiere
                  reservar con 1 mes de anticipación.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">¿Puedo llevar mi propio catering?</h3>
                <p className="text-sm text-gray-600">
                  Sí, puede traer su propio servicio de catering. Sin embargo, contamos con proveedores recomendados que
                  conocen nuestras instalaciones y pueden ofrecerle un servicio de calidad.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">¿Hay estacionamiento disponible?</h3>
                <p className="text-sm text-gray-600">
                  Sí, contamos con estacionamiento para aproximadamente 30 vehículos. Para eventos grandes, podemos
                  coordinar estacionamiento adicional en zonas cercanas.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">¿Se puede modificar la disposición de los ambientes?</h3>
                <p className="text-sm text-gray-600">
                  La Sala de Conferencias cuenta con mesas modulares que permiten diferentes configuraciones. Para el
                  Auditorio Principal, la disposición es fija. Consulte con nuestro personal sobre las opciones
                  disponibles para cada ambiente.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">¿Ofrecen descuentos para eventos de varios días?</h3>
                <p className="text-sm text-gray-600">
                  Sí, contamos con tarifas especiales para eventos que requieren nuestros ambientes por varios días.
                  Solicite una cotización personalizada para conocer los descuentos aplicables.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
