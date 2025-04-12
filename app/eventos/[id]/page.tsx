import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, MapPin, Clock, Share2, Download } from "lucide-react"

// Simulación de datos de eventos
const eventos = [
  {
    id: 1,
    title: "Congreso Nacional de Ingeniería 2023",
    date: "15-17 Julio, 2023",
    time: "9:00 am - 6:00 pm",
    location: "Centro de Convenciones CIP Junín",
    category: "Congreso",
    image: "/placeholder.svg?height=500&width=1000&text=Congreso+Nacional",
    description:
      "El evento más importante del año para los ingenieros peruanos. Tres días de conferencias, talleres y networking con los mejores profesionales del país.",
    longDescription:
      "El Congreso Nacional de Ingeniería 2023 es el evento más importante del año para los profesionales de la ingeniería en el Perú. Durante tres días, los participantes tendrán la oportunidad de asistir a conferencias magistrales, talleres especializados y sesiones de networking con los mejores profesionales del sector.\n\nEste año, el congreso se enfoca en la innovación y sostenibilidad en la ingeniería, abordando temas como la transformación digital, energías renovables, infraestructura sostenible y nuevas tecnologías aplicadas a la ingeniería.",
    speakers: [
      {
        name: "Ing. Carlos Rodríguez",
        title: "Presidente del CIP Nacional",
        image: "/placeholder.svg?height=150&width=150&text=CR",
        bio: "Ingeniero Civil con más de 30 años de experiencia en el sector de infraestructura.",
      },
      {
        name: "Ing. Ana Torres",
        title: "Especialista en Infraestructura Sostenible",
        image: "/placeholder.svg?height=150&width=150&text=AT",
        bio: "Ingeniera Civil con maestría en Desarrollo Sostenible y experiencia internacional en proyectos de infraestructura verde.",
      },
      {
        name: "Ing. Luis Gómez",
        title: "Director de Innovación en Tecnología",
        image: "/placeholder.svg?height=150&width=150&text=LG",
        bio: "Ingeniero Electrónico especializado en transformación digital y nuevas tecnologías.",
      },
    ],
    schedule: [
      {
        day: "Día 1 - 15 de Julio",
        activities: [
          { time: "08:30 - 09:00", title: "Registro de participantes" },
          { time: "09:00 - 09:30", title: "Ceremonia de inauguración" },
          { time: "09:30 - 11:00", title: "Conferencia magistral: 'El futuro de la ingeniería en el Perú'" },
          { time: "11:00 - 11:30", title: "Coffee break" },
          { time: "11:30 - 13:00", title: "Panel: 'Desafíos de la ingeniería en la era digital'" },
          { time: "13:00 - 14:30", title: "Almuerzo" },
          { time: "14:30 - 16:00", title: "Talleres paralelos (Infraestructura, Tecnología, Energía)" },
          { time: "16:00 - 16:30", title: "Coffee break" },
          { time: "16:30 - 18:00", title: "Conferencia: 'Innovación en la ingeniería peruana'" },
        ],
      },
      {
        day: "Día 2 - 16 de Julio",
        activities: [
          { time: "09:00 - 10:30", title: "Conferencia: 'Sostenibilidad en proyectos de ingeniería'" },
          { time: "10:30 - 11:00", title: "Coffee break" },
          { time: "11:00 - 13:00", title: "Presentación de trabajos de investigación" },
          { time: "13:00 - 14:30", title: "Almuerzo" },
          { time: "14:30 - 16:00", title: "Talleres paralelos (Gestión de proyectos, BIM, Energías renovables)" },
          { time: "16:00 - 16:30", title: "Coffee break" },
          { time: "16:30 - 18:00", title: "Panel: 'El rol del ingeniero en el desarrollo sostenible'" },
          { time: "19:00 - 22:00", title: "Cena de confraternidad (opcional)" },
        ],
      },
      {
        day: "Día 3 - 17 de Julio",
        activities: [
          { time: "09:00 - 10:30", title: "Conferencia: 'Tendencias globales en ingeniería'" },
          { time: "10:30 - 11:00", title: "Coffee break" },
          { time: "11:00 - 12:30", title: "Mesa redonda: 'Formación del ingeniero para el futuro'" },
          { time: "12:30 - 14:00", title: "Almuerzo" },
          { time: "14:00 - 15:30", title: "Presentación de conclusiones" },
          { time: "15:30 - 16:00", title: "Coffee break" },
          { time: "16:00 - 17:00", title: "Ceremonia de clausura y entrega de certificados" },
        ],
      },
    ],
    investment: {
      regular: "S/ 350.00",
      student: "S/ 180.00",
      cipMember: "S/ 250.00",
      earlyBird: "S/ 200.00 (hasta el 30 de junio)",
    },
    includes: [
      "Acceso a todas las conferencias y talleres",
      "Material del congreso",
      "Certificado de participación",
      "Coffee breaks",
      "Almuerzos de los tres días",
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400&text=Foto+1",
      "/placeholder.svg?height=300&width=400&text=Foto+2",
      "/placeholder.svg?height=300&width=400&text=Foto+3",
      "/placeholder.svg?height=300&width=400&text=Foto+4",
    ],
  },
  // Otros eventos...
]

