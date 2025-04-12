import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Award,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Linkedin,
  Globe,
} from "lucide-react"

export default function IngenieroSemanaPage() {
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
          <span className="text-gray-900 font-medium">Ingeniero de la Semana</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Ingeniero de la Semana</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reconocemos el talento, la dedicación y las contribuciones de los ingenieros destacados de nuestra región.
            Conoce a los profesionales que inspiran y lideran el desarrollo de la ingeniería en Junín.
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
                  <Link href="/sala-prensa/comunicados" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Comunicados
                  </Link>
                </li>
                <li>
                  <Link href="/sala-prensa/ingeniero-semana" className="flex items-center text-red-700 font-medium">
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
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Ingenieros Destacados</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Ing. Ana Torres Vega",
                      specialty: "Ingeniería Civil",
                      date: "Semana del 5 - 11 Junio, 2023",
                      image: "/placeholder.svg?height=60&width=60&text=AT",
                    },
                    {
                      name: "Ing. Carlos Mendoza López",
                      specialty: "Ingeniería de Sistemas",
                      date: "Semana del 29 Mayo - 4 Junio, 2023",
                      image: "/placeholder.svg?height=60&width=60&text=CM",
                    },
                    {
                      name: "Ing. María Pérez Rodríguez",
                      specialty: "Ingeniería Industrial",
                      date: "Semana del 22 - 28 Mayo, 2023",
                      image: "/placeholder.svg?height=60&width=60&text=MP",
                    },
                  ].map((ingeniero, index) => (
                    <Link key={index} href={`/sala-prensa/ingeniero-semana/${index + 2}`} className="block">
                      <div className="flex items-start space-x-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                          <Image
                            src={ingeniero.image || "/placeholder.svg"}
                            alt={ingeniero.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm hover:text-red-700">{ingeniero.name}</h4>
                          <p className="text-xs text-gray-500">{ingeniero.specialty}</p>
                          <p className="text-xs text-gray-500 mt-1">{ingeniero.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link
                    href="/sala-prensa/ingeniero-semana/archivo"
                    className="text-red-700 hover:text-red-800 text-sm font-medium"
                  >
                    Ver archivo completo
                  </Link>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Postular Candidato</h3>
                <p className="text-sm text-gray-600 mb-4">
                  ¿Conoces a un ingeniero destacado que merezca ser reconocido? Postúlalo como Ingeniero de la Semana.
                </p>
                <Link href="/sala-prensa/ingeniero-semana/postular">
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Postular Candidato</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {/* Ingeniero Actual */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="bg-gray-900 text-white p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-yellow-500 mr-2" />
                  <h2 className="text-2xl font-bold">Ingeniero de la Semana</h2>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">Semana del 12 - 18 Junio, 2023</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                  <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-red-700 flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=160&width=160&text=Ing.+Juan+Pérez"
                      alt="Ing. Juan Pérez Rodríguez"
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Ing. Juan Pérez Rodríguez</h2>
                    <p className="text-red-700 font-semibold mb-2 text-center md:text-left">
                      Ingeniería Civil - CIP 123456
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Estructuras
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Proyectos Hídricos
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Docencia
                      </span>
                    </div>

                    <div className="flex items-center justify-center md:justify-start mb-4">
                      <div className="flex items-center mr-4">
                        <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-600">Huancayo, Junín</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-600">15 años de experiencia</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <a href="mailto:juan.perez@ejemplo.com" className="text-gray-700 hover:text-red-700">
                        <Mail className="h-5 w-5" />
                      </a>
                      <a href="tel:+51987654321" className="text-gray-700 hover:text-red-700">
                        <Phone className="h-5 w-5" />
                      </a>
                      <a
                        href="https://linkedin.com/in/juanperez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-red-700"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="https://juanperez.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-red-700"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-bold mb-4">Trayectoria Profesional</h3>
                  <p className="text-gray-700 mb-4">
                    El Ing. Juan Pérez Rodríguez es un destacado profesional con más de 15 años de experiencia en el
                    campo de la ingeniería civil, especializado en el diseño y supervisión de estructuras para proyectos
                    de gran envergadura. Su contribución al desarrollo de infraestructura en la región Junín ha sido
                    significativa, participando en proyectos emblemáticos como la reconstrucción del Puente Comuneros y
                    el diseño del sistema de agua potable para comunidades rurales de Concepción.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Actualmente se desempeña como Gerente de Proyectos en Constructora Andina S.A.C., donde lidera un
                    equipo multidisciplinario de profesionales. Además, es docente en la Universidad Nacional del Centro
                    del Perú, compartiendo sus conocimientos y experiencia con las nuevas generaciones de ingenieros.
                  </p>

                  <h3 className="text-xl font-bold mb-4 mt-6">Formación Académica</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <GraduationCap className="h-5 w-5 text-red-700 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">Maestría en Ingeniería Estructural</h4>
                        <p className="text-sm text-gray-600">Universidad Nacional de Ingeniería | 2010 - 2012</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <GraduationCap className="h-5 w-5 text-red-700 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">Ingeniero Civil</h4>
                        <p className="text-sm text-gray-600">Universidad Nacional del Centro del Perú | 2003 - 2008</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <GraduationCap className="h-5 w-5 text-red-700 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">Especialización en Gestión de Proyectos</h4>
                        <p className="text-sm text-gray-600">PM Institute | 2014</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 mt-6">Logros y Reconocimientos</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                    <li>Premio a la Excelencia en Ingeniería Civil 2019 - CIP Junín</li>
                    <li>Reconocimiento por proyecto innovador de captación de agua en zonas altoandinas</li>
                    <li>Autor de la publicación "Diseño sísmico de estructuras en la sierra central del Perú"</li>
                    <li>Ponente internacional en el Congreso Latinoamericano de Ingeniería Civil 2021</li>
                    <li>
                      Miembro del comité técnico para la actualización de la Norma E.030 de Diseño Sismorresistente
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mb-4 mt-6">Proyectos Destacados</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Puente Comuneros</h4>
                      <p className="text-sm text-gray-700">
                        Diseño estructural y supervisión de la reconstrucción del puente que conecta las provincias de
                        Huancayo y Chupaca.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Sistema de Agua Potable Concepción</h4>
                      <p className="text-sm text-gray-700">
                        Diseño del sistema de captación y distribución de agua potable para 12 comunidades rurales.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Edificio Multifamiliar Torres del Valle</h4>
                      <p className="text-sm text-gray-700">
                        Diseño estructural del primer edificio de 15 pisos en la ciudad de Huancayo.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Reforzamiento Estructural Hospital Regional</h4>
                      <p className="text-sm text-gray-700">
                        Evaluación y diseño del reforzamiento estructural del Hospital Regional de Huancayo.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <h3 className="text-xl font-bold mb-4">Entrevista con el Ingeniero de la Semana</h3>
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=800&text=Entrevista+Ing.+Juan+Pérez"
                        alt="Entrevista con el Ing. Juan Pérez"
                        width={800}
                        height={400}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-700 rounded-full p-4 cursor-pointer hover:bg-red-800 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Link href="/sala-prensa/ingeniero-semana/1">
                      <Button className="bg-red-700 hover:bg-red-800 text-white">Ver Perfil Completo</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Ingenieros Anteriores */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-800 text-white p-6">
                <h2 className="text-xl font-bold">Ingenieros Destacados Anteriores</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Ing. Ana Torres Vega",
                      specialty: "Ingeniería Civil",
                      date: "Semana del 5 - 11 Junio, 2023",
                      image: "/placeholder.svg?height=120&width=120&text=AT",
                      description:
                        "Especialista en gestión de proyectos de infraestructura vial con enfoque sostenible.",
                    },
                    {
                      name: "Ing. Carlos Mendoza López",
                      specialty: "Ingeniería de Sistemas",
                      date: "Semana del 29 Mayo - 4 Junio, 2023",
                      image: "/placeholder.svg?height=120&width=120&text=CM",
                      description: "Pionero en desarrollo de soluciones tecnológicas para la gestión pública regional.",
                    },
                    {
                      name: "Ing. María Pérez Rodríguez",
                      specialty: "Ingeniería Industrial",
                      date: "Semana del 22 - 28 Mayo, 2023",
                      image: "/placeholder.svg?height=120&width=120&text=MP",
                      description: "Destacada por sus aportes en optimización de procesos industriales en la región.",
                    },
                    {
                      name: "Ing. Roberto Sánchez Díaz",
                      specialty: "Ingeniería Ambiental",
                      date: "Semana del 15 - 21 Mayo, 2023",
                      image: "/placeholder.svg?height=120&width=120&text=RS",
                      description:
                        "Reconocido por sus proyectos de recuperación de ecosistemas en la cuenca del Mantaro.",
                    },
                    {
                      name: "Ing. Laura Gutiérrez Campos",
                      specialty: "Ingeniería Mecánica",
                      date: "Semana del 8 - 14 Mayo, 2023",
                      image: "/placeholder.svg?height=120&width=120&text=LG",
                      description: "Innovadora en el diseño de maquinaria para la industria minera sostenible.",
                    },
                    {
                      name: "Ing. Pedro Huamán Quispe",
                      specialty: "Ingeniería Eléctrica",
                      date: "Semana del 1 - 7 Mayo, 2023",
                      image: "/placeholder.svg?height=120&width=120&text=PH",
                      description: "Líder en proyectos de electrificación rural con energías renovables.",
                    },
                  ].map((ingeniero, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 flex flex-col items-center text-center">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                        <Image
                          src={ingeniero.image || "/placeholder.svg"}
                          alt={ingeniero.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-semibold mb-1">{ingeniero.name}</h3>
                      <p className="text-red-700 text-sm mb-2">{ingeniero.specialty}</p>
                      <p className="text-xs text-gray-500 mb-3">{ingeniero.date}</p>
                      <p className="text-sm text-gray-600 mb-4">{ingeniero.description}</p>
                      <Link href={`/sala-prensa/ingeniero-semana/${index + 2}`}>
                        <Button variant="outline" className="text-red-700 border-red-700 hover:bg-red-50">
                          Ver Perfil
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Link href="/sala-prensa/ingeniero-semana/archivo">
                    <Button variant="outline" className="text-red-700 border-red-700 hover:bg-red-50">
                      Ver Todos los Ingenieros Destacados
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
