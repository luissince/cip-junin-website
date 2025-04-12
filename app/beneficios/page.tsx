import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Shield,
  HeartPulse,
  GraduationCap,
  Briefcase,
  Building,
  Home,
  Landmark,
  Users,
} from "lucide-react"

export default function BeneficiosPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">Beneficios</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Beneficios para Colegiados</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce los beneficios exclusivos que el Colegio de Ingenieros del Perú - Consejo Departamental Junín ofrece
            a sus miembros colegiados.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Banner */}
          <div className="relative rounded-lg overflow-hidden mb-12">
            <Image
              src="/placeholder.svg?height=400&width=1200&text=Beneficios+para+Colegiados"
              alt="Beneficios para Colegiados"
              width={1200}
              height={400}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
              <div className="max-w-xl text-white">
                <h2 className="text-3xl font-bold mb-4">Crecer juntos es nuestro compromiso</h2>
                <p className="mb-6">
                  Ser parte del Colegio de Ingenieros del Perú te brinda acceso a una amplia gama de beneficios
                  diseñados para tu desarrollo profesional y bienestar personal.
                </p>
                <Link href="/intranet">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Acceder a Intranet</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Categorías de Beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-red-700" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Seguro y Previsión Social</h3>
              <p className="text-gray-600 text-sm mb-4">
                Protección para ti y tu familia con seguros exclusivos y fondos de previsión social.
              </p>
              <Link href="#seguro-prevision">
                <Button variant="outline" className="w-full">
                  Ver Beneficios
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-red-700" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Capacitación y Desarrollo</h3>
              <p className="text-gray-600 text-sm mb-4">
                Formación continua con descuentos especiales en cursos, talleres y programas académicos.
              </p>
              <Link href="#capacitacion-desarrollo">
                <Button variant="outline" className="w-full">
                  Ver Beneficios
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <HeartPulse className="h-8 w-8 text-red-700" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Salud y Bienestar</h3>
              <p className="text-gray-600 text-sm mb-4">
                Cuida tu salud con descuentos en clínicas, laboratorios, gimnasios y centros recreativos.
              </p>
              <Link href="#salud-bienestar">
                <Button variant="outline" className="w-full">
                  Ver Beneficios
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-red-700" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Servicios y Convenios</h3>
              <p className="text-gray-600 text-sm mb-4">
                Accede a una amplia red de convenios con descuentos exclusivos en diversos establecimientos.
              </p>
              <Link href="#servicios-convenios">
                <Button variant="outline" className="w-full">
                  Ver Beneficios
                </Button>
              </Link>
            </div>
          </div>

          {/* Seguro y Previsión Social */}
          <div id="seguro-prevision" className="scroll-mt-24 bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-red-700 mr-3" />
              <h2 className="text-2xl font-bold">Seguro y Previsión Social</h2>
            </div>

            <div className="space-y-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-5">
                  <h3 className="font-bold mb-3">Fondo de Apoyo y Previsión Social</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Respaldo económico en casos de emergencia, enfermedad, accidente o fallecimiento. El fondo ofrece
                    una cobertura integral para el ingeniero colegiado y sus familiares directos.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Cobertura: Hasta S/. 15,000</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Acceso automático para colegiados habilitados</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-5">
                  <h3 className="font-bold mb-3">Seguro de Vida y Accidentes</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Póliza de seguro con condiciones preferenciales para colegiados, que brinda protección ante
                    imprevistos y garantiza tranquilidad para tu familia.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Cobertura por fallecimiento e invalidez</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Tarifas preferenciales para colegiados</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-5">
                  <h3 className="font-bold mb-3">Fondo de Retiro</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Sistema de ahorro y previsión para el cese de tu actividad profesional, que complementa tu
                    jubilación con condiciones ventajosas.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Aportes según años de colegiatura</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Beneficio disponible al cumplir 70 años</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-4">
                Para más información sobre el programa de seguro y previsión social, consulta la reglamentación
                específica o contáctanos directamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/institucional/documentos">
                  <Button variant="outline">Ver Reglamentos</Button>
                </Link>
                <Link href="/contacto">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Contactar</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Capacitación y Desarrollo */}
          <div id="capacitacion-desarrollo" className="scroll-mt-24 bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-red-700 mr-3" />
              <h2 className="text-2xl font-bold">Capacitación y Desarrollo</h2>
            </div>

            <div className="space-y-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-5">
                  <h3 className="font-bold mb-3">Descuentos en Cursos y Talleres</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Accede a precios especiales en todas las actividades de capacitación organizadas por el CIP CD
                    Junín, con descuentos de hasta el 50%.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Cursos presenciales y virtuales</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Talleres prácticos y seminarios</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-5">
                  <h3 className="font-bold mb-3">Acceso a Biblioteca Especializada</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Consulta libros, revistas técnicas, normas y publicaciones especializadas en nuestra biblioteca
                    física y virtual.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Préstamo de material bibliográfico</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Acceso a bases de datos científicas</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-5">
                  <h3 className="font-bold mb-3">Convenios Educativos</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Descuentos especiales en universidades y centros de formación a nivel local y nacional para
                    programas de pregrado, posgrado y especialización.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Hasta 25% en maestrías y doctorados</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Descuentos en diplomados y certificaciones</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-4">
                Mantente actualizado sobre nuestros programas de capacitación y desarrollo profesional a través de
                nuestra página web o redes sociales.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/capacitaciones">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Ver Capacitaciones</Button>
                </Link>
                <Link href="/capacitaciones/aula-virtual">
                  <Button variant="outline">Acceder al Aula Virtual</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Salud y Bienestar */}
          <div id="salud-bienestar" className="scroll-mt-24 bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-6">
              <HeartPulse className="h-8 w-8 text-red-700 mr-3" />
              <h2 className="text-2xl font-bold">Salud y Bienestar</h2>
            </div>

            <div className="space-y-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-5">
                  <h3 className="font-bold mb-3">Convenios con Centros de Salud</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Descuentos y tarifas preferenciales en clínicas, consultorios médicos, laboratorios y centros
                    odontológicos.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Descuentos en consultas y procedimientos</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Chequeos preventivos anuales con tarifas especiales</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-5">
                  <h3 className="font-bold mb-3">Instalaciones Deportivas</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Acceso a las instalaciones deportivas y recreativas del CIP CD Junín, incluyendo canchas deportivas,
                    gimnasio y áreas de esparcimiento.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Uso gratuito o con tarifas preferenciales</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Participación en torneos y actividades deportivas</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-5">
                  <h3 className="font-bold mb-3">Convenios con Centros Recreativos</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Descuentos en clubes, hoteles, centros turísticos y establecimientos de esparcimiento para ti y tu
                    familia.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Tarifas especiales en hoteles y resorts</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Acceso a clubes y centros recreativos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-4">
                Para acceder a estos beneficios, solo debes presentar tu carnet de colegiado vigente en los
                establecimientos afiliados.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/convenios/salud">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Ver Establecimientos Afiliados</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Servicios y Convenios */}
          <div id="servicios-convenios" className="scroll-mt-24 bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-6">
              <Briefcase className="h-8 w-8 text-red-700 mr-3" />
              <h2 className="text-2xl font-bold">Servicios y Convenios</h2>
            </div>

            <div className="space-y-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <Building className="h-5 w-5 text-red-700 mr-2" />
                    <h3 className="font-bold">Empresas y Comercios</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Descuentos en establecimientos comerciales, tiendas de tecnología, ferreterías especializadas y más.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>5% - 20% de descuento en compras</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Ofertas exclusivas para colegiados</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <Home className="h-5 w-5 text-red-700 mr-2" />
                    <h3 className="font-bold">Servicios para el Hogar</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Tarifas preferenciales en servicios domiciliarios, seguros para el hogar y asesoría inmobiliaria.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Descuentos en seguros de vivienda</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Asesoría técnica para mejoras del hogar</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <Landmark className="h-5 w-5 text-red-700 mr-2" />
                    <h3 className="font-bold">Servicios Financieros</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Convenios con entidades financieras para créditos, cuentas bancarias y tarjetas de crédito con
                    beneficios exclusivos.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Tasas preferenciales en préstamos</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                      <span>Tarjetas de crédito sin comisiones anuales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                El CIP CD Junín trabaja constantemente en ampliar la red de convenios para ofrecer más y mejores
                beneficios a sus colegiados. Te invitamos a consultar regularmente nuestras actualizaciones.
              </p>
            </div>
          </div>

          {/* Cómo Acceder */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-red-700 mr-3" />
              <h2 className="text-2xl font-bold">¿Cómo Acceder a los Beneficios?</h2>
            </div>

            <div className="space-y-6 mb-6">
              <div className="flex items-start">
                <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1">Mantente Habilitado</h3>
                  <p className="text-gray-600 text-sm">
                    Para acceder a todos los beneficios, debes estar al día en tus cuotas ordinarias. Verifica tu estado
                    de habilidad en nuestra plataforma o en las oficinas del CIP CD Junín.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">Identifícate como Colegiado</h3>
                  <p className="text-gray-600 text-sm">
                    Presenta tu carnet de colegiado vigente en los establecimientos afiliados para acceder a los
                    descuentos y tarifas preferenciales.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">Consulta los Convenios Vigentes</h3>
                  <p className="text-gray-600 text-sm">
                    Infórmate sobre los convenios y beneficios actualizados a través de nuestra página web, redes
                    sociales o en las oficinas del CIP CD Junín.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-bold mb-1">Solicita Información Específica</h3>
                  <p className="text-gray-600 text-sm">
                    Para beneficios que requieren trámites adicionales, como seguros o fondos de previsión, contacta con
                    las áreas correspondientes para recibir orientación personalizada.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Link href="/verificar-habilidad">
                <Button variant="outline">Verificar Habilidad</Button>
              </Link>
              <Link href="/contacto">
                <Button className="bg-red-700 hover:bg-red-800 text-white">Contactar</Button>
              </Link>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Aún no eres colegiado?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Únete al Colegio de Ingenieros del Perú - Consejo Departamental Junín y accede a todos estos beneficios y
              más. La colegiatura es el primer paso para tu desarrollo profesional y personal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tramites/colegiatura">
                <Button className="bg-red-700 hover:bg-red-800 text-white">Iniciar Proceso de Colegiatura</Button>
              </Link>
              <Link href="/institucional/documentos">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Consultar Requisitos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
