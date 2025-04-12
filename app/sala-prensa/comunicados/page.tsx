import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, Download, Search, ChevronLeft } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ComunicadosPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/sala-prensa" className="hover:text-red-700">
            Sala de Prensa
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Comunicados</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Comunicados Oficiales</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comunicados, pronunciamientos y avisos oficiales emitidos por el Colegio de Ingenieros del Perú - Consejo
            Departamental Junín.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Sala de Prensa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/sala-prensa/noticias" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link href="/sala-prensa/comunicados" className="flex items-center text-red-700 font-medium">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Comunicados
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sala-prensa/ingeniero-semana"
                    className="flex items-center text-gray-600 hover:text-red-700"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Ingeniero de la Semana
                  </Link>
                </li>
                <li>
                  <Link href="/sala-prensa/tv" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    CIP TV
                  </Link>
                </li>
                <li>
                  <Link href="/sala-prensa/galeria" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Galería
                  </Link>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Buscar</h3>
                <div className="relative mb-4">
                  <Input type="search" placeholder="Buscar comunicados..." className="pl-10" />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Buscar</Button>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Categorías</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/sala-prensa/comunicados/categoria/pronunciamiento"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>Pronunciamientos</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">8</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sala-prensa/comunicados/categoria/convocatoria"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>Convocatorias</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">12</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sala-prensa/comunicados/categoria/aviso"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>Avisos</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">15</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sala-prensa/comunicados/categoria/institucional"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>Institucionales</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">10</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Archivo</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/sala-prensa/comunicados/archivo/2023"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>2023</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">18</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sala-prensa/comunicados/archivo/2022"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>2022</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">24</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sala-prensa/comunicados/archivo/2021"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>2021</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">20</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {/* Comunicado Destacado */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Comunicado Destacado</h2>
                <div className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Importante</div>
              </div>

              <div className="border-l-4 border-red-700 pl-4 mb-4">
                <h3 className="font-bold text-lg mb-2">
                  Pronunciamiento sobre el estado de la infraestructura vial en la región Junín
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>15 Junio, 2023</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  El Consejo Departamental Junín del Colegio de Ingenieros del Perú se pronuncia sobre el estado actual
                  de la infraestructura vial en la región y hace un llamado a las autoridades para que tomen medidas
                  urgentes...
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/sala-prensa/comunicados/1">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Leer comunicado completo</Button>
                </Link>
                <Button variant="outline" className="flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar PDF
                </Button>
              </div>
            </div>

            {/* Lista de Comunicados */}
            <div className="space-y-6 mb-8">
              {[
                {
                  title: "Comunicado sobre proceso de colegiatura 2023",
                  date: "10 Junio, 2023",
                  category: "Aviso",
                  excerpt:
                    "Se informa a todos los interesados en colegiarse que el proceso de colegiatura 2023 se iniciará el 1 de julio. Los requisitos y procedimientos han sido actualizados...",
                  pdf: true,
                },
                {
                  title: "Pronunciamiento sobre proyecto de ley de ingeniería",
                  date: "5 Junio, 2023",
                  category: "Pronunciamiento",
                  excerpt:
                    "El Colegio de Ingenieros del Perú - Consejo Departamental Junín se pronuncia sobre el proyecto de ley que modifica aspectos relacionados con el ejercicio profesional de la ingeniería...",
                  pdf: true,
                },
                {
                  title: "Aviso importante: Actualización de datos de colegiados",
                  date: "1 Junio, 2023",
                  category: "Aviso",
                  excerpt:
                    "Se comunica a todos los ingenieros colegiados la necesidad de actualizar sus datos personales y profesionales en nuestro sistema para garantizar una comunicación efectiva...",
                  pdf: false,
                },
                {
                  title: "Comunicado: Nuevos beneficios para colegiados",
                  date: "28 Mayo, 2023",
                  category: "Institucional",
                  excerpt:
                    "El Consejo Departamental Junín del CIP se complace en anunciar nuevos beneficios para sus colegiados, incluyendo convenios con instituciones educativas, descuentos en servicios de salud...",
                  pdf: true,
                },
                {
                  title: "Convocatoria a Asamblea General Ordinaria",
                  date: "20 Mayo, 2023",
                  category: "Convocatoria",
                  excerpt:
                    "Se convoca a todos los miembros habilitados a la Asamblea General Ordinaria que se llevará a cabo el día 15 de junio de 2023 a las 18:00 horas en el auditorio principal del CIP CD Junín...",
                  pdf: true,
                },
              ].map((comunicado, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between mb-2">
                    <div className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {comunicado.category}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{comunicado.date}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-3">{comunicado.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{comunicado.excerpt}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/sala-prensa/comunicados/${index + 2}`}>
                      <Button className="bg-red-700 hover:bg-red-800 text-white">Leer más</Button>
                    </Link>
                    {comunicado.pdf && (
                      <Button variant="outline" className="flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        Descargar PDF
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Paginación */}
            <div className="flex justify-center items-center space-x-2 mb-8">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="bg-red-700 text-white">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Suscripción */}
            <div className="bg-gray-900 text-white rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Recibe nuestros comunicados</h2>
              <p className="mb-4">
                Suscríbete para recibir los comunicados oficiales directamente en tu correo electrónico.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Button className="bg-red-700 hover:bg-red-800 text-white shrink-0">Suscribirme</Button>
              </div>
            </div>

            {/* Navegación */}
            <div className="flex justify-between mt-8">
              <Link href="/sala-prensa/noticias">
                <Button variant="outline" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Noticias
                </Button>
              </Link>
              <Link href="/sala-prensa/ingeniero-semana">
                <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                  Ingeniero de la Semana <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
