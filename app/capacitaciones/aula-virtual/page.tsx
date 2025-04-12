import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, BookOpen, Play, Award, Download, Lock, CheckCircle } from "lucide-react"

export default function AulaVirtualPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/capacitaciones" className="hover:text-red-700">
            Capacitaciones
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Aula Virtual</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Aula Virtual CIP Junín</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plataforma de aprendizaje en línea exclusiva para ingenieros colegiados, con cursos, talleres y recursos
            educativos para tu desarrollo profesional.
          </p>
        </div>

        {/* Login Banner */}
        <div className="bg-gray-900 text-white rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Accede al Aula Virtual</h2>
              <p className="mb-6">
                Ingresa con tus credenciales de colegiado para acceder a todos los cursos y recursos educativos
                disponibles.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/intranet">
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Iniciar Sesión</Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                    Solicitar Acceso
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Aula+Virtual"
                alt="Aula Virtual"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Capacitaciones</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/capacitaciones/cursos" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link href="/capacitaciones/convenios" className="flex items-center text-gray-600 hover:text-red-700">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Convenios
                  </Link>
                </li>
                <li>
                  <Link href="/capacitaciones/aula-virtual" className="flex items-center text-red-700 font-medium">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Aula Virtual
                  </Link>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Categorías</h3>
                <ul className="space-y-2">
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Ingeniería Civil
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Ingeniería de Sistemas
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Ingeniería Eléctrica
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Ingeniería Mecánica
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Ingeniería Industrial
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Ingeniería de Minas
                    </button>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Recursos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/capacitaciones/aula-virtual/biblioteca"
                      className="flex items-center text-gray-600 hover:text-red-700"
                    >
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Biblioteca Digital
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/capacitaciones/aula-virtual/webinars"
                      className="flex items-center text-gray-600 hover:text-red-700"
                    >
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Webinars Grabados
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/capacitaciones/aula-virtual/certificados"
                      className="flex items-center text-gray-600 hover:text-red-700"
                    >
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Mis Certificados
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-8 bg-red-50 p-4 rounded-lg border border-red-100">
                <h4 className="font-bold text-red-800 mb-2">Soporte Técnico</h4>
                <p className="text-sm text-red-700 mb-4">
                  ¿Problemas con el acceso o necesitas ayuda con la plataforma? Contáctanos.
                </p>
                <Link href="/contacto">
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Contactar Soporte</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {/* Características del Aula Virtual */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Características del Aula Virtual</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col items-center p-6 border rounded-lg">
                  <BookOpen className="h-12 w-12 text-red-700 mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-center">Cursos Especializados</h3>
                  <p className="text-gray-600 text-center">
                    Accede a cursos diseñados específicamente para ingenieros, con contenido actualizado y relevante.
                  </p>
                </div>

                <div className="flex flex-col items-center p-6 border rounded-lg">
                  <Play className="h-12 w-12 text-red-700 mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-center">Contenido Multimedia</h3>
                  <p className="text-gray-600 text-center">
                    Videos, presentaciones interactivas y recursos descargables para un aprendizaje efectivo.
                  </p>
                </div>

                <div className="flex flex-col items-center p-6 border rounded-lg">
                  <Award className="h-12 w-12 text-red-700 mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-center">Certificación Digital</h3>
                  <p className="text-gray-600 text-center">
                    Obtén certificados digitales verificables al completar los cursos y programas.
                  </p>
                </div>

                <div className="flex flex-col items-center p-6 border rounded-lg">
                  <Download className="h-12 w-12 text-red-700 mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-center">Recursos Descargables</h3>
                  <p className="text-gray-600 text-center">
                    Material complementario, guías, plantillas y software para tu desarrollo profesional.
                  </p>
                </div>
              </div>
            </div>

            {/* Cursos Destacados */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Cursos Destacados</h2>

              <div className="space-y-6 mb-6">
                {[
                  {
                    title: "Diseño Sísmico de Edificaciones según la Norma E.030",
                    image: "/placeholder.svg?height=200&width=300&text=Curso+Diseño+Sísmico",
                    category: "Ingeniería Civil",
                    duration: "40 horas",
                    modules: 8,
                    locked: false,
                  },
                  {
                    title: "Ciberseguridad para Infraestructuras Críticas",
                    image: "/placeholder.svg?height=200&width=300&text=Curso+Ciberseguridad",
                    category: "Ingeniería de Sistemas",
                    duration: "30 horas",
                    modules: 6,
                    locked: true,
                  },
                  {
                    title: "Gestión de Proyectos con Metodología PMI",
                    image: "/placeholder.svg?height=200&width=300&text=Curso+PMI",
                    category: "Ingeniería Industrial",
                    duration: "50 horas",
                    modules: 10,
                    locked: true,
                  },
                ].map((curso, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src={curso.image || "/placeholder.svg"}
                          alt={curso.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 left-0 bg-red-700 text-white text-xs font-bold px-3 py-1">
                          {curso.category}
                        </div>
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h3 className="font-bold text-lg mb-3">{curso.title}</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-sm">
                            <span className="font-medium">Duración:</span>
                            <span className="text-gray-600 ml-2">{curso.duration}</span>
                          </div>
                          <div className="text-sm">
                            <span className="font-medium">Módulos:</span>
                            <span className="text-gray-600 ml-2">{curso.modules}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                          <div className="flex items-center mb-3 sm:mb-0">
                            {curso.locked ? (
                              <div className="flex items-center text-gray-500">
                                <Lock className="h-4 w-4 mr-1" />
                                <span className="text-sm">Requiere acceso</span>
                              </div>
                            ) : (
                              <div className="flex items-center text-green-600">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                <span className="text-sm">Disponible</span>
                              </div>
                            )}
                          </div>
                          <Link href={curso.locked ? "/intranet" : `/capacitaciones/aula-virtual/cursos/${index + 1}`}>
                            <Button
                              className={`${curso.locked ? "bg-gray-500" : "bg-red-700 hover:bg-red-800"} text-white`}
                            >
                              {curso.locked ? "Iniciar Sesión" : "Acceder al Curso"}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline">Ver todos los cursos</Button>
              </div>
            </div>

            {/* Cómo funciona */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">¿Cómo funciona el Aula Virtual?</h2>

              <div className="space-y-6 mb-6">
                <div className="flex items-start">
                  <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Regístrate o Inicia Sesión</h3>
                    <p className="text-gray-600 text-sm">
                      Accede con tus credenciales de colegiado. Si aún no tienes acceso, solicítalo a través del
                      formulario de contacto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Explora los Cursos Disponibles</h3>
                    <p className="text-gray-600 text-sm">
                      Navega por las diferentes categorías y encuentra los cursos que se adapten a tus necesidades e
                      intereses profesionales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Inscríbete en los Cursos</h3>
                    <p className="text-gray-600 text-sm">
                      Algunos cursos son gratuitos para colegiados, otros tienen un costo preferencial. Selecciona los
                      que te interesen e inscríbete.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Aprende a tu Ritmo</h3>
                    <p className="text-gray-600 text-sm">
                      Accede al contenido cuando quieras y desde donde quieras. Avanza a tu propio ritmo y completa las
                      evaluaciones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Obtén tu Certificado</h3>
                    <p className="text-gray-600 text-sm">
                      Al completar el curso y aprobar las evaluaciones, recibirás un certificado digital verificable que
                      podrás descargar e imprimir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link href="/capacitaciones/aula-virtual/guia">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Descargar Guía Completa</Button>
                </Link>
              </div>
            </div>

            {/* Testimonios */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Testimonios de Usuarios</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  {
                    name: "Ing. Carlos Martínez",
                    course: "Diseño Sísmico de Edificaciones",
                    testimonial:
                      "Excelente plataforma, muy intuitiva y con contenido de calidad. Los cursos me han ayudado a mantenerme actualizado en mi campo profesional.",
                    image: "/placeholder.svg?height=60&width=60&text=CM",
                  },
                  {
                    name: "Ing. Laura Rodríguez",
                    course: "Gestión de Proyectos PMI",
                    testimonial:
                      "La flexibilidad de poder estudiar a mi propio ritmo ha sido fundamental para poder compaginar mi trabajo con la formación continua.",
                    image: "/placeholder.svg?height=60&width=60&text=LR",
                  },
                  {
                    name: "Ing. Pedro Gómez",
                    course: "Ciberseguridad para Ingenieros",
                    testimonial:
                      "Los instructores son excelentes profesionales y el material complementario es muy útil. Recomiendo totalmente el Aula Virtual del CIP.",
                    image: "/placeholder.svg?height=60&width=60&text=PG",
                  },
                  {
                    name: "Ing. Ana Torres",
                    course: "BIM para Proyectos de Infraestructura",
                    testimonial:
                      "La certificación que obtuve me ha ayudado a mejorar mi perfil profesional y a acceder a mejores oportunidades laborales.",
                    image: "/placeholder.svg?height=60&width=60&text=AT",
                  },
                ].map((testimonio, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start mb-3">
                      <div className="w-12 h-12 relative rounded-full overflow-hidden mr-3">
                        <Image
                          src={testimonio.image || "/placeholder.svg"}
                          alt={testimonio.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonio.name}</h4>
                        <p className="text-sm text-gray-500">{testimonio.course}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm italic">"{testimonio.testimonial}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>

              <div className="space-y-4">
                {[
                  {
                    question: "¿Quiénes pueden acceder al Aula Virtual?",
                    answer:
                      "El Aula Virtual está disponible para todos los ingenieros colegiados habilitados del CIP CD Junín. Algunos cursos también están disponibles para colegiados de otros Consejos Departamentales.",
                  },
                  {
                    question: "¿Cómo obtengo mis certificados?",
                    answer:
                      "Una vez completado el curso y aprobadas las evaluaciones, podrás descargar tu certificado digital desde la sección 'Mis Certificados' en tu perfil. Estos certificados cuentan con código QR y firma digital para su verificación.",
                  },
                  {
                    question: "¿Los cursos tienen fecha límite para completarlos?",
                    answer:
                      "La mayoría de los cursos están disponibles de forma permanente una vez que te inscribes, lo que te permite avanzar a tu propio ritmo. Algunos cursos especiales o con instructores en vivo pueden tener fechas específicas que se anunciarán con anticipación.",
                  },
                  {
                    question: "¿Puedo acceder al contenido desde mi celular o tablet?",
                    answer:
                      "Sí, el Aula Virtual está optimizada para funcionar en dispositivos móviles, lo que te permite acceder al contenido desde cualquier lugar y en cualquier momento.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Link href="/capacitaciones/convenios">
                <Button variant="outline" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Convenios
                </Button>
              </Link>
              <Link href="/capacitaciones">
                <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                  Todas las Capacitaciones <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
