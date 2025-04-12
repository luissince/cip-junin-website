import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Building, GraduationCap, Globe, FileText } from "lucide-react"

export default function ConveniosPage() {
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
          <span className="text-gray-900 font-medium">Convenios</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Convenios Institucionales</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce los convenios que el Colegio de Ingenieros del Perú - Consejo Departamental Junín ha establecido con
            diversas instituciones para beneficio de nuestros colegiados.
          </p>
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
                  <Link href="/capacitaciones/convenios" className="flex items-center text-red-700 font-medium">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Convenios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capacitaciones/aula-virtual"
                    className="flex items-center text-gray-600 hover:text-red-700"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Aula Virtual
                  </Link>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Filtrar por Tipo</h3>
                <ul className="space-y-2">
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Universidades
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Empresas
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Instituciones Públicas
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center text-gray-600 hover:text-red-700 w-full text-left">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Internacionales
                    </button>
                  </li>
                </ul>
              </div>

              <div className="mt-8 bg-red-50 p-4 rounded-lg border border-red-100">
                <h4 className="font-bold text-red-800 mb-2">¿Interesado en un convenio?</h4>
                <p className="text-sm text-red-700 mb-4">
                  Si representa a una institución interesada en establecer un convenio con el CIP CD Junín, contáctenos
                  para explorar posibilidades de colaboración.
                </p>
                <Link href="/contacto">
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Contactar</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {/* Convenios con Universidades */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 text-red-700 mr-2" />
                Convenios con Universidades
              </h2>

              <div className="space-y-6 mb-6">
                {[
                  {
                    name: "Universidad Nacional del Centro del Perú",
                    logo: "/placeholder.svg?height=80&width=80&text=UNCP",
                    description: "Convenio marco de cooperación académica, investigación y desarrollo profesional.",
                    benefits: [
                      "Descuentos en programas de posgrado",
                      "Acceso a laboratorios especializados",
                      "Desarrollo conjunto de proyectos de investigación",
                    ],
                    validity: "2022-2025",
                  },
                  {
                    name: "Universidad Continental",
                    logo: "/placeholder.svg?height=80&width=80&text=UC",
                    description:
                      "Convenio específico para capacitación y actualización profesional de ingenieros colegiados.",
                    benefits: [
                      "20% de descuento en diplomados y cursos de especialización",
                      "Uso de instalaciones para eventos del CIP",
                      "Certificación conjunta de programas de capacitación",
                    ],
                    validity: "2023-2026",
                  },
                  {
                    name: "Universidad Peruana Los Andes",
                    logo: "/placeholder.svg?height=80&width=80&text=UPLA",
                    description:
                      "Convenio para el desarrollo de actividades académicas, culturales y de investigación.",
                    benefits: [
                      "Descuentos en programas de educación continua",
                      "Participación en proyectos de responsabilidad social",
                      "Intercambio de experiencias y conocimientos",
                    ],
                    validity: "2021-2024",
                  },
                ].map((convenio, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                      <div className="bg-gray-50 p-4 flex items-center justify-center">
                        <Image
                          src={convenio.logo || "/placeholder.svg"}
                          alt={convenio.name}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <div className="md:col-span-3 p-6">
                        <h3 className="font-bold text-lg mb-2">{convenio.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{convenio.description}</p>
                        <div className="mb-3">
                          <h4 className="font-medium text-sm mb-1">Beneficios principales:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {convenio.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">Vigencia:</span> {convenio.validity}
                          </div>
                          <Link href={`/capacitaciones/convenios/${index + 1}`}>
                            <Button className="mt-3 sm:mt-0 bg-red-700 hover:bg-red-800 text-white">
                              Ver detalles
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Convenios con Empresas */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Building className="h-6 w-6 text-red-700 mr-2" />
                Convenios con Empresas
              </h2>

              <div className="space-y-6 mb-6">
                {[
                  {
                    name: "Autodesk Perú",
                    logo: "/placeholder.svg?height=80&width=80&text=Autodesk",
                    description:
                      "Convenio para el acceso a software especializado y capacitación en herramientas de diseño.",
                    benefits: [
                      "Descuentos en licencias de software",
                      "Capacitación gratuita en nuevas versiones",
                      "Certificación oficial para colegiados",
                    ],
                    validity: "2023-2025",
                  },
                  {
                    name: "Constructora Los Andes S.A.C.",
                    logo: "/placeholder.svg?height=80&width=80&text=CLASA",
                    description: "Convenio para prácticas profesionales y desarrollo de proyectos conjuntos.",
                    benefits: [
                      "Prioridad en contratación para colegiados",
                      "Visitas técnicas a obras en ejecución",
                      "Participación en proyectos de innovación",
                    ],
                    validity: "2022-2024",
                  },
                ].map((convenio, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                      <div className="bg-gray-50 p-4 flex items-center justify-center">
                        <Image
                          src={convenio.logo || "/placeholder.svg"}
                          alt={convenio.name}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <div className="md:col-span-3 p-6">
                        <h3 className="font-bold text-lg mb-2">{convenio.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{convenio.description}</p>
                        <div className="mb-3">
                          <h4 className="font-medium text-sm mb-1">Beneficios principales:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {convenio.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">Vigencia:</span> {convenio.validity}
                          </div>
                          <Link href={`/capacitaciones/convenios/${index + 4}`}>
                            <Button className="mt-3 sm:mt-0 bg-red-700 hover:bg-red-800 text-white">
                              Ver detalles
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Convenios con Instituciones Públicas */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Building className="h-6 w-6 text-red-700 mr-2" />
                Convenios con Instituciones Públicas
              </h2>

              <div className="space-y-6 mb-6">
                {[
                  {
                    name: "Gobierno Regional de Junín",
                    logo: "/placeholder.svg?height=80&width=80&text=GRJ",
                    description:
                      "Convenio marco para la colaboración en proyectos de desarrollo regional y asesoría técnica.",
                    benefits: [
                      "Participación en comités técnicos regionales",
                      "Asesoría especializada en proyectos de infraestructura",
                      "Desarrollo de capacidades para funcionarios públicos",
                    ],
                    validity: "2022-2026",
                  },
                  {
                    name: "Municipalidad Provincial de Huancayo",
                    logo: "/placeholder.svg?height=80&width=80&text=MPH",
                    description: "Convenio específico para la supervisión y evaluación de proyectos municipales.",
                    benefits: [
                      "Participación en la revisión de expedientes técnicos",
                      "Capacitación a personal municipal",
                      "Colaboración en proyectos de desarrollo urbano",
                    ],
                    validity: "2023-2025",
                  },
                ].map((convenio, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                      <div className="bg-gray-50 p-4 flex items-center justify-center">
                        <Image
                          src={convenio.logo || "/placeholder.svg"}
                          alt={convenio.name}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <div className="md:col-span-3 p-6">
                        <h3 className="font-bold text-lg mb-2">{convenio.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{convenio.description}</p>
                        <div className="mb-3">
                          <h4 className="font-medium text-sm mb-1">Beneficios principales:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {convenio.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">Vigencia:</span> {convenio.validity}
                          </div>
                          <Link href={`/capacitaciones/convenios/${index + 6}`}>
                            <Button className="mt-3 sm:mt-0 bg-red-700 hover:bg-red-800 text-white">
                              Ver detalles
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Convenios Internacionales */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Globe className="h-6 w-6 text-red-700 mr-2" />
                Convenios Internacionales
              </h2>

              <div className="space-y-6 mb-6">
                {[
                  {
                    name: "Asociación de Ingenieros de Chile",
                    logo: "/placeholder.svg?height=80&width=80&text=AIC",
                    description:
                      "Convenio de cooperación internacional para el intercambio de experiencias y conocimientos.",
                    benefits: [
                      "Participación en congresos internacionales",
                      "Intercambio de publicaciones técnicas",
                      "Reconocimiento mutuo de certificaciones",
                    ],
                    validity: "2023-2027",
                  },
                  {
                    name: "Instituto de Ingenieros de España",
                    logo: "/placeholder.svg?height=80&width=80&text=IIE",
                    description: "Convenio para la movilidad profesional y actualización técnica.",
                    benefits: [
                      "Acceso a programas de especialización en España",
                      "Participación en proyectos de investigación conjuntos",
                      "Intercambio de profesionales",
                    ],
                    validity: "2022-2025",
                  },
                ].map((convenio, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                      <div className="bg-gray-50 p-4 flex items-center justify-center">
                        <Image
                          src={convenio.logo || "/placeholder.svg"}
                          alt={convenio.name}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <div className="md:col-span-3 p-6">
                        <h3 className="font-bold text-lg mb-2">{convenio.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{convenio.description}</p>
                        <div className="mb-3">
                          <h4 className="font-medium text-sm mb-1">Beneficios principales:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {convenio.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-red-700 mr-1 shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">Vigencia:</span> {convenio.validity}
                          </div>
                          <Link href={`/capacitaciones/convenios/${index + 8}`}>
                            <Button className="mt-3 sm:mt-0 bg-red-700 hover:bg-red-800 text-white">
                              Ver detalles
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cómo acceder a los beneficios */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4">¿Cómo acceder a los beneficios de los convenios?</h2>
              <p className="text-gray-600 mb-4">
                Para acceder a los beneficios de los convenios, los colegiados deben seguir estos pasos:
              </p>
              <ol className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start">
                  <div className="bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">
                    1
                  </div>
                  <span>Estar habilitado y al día en sus cuotas ordinarias.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">
                    2
                  </div>
                  <span>
                    Solicitar una constancia de colegiado habilitado en las oficinas del CIP CD Junín o a través de la
                    plataforma virtual.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">
                    3
                  </div>
                  <span>
                    Presentar la constancia y su carnet de colegiado en la institución con la que se tiene convenio.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">
                    4
                  </div>
                  <span>Seguir los procedimientos específicos establecidos en cada convenio.</span>
                </li>
              </ol>
              <div className="flex justify-center">
                <Button className="bg-red-700 hover:bg-red-800 text-white">
                  <FileText className="h-4 w-4 mr-2" />
                  Descargar Guía de Convenios
                </Button>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Link href="/capacitaciones/cursos">
                <Button variant="outline" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Cursos
                </Button>
              </Link>
              <Link href="/capacitaciones/aula-virtual">
                <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                  Aula Virtual <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
