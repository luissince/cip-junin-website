import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ChevronRight,
  Lock,
  User,
  CreditCard,
  FileText,
  Calendar,
  Settings,
  BookOpen,
  Download,
  Smartphone,
} from "lucide-react"

export default function IntranetPage() {
  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Intranet</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Intranet CIP Junín</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Accede a tu cuenta para gestionar tus trámites, pagos, certificados y más.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Login Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
              <Image
                src="/placeholder.svg?height=120&width=120&text=CIP"
                alt="Logo CIP Junín"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
              <p className="text-gray-500 text-sm">Ingresa tus credenciales para acceder</p>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="cip" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de CIP
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input id="cip" type="text" placeholder="Ingrese su número de CIP" className="pl-10" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input id="password" type="password" placeholder="Ingrese su contraseña" className="pl-10" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-red-700 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Recordarme
                  </label>
                </div>
                <div className="text-sm">
                  <Link href="/intranet/recuperar-contrasena" className="text-red-700 hover:text-red-800">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>

              <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Iniciar Sesión</Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                ¿Aún no estás colegiado?{" "}
                <Link href="/tramites/colegiatura" className="text-red-700 hover:text-red-800 font-medium">
                  Colegiarse ahora
                </Link>
              </p>
            </div>

            {/* App Download Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold flex items-center justify-center">
                  <Smartphone className="h-5 w-5 mr-2 text-red-700" />
                  Descarga nuestra App Móvil
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Accede a todos los servicios del CIP Junín desde tu dispositivo móvil
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
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

              <div className="mt-4 text-center">
                <Link
                  href="/intranet/app"
                  className="text-sm text-red-700 hover:underline flex items-center justify-center"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Más información sobre la app
                </Link>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-gray-900 text-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Servicios disponibles en la Intranet</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <CreditCard className="h-8 w-8 text-red-500 mr-3 shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Pagos en Línea</h3>
                  <p className="text-sm text-gray-300">Realiza el pago de tus cuotas ordinarias y otros servicios.</p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <FileText className="h-8 w-8 text-red-500 mr-3 shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Certificados</h3>
                  <p className="text-sm text-gray-300">Solicita y descarga tus certificados de habilidad.</p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <Calendar className="h-8 w-8 text-red-500 mr-3 shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Eventos</h3>
                  <p className="text-sm text-gray-300">Inscríbete a cursos, talleres y eventos del CIP.</p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <Settings className="h-8 w-8 text-red-500 mr-3 shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Actualización de Datos</h3>
                  <p className="text-sm text-gray-300">Mantén actualizada tu información personal y profesional.</p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <BookOpen className="h-8 w-8 text-red-500 mr-3 shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Aula Virtual</h3>
                  <p className="text-sm text-gray-300">Accede a cursos y material educativo exclusivo.</p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <Smartphone className="h-8 w-8 text-red-500 mr-3 shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">App Móvil</h3>
                  <p className="text-sm text-gray-300">Descarga nuestra aplicación para acceder desde tu celular.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-red-700 rounded-lg">
              <h3 className="font-bold mb-2">¿Problemas para acceder?</h3>
              <p className="text-sm mb-4">
                Si tienes problemas para acceder a tu cuenta, puedes contactarnos por los siguientes medios:
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Teléfono: (064) 123-4567
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Email: soporte@cipjunin.org.pe
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Horario de atención: Lunes a Viernes de 8:00 am a 5:00 pm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
