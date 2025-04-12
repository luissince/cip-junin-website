"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Briefcase,
  Clock,
  Calendar,
  ChevronRight,
  GraduationCap,
  Share2,
  Heart,
  ArrowLeft,
  CheckCircle,
  Upload,
  Mail,
  Phone,
  Globe,
  AlertCircle,
  DollarSign,
} from "lucide-react"

// Datos de ejemplo para la oferta laboral
const jobOffer = {
  id: 1,
  title: "Ingeniero Civil Residente de Obra",
  company: "Constructora Andina S.A.C.",
  location: "Huancayo, Junín",
  salary: "S/ 5,000 - S/ 7,000",
  type: "Tiempo completo",
  date: "Publicado hace 2 días",
  logo: "/placeholder.svg?height=120&width=120&text=CA",
  specialty: "Ingeniería Civil",
  experience: "3-5 años",
  featured: true,
  description: `
    <p>Constructora Andina S.A.C. busca un Ingeniero Civil para desempeñarse como Residente de Obra en importantes proyectos de construcción en la región Junín.</p>
    
    <p>El candidato seleccionado será responsable de la dirección técnica y administrativa de las obras asignadas, asegurando el cumplimiento de los plazos, costos y estándares de calidad establecidos.</p>
  `,
  responsibilities: [
    "Dirigir y supervisar la ejecución de obras civiles según los planos y especificaciones técnicas.",
    "Elaborar y controlar el cronograma de avance de obra.",
    "Gestionar los recursos humanos y materiales necesarios para la ejecución de la obra.",
    "Coordinar con los diferentes especialistas involucrados en el proyecto.",
    "Elaborar informes técnicos periódicos sobre el avance de la obra.",
    "Velar por el cumplimiento de las normas de seguridad y salud en el trabajo.",
    "Representar a la empresa ante el cliente y entidades reguladoras.",
  ],
  requirements: [
    "Título profesional en Ingeniería Civil.",
    "Colegiatura habilitada en el CIP.",
    "Experiencia mínima de 3 años como Residente de Obra en proyectos similares.",
    "Conocimiento avanzado de software de gestión de proyectos y AutoCAD.",
    "Dominio de la normativa vigente de construcción.",
    "Capacidad de liderazgo y gestión de equipos.",
    "Disponibilidad para trabajar a tiempo completo en Huancayo.",
  ],
  benefits: [
    "Contrato a plazo fijo con posibilidad de renovación.",
    "Remuneración competitiva acorde a la experiencia.",
    "Seguro de salud EPS.",
    "Capacitaciones y oportunidades de desarrollo profesional.",
    "Bonos por cumplimiento de objetivos.",
  ],
  companyInfo: {
    description:
      "Constructora Andina S.A.C. es una empresa líder en el sector construcción con más de 15 años de experiencia en la ejecución de proyectos de infraestructura pública y privada en la región central del Perú.",
    website: "www.constructoraandina.com.pe",
    email: "rrhh@constructoraandina.com.pe",
    phone: "(064) 123-4567",
  },
  applicationDeadline: "30 de junio de 2023",
}

// Datos de ejemplo para ofertas similares
const similarJobs = [
  {
    id: 3,
    title: "Ingeniero Civil para Supervisión de Obras",
    company: "Consultora Técnica Perú",
    location: "Huancayo, Junín",
    date: "Publicado hace 1 semana",
  },
  {
    id: 5,
    title: "Ingeniero Civil -  Junín",
    date: "Publicado hace 1 semana",
  },
  {
    id: 5,
    title: "Ingeniero Civil - Especialista en Estructuras",
    company: "Grupo Constructor del Centro",
    location: "Huancayo, Junín",
    date: "Publicado hace 5 días",
  },
  {
    id: 8,
    title: "Ingeniero Civil - Jefe de Proyectos",
    company: "Desarrollo Urbano S.A.C.",
    location: "Huancayo, Junín",
    date: "Publicado hace 3 días",
  },
]

