import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Calendar, FileText, Download, ExternalLink, Mail, Phone } from "lucide-react"

// Esta es una página de ejemplo para el detalle de un convenio
// En una implementación real, se obtendría la información del convenio desde una base de datos
export default function ConvenioDetallePage({ params }: { params: { id: string } }) {
  // Simulamos obtener los datos del convenio basado en el ID
  const convenioId = Number.parseInt(params.id)

  // Datos de ejemplo para el convenio
  const convenio = {
    id: convenioId,
    name: "Universidad Nacional del Centro del Perú",
    logo: "/placeholder.svg?height=120&width=120&text=UNCP",
    description:
      "Convenio marco de cooperación académica, investigación y desarrollo profesional entre el Colegio de Ingenieros del Perú - Consejo Departamental Junín y la Universidad Nacional del Centro del Perú.",
    fullDescription:
      "Este convenio establece las bases para una colaboración mutua en áreas de interés común, como la formación académica, la investigación científica y tecnológica, la extensión universitaria y la proyección social. Ambas instituciones se comprometen a trabajar juntas para fortalecer la formación de los ingenieros y contribuir al desarrollo de la región Junín y del país.",
    benefits: [
      "Descuentos del 25% en programas de posgrado para colegiados habilitados",
      "Acceso a laboratorios especializados para proyectos de investigación",
      "Desarrollo conjunto de proyectos de investigación y publicaciones",
      "Participación preferencial en eventos académicos organizados por ambas instituciones",
      "Uso de instalaciones para actividades académicas y profesionales",
      "Intercambio de experiencias y conocimientos a través de conferencias y seminarios",
    ],
    requirements: [
      "Ser colegiado habilitado del CIP CD Junín",
      "Presentar carnet de colegiado y constancia de habilidad vigente",
      "Cumplir con los requisitos académicos específicos de cada programa",
    ],
    startDate: "15 de Enero, 2022",
    endDate: "14 de Enero, 2025",
    signatories: ["Ing. Carlos Rodríguez Pérez - Decano del CIP CD Junín", "Dr. Juan Pérez Silva - Rector de la UNCP"],
    contactPerson: "Ing. María Fernández López",
    contactEmail: "convenios@cipjunin.org.pe",
    contactPhone: "+51 064 123456 Anexo 105",
    documents: [
      {
        name: "Convenio Marco UNCP-CIP (PDF)",
        size: "2.5 MB",
      },
      {
        name: "Adenda N° 01 (PDF)",
        size: "1.2 MB",
      },
      {
        name: "Procedimiento para acceder a beneficios (PDF)",
        size: "0.8 MB",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Firma+de+Convenio",
      "/placeholder.svg?height=300&width=500&text=Reunión+de+Trabajo",
      "/placeholder.svg?height=300&width=500&text=Capacitación+Conjunta",
    ],
    news: [
      {
        title: "Renovación de convenio CIP-UNCP",
        date: "15 Enero, 2022",
        excerpt: "Se renovó el convenio de cooperación entre el CIP CD Junín y la UNCP por un periodo de 3 años.",
      },
      {
        title: "Primer proyecto conjunto de investigación",
        date: "10 Marzo, 2022",
        excerpt:
          "Se inició el primer proyecto conjunto de investigación sobre tecnologías sostenibles para la construcción.",
      },
    ],
  }

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
          <Link href="/capacitaciones/convenios" className="hover:text-red-700">
            Convenios
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 font-medium">{convenio.name}</span>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            {/* Header */}
            <div className="bg-gray-900 text-white p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="bg-white rounded-lg p-4 mb-4 md:mb-0 md:mr-6">
                  <Image
                    src={convenio.logo || "/placeholder.svg"}
                    alt={convenio.name}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">{convenio.name}</h1>
                  <p className="text-gray-300">{convenio.description}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3 md:mb-0">
                  <Calendar className="h-5 w-5 text-red-700 mr-2" />
                  <div>
                    <span className="text-sm font-medium">Vigencia:</span>
                    <span className="text-sm text-gray-600 ml-2">
                      Del {convenio.startDate} al {convenio.endDate}
                    </span>
                  </div>
                </div>
                <Link href={`/capacitaciones/convenios/${convenio.id}/solicitud`}>
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Solicitar Beneficio</Button>
                </Link>
              </div>

              <h2 className="text-xl font-bold mb-4">Descripción del Convenio</h2>
              <p className="text-gray-600 mb-6">{convenio.fullDescription}</p>

              <h2 className="text-xl font-bold mb-4">Beneficios para Colegiados</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <ul className="space-y-2">
                  {convenio.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-xl font-bold mb-4">Requisitos para Acceder</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <ul className="space-y-2">
                  {convenio.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-xl font-bold mb-4">Firmantes</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <ul className="space-y-2">
                  {convenio.signatories.map((signatory, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{signatory}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-xl font-bold mb-4">Documentos Relacionados</h2>
              <div className="space-y-3 mb-6">
                {convenio.documents.map((document, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-red-700 mr-3" />
                      <span className="text-gray-700">{document.name}</span>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span className="text-xs">{document.size}</span>
                    </Button>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold mb-4">Galería</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {convenio.gallery.map((image, index) => (
                  <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Imagen ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold mb-4">Noticias Relacionadas</h2>
              <div className="space-y-4 mb-6">
                {convenio.news.map((news, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h3 className="font-bold mb-1">{news.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                    <p className="text-gray-600 text-sm">{news.excerpt}</p>
                    <Link
                      href={`/sala-prensa/noticias/${index + 1}`}
                      className="text-red-700 hover:text-red-800 text-sm font-medium inline-flex items-center mt-2"
                    >
                      Leer más <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h2 className="text-xl font-bold mb-4">Contacto para este Convenio</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="font-medium w-32">Responsable:</span>
                    <span className="text-gray-600">{convenio.contactPerson}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-red-700 mr-2" />
                    <span className="text-gray-600">{convenio.contactEmail}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-700 mr-2" />
                    <span className="text-gray-600">{convenio.contactPhone}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Link href="/capacitaciones/convenios">
                  <Button variant="outline" className="flex items-center">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Volver a Convenios
                  </Button>
                </Link>
                <Link href={`https://www.uncp.edu.pe`} target="_blank">
                  <Button className="bg-red-700 hover:bg-red-800 text-white flex items-center">
                    Visitar sitio web <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
