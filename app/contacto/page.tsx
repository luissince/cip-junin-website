import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactoPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Contacto</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos a su disposición para atender sus consultas, sugerencias o solicitudes. No dude en contactarnos.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Envíenos un mensaje</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <Input id="nombre" type="text" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico *
                  </label>
                  <Input id="email" type="email" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <Input id="telefono" type="tel" />
                </div>
                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto *
                  </label>
                  <Input id="asunto" type="text" required />
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <Textarea id="mensaje" rows={5} required />
              </div>

              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                  Área de interés
                </label>
                <select
                  id="area"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Seleccione un área</option>
                  <option value="tramites">Trámites</option>
                  <option value="capacitaciones">Capacitaciones</option>
                  <option value="colegiatura">Colegiatura</option>
                  <option value="certificados">Certificados</option>
                  <option value="eventos">Eventos</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terminos"
                    type="checkbox"
                    className="h-4 w-4 text-red-700 focus:ring-red-500 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terminos" className="text-gray-700">
                    Acepto la política de privacidad y el tratamiento de mis datos personales de acuerdo a la Ley N°
                    29733.
                  </label>
                </div>
              </div>

              <Button type="submit" className="bg-red-700 hover:bg-red-800 text-white">
                <Send className="h-4 w-4 mr-2" />
                Enviar mensaje
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            {/* Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Mapa+CIP+Junín"
                  alt="Mapa de ubicación"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Nuestra ubicación</h2>
                <p className="text-gray-600 mb-4">
                  Estamos ubicados en el centro de la ciudad de Huancayo, con fácil acceso desde cualquier punto de la
                  ciudad.
                </p>
                <Button className="w-full">Ver en Google Maps</Button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-700 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      Av. Ingenieros 123, Huancayo, Junín, Perú
                      <br />
                      Código Postal: 12001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-700 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Teléfonos</h3>
                    <p className="text-gray-600">
                      Central: +51 064 123456
                      <br />
                      Móvil: +51 964 789123
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-red-700 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Correo electrónico</h3>
                    <p className="text-gray-600">
                      Información general: info@cipjunin.org.pe
                      <br />
                      Trámites: tramites@cipjunin.org.pe
                      <br />
                      Capacitaciones: capacitacion@cipjunin.org.pe
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-red-700 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Horario de atención</h3>
                    <p className="text-gray-600">
                      Lunes a Viernes: 8:00 am - 5:00 pm
                      <br />
                      Sábados: 9:00 am - 12:00 pm
                      <br />
                      Domingos y feriados: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Áreas específicas</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Trámites y Certificados</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Atención para colegiatura, certificados y otros trámites.
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Teléfono:</span> +51 064 123456 Anexo 101
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Centro de Capacitación</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Información sobre cursos, talleres y programas de especialización.
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Teléfono:</span> +51 064 123456 Anexo 102
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Tesorería</h3>
                  <p className="text-sm text-gray-600 mb-2">Pagos, cuotas y asuntos financieros.</p>
                  <p className="text-sm">
                    <span className="font-medium">Teléfono:</span> +51 064 123456 Anexo 103
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Decanato</h3>
                  <p className="text-sm text-gray-600 mb-2">Asuntos institucionales y representación.</p>
                  <p className="text-sm">
                    <span className="font-medium">Teléfono:</span> +51 064 123456 Anexo 104
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>

          <div className="space-y-4">
            {[
              {
                question: "¿Cuál es el horario de atención para trámites?",
                answer:
                  "El horario de atención para trámites es de lunes a viernes de 8:00 am a 5:00 pm y sábados de 9:00 am a 12:00 pm.",
              },
              {
                question: "¿Cómo puedo verificar si estoy habilitado?",
                answer:
                  "Puede verificar su estado de habilidad a través de nuestra página web en la sección 'Verificar Habilidad', ingresando su número de CIP, o comunicándose directamente con nuestras oficinas.",
              },
              {
                question: "¿Cuánto tiempo demora el trámite de colegiatura?",
                answer:
                  "El trámite de colegiatura tiene una duración aproximada de 15 días hábiles desde la presentación de todos los documentos requeridos.",
              },
              {
                question: "¿Puedo realizar mis pagos en línea?",
                answer:
                  "Sí, puede realizar sus pagos en línea a través de nuestra plataforma virtual, utilizando tarjeta de crédito o débito, o mediante transferencia bancaria.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/preguntas-frecuentes">
              <Button variant="outline">Ver todas las preguntas frecuentes</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
