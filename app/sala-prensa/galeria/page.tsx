import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ImageIcon, Grid3X3, Grid2X2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GaleriaPage() {
  // Datos de ejemplo para álbumes
  const albumCategories = [
    {
      id: "eventos",
      name: "Eventos Institucionales",
      albums: [
        {
          id: "1",
          title: "Ceremonia de Juramentación 2024",
          coverImage: "/placeholder.svg?height=600&width=800",
          date: "15 Mar 2024",
          imageCount: 24,
          description: "Fotografías de la ceremonia de juramentación de nuevos ingenieros colegiados.",
        },
        {
          id: "2",
          title: "Inauguración de Nuevas Instalaciones",
          coverImage: "/placeholder.svg?height=600&width=800",
          date: "28 Feb 2024",
          imageCount: 18,
          description: "Inauguración oficial de las nuevas instalaciones del CIP Junín.",
        },
        {
          id: "3",
          title: "Día del Ingeniero 2023",
          coverImage: "/placeholder.svg?height=600&width=800",
          date: "8 Jun 2023",
          imageCount: 32,
          description: "Celebración del Día del Ingeniero con diversas actividades y reconocimientos.",
        },
      ],
    },
    {
      id: "capacitaciones",
      name: "Capacitaciones y Talleres",
      albums: [
        {
          id: "4",
          title: "Taller de BIM para Ingenieros",
          coverImage: "/placeholder.svg?height=600&width=800",
          date: "22 Mar 2024",
          imageCount: 15,
          description: "Taller práctico sobre implementación de BIM en proyectos de ingeniería.",
        },
        {
          id: "5",
          title: "Seminario de Gestión de Proyectos",
          coverImage: "/placeholder.svg?height=600&width=800",
          date: "10 Mar 2024",
          imageCount: 20,
          description: "Seminario especializado en metodologías de gestión de proyectos.",
        },
        {
          id: "6",
          title: "Curso de Seguridad Industrial",
          coverImage: "/placeholder.svg?height=600&width=800",
          date: "25 Feb 2024",
          imageCount: 12,
          description: "Capacitación en normativas y prácticas de seguridad industrial.",
        },
      ],
    },
    {
      id: "conferencias",
      name: "Conferencias",
      albums: [
        {
          id: "7",
          title: "Conferencia de Innovación en Ingeniería",
          coverImage: "/placeholder.svg?height=600&width=800",
          date: "20 Mar 2024",
          imageCount: 22,
          description: "Conferencia sobre las últimas innovaciones en el campo de la ingeniería.",
        },
        {
          id: "8",
          title: "Foro de Transformación Digital",
          coverImage: "/placeholder.svg?height=600&width=800",
          date: "5 Mar 2024",
          imageCount: 16,
          description: "Foro sobre el impacto de la transformación digital en la ingeniería.",
        },
        {
          id: "9",
          title: "Conferencia de Sostenibilidad",
          coverImage: "/placeholder.svg?height=600&width=800",
          date: "15 Feb 2024",
          imageCount: 19,
          description: "Conferencia sobre ingeniería sostenible y medio ambiente.",
        },
      ],
    },
    {
      id: "sociales",
      name: "Actividades Sociales",
      albums: [
        {
          id: "10",
          title: "Aniversario del CIP Junín",
          coverImage: "/placeholder.svg?height=600&width=800",
          date: "25 Mar 2024",
          imageCount: 28,
          description: "Celebración del aniversario del Consejo Departamental Junín.",
        },
        {
          id: "11",
          title: "Actividad de Integración 2024",
          coverImage: "/placeholder.svg?height=600&width=800",
          date: "12 Mar 2024",
          imageCount: 35,
          description: "Jornada de integración para ingenieros colegiados y sus familias.",
        },
        {
          id: "12",
          title: "Celebración Navideña 2023",
          coverImage: "/placeholder.svg?height=600&width=800",
          date: "20 Dec 2023",
          imageCount: 42,
          description: "Celebración navideña con los miembros del CIP Junín.",
        },
      ],
    },
  ]

  // Datos de ejemplo para imágenes destacadas
  const featuredImages = [
    {
      id: "f1",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Ceremonia de Juramentación",
      category: "Eventos Institucionales",
    },
    {
      id: "f2",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Conferencia de Ingeniería Civil",
      category: "Conferencias",
    },
    {
      id: "f3",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Taller de Capacitación",
      category: "Capacitaciones",
    },
    {
      id: "f4",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Actividad de Integración",
      category: "Actividades Sociales",
    },
    {
      id: "f5",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Inauguración de Instalaciones",
      category: "Eventos Institucionales",
    },
    {
      id: "f6",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Seminario de Gestión",
      category: "Capacitaciones",
    },
  ]

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Galería Fotográfica</h1>
        <p className="text-gray-600">
          Colección de fotografías de eventos, actividades y ceremonias del Colegio de Ingenieros del Perú - Consejo
          Departamental Junín
        </p>
      </div>

      {/* Imágenes destacadas */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Imágenes Destacadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredImages.map((image) => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={1200}
                height={800}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium">{image.alt}</h3>
                <p className="text-gray-200 text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Álbumes por categoría */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Álbumes Fotográficos</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Grid3X3 className="h-4 w-4 mr-2" /> Vista Cuadrícula
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Grid2X2 className="h-4 w-4 mr-2" /> Vista Lista
            </Button>
          </div>
        </div>

        <Tabs defaultValue="eventos" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            {albumCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {albumCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.albums.map((album) => (
                  <Link href={`/sala-prensa/galeria/${album.id}`} key={album.id}>
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <Image
                          src={album.coverImage || "/placeholder.svg"}
                          alt={album.title}
                          width={800}
                          height={600}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded flex items-center">
                          <ImageIcon className="h-3 w-3 mr-1" />
                          {album.imageCount}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{album.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="w-4 h-4 mr-1" />
                          {album.date}
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-2">{album.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  Ver más álbumes de {category.name}
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Envío de fotografías */}
      <section className="mt-16 bg-gray-50 p-8 rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">¿Tienes fotografías para compartir?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Si eres miembro del CIP Junín y tienes fotografías de eventos o actividades que te gustaría compartir en
            nuestra galería, envíanoslas.
          </p>
          <Button className="bg-red-600 hover:bg-red-700">Enviar fotografías</Button>
        </div>
      </section>
    </main>
  )
}