export default function EventoDetallePage({ params }: { params: { id: string } }) {
  // Obtener el evento por ID
  const evento = eventos.find((e) => e.id === Number.parseInt(params.id)) || eventos[0]

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/eventos" className="hover:text-red-700">
            Eventos
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">{evento.title}</span>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-lg overflow-hidden mb-8">
          <Image
            src={evento.image || "/placeholder.svg"}
            alt={evento.title}
            width={1000}
            height={500}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute top-0 left-0 bg-red-700 text-white text-xs font-bold px-3 py-1">
            {evento.category}
          </div>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna principal */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{evento.title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 text-red-700 mr-3" />
                <span>{evento.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 text-red-700 mr-3" />
                <span>{evento.time}</span>
              </div>
              <div className="flex items-center text-gray-600 md:col-span-2">
                <MapPin className="h-5 w-5 text-red-700 mr-3" />
                <span>{evento.location}</span>
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold mb-4">Descripción del evento</h2>
              {evento.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Ponentes */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Ponentes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {evento.speakers.map((speaker, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4">
                        <Image
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-lg mb-1">{speaker.name}</h3>
                      <p className="text-red-700 text-sm mb-3">{speaker.title}</p>
                      <p className="text-gray-600 text-sm">{speaker.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programa */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Programa</h2>
              <div className="space-y-6">
                {evento.schedule.map((day, dayIndex) => (
                  <div key={dayIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gray-900 text-white p-4">
                      <h3 className="font-bold">{day.day}</h3>
                    </div>
                    <div className="p-4">
                      <div className="space-y-3">
                        {day.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                            <div className="w-24 flex-shrink-0 font-medium text-red-700">{activity.time}</div>
                            <div>{activity.title}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Galería */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Galería</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {evento.gallery.map((image, index) => (
                  <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Imagen ${index + 1} del evento`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Información de inscripción</h2>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-bold text-gray-700 mb-2">Inversión</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Regular:</span>
                      <span className="font-medium">{evento.investment.regular}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Estudiantes:</span>
                      <span className="font-medium">{evento.investment.student}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Colegiados CIP:</span>
                      <span className="font-medium">{evento.investment.cipMember}</span>
                    </li>
                    <li className="flex justify-between text-red-700">
                      <span>Preventa:</span>
                      <span className="font-medium">{evento.investment.earlyBird}</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-700 mb-2">Incluye</h3>
                  <ul className="space-y-1">
                    {evento.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Inscribirme ahora</Button>
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar programa
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartir evento
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="font-bold text-gray-700 mb-3">¿Necesitas más información?</h3>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Email:</span>
                    <a href="mailto:eventos@cipjunin.org.pe" className="text-red-700 hover:underline">
                      eventos@cipjunin.org.pe
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Teléfono:</span>
                    <a href="tel:+51064123456" className="text-red-700 hover:underline">
                      (064) 123456
                    </a>
                  </p>
                </div>
                <div className="mt-4">
                  <Link href="/contacto">
                    <Button variant="outline" size="sm" className="w-full">
                      Contactar al CIP
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Eventos relacionados */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Eventos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=Evento+${index}`}
                    alt={`Evento relacionado ${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Evento relacionado {index}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar className="h-4 w-4 text-red-700 mr-2" />
                    <span>Próximamente</span>
                  </div>
                  <Link href={`/eventos/${index + 2}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Ver detalles
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
