import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, Download, Eye, Share2, ThumbsUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AlbumDetailPage({ params }: { params: { id: string } }) {
  // Datos de ejemplo para el álbum
  const album = {
    id: params.id,
    title: "Ceremonia de Juramentación 2024",
    date: "15 Mar 2024",
    description:
      "Fotografías de la ceremonia de juramentación de nuevos ingenieros colegiados del CIP Junín. Este evento marca un hito importante en la vida profesional de los nuevos miembros de nuestra institución.",
    location: "Auditorio Principal del CIP Junín",
    photographer: "Carlos Mendoza",
    views: 1250,
    likes: 85,
    imageCount: 24,
  }

  // Datos de ejemplo para las imágenes del álbum
  const albumImages = [
    {
      id: "1",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Discurso del Decano",
      caption: "Discurso de bienvenida del Decano del CIP Junín",
    },
    {
      id: "2",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Juramentación grupal",
      caption: "Juramentación de los nuevos ingenieros colegiados",
    },
    {
      id: "3",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Entrega de credenciales",
      caption: "Entrega de credenciales a los nuevos miembros",
    },
    {
      id: "4",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Foto grupal",
      caption: "Fotografía grupal de la nueva promoción",
    },
    { id: "5", src: "/placeholder.svg?height=800&width=1200", alt: "Brindis", caption: "Brindis de celebración" },
    {
      id: "6",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Reconocimientos",
      caption: "Entrega de reconocimientos a ingenieros destacados",
    },
    {
      id: "7",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Presentación cultural",
      caption: "Presentación cultural durante la ceremonia",
    },
    {
      id: "8",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Público asistente",
      caption: "Público asistente a la ceremonia",
    },
    {
      id: "9",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Palabras de agradecimiento",
      caption: "Palabras de agradecimiento de un nuevo colegiado",
    },
    {
      id: "10",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Recepción",
      caption: "Recepción posterior a la ceremonia",
    },
    {
      id: "11",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Directivos",
      caption: "Directivos del CIP Junín durante el evento",
    },
    {
      id: "12",
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Invitados especiales",
      caption: "Invitados especiales a la ceremonia",
    },
  ]

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/sala-prensa/galeria" className="inline-flex items-center text-red-600 hover:text-red-800 mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" /> Volver a la galería
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{album.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {album.date}
          </div>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            {album.views} vistas
          </div>
          <div className="flex items-center">
            <ThumbsUp className="w-4 h-4 mr-1" />
            {album.likes} me gusta
          </div>
        </div>
        <p className="text-gray-600 mb-4">{album.description}</p>
        <div className="flex flex-wrap gap-6 text-sm">
          <div>
            <span className="font-semibold">Ubicación:</span> {album.location}
          </div>
          <div>
            <span className="font-semibold">Fotografía:</span> {album.photographer}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-500">{album.imageCount} fotografías</div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex items-center">
            <Download className="h-4 w-4 mr-2" /> Descargar álbum
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <Share2 className="h-4 w-4 mr-2" /> Compartir
          </Button>
        </div>
      </div>

      <Tabs defaultValue="grid" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="grid" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
            Vista Cuadrícula
          </TabsTrigger>
          <TabsTrigger value="slideshow" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
            Presentación
          </TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {albumImages.map((image) => (
              <Card key={image.id} className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white text-sm">{image.caption}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="slideshow" className="mt-0">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="relative mx-auto max-w-4xl">
              <Image
                src={albumImages[0].src || "/placeholder.svg"}
                alt={albumImages[0].alt}
                width={1200}
                height={800}
                className="w-full h-[500px] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
                <p className="text-lg font-medium">{albumImages[0].alt}</p>
                <p className="text-sm text-gray-200">{albumImages[0].caption}</p>
              </div>
            </div>
            <div className="flex justify-center mt-4 gap-2">
              <Button variant="outline" size="sm">
                Anterior
              </Button>
              <Button variant="outline" size="sm">
                1 / {albumImages.length}
              </Button>
              <Button variant="outline" size="sm">
                Siguiente
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Álbumes relacionados */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Álbumes relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Álbum relacionado"
                width={800}
                height={600}
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Día del Ingeniero 2023</h3>
              <p className="text-sm text-gray-500">8 Jun 2023</p>
            </div>
          </Card>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Álbum relacionado"
                width={800}
                height={600}
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Aniversario CIP Junín</h3>
              <p className="text-sm text-gray-500">25 Mar 2023</p>
            </div>
          </Card>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Álbum relacionado"
                width={800}
                height={600}
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Juramentación 2023</h3>
              <p className="text-sm text-gray-500">15 Mar 2023</p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
