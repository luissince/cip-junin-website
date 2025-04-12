import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Clock, Eye } from "lucide-react"
import Image from "next/image"

export default function CipTvPage() {
  // Datos de ejemplo para videos
  const featuredVideo = {
    id: "1",
    title: "Ceremonia de Juramentación de Nuevos Ingenieros",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    duration: "1:45:30",
    date: "15 Mar 2024",
    views: 1250,
    category: "ceremonias",
    description: "Ceremonia oficial de juramentación de la nueva promoción de ingenieros colegiados del CIP Junín.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  }

  const videoCategories = [
    {
      id: "ceremonias",
      name: "Ceremonias",
      videos: [
        {
          id: "2",
          title: "Inauguración de Nuevas Instalaciones",
          thumbnail: "/placeholder.svg?height=360&width=640",
          duration: "58:20",
          date: "28 Feb 2024",
          views: 875,
          category: "ceremonias",
        },
        {
          id: "3",
          title: "Premiación a la Excelencia en Ingeniería",
          thumbnail: "/placeholder.svg?height=360&width=640",
          duration: "1:12:45",
          date: "10 Feb 2024",
          views: 920,
          category: "ceremonias",
        },
        {
          id: "4",
          title: "Ceremonia del Día del Ingeniero",
          thumbnail: "/placeholder.svg?height=360&width=640",
          duration: "2:05:15",
          date: "8 Jan 2024",
          views: 1540,
          category: "ceremonias",
        },
      ],
    },
    {
      id: "conferencias",
      name: "Conferencias",
      videos: [
        {
          id: "5",
          title: "Innovaciones en Ingeniería Civil",
          thumbnail: "/placeholder.svg?height=360&width=640",
          duration: "1:25:10",
          date: "20 Mar 2024",
          views: 780,
          category: "conferencias",
        },
        {
          id: "6",
          title: "Transformación Digital en la Ingeniería",
          thumbnail: "/placeholder.svg?height=360&width=640",
          duration: "1:05:30",
          date: "5 Mar 2024",
          views: 650,
          category: "conferencias",
        },
        {
          id: "7",
          title: "Sostenibilidad y Medio Ambiente",
          thumbnail: "/placeholder.svg?height=360&width=640",
          duration: "1:18:45",
          date: "15 Feb 2024",
          views: 890,
          category: "conferencias",
        },
      ],
    },
    {
      id: "entrevistas",
      name: "Entrevistas",
      videos: [
        {
          id: "8",
          title: "Entrevista al Decano del CIP Junín",
          thumbnail: "/placeholder.svg?height=360&width=640",
          duration: "45:20",
          date: "25 Mar 2024",
          views: 1120,
          category: "entrevistas",
        },
        {
          id: "9",
          title: "Conversatorio con Ingenieros Destacados",
          thumbnail: "/placeholder.svg?height=360&width=640",
          duration: "58:15",
          date: "12 Mar 2024",
          views: 680,
          category: "entrevistas",
        },
        {
          id: "10",
          title: "Diálogo con Líderes de la Industria",
          thumbnail: "/placeholder.svg?height=360&width=640",
          duration: "52:30",
          date: "28 Feb 2024",
          views: 750,
          category: "entrevistas",
        },
      ],
    },
    {
      id: "capacitaciones",
      name: "Capacitaciones",
      videos: [
        {
          id: "11",
          title: "Curso de BIM para Ingenieros",
          thumbnail: "/placeholder.svg?height=360&width=640",
          duration: "2:15:40",
          date: "22 Mar 2024",
          views: 1350,
          category: "capacitaciones",
        },
        {
          id: "12",
          title: "Taller de Gestión de Proyectos",
          thumbnail: "/placeholder.svg?height=360&width=640",
          duration: "1:48:25",
          date: "10 Mar 2024",
          views: 980,
          category: "capacitaciones",
        },
        {
          id: "13",
          title: "Seminario de Seguridad Industrial",
          thumbnail: "/placeholder.svg?height=360&width=640",
          duration: "1:35:50",
          date: "25 Feb 2024",
          views: 870,
          category: "capacitaciones",
        },
      ],
    },
  ]

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CIP TV</h1>
        <p className="text-gray-600">Canal oficial del Colegio de Ingenieros del Perú - Consejo Departamental Junín</p>
      </div>

      {/* Video destacado */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Video Destacado</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden bg-gray-100">
              <iframe
                src={featuredVideo.videoUrl}
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
                title={featuredVideo.title}
              ></iframe>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">{featuredVideo.title}</h3>
            <p className="text-gray-600 mb-4">{featuredVideo.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {featuredVideo.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {featuredVideo.duration}
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {featuredVideo.views} vistas
              </div>
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700">
              <Play className="w-4 h-4 mr-2" /> Ver ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Categorías de videos */}
      <section>
        <Tabs defaultValue="ceremonias" className="w-full">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Videoteca</h2>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {videoCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {videoCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.videos.map((video) => (
                  <Card key={video.id} className="overflow-hidden">
                    <div className="relative">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        width={640}
                        height={360}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                        {video.duration}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full bg-white text-red-600 hover:bg-red-600 hover:text-white"
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
                      <div className="flex justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {video.date}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {video.views}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  Ver más videos de {category.name}
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Suscripción */}
      <section className="mt-16 bg-red-50 p-8 rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Suscríbete a nuestro canal</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Mantente actualizado con los últimos videos, conferencias y eventos del Colegio de Ingenieros del Perú -
            Consejo Departamental Junín.
          </p>
          <Button className="bg-red-600 hover:bg-red-700">Suscribirse al canal de YouTube</Button>
        </div>
      </section>
    </main>
  )
}
