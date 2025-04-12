import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Calendar, Search, Tag, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function NoticiasPage() {
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
          <span className="text-gray-900 font-medium">Noticias</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Noticias</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mantente informado sobre las últimas noticias, eventos y actividades del Colegio de Ingenieros del Perú -
            Consejo Departamental Junín.
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
                  <Link href="/sala-prensa/noticias" className="flex items-center text-red-700 font-medium">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link href="/sala-prensa/comunicados" className="flex items-center text-gray-600 hover:text-red-700">
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
                  <Link href="/sala-prensa/cip-tv" className="flex items-center text-gray-600 hover:text-red-700">
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
                  <Input type="search" placeholder="Buscar noticias..." className="pl-10" />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Buscar</Button>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Categorías</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/sala-prensa/noticias/categoria/institucional"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>Institucional</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">12</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sala-prensa/noticias/categoria/eventos"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>Eventos</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">8</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sala-prensa/noticias/categoria/capacitaciones"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>Capacitaciones</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">15</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sala-prensa/noticias/categoria/proyectos"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>Proyectos</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">6</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sala-prensa/noticias/categoria/convenios"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>Convenios</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">4</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Archivo</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/sala-prensa/noticias/archivo/2023"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>2023</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">24</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sala-prensa/noticias/archivo/2022"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>2022</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">36</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sala-prensa/noticias/archivo/2021"
                      className="flex items-center justify-between text-gray-600 hover:text-red-700"
                    >
                      <span>2021</span>
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">28</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {/* Noticia Destacada */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Noticia+Destacada"
                  alt="Noticia Destacada"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 bg-red-700 text-white text-xs font-bold px-3 py-1">Destacado</div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>15 Junio, 2023</span>
                  <span className="mx-2">|</span>
                  <Tag className="h-4 w-4 mr-1" />
                  <span>Institucional</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">
                  CIP Junín firma importante convenio con universidad local para impulsar la investigación
                </h2>
                <p className="text-gray-600 mb-4">
                  El Colegio de Ingenieros del Perú - Consejo Departamental Junín firmó un importante convenio de
                  colaboración académica con la Universidad Continental, que permitirá desarrollar proyectos de
                  investigación conjuntos y ofrecer beneficios a los colegiados.
                </p>
                <Link href="/sala-prensa/noticias/1">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Leer más</Button>
                </Link>
              </div>
            </div>

            {/* Lista de Noticias */}
            <div className="space-y-8 mb-8">
              {[
                {
                  title: "Ingenieros de Junín participan en congreso internacional",
                  excerpt:
                    "Una delegación de ingenieros de nuestra sede participó en el Congreso Internacional de Ingeniería Civil realizado en Lima, donde presentaron importantes proyectos desarrollados en la región.",
                  date: "5 Junio, 2023",
                  category: "Eventos",
                  image: "/placeholder.svg?height=200&width=300&text=Congreso",
                },
                {
                  title: "Nuevo laboratorio de innovación tecnológica en el CIP Junín",
                  excerpt:
                    "El CIP Junín inauguró un moderno laboratorio de innovación tecnológica para el desarrollo de proyectos de los colegiados, equipado con tecnología de última generación.",
                  date: "1 Junio, 2023",
                  category: "Institucional",
                  image: "/placeholder.svg?height=200&width=300&text=Laboratorio",
                },
                {
                  title: "Reconocimiento a ingenieros destacados de la región",
                  excerpt:
                    "El Consejo Departamental Junín reconoció la trayectoria de ingenieros destacados de la región en ceremonia especial realizada en el auditorio institucional.",
                  date: "28 Mayo, 2023",
                  category: "Institucional",
                  image: "/placeholder.svg?height=200&width=300&text=Reconocimiento",
                },
                {
                  title: "Curso especializado en diseño de infraestructura vial",
                  excerpt:
                    "Con gran éxito se desarrolló el curso especializado en diseño de infraestructura vial, que contó con la participación de destacados profesionales nacionales e internacionales.",
                  date: "20 Mayo, 2023",
                  category: "Capacitaciones",
                  image: "/placeholder.svg?height=200&width=300&text=Curso",
                },
                {
                  title: "CIP Junín participa en mesa técnica para el desarrollo regional",
                  excerpt:
                    "Representantes del CIP Junín participaron en la mesa técnica convocada por el Gobierno Regional para analizar y proponer soluciones a los principales problemas de infraestructura de la región.",
                  date: "15 Mayo, 2023",
                  category: "Proyectos",
                  image: "/placeholder.svg?height=200&width=300&text=Mesa+Técnica",
                },
              ].map((noticia, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-48 md:h-auto">
                      <Image
                        src={noticia.image || "/placeholder.svg"}
                        alt={noticia.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-red-700 text-white text-xs font-bold px-3 py-1">
                        {noticia.category}
                      </div>
                    </div>
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{noticia.date}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{noticia.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{noticia.excerpt}</p>
                      <Link
                        href={`/sala-prensa/noticias/${index + 2}`}
                        className="text-red-700 hover:text-red-800 font-medium inline-flex items-center"
                      >
                        Leer más <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
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
                4
              </Button>
              <Button variant="outline" size="sm">
                5
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Suscripción */}
            <div className="bg-gray-900 text-white rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Suscríbete a nuestro boletín</h2>
              <p className="mb-4">Recibe las últimas noticias y eventos directamente en tu correo electrónico.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Button className="bg-red-700 hover:bg-red-800 text-white shrink-0">Suscribirse</Button>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Link href="/sala-prensa">
                <Button variant="outline" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Sala de Prensa
                </Button>
              </Link>
              <Link href="/sala-prensa/comunicados">
                <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                  Comunicados <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
