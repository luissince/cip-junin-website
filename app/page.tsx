"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, BookOpen, FileText, Users, Award, ArrowRight } from "lucide-react"
import NewsCard from "@/components/news-card"
import EventCard from "@/components/event-card"
import PromoModal from "@/components/promo-modal"
import SocialLinks from "@/components/social-links"
import QuickAccess from "@/components/quick-access"
import WelcomeBanner from "@/components/welcome-banner"
import HeroSlider from "@/components/hero-slider"
import SocialFloat from "@/components/social-float"
import { motion } from "framer-motion"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set a timeout to ensure the welcome banner has time to show
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Welcome Banner */}
      <WelcomeBanner />

      {/* Social Float Button */}
      <SocialFloat />

      {/* Main Content - will fade in after welcome banner */}
      <motion.div initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeIn}>
        {/* Hero Slider */}
        <HeroSlider />

        {/* Quick Access */}
        <QuickAccess />

        {/* Institutional Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Sección Institucional</h2>
              <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conoce más sobre nuestra institución, nuestros valores y nuestro compromiso con la ingeniería peruana.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-red-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Quiénes Somos</h3>
                <p className="text-gray-600 text-center mb-4">
                  Conoce nuestra misión, visión y valores institucionales.
                </p>
                <div className="text-center">
                  <Link
                    href="/institucional/quienes-somos"
                    className="text-red-700 hover:text-red-800 font-medium inline-flex items-center"
                  >
                    Leer más <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-red-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Directivos</h3>
                <p className="text-gray-600 text-center mb-4">
                  Conoce a nuestro equipo de profesionales que lideran el CIP Junín.
                </p>
                <div className="text-center">
                  <Link
                    href="/institucional/directivos"
                    className="text-red-700 hover:text-red-800 font-medium inline-flex items-center"
                  >
                    Leer más <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-red-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Documentos Normativos</h3>
                <p className="text-gray-600 text-center mb-4">
                  Accede a estatutos, reglamentos y códigos de ética profesional.
                </p>
                <div className="text-center">
                  <Link
                    href="/institucional/documentos"
                    className="text-red-700 hover:text-red-800 font-medium inline-flex items-center"
                  >
                    Leer más <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-red-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Ética Profesional</h3>
                <p className="text-gray-600 text-center mb-4">
                  Conoce nuestro código de ética y los valores que guían nuestra profesión.
                </p>
                <div className="text-center">
                  <Link
                    href="/institucional/etica"
                    className="text-red-700 hover:text-red-800 font-medium inline-flex items-center"
                  >
                    Leer más <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Button className="bg-red-700 hover:bg-red-800 text-white">
                Ver más información institucional <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Professional Chapters */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Capítulos Profesionales</h2>
              <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conoce las diferentes especialidades de ingeniería que conforman nuestro colegio profesional.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Ingeniería Civil",
                "Ingeniería de Sistemas",
                "Ingeniería Eléctrica",
                "Ingeniería Mecánica",
                "Ingeniería Industrial",
                "Ingeniería de Minas",
              ].map((chapter, index) => (
                <Link href={`/capitulos/${chapter.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
                  <div className="group relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=${chapter}`}
                      alt={chapter}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <div className="p-6 w-full">
                        <h3 className="text-xl font-bold text-white mb-2">{chapter}</h3>
                        <div className="flex items-center text-white/90">
                          <span className="text-sm">Ver detalles</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button className="bg-red-700 hover:bg-red-800 text-white">
                Ver todos los capítulos <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Online Procedures */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Trámites en Línea</h2>
              <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Realiza tus trámites de manera rápida y segura a través de nuestra plataforma digital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors">
                <h3 className="text-2xl font-bold mb-4">Trámites Frecuentes</h3>
                <ul className="space-y-4">
                  {[
                    "Colegiatura",
                    "Certificado de Habilidad",
                    "Cambio de Sede",
                    "Duplicado de Carnet",
                    "Constancia de No Adeudo",
                  ].map((procedure, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="mr-2 h-5 w-5 text-red-500" />
                      <Link
                        href={`/tramites/${procedure.toLowerCase().replace(/\s+/g, "-")}`}
                        className="hover:text-red-400 transition-colors"
                      >
                        {procedure}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 bg-red-700 hover:bg-red-800 text-white">Ver todos los trámites</Button>
              </div>

              <div className="relative rounded-lg overflow-hidden h-80">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Recorrido+Virtual+3D"
                  alt="Recorrido Virtual"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold mb-4">Recorrido Virtual</h3>
                  <p className="mb-6">
                    Conoce nuestras instalaciones y cómo realizar tus trámites con nuestro tour virtual.
                  </p>
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Iniciar recorrido 3D</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Elecciones y Procesos Electorales</h2>
              <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Información sobre los procesos electorales, cronogramas y resultados.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Próximas Elecciones</h3>
                  <p className="text-gray-600 mb-6">
                    Las elecciones para el nuevo Consejo Departamental se realizarán el 15 de noviembre de 2023.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-red-700 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Cronograma Electoral</h4>
                        <p className="text-gray-600 text-sm">Consulta las fechas importantes del proceso electoral.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-red-700 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Listas de Candidatos</h4>
                        <p className="text-gray-600 text-sm">
                          Conoce a los candidatos que participan en las elecciones.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <FileText className="h-5 w-5 text-red-700 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Reglamento Electoral</h4>
                        <p className="text-gray-600 text-sm">Consulta el reglamento que rige el proceso electoral.</p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-red-700 hover:bg-red-800 text-white">Más información electoral</Button>
                </div>

                <div className="bg-gray-900 text-white p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">Resultados de Elecciones Anteriores</h3>
                  <ul className="space-y-4">
                    {[2021, 2019, 2017, 2015].map((year) => (
                      <li key={year} className="flex items-center">
                        <ChevronRight className="mr-2 h-5 w-5 text-red-500" />
                        <Link href={`/elecciones/resultados/${year}`} className="hover:text-red-400 transition-colors">
                          Resultados Elecciones {year}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/elecciones/historico"
                      className="text-red-400 hover:text-red-300 inline-flex items-center"
                    >
                      Ver histórico completo <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Capacitaciones</h2>
              <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Mantente actualizado con nuestros cursos, talleres y programas de capacitación profesional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-2">
                <h3 className="text-2xl font-bold mb-6">Próximos Cursos y Eventos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <EventCard
                    title="Diseño Estructural Avanzado"
                    date="15-17 Junio, 2023"
                    image="/placeholder.svg?height=200&width=300"
                    category="Ingeniería Civil"
                    location="Auditorio CIP Junín"
                  />
                  <EventCard
                    title="Ciberseguridad para Ingenieros"
                    date="22-24 Junio, 2023"
                    image="/placeholder.svg?height=200&width=300"
                    category="Ingeniería de Sistemas"
                    location="Virtual - Zoom"
                  />
                  <EventCard
                    title="Gestión de Proyectos PMI"
                    date="1-3 Julio, 2023"
                    image="/placeholder.svg?height=200&width=300"
                    category="Ingeniería Industrial"
                    location="Auditorio CIP Junín"
                  />
                  <EventCard
                    title="Energías Renovables"
                    date="8-10 Julio, 2023"
                    image="/placeholder.svg?height=200&width=300"
                    category="Ingeniería Eléctrica"
                    location="Auditorio CIP Junín"
                  />
                </div>
                <div className="mt-6 text-center">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Ver todos los cursos y eventos</Button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-red-700" />
                  Aula Virtual
                </h3>
                <p className="text-gray-600 mb-6">
                  Accede a nuestra plataforma de aprendizaje en línea con cursos exclusivos para colegiados.
                </p>
                <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                  <h4 className="font-semibold mb-2">Beneficios del Aula Virtual</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0" />
                      <span>Acceso 24/7 a contenido especializado</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0" />
                      <span>Certificados digitales verificables</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0" />
                      <span>Instructores especializados</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0" />
                      <span>Descuentos exclusivos para colegiados</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Ingresar al Aula Virtual</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Press Room */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Sala de Prensa</h2>
              <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Mantente informado sobre las últimas noticias, comunicados y eventos del CIP Junín.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-6">Últimas Noticias</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <NewsCard
                    title="CIP Junín firma convenio con universidad local"
                    date="10 Junio, 2023"
                    image="/placeholder.svg?height=200&width=300"
                    excerpt="El Colegio de Ingenieros del Perú - CD Junín firmó un importante convenio de colaboración académica con la Universidad Continental."
                  />
                  <NewsCard
                    title="Ingenieros de Junín participan en congreso internacional"
                    date="5 Junio, 2023"
                    image="/placeholder.svg?height=200&width=300"
                    excerpt="Una delegación de ingenieros de nuestra sede participó en el Congreso Internacional de Ingeniería Civil realizado en Lima."
                  />
                  <NewsCard
                    title="Nuevo laboratorio de innovación tecnológica"
                    date="1 Junio, 2023"
                    image="/placeholder.svg?height=200&width=300"
                    excerpt="El CIP Junín inauguró un moderno laboratorio de innovación tecnológica para el desarrollo de proyectos de los colegiados."
                  />
                  <NewsCard
                    title="Reconocimiento a ingenieros destacados"
                    date="28 Mayo, 2023"
                    image="/placeholder.svg?height=200&width=300"
                    excerpt="El Consejo Departamental Junín reconoció la trayectoria de ingenieros destacados de la región en ceremonia especial."
                  />
                </div>
                <div className="mt-6 text-center">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Ver todas las noticias</Button>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-red-700" />
                    Ingeniero de la Semana
                  </h3>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Ing.+Juan+Pérez"
                      alt="Ingeniero de la Semana"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-lg">Ing. Juan Pérez Rodríguez</h4>
                      <p className="text-sm text-gray-500 mb-2">Ingeniero Civil - CIP 123456</p>
                      <p className="text-gray-600 text-sm mb-3">
                        Destacado por su contribución en el diseño de infraestructura sostenible y su labor docente.
                      </p>
                      <Link
                        href="/sala-prensa/ingeniero-semana"
                        className="text-red-700 hover:text-red-800 text-sm font-medium inline-flex items-center"
                      >
                        Leer más <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-red-700" />
                    Comunicados Oficiales
                  </h3>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <ul className="space-y-4">
                      {[
                        "Comunicado sobre proceso de colegiatura 2023",
                        "Pronunciamiento sobre proyecto de ley de ingeniería",
                        "Aviso importante: Actualización de datos de colegiados",
                        "Comunicado: Nuevos beneficios para colegiados",
                      ].map((item, index) => (
                        <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                          <Link href={`/comunicados/${index + 1}`} className="hover:text-red-700 transition-colors">
                            {item}
                          </Link>
                          <p className="text-gray-500 text-sm mt-1">{`${15 - index} Junio, 2023`}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <Link
                        href="/sala-prensa/comunicados"
                        className="text-red-700 hover:text-red-800 text-sm font-medium inline-flex items-center"
                      >
                        Ver todos los comunicados <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <SocialLinks />

        {/* Promo Modal */}
        <PromoModal />
      </motion.div>
    </main>
  )
}
