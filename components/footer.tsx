import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Phone, Mail, MapPin, ChevronRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image src="/placeholder.svg?height=60&width=60&text=CIP" alt="Logo CIP Junín" width={60} height={60} />
              <div>
                <div className="font-bold text-lg leading-tight">Colegio de Ingenieros del Perú</div>
                <div className="text-sm text-gray-400">Consejo Departamental Junín</div>
              </div>
            </div>

            <p className="text-gray-400 mb-6">
              El Colegio de Ingenieros del Perú es una institución autónoma con personería jurídica que representa y
              agrupa a los ingenieros profesionales del Perú.
            </p>

            <div className="flex space-x-3">
              <Link
                href="https://facebook.com"
                className="bg-gray-800 hover:bg-red-700 transition-colors p-2 rounded-full"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="bg-gray-800 hover:bg-red-700 transition-colors p-2 rounded-full"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-gray-800 hover:bg-red-700 transition-colors p-2 rounded-full"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://youtube.com"
                className="bg-gray-800 hover:bg-red-700 transition-colors p-2 rounded-full"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://linkedin.com"
                className="bg-gray-800 hover:bg-red-700 transition-colors p-2 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/institucional/quienes-somos"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/tramites/certificado-habilidad"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Certificado de Habilidad
                </Link>
              </li>
              <li>
                <Link
                  href="/tramites/colegiatura"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Colegiatura
                </Link>
              </li>
              <li>
                <Link
                  href="/capacitaciones/cursos"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Cursos y Capacitaciones
                </Link>
              </li>
              <li>
                <Link href="/elecciones" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Elecciones
                </Link>
              </li>
              <li>
                <Link
                  href="/sala-prensa/noticias"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Capítulos Profesionales</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/capitulos/civil"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ingeniería Civil
                </Link>
              </li>
              <li>
                <Link
                  href="/capitulos/sistemas"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ingeniería de Sistemas
                </Link>
              </li>
              <li>
                <Link
                  href="/capitulos/electrica"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ingeniería Eléctrica
                </Link>
              </li>
              <li>
                <Link
                  href="/capitulos/mecanica"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ingeniería Mecánica
                </Link>
              </li>
              <li>
                <Link
                  href="/capitulos/industrial"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ingeniería Industrial
                </Link>
              </li>
              <li>
                <Link
                  href="/capitulos/minas"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ingeniería de Minas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-red-700 shrink-0 mt-0.5" />
                <span className="text-gray-400">Av. Ingenieros 123, Huancayo, Junín, Perú</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-red-700 shrink-0" />
                <span className="text-gray-400">(064) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-red-700 shrink-0" />
                <span className="text-gray-400">info@cipjunin.org.pe</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Horario de Atención</h4>
              <p className="text-gray-400">
                Lunes a Viernes: 8:00 am - 5:00 pm
                <br />
                Sábados: 9:00 am - 12:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Colegio de Ingenieros del Perú - Consejo Departamental Junín. Todos los
              derechos reservados.
            </p>
            <div className="flex space-x-4">
              <Link href="/politica-privacidad" className="text-gray-400 hover:text-white text-sm">
                Política de Privacidad
              </Link>
              <Link href="/terminos-condiciones" className="text-gray-400 hover:text-white text-sm">
                Términos y Condiciones
              </Link>
              <Link href="/mapa-sitio" className="text-gray-400 hover:text-white text-sm">
                Mapa del Sitio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
