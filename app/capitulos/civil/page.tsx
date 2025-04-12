import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Users, Calendar, BookOpen, Award, Mail, Phone } from "lucide-react"

export default function CapituloCivilPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/capitulos" className="hover:text-red-700">
            Capítulos Profesionales
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Ingeniería Civil</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Capítulo de Ingeniería Civil</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            El Capítulo de Ingeniería Civil del CIP CD Junín agrupa a los ingenieros civiles colegiados, promoviendo su
            desarrollo profesional y contribuyendo al progreso de la región.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-lg overflow-hidden mb-12">
          <Image
            src="/placeholder.svg?height=400&width=1200&text=Ingeniería+Civil"
            alt="Capítulo de Ingeniería Civil"
            width={1200}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
            <div className="max-w-xl text-white">
              <h2 className="text-3xl font-bold mb-4">Construyendo el Futuro</h2>
              <p className="mb-6">
                La Ingeniería Civil es fundamental para el desarrollo de la infraestructura y el progreso de nuestra
                sociedad. Nuestro capítulo reúne a los mejores profesionales de la región.
              </p>
              <Button className="bg-red-700 hover:bg-red-800 text-white">Unirse al Capítulo</Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Capítulos Profesionales</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/capitulos/civil" className="flex items-center text-red-700 font-medium">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Ingeniería Civil
                  </Link>
                </li>
                <li>
                  <Link href="/capitulos/sistemas" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Ingeniería de Sistemas
                  </Link>
                </li>
                <li>
                  <Link href="/capitulos/electrica" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Ingeniería Eléctrica
                  </Link>
                </li>
                <li>
                  <Link href="/capitulos/mecanica" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Ingeniería Mecánica
                  </Link>
                </li>
                <li>
                  <Link href="/capitulos/industrial" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Ingeniería Industrial
                  </Link>
                </li>
                <li>
                  <Link href="/capitulos/minas" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Ingeniería de Minas
                  </Link>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Contacto del Capítulo</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 text-red-700 mr-2" />
                    civil@cipjunin.org.pe
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 text-red-700 mr-2" />
                    +51 064 123456 Anexo 104
                  </li>
                </ul>

                <div className="mt-4">
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Contactar al Capítulo</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Sobre el Capítulo</h2>
              <p className="text-gray-600 mb-4">
                El Capítulo de Ingeniería Civil del CIP CD Junín fue fundado en 1962 y actualmente cuenta con más de
                2,500 miembros activos. Nuestra misión es promover el desarrollo profesional de los ingenieros civiles,
                fomentar la ética en el ejercicio de la profesión y contribuir al desarrollo sostenible de la
                infraestructura en la región Junín.
              </p>
              <p className="text-gray-600 mb-6">
                Nuestro capítulo organiza regularmente cursos, seminarios, conferencias y visitas técnicas para mantener
                actualizados a nuestros miembros en las últimas tendencias y tecnologías en el campo de la ingeniería
                civil.
              </p>

              <h3 className="text-xl font-bold mb-4">Áreas de Especialización</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {["Estructuras", "Geotecnia", "Hidráulica", "Transportes", "Construcción", "Gestión de Proyectos"].map(
                  (area, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                      <span className="font-medium">{area}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Junta Directiva */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Users className="h-6 w-6 text-red-700 mr-2" />
                Junta Directiva del Capítulo
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  {
                    name: "Ing. Roberto Sánchez Vargas",
                    position: "Presidente del Capítulo",
                    image: "/placeholder.svg?height=120&width=120&text=Presidente",
                  },
                  {
                    name: "Ing. María Fernández López",
                    position: "Secretaria",
                    image: "/placeholder.svg?height=120&width=120&text=Secretaria",
                  },
                  {
                    name: "Ing. Juan Pérez Rodríguez",
                    position: "Tesorero",
                    image: "/placeholder.svg?height=120&width=120&text=Tesorero",
                  },
                  {
                    name: "Ing. Carmen Díaz Mendoza",
                    position: "Vocal",
                    image: "/placeholder.svg?height=120&width=120&text=Vocal",
                  },
                ].map((directivo, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-red-700 flex-shrink-0">
                      <Image
                        src={directivo.image || "/placeholder.svg"}
                        alt={directivo.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{directivo.name}</h3>
                      <p className="text-red-700 text-sm">{directivo.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actividades */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-red-700 mr-2" />
                Próximas Actividades
              </h2>

              <div className="space-y-4 mb-6">
                {[
                  {
                    title: "Curso: Diseño Sísmico de Edificaciones",
                    date: "15-17 Julio, 2023",
                    location: "Auditorio CIP Junín",
                    description: "Curso especializado en diseño sísmico según la norma E.030.",
                  },
                  {
                    title: "Conferencia: Infraestructura Sostenible",
                    date: "25 Julio, 2023",
                    location: "Virtual - Zoom",
                    description:
                      "Conferencia sobre tendencias en infraestructura sostenible y su aplicación en proyectos locales.",
                  },
                  {
                    title: "Visita Técnica: Proyecto Hidroeléctrica",
                    date: "5 Agosto, 2023",
                    location: "Chanchamayo, Junín",
                    description: "Visita técnica al proyecto de construcción de la Central Hidroeléctrica.",
                  },
                ].map((actividad, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-bold">{actividad.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-3">{actividad.date}</span>
                      <span>{actividad.location}</span>
                    </div>
                    <p className="text-sm text-gray-600">{actividad.description}</p>
                    <div className="mt-3">
                      <Button variant="outline" size="sm">
                        Más información
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/capitulos/civil/actividades">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Ver todas las actividades</Button>
                </Link>
              </div>
            </div>

            {/* Certificaciones */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="h-6 w-6 text-red-700 mr-2" />
                Certificaciones y Especialidades
              </h2>

              <p className="text-gray-600 mb-4">
                El Capítulo de Ingeniería Civil ofrece certificaciones especializadas para sus miembros, que acreditan
                competencias específicas en diversas áreas de la profesión.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Especialista en Gestión de Proyectos",
                    description:
                      "Certificación que acredita competencias en dirección y gestión de proyectos de construcción.",
                  },
                  {
                    title: "Especialista en Supervisión de Obras",
                    description:
                      "Certificación para profesionales dedicados a la supervisión y fiscalización de obras civiles.",
                  },
                  {
                    title: "Especialista en Diseño Estructural",
                    description: "Certificación que valida conocimientos avanzados en diseño de estructuras.",
                  },
                  {
                    title: "Especialista en Infraestructura Vial",
                    description:
                      "Certificación para profesionales especializados en diseño y construcción de carreteras.",
                  },
                ].map((cert, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
                    <Button variant="outline" size="sm">
                      Requisitos
                    </Button>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/capitulos/civil/certificaciones">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Ver todas las certificaciones</Button>
                </Link>
              </div>
            </div>

            {/* Recursos */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="h-6 w-6 text-red-700 mr-2" />
                Recursos para Miembros
              </h2>

              <p className="text-gray-600 mb-4">
                Como miembro del Capítulo de Ingeniería Civil, tienes acceso a diversos recursos que te ayudarán en tu
                desarrollo profesional.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="border rounded-lg p-4 text-center">
                  <h3 className="font-bold mb-2">Biblioteca Digital</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Acceso a libros, revistas y publicaciones especializadas.
                  </p>
                  <Button variant="outline" size="sm">
                    Acceder
                  </Button>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <h3 className="font-bold mb-2">Normas Técnicas</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Colección de normas técnicas nacionales e internacionales.
                  </p>
                  <Button variant="outline" size="sm">
                    Consultar
                  </Button>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <h3 className="font-bold mb-2">Software Especializado</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Descuentos en licencias de software para ingeniería civil.
                  </p>
                  <Button variant="outline" size="sm">
                    Ver ofertas
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Link href="/capitulos">
                <Button variant="outline" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Todos los Capítulos
                </Button>
              </Link>
              <Link href="/capitulos/sistemas">
                <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                  Ingeniería de Sistemas <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
