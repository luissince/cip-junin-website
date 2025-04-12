import Link from "next/link"
import { FileText, User, Calendar, BookOpen, Award, Phone } from "lucide-react"

export default function QuickAccess() {
  return (
    <section className="bg-white py-6 shadow-md relative z-10 -mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Link
            href="/tramites/certificado-habilidad"
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center mb-2">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="text-center text-sm font-medium">Certificado de Habilidad</span>
          </Link>

          <Link
            href="/tramites/colegiatura"
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center mb-2">
              <User className="h-6 w-6 text-white" />
            </div>
            <span className="text-center text-sm font-medium">Colegiatura</span>
          </Link>

          <Link
            href="/eventos"
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center mb-2">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <span className="text-center text-sm font-medium">Eventos</span>
          </Link>

          <Link
            href="/capacitaciones"
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center mb-2">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-center text-sm font-medium">Capacitaciones</span>
          </Link>

          <Link
            href="/beneficios"
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center mb-2">
              <Award className="h-6 w-6 text-white" />
            </div>
            <span className="text-center text-sm font-medium">Beneficios</span>
          </Link>

          <Link
            href="/contacto"
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center mb-2">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <span className="text-center text-sm font-medium">Contacto</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
