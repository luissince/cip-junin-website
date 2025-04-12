"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Search, AlertCircle, CheckCircle } from "lucide-react"

// Datos de ejemplo para la demostración
const ingenieros = [
  {
    id: 1,
    nombres: "Juan Pérez Rodríguez",
    numeroCIP: "123456",
    especialidad: "Ingeniería Civil",
    consejo: "Junín",
    habilitadoHasta: "31 de Diciembre, 2023",
    estado: "habilitado",
    documento: "12345678",
  },
  {
    id: 2,
    nombres: "Pedro López García",
    numeroCIP: "654321",
    especialidad: "Ingeniería Eléctrica",
    consejo: "Junín",
    habilitadoHasta: "30 de Junio, 2023",
    estado: "no-habilitado",
    documento: "87654321",
  },
]

export default function VerificarHabilidadPage() {
  const [searchValue, setSearchValue] = useState("")
  const [searchResult, setSearchResult] = useState<"none" | "habilitado" | "no-habilitado">("none")
  const [ingeniero, setIngeniero] = useState<(typeof ingenieros)[0] | null>(null)

  const handleSearch = () => {
    if (!searchValue.trim()) return

    // Buscar por CIP o documento
    const found = ingenieros.find((ing) => ing.numeroCIP === searchValue || ing.documento === searchValue)

    if (found) {
      setIngeniero(found)
      setSearchResult(found.estado as "habilitado" | "no-habilitado")
    } else {
      setIngeniero(null)
      setSearchResult("none")
      alert("No se encontró ningún ingeniero con los datos proporcionados.")
    }
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
          <span className="text-gray-900 font-medium">Verificar Habilidad</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Verificar Habilidad Profesional</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Verifique si un ingeniero se encuentra habilitado para el ejercicio profesional en el Colegio de Ingenieros
            del Perú - Consejo Departamental Junín.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Consulta de Habilidad</h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 shrink-0" />
                <p className="text-blue-700 text-sm">
                  La habilidad profesional es un requisito indispensable para el ejercicio legal de la ingeniería en el
                  Perú. Para estar habilitado, el ingeniero debe estar al día en sus cuotas sociales ordinarias.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold mb-4 text-center">Ingrese el número de CIP o documento de identidad</h3>
                <div className="max-w-md mx-auto space-y-4">
                  <div>
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                      Número de CIP o DNI/CE
                    </label>
                    <div className="relative">
                      <Input
                        id="search"
                        type="text"
                        placeholder="Ej: 123456 o 12345678"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white" onClick={handleSearch}>
                    <Search className="h-4 w-4 mr-2" />
                    Verificar Habilidad
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-bold mb-4">Resultado de la consulta</h3>

              {/* Mostrar este bloque cuando no hay resultados */}
              {searchResult === "none" && (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <Image
                    src="/placeholder.svg?height=120&width=120&text=Search"
                    alt="Buscar"
                    width={120}
                    height={120}
                    className="mx-auto mb-4"
                  />
                  <p className="text-gray-600">
                    Ingrese un número de CIP o documento de identidad para verificar la habilidad profesional.
                  </p>
                </div>
              )}

              {/* Mostrar este bloque cuando hay resultados (habilitado) */}
              {searchResult === "habilitado" && ingeniero && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-green-500 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=128&width=128&text=Foto"
                        alt="Foto del Ingeniero"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                        <h3 className="text-xl font-bold text-green-800">INGENIERO HABILITADO</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Nombres y Apellidos:</p>
                          <p className="font-medium">{ingeniero.nombres}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Número CIP:</p>
                          <p className="font-medium">{ingeniero.numeroCIP}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Especialidad:</p>
                          <p className="font-medium">{ingeniero.especialidad}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Consejo Departamental:</p>
                          <p className="font-medium">{ingeniero.consejo}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Habilitado hasta:</p>
                          <p className="font-medium">{ingeniero.habilitadoHasta}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mostrar este bloque cuando hay resultados (no habilitado) */}
              {searchResult === "no-habilitado" && ingeniero && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-red-500 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=128&width=128&text=Foto"
                        alt="Foto del Ingeniero"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
                        <h3 className="text-xl font-bold text-red-800">INGENIERO NO HABILITADO</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Nombres y Apellidos:</p>
                          <p className="font-medium">{ingeniero.nombres}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Número CIP:</p>
                          <p className="font-medium">{ingeniero.numeroCIP}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Especialidad:</p>
                          <p className="font-medium">{ingeniero.especialidad}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Consejo Departamental:</p>
                          <p className="font-medium">{ingeniero.consejo}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Habilitado hasta:</p>
                          <p className="font-medium">{ingeniero.habilitadoHasta} (Vencido)</p>
                        </div>
                      </div>
                      <div className="mt-4 bg-white p-4 rounded-lg border border-red-200">
                        <p className="text-sm text-red-700 mb-2">
                          El ingeniero no se encuentra habilitado para el ejercicio profesional. Para regularizar su
                          situación, debe ponerse al día en sus cuotas ordinarias.
                        </p>
                        <Link href="/contacto">
                          <Button className="bg-red-700 hover:bg-red-800 text-white w-full sm:w-auto">
                            Contactar al CIP
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Preguntas Frecuentes</h2>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-1">¿Qué significa estar habilitado?</h3>
                <p className="text-sm text-gray-600">
                  Estar habilitado significa que el ingeniero está autorizado para ejercer legalmente la profesión,
                  habiendo cumplido con sus obligaciones como colegiado, principalmente el pago de sus cuotas
                  ordinarias.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-1">¿Por qué es importante la habilidad profesional?</h3>
                <p className="text-sm text-gray-600">
                  La habilidad profesional es un requisito legal para el ejercicio de la ingeniería en el Perú, según la
                  Ley N° 28858. Los documentos firmados por ingenieros no habilitados carecen de validez legal.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-1">¿Cómo puedo habilitarme si estoy con pagos pendientes?</h3>
                <p className="text-sm text-gray-600">
                  Para regularizar su situación, debe acercarse a las oficinas del CIP Junín o realizar el pago de sus
                  cuotas pendientes a través de la plataforma virtual en la sección "Intranet".
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-1">¿Cuál es la vigencia de la habilidad?</h3>
                <p className="text-sm text-gray-600">
                  La habilidad tiene una vigencia de 3 meses, correspondientes al pago de la cuota ordinaria trimestral.
                  El pago puede realizarse también de forma semestral o anual.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6 md:w-1/2">
                <h2 className="text-xl font-bold mb-4">¿Necesita un Certificado de Habilidad?</h2>
                <p className="mb-4">
                  Si requiere un documento oficial que certifique su habilidad profesional para trámites, firma de
                  planos o documentos técnicos, puede solicitar un Certificado de Habilidad.
                </p>
                <Link href="/tramites/certificado-habilidad">
                  <Button className="bg-red-700 hover:bg-red-800 text-white">Solicitar Certificado de Habilidad</Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Tipos de Certificados</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-500 mr-1 shrink-0 mt-0.5" />
                      <span>Certificado de Habilidad para Obra</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-500 mr-1 shrink-0 mt-0.5" />
                      <span>Certificado de Habilidad para Proyecto</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-500 mr-1 shrink-0 mt-0.5" />
                      <span>Certificado de Habilidad para Supervisión</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-500 mr-1 shrink-0 mt-0.5" />
                      <span>Certificado de Habilidad para Consultoría</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
