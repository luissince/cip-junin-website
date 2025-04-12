import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, AlertCircle, CheckCircle, HelpCircle } from "lucide-react"

export default function LibroReclamacionesPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Libro de Reclamaciones</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Libro de Reclamaciones</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Registra aquí tus quejas o reclamos sobre los servicios brindados por el Colegio de Ingenieros del Perú -
            Consejo Departamental Junín.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Formulario de Reclamo</h2>
                <div className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  N° 2023-0001
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombres" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombres *
                    </label>
                    <Input id="nombres" type="text" required />
                  </div>
                  <div>
                    <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700 mb-1">
                      Apellidos *
                    </label>
                    <Input id="apellidos" type="text" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="tipo-documento" className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de Documento *
                    </label>
                    <select
                      id="tipo-documento"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Seleccione</option>
                      <option value="dni">DNI</option>
                      <option value="ce">Carnet de Extranjería</option>
                      <option value="pasaporte">Pasaporte</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="num-documento" className="block text-sm font-medium text-gray-700 mb-1">
                      Número de Documento *
                    </label>
                    <Input id="num-documento" type="text" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono *
                    </label>
                    <Input id="telefono" type="tel" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo Electrónico *
                    </label>
                    <Input id="email" type="email" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-1">
                    Dirección
                  </label>
                  <Input id="direccion" type="text" />
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-bold mb-4">Detalle del Reclamo</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="tipo-reclamo" className="block text-sm font-medium text-gray-700 mb-1">
                        Tipo de Reclamo *
                      </label>
                      <select
                        id="tipo-reclamo"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                      >
                        <option value="">Seleccione</option>
                        <option value="queja">Queja</option>
                        <option value="reclamo">Reclamo</option>
                        <option value="sugerencia">Sugerencia</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                        Área relacionada *
                      </label>
                      <select
                        id="area"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                      >
                        <option value="">Seleccione</option>
                        <option value="tramites">Trámites</option>
                        <option value="certificados">Certificados</option>
                        <option value="capacitaciones">Capacitaciones</option>
                        <option value="pagos">Pagos</option>
                        <option value="atencion">Atención al Colegiado</option>
                        <option value="otros">Otros</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                      Asunto *
                    </label>
                    <Input id="asunto" type="text" required />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">
                      Descripción detallada *
                    </label>
                    <Textarea
                      id="descripcion"
                      rows={5}
                      placeholder="Describa detalladamente su reclamo o queja"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="pedido" className="block text-sm font-medium text-gray-700 mb-1">
                      Pedido o solicitud *
                    </label>
                    <Textarea id="pedido" rows={3} placeholder="¿Qué solución espera recibir?" required />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-start mb-4">
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
                        Declaro que la información proporcionada es veraz y autorizo el tratamiento de mis datos
                        personales de acuerdo a la Ley N° 29733.
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button className="bg-red-700 hover:bg-red-800 text-white px-8">Enviar Reclamo</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Información</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold flex items-center mb-2">
                    <AlertCircle className="h-5 w-5 text-red-700 mr-2" />
                    ¿Qué es el Libro de Reclamaciones?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Es un registro donde los usuarios pueden presentar sus quejas o reclamos sobre los servicios
                    ofrecidos por el CIP CD Junín.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    ¿Cuándo recibiré respuesta?
                  </h4>
                  <p className="text-sm text-gray-600">
                    El CIP CD Junín responderá a su reclamo en un plazo máximo de 30 días hábiles, conforme a la
                    normativa vigente.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold flex items-center mb-2">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                    ¿Necesita ayuda?
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Si tiene dudas sobre cómo presentar su reclamo, puede contactarnos:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Teléfono: (064) 123-4567</li>
                    <li>• Email: reclamos@cipjunin.org.pe</li>
                    <li>• Horario: Lunes a Viernes de 8:00 am a 5:00 pm</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-2">Libro de Reclamaciones Físico</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    También puede presentar su reclamo de manera presencial en nuestras oficinas ubicadas en:
                  </p>
                  <p className="text-sm font-medium">Av. Ingenieros 123, Huancayo, Junín, Perú</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
