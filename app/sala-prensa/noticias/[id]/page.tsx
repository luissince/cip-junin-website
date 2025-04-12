import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Calendar, Tag, Facebook, Twitter, Linkedin, Mail, Printer } from "lucide-react"

// Esta es una página de ejemplo para el detalle de una noticia
// En una implementación real, se obtendría la información de la noticia desde una base de datos
export default function NoticiaDetallePage({ params }: { params: { id: string } }) {
  // Simulamos obtener los datos de la noticia basado en el ID
  const noticiaId = Number.parseInt(params.id)

  // Datos de ejemplo para la noticia
  const noticia = {
    id: noticiaId,
    title: "CIP Junín firma importante convenio con universidad local para impulsar la investigación",
    date: "15 Junio, 2023",
    author: "Oficina de Comunicaciones CIP Junín",
    category: "Institucional",
    image: "/placeholder.svg?height=500&width=1000&text=Convenio+CIP-Universidad",
    content: `
      <p>El Colegio de Ingenieros del Perú - Consejo Departamental Junín firmó un importante convenio de colaboración académica con la Universidad Continental, que permitirá desarrollar proyectos de investigación conjuntos y ofrecer beneficios a los colegiados.</p>
      
      <p>La ceremonia de firma se realizó en el auditorio del CIP CD Junín y contó con la presencia del Decano Departamental, Ing. Carlos Rodríguez Pérez, y el Rector de la Universidad Continental, Dr. Juan Pérez Silva, así como miembros del Consejo Departamental y autoridades universitarias.</p>
      
      <p>El convenio, que tendrá una vigencia de tres años, establece las bases para una colaboración mutua en áreas de interés común, como la formación académica, la investigación científica y tecnológica, la extensión universitaria y la proyección social.</p>
      
      <h3>Beneficios para los colegiados</h3>
      
      <p>Entre los principales beneficios que obtendrán los ingenieros colegiados se encuentran:</p>
      
      <ul>
        <li>Descuentos del 25% en programas de posgrado</li>
        <li>Acceso a laboratorios especializados para proyectos de investigación</li>
        <li>Desarrollo conjunto de proyectos de investigación y publicaciones</li>
        <li>Participación preferencial en eventos académicos</li>
        <li>Uso de instalaciones para actividades académicas y profesionales</li>
      </ul>
      
      <p>El Decano Departamental, Ing. Carlos Rodríguez Pérez, destacó la importancia de este convenio para el desarrollo profesional de los ingenieros de la región. "Este acuerdo nos permitirá fortalecer la formación continua de nuestros colegiados y contribuir al desarrollo de la región Junín a través de la investigación y la innovación", señaló.</p>
      
      <p>Por su parte, el Rector de la Universidad Continental, Dr. Juan Pérez Silva, expresó su satisfacción por la firma del convenio y resaltó el compromiso de la universidad con la formación de profesionales de excelencia. "Esta alianza estratégica nos permitirá trabajar de manera conjunta en proyectos que beneficien a la sociedad y promuevan el desarrollo sostenible de nuestra región", afirmó.</p>
      
      <h3>Primeros proyectos</h3>
      
      <p>Como parte del convenio, se anunció el inicio de dos proyectos de investigación conjuntos:</p>
      
      <ol>
        <li>Estudio de tecnologías sostenibles para la construcción en zonas alto andinas</li>
        <li>Desarrollo de sistemas de monitoreo ambiental con tecnología IoT</li>
      </ol>
      
      <p>Estos proyectos contarán con la participación de ingenieros colegiados y docentes universitarios, y se espera que sus resultados contribuyan a solucionar problemas específicos de la región.</p>
      
      <p>La firma de este convenio representa un paso importante en la estrategia del CIP CD Junín de establecer alianzas con instituciones académicas y empresariales para promover el desarrollo profesional de los ingenieros y contribuir al progreso de la región.</p>
    `,
    tags: ["Convenio", "Universidad", "Investigación", "Capacitación", "Desarrollo Profesional"],
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Firma+de+Convenio+1",
      "/placeholder.svg?height=300&width=500&text=Firma+de+Convenio+2",
      "/placeholder.svg?height=300&width=500&text=Firma+de+Convenio+3",
      "/placeholder.svg?height=300&width=500&text=Firma+de+Convenio+4",
    ],
    relatedNews: [
      {
        id: 2,
        title: "Ingenieros de Junín participan en congreso internacional",
        date: "5 Junio, 2023",
        image: "/placeholder.svg?height=100&width=150&text=Congreso",
      },
      {
        id: 3,
        title: "Nuevo laboratorio de innovación tecnológica en el CIP Junín",
        date: "1 Junio, 2023",
        image: "/placeholder.svg?height=100&width=150&text=Laboratorio",
      },
      {
        id: 4,
        title: "Reconocimiento a ingenieros destacados de la región",
        date: "28 Mayo, 2023",
        image: "/placeholder.svg?height=100&width=150&text=Reconocimiento",
      },
    ],
  }

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
          <Link href="/sala-prensa/noticias" className="hover:text-red-700">
            Noticias
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Detalle</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="relative h-80">
                <Image src={noticia.image || "/placeholder.svg"} alt={noticia.title} fill className="object-cover" />
                <div className="absolute top-0 left-0 bg-red-700 text-white text-xs font-bold px-3 py-1">
                  {noticia.category}
                </div>
              </div>

              <div className="p-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">{noticia.title}</h1>

                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
                  <div className="flex items-center mr-4 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{noticia.date}</span>
                  </div>
                  <div className="flex items-center mr-4 mb-2">
                    <Tag className="h-4 w-4 mr-1" />
                    <span>{noticia.category}</span>
                  </div>
                  <div className="mb-2">
                    <span>Por: {noticia.author}</span>
                  </div>
                </div>

                {/* Compartir */}
                <div className="flex items-center space-x-2 mb-6 pb-6 border-b border-gray-200">
                  <span className="text-sm font-medium">Compartir:</span>
                  <button className="bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </button>
                  <button className="bg-sky-500 text-white p-1.5 rounded-full hover:bg-sky-600">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </button>
                  <button className="bg-blue-700 text-white p-1.5 rounded-full hover:bg-blue-800">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </button>
                  <button className="bg-gray-500 text-white p-1.5 rounded-full hover:bg-gray-600">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </button>
                  <button className="bg-gray-500 text-white p-1.5 rounded-full hover:bg-gray-600">
                    <Printer className="h-4 w-4" />
                    <span className="sr-only">Imprimir</span>
                  </button>
                </div>

                {/* Contenido */}
                <div className="prose max-w-none mb-6" dangerouslySetInnerHTML={{ __html: noticia.content }} />

                {/* Etiquetas */}
                <div className="flex flex-wrap items-center gap-2 mb-6 pb-6 border-b border-gray-200">
                  <span className="text-sm font-medium">Etiquetas:</span>
                  {noticia.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/sala-prensa/noticias/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full hover:bg-gray-200"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                {/* Galería */}
                <h3 className="text-xl font-bold mb-4">Galería de imágenes</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {noticia.gallery.map((image, index) => (
                    <Link key={index} href={`/sala-prensa/galeria?image=${index}`} className="block">
                      <div className="relative h-32 rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Imagen ${index + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <Link href="/sala-prensa/noticias">
                    <Button variant="outline" className="flex items-center">
                      <ChevronLeft className="mr-2 h-4 w-4" /> Volver a Noticias
                    </Button>
                  </Link>
                  <Link href={`/sala-prensa/noticias/${noticia.id + 1}`}>
                    <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                      Siguiente Noticia <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Noticias Relacionadas</h3>
              <div className="space-y-4">
                {noticia.relatedNews.map((related, index) => (
                  <Link key={index} href={`/sala-prensa/noticias/${related.id}`} className="block">
                    <div className="flex items-start space-x-3">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={related.image || "/placeholder.svg"}
                          alt={related.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm hover:text-red-700">{related.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{related.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <h3 className="text-lg font-bold mt-8 mb-4 border-b border-gray-200 pb-2">Categorías</h3>
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

              <h3 className="text-lg font-bold mt-8 mb-4 border-b border-gray-200 pb-2">Archivo</h3>
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
      </div>
    </main>
  )
}
