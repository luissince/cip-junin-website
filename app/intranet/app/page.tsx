import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Smartphone, Download, Star, Shield, Zap, Clock, Bell } from "lucide-react"

export default function AppPage() {
  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/intranet" className="hover:text-red-700">
            Intranet
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">App Móvil</span>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-xl overflow-hidden shadow-xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">App CIP Junín</h1>
              <p className="text-lg mb-6 text-red-100">
                Lleva el Colegio de Ingenieros del Perú - CD Junín en tu bolsillo. Accede a todos nuestros servicios
                desde tu dispositivo móvil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#" className="inline-block">
                  <Image
                    src="/placeholder.svg?height=50&width=168&text=Google+Play"
                    alt="Descargar en Google Play"
                    width={168}
                    height={50}
                    className="h-12 w-auto"
                  />
                </Link>
                <Link href="#" className="inline-block">
                  <Image
                    src="/placeholder.svg?height=50&width=168&text=App+Store"
                    alt="Descargar en App Store"
                    width={168}
                    height={50}
                    className="h-12 w-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=250&text=App+Screenshot"
                  alt="App CIP Junín"
                  width={250}
                  height={500}
                  className="rounded-xl shadow-lg border-8 border-gray-800"
                />
                <div className="absolute -bottom-4 -right-4 bg-red-600 text-white rounded-full p-3 shadow-lg">
                  <Download className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Características de la App</h2>
            <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestra aplicación móvil está diseñada para facilitar tu experiencia como colegiado, con funciones
              intuitivas y acceso rápido a todos los servicios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certificado Digital</h3>
              <p className="text-gray-600">
                Genera y descarga tu certificado de habilidad profesional desde cualquier lugar y en cualquier momento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Zap className="h-7 w-7 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pagos Rápidos</h3>
              <p className="text-gray-600">
                Realiza el pago de tus cuotas ordinarias y otros servicios de manera rápida y segura.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Bell className="h-7 w-7 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Notificaciones</h3>
              <p className="text-gray-600">
                Recibe alertas sobre eventos, cursos, vencimiento de cuotas y más directamente en tu dispositivo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Acceso 24/7</h3>
              <p className="text-gray-600">
                Accede a todos los servicios del CIP Junín las 24 horas del día, los 7 días de la semana.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Star className="h-7 w-7 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Beneficios Exclusivos</h3>
              <p className="text-gray-600">
                Consulta todos los beneficios disponibles para colegiados y accede a descuentos exclusivos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Smartphone className="h-7 w-7 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interfaz Intuitiva</h3>
              <p className="text-gray-600">Diseño moderno y fácil de usar que te permite navegar sin complicaciones.</p>
            </div>
          </div>
        </div>

        {/* How to Download Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">¿Cómo descargar la app?</h2>
            <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Busca la app</h3>
              <p className="text-gray-600">Busca "CIP Junín" en Google Play Store o App Store según tu dispositivo.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Descarga</h3>
              <p className="text-gray-600">Descarga la aplicación de forma gratuita e instálala en tu dispositivo.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Inicia sesión</h3>
              <p className="text-gray-600">
                Ingresa con tu número de CIP y contraseña, los mismos que usas en la intranet.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#" className="inline-block">
                <Image
                  src="/placeholder.svg?height=50&width=168&text=Google+Play"
                  alt="Descargar en Google Play"
                  width={168}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
              <Link href="#" className="inline-block">
                <Image
                  src="/placeholder.svg?height=50&width=168&text=App+Store"
                  alt="Descargar en App Store"
                  width={168}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">¿La aplicación es gratuita?</h3>
              <p className="text-gray-600">
                Sí, la aplicación es completamente gratuita para todos los colegiados del CIP Junín.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">¿Qué dispositivos son compatibles?</h3>
              <p className="text-gray-600">
                La aplicación es compatible con dispositivos Android 6.0 o superior e iOS 11.0 o superior.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">¿Necesito estar conectado a internet para usar la app?</h3>
              <p className="text-gray-600">
                Algunas funciones básicas están disponibles sin conexión, pero para acceder a la mayoría de los
                servicios se requiere conexión a internet.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">¿Cómo recupero mi contraseña?</h3>
              <p className="text-gray-600">
                Puedes recuperar tu contraseña directamente desde la aplicación utilizando la opción "Olvidé mi
                contraseña" en la pantalla de inicio de sesión.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">¿Dónde puedo obtener soporte técnico?</h3>
              <p className="text-gray-600">
                Para soporte técnico, puedes contactarnos al correo soporte@cipjunin.org.pe o llamar al (064) 123-4567
                en horario de oficina.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-700 text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¡Descarga ahora la App CIP Junín!</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Lleva todos los servicios del Colegio de Ingenieros del Perú - CD Junín en tu bolsillo y mantente al día con
            todas las novedades.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#" className="inline-block">
              <Image
                src="/placeholder.svg?height=50&width=168&text=Google+Play"
                alt="Descargar en Google Play"
                width={168}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <Link href="#" className="inline-block">
              <Image
                src="/placeholder.svg?height=50&width=168&text=App+Store"
                alt="Descargar en App Store"
                width={168}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