export default function JobOfferDetail({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("description")
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Cabecera */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/ofertas-laborales" className="text-gray-600 hover:text-red-700 inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" /> Volver a ofertas laborales
          </Link>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Detalles de la oferta */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col md:flex-row">
                <div className="md:mr-6 mb-4 md:mb-0 flex justify-center md:justify-start">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <Image
                      src={jobOffer.logo || "/placeholder.svg"}
                      alt={jobOffer.company}
                      width={120}
                      height={120}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-1">{jobOffer.title}</h1>
                      <p className="text-gray-700 text-lg mb-2">{jobOffer.company}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                          {jobOffer.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Briefcase className="h-4 w-4 mr-1 text-gray-400" />
                          {jobOffer.type}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <GraduationCap className="h-4 w-4 mr-1 text-gray-400" />
                          {jobOffer.specialty}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-1 text-gray-400" />
                          {jobOffer.experience}
                        </div>
                      </div>
                    </div>

                    {jobOffer.featured && (
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 md:mb-0 inline-block">
                        Destacado
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <div className="text-lg font-semibold text-gray-800 flex items-center">
                      <DollarSign className="h-5 w-5 mr-1 text-gray-500" />
                      {jobOffer.salary}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center ml-auto">
                      <Calendar className="h-4 w-4 mr-1" />
                      {jobOffer.date}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                    <Button
                      className="bg-red-700 hover:bg-red-800 text-white"
                      onClick={() => setShowApplicationForm(!showApplicationForm)}
                    >
                      Postular ahora
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <Heart className="h-4 w-4 mr-2" />
                      Guardar
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartir
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de postulación */}
            {showApplicationForm && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Formulario de Postulación</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombres</label>
                      <Input type="text" placeholder="Ingresa tus nombres" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Apellidos</label>
                      <Input type="text" placeholder="Ingresa tus apellidos" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                      <Input type="email" placeholder="tu@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                      <Input type="tel" placeholder="+51 999 999 999" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Número de CIP (opcional)</label>
                    <Input type="text" placeholder="Ingresa tu número de colegiatura" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje / Carta de presentación
                    </label>
                    <Textarea
                      placeholder="Describe brevemente por qué eres el candidato ideal para este puesto..."
                      className="h-32"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Adjuntar CV</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-1">Arrastra y suelta tu CV aquí o</p>
                      <Button variant="outline" size="sm">
                        Seleccionar archivo
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Formatos permitidos: PDF, DOC, DOCX (Máx. 5MB)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <input type="checkbox" id="terms" className="mt-1" />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                      Acepto que mis datos sean compartidos con la empresa y procesados según la
                      <Link href="/politica-privacidad" className="text-red-700 hover:text-red-800 ml-1">
                        política de privacidad
                      </Link>
                    </label>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setShowApplicationForm(false)}>
                      Cancelar
                    </Button>
                    <Button className="bg-red-700 hover:bg-red-800 text-white">Enviar postulación</Button>
                  </div>
                </div>
              </div>
            )}

            {/* Tabs de información */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  {["description", "requirements", "company"].map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-3 text-sm font-medium ${
                        activeTab === tab
                          ? "border-b-2 border-red-700 text-red-700"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab === "description" && "Descripción"}
                      {tab === "requirements" && "Requisitos y Beneficios"}
                      {tab === "company" && "Sobre la Empresa"}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === "description" && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Descripción del Puesto</h2>
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: jobOffer.description }} />

                    <h3 className="text-lg font-semibold mt-6 mb-3">Responsabilidades</h3>
                    <ul className="space-y-2">
                      {jobOffer.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-gray-600">
                        <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                        <span>
                          Fecha límite para postular: <strong>{jobOffer.applicationDeadline}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "requirements" && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Requisitos</h2>
                    <ul className="space-y-2 mb-6">
                      {jobOffer.requirements.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h2 className="text-xl font-bold mb-4">Beneficios</h2>
                    <ul className="space-y-2">
                      {jobOffer.benefits.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "company" && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Sobre {jobOffer.company}</h2>
                    <p className="text-gray-700 mb-6">{jobOffer.companyInfo.description}</p>

                    <h3 className="text-lg font-semibold mb-3">Información de contacto</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Globe className="h-5 w-5 text-gray-500 mr-3" />
                        <span>{jobOffer.companyInfo.website}</span>
                      </li>
                      <li className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-500 mr-3" />
                        <span>{jobOffer.companyInfo.email}</span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-500 mr-3" />
                        <span>{jobOffer.companyInfo.phone}</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Resumen de la oferta */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Resumen de la oferta</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Publicado:</span>
                  <span className="font-medium">{jobOffer.date.replace("Publicado ", "")}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Ubicación:</span>
                  <span className="font-medium">{jobOffer.location}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Tipo de contrato:</span>
                  <span className="font-medium">{jobOffer.type}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Especialidad:</span>
                  <span className="font-medium">{jobOffer.specialty}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Experiencia:</span>
                  <span className="font-medium">{jobOffer.experience}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Salario:</span>
                  <span className="font-medium">{jobOffer.salary}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button
                  className="w-full bg-red-700 hover:bg-red-800 text-white"
                  onClick={() => setShowApplicationForm(!showApplicationForm)}
                >
                  Postular ahora
                </Button>
              </div>
            </div>

            {/* Ofertas similares */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Ofertas similares</h3>
              <ul className="space-y-4">
                {similarJobs.map((job) => (
                  <li key={job.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <Link href={`/ofertas-laborales/${job.id}`} className="group">
                      <h4 className="font-medium text-gray-900 group-hover:text-red-700 transition-colors">
                        {job.title}
                      </h4>
                      <p className="text-sm text-gray-600">{job.company}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {job.location}
                        </span>
                        <span className="text-xs text-gray-500">{job.date}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link
                  href="/ofertas-laborales"
                  className="text-red-700 hover:text-red-800 text-sm font-medium inline-flex items-center"
                >
                  Ver todas las ofertas <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Compartir oferta */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Compartir esta oferta</h3>
              <p className="text-gray-600 text-sm mb-4">
                ¿Conoces a alguien que podría estar interesado en esta oferta? ¡Compártela!
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1 flex items-center justify-center">
                  <svg className="h-5 w-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Button>
                <Button variant="outline" className="flex-1 flex items-center justify-center">
                  <svg className="h-5 w-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Twitter
                </Button>
                <Button variant="outline" className="flex-1 flex items-center justify-center">
                  <svg className="h-5 w-5 mr-2 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Button>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="relative">
                  <Input
                    type="text"
                    value={`https://cipjunin.org.pe/ofertas-laborales/${jobOffer.id}`}
                    readOnly
                    className="pr-20"
                  />
                  <Button className="absolute right-1 top-1 h-8 bg-gray-200 hover:bg-gray-300 text-gray-800" size="sm">
                    Copiar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
