"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone, Mail, MapPin, User } from "lucide-react"
import SearchBar from "@/components/search-bar"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-1" />
                <span>(064) 123-4567</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-1" />
                <span>info@cipjunin.org.pe</span>
              </div>
              <div className="hidden md:flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Av. Ingenieros 123, Huancayo</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Link
                href="/intranet"
                className="text-xs bg-red-700 hover:bg-red-800 px-3 py-1 rounded flex items-center"
              >
                <User className="h-3 w-3 mr-1" />
                Intranet
              </Link>
              <Link href="/portal-transparencia" className="text-xs hover:text-gray-300 px-3 py-1">
                Portal de Transparencia
              </Link>
              <Link href="/libro-reclamaciones" className="text-xs hover:text-gray-300 px-3 py-1">
                Libro de Reclamaciones
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg?height=60&width=60&text=CIP" alt="Logo CIP Junín" width={60} height={60} />
            <div>
              <div className="font-bold text-lg leading-tight">Colegio de Ingenieros del Perú</div>
              <div className="text-sm text-gray-600">Consejo Departamental Junín</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative w-64">
              <SearchBar />
            </div>
            <Link href="/verificar-habilidad">
              <Button className="bg-red-700 hover:bg-red-800 text-white">Verificar Habilidad</Button>
            </Link>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-100 border-y border-gray-200 hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex">
            <li className="group relative">
              <button
                onClick={() => toggleDropdown("institucional")}
                className={`flex items-center px-4 py-3 hover:bg-gray-200 ${activeDropdown === "institucional" ? "bg-gray-200" : ""}`}
              >
                Institucional <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "institucional" && (
                <div className="absolute left-0 top-full w-64 bg-white shadow-lg z-50">
                  <ul>
                    <li>
                      <Link href="/institucional/quienes-somos" className="block px-4 py-2 hover:bg-gray-100">
                        Quiénes Somos
                      </Link>
                    </li>
                    <li>
                      <Link href="/institucional/directivos" className="block px-4 py-2 hover:bg-gray-100">
                        Directivos
                      </Link>
                    </li>
                    <li>
                      <Link href="/institucional/documentos" className="block px-4 py-2 hover:bg-gray-100">
                        Documentos Normativos
                      </Link>
                    </li>
                    <li>
                      <Link href="/institucional/etica" className="block px-4 py-2 hover:bg-gray-100">
                        Ética Profesional
                      </Link>
                    </li>
                    <li>
                      <Link href="/institucional/directorio" className="block px-4 py-2 hover:bg-gray-100">
                        Directorio
                      </Link>
                    </li>
                    <li>
                      <Link href="/institucional/comisiones" className="block px-4 py-2 hover:bg-gray-100">
                        Comisiones
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="group relative">
              <button
                onClick={() => toggleDropdown("capitulos")}
                className={`flex items-center px-4 py-3 hover:bg-gray-200 ${activeDropdown === "capitulos" ? "bg-gray-200" : ""}`}
              >
                Capítulos Profesionales <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "capitulos" && (
                <div className="absolute left-0 top-full w-64 bg-white shadow-lg z-50">
                  <ul>
                    <li>
                      <Link href="/capitulos/civil" className="block px-4 py-2 hover:bg-gray-100">
                        Ingeniería Civil
                      </Link>
                    </li>
                    <li>
                      <Link href="/capitulos/sistemas" className="block px-4 py-2 hover:bg-gray-100">
                        Ingeniería de Sistemas
                      </Link>
                    </li>
                    <li>
                      <Link href="/capitulos/electrica" className="block px-4 py-2 hover:bg-gray-100">
                        Ingeniería Eléctrica
                      </Link>
                    </li>
                    <li>
                      <Link href="/capitulos/mecanica" className="block px-4 py-2 hover:bg-gray-100">
                        Ingeniería Mecánica
                      </Link>
                    </li>
                    <li>
                      <Link href="/capitulos/industrial" className="block px-4 py-2 hover:bg-gray-100">
                        Ingeniería Industrial
                      </Link>
                    </li>
                    <li>
                      <Link href="/capitulos/minas" className="block px-4 py-2 hover:bg-gray-100">
                        Ingeniería de Minas
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="group relative">
              <button
                onClick={() => toggleDropdown("tramites")}
                className={`flex items-center px-4 py-3 hover:bg-gray-200 ${activeDropdown === "tramites" ? "bg-gray-200" : ""}`}
              >
                Trámites <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "tramites" && (
                <div className="absolute left-0 top-full w-64 bg-white shadow-lg z-50">
                  <ul>
                    <li>
                      <Link href="/tramites/colegiatura" className="block px-4 py-2 hover:bg-gray-100">
                        Colegiatura
                      </Link>
                    </li>
                    <li>
                      <Link href="/tramites/certificado-habilidad" className="block px-4 py-2 hover:bg-gray-100">
                        Certificado de Habilidad
                      </Link>
                    </li>
                    <li>
                      <Link href="/tramites/cambio-sede" className="block px-4 py-2 hover:bg-gray-100">
                        Cambio de Sede
                      </Link>
                    </li>
                    <li>
                      <Link href="/tramites/duplicado-carnet" className="block px-4 py-2 hover:bg-gray-100">
                        Duplicado de Carnet
                      </Link>
                    </li>
                    <li>
                      <Link href="/tramites/constancia-no-adeudo" className="block px-4 py-2 hover:bg-gray-100">
                        Constancia de No Adeudo
                      </Link>
                    </li>
                    <li>
                      <Link href="/ofertas-laborales" className="block px-4 py-2 hover:bg-gray-100">
                        Ofertas Laborales
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link href="/elecciones" className="block px-4 py-3 hover:bg-gray-200">
                Elecciones
              </Link>
            </li>
            <li className="group relative">
              <button
                onClick={() => toggleDropdown("capacitaciones")}
                className={`flex items-center px-4 py-3 hover:bg-gray-200 ${activeDropdown === "capacitaciones" ? "bg-gray-200" : ""}`}
              >
                Capacitaciones <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "capacitaciones" && (
                <div className="absolute left-0 top-full w-64 bg-white shadow-lg z-50">
                  <ul>
                    <li>
                      <Link href="/capacitaciones/cursos" className="block px-4 py-2 hover:bg-gray-100">
                        Cursos
                      </Link>
                    </li>
                    <li>
                      <Link href="/capacitaciones/convenios" className="block px-4 py-2 hover:bg-gray-100">
                        Convenios
                      </Link>
                    </li>
                    <li>
                      <Link href="/capacitaciones/aula-virtual" className="block px-4 py-2 hover:bg-gray-100">
                        Aula Virtual
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="group relative">
              <button
                onClick={() => toggleDropdown("prensa")}
                className={`flex items-center px-4 py-3 hover:bg-gray-200 ${activeDropdown === "prensa" ? "bg-gray-200" : ""}`}
              >
                Sala de Prensa <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "prensa" && (
                <div className="absolute left-0 top-full w-64 bg-white shadow-lg z-50">
                  <ul>
                    <li>
                      <Link href="/sala-prensa/noticias" className="block px-4 py-2 hover:bg-gray-100">
                        Noticias
                      </Link>
                    </li>
                    <li>
                      <Link href="/sala-prensa/comunicados" className="block px-4 py-2 hover:bg-gray-100">
                        Comunicados
                      </Link>
                    </li>
                    <li>
                      <Link href="/sala-prensa/ingeniero-semana" className="block px-4 py-2 hover:bg-gray-100">
                        Ingeniero de la Semana
                      </Link>
                    </li>
                    <li>
                      <Link href="/sala-prensa/tv" className="block px-4 py-2 hover:bg-gray-100">
                        CIP TV
                      </Link>
                    </li>
                    <li>
                      <Link href="/sala-prensa/galeria" className="block px-4 py-2 hover:bg-gray-100">
                        Galería
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link href="/contacto" className="block px-4 py-3 hover:bg-gray-200">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="p-4">
            <div className="relative mb-4">
              <SearchBar />
            </div>
            <Link href="/verificar-habilidad">
              <Button className="w-full bg-red-700 hover:bg-red-800 text-white mb-4">Verificar Habilidad</Button>
            </Link>
          </div>

          <nav className="border-t border-gray-200">
            <ul>
              <li className="border-b border-gray-200">
                <button
                  onClick={() => toggleDropdown("m-institucional")}
                  className="flex items-center justify-between w-full px-4 py-3"
                >
                  <span>Institucional</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${activeDropdown === "m-institucional" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "m-institucional" && (
                  <ul className="bg-gray-50 px-4 py-2">
                    <li>
                      <Link href="/institucional/quienes-somos" className="block py-2">
                        Quiénes Somos
                      </Link>
                    </li>
                    <li>
                      <Link href="/institucional/directivos" className="block py-2">
                        Directivos
                      </Link>
                    </li>
                    <li>
                      <Link href="/institucional/documentos" className="block py-2">
                        Documentos Normativos
                      </Link>
                    </li>
                    <li>
                      <Link href="/institucional/etica" className="block py-2">
                        Ética Profesional
                      </Link>
                    </li>
                    <li>
                      <Link href="/institucional/directorio" className="block py-2">
                        Directorio
                      </Link>
                    </li>
                    <li>
                      <Link href="/institucional/comisiones" className="block py-2">
                        Comisiones
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="border-b border-gray-200">
                <button
                  onClick={() => toggleDropdown("m-capitulos")}
                  className="flex items-center justify-between w-full px-4 py-3"
                >
                  <span>Capítulos Profesionales</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${activeDropdown === "m-capitulos" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "m-capitulos" && (
                  <ul className="bg-gray-50 px-4 py-2">
                    <li>
                      <Link href="/capitulos/civil" className="block py-2">
                        Ingeniería Civil
                      </Link>
                    </li>
                    <li>
                      <Link href="/capitulos/sistemas" className="block py-2">
                        Ingeniería de Sistemas
                      </Link>
                    </li>
                    <li>
                      <Link href="/capitulos/electrica" className="block py-2">
                        Ingeniería Eléctrica
                      </Link>
                    </li>
                    <li>
                      <Link href="/capitulos/mecanica" className="block py-2">
                        Ingeniería Mecánica
                      </Link>
                    </li>
                    <li>
                      <Link href="/capitulos/industrial" className="block py-2">
                        Ingeniería Industrial
                      </Link>
                    </li>
                    <li>
                      <Link href="/capitulos/minas" className="block py-2">
                        Ingeniería de Minas
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="border-b border-gray-200">
                <button
                  onClick={() => toggleDropdown("m-tramites")}
                  className="flex items-center justify-between w-full px-4 py-3"
                >
                  <span>Trámites</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${activeDropdown === "m-tramites" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "m-tramites" && (
                  <ul className="bg-gray-50 px-4 py-2">
                    <li>
                      <Link href="/tramites/colegiatura" className="block py-2">
                        Colegiatura
                      </Link>
                    </li>
                    <li>
                      <Link href="/tramites/certificado-habilidad" className="block py-2">
                        Certificado de Habilidad
                      </Link>
                    </li>
                    <li>
                      <Link href="/tramites/cambio-sede" className="block py-2">
                        Cambio de Sede
                      </Link>
                    </li>
                    <li>
                      <Link href="/tramites/duplicado-carnet" className="block py-2">
                        Duplicado de Carnet
                      </Link>
                    </li>
                    <li>
                      <Link href="/tramites/constancia-no-adeudo" className="block py-2">
                        Constancia de No Adeudo
                      </Link>
                    </li>
                    <li>
                      <Link href="/ofertas-laborales" className="block py-2">
                        Ofertas Laborales
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="border-b border-gray-200">
                <Link href="/elecciones" className="block px-4 py-3">
                  Elecciones
                </Link>
              </li>

              <li className="border-b border-gray-200">
                <button
                  onClick={() => toggleDropdown("m-capacitaciones")}
                  className="flex items-center justify-between w-full px-4 py-3"
                >
                  <span>Capacitaciones</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${activeDropdown === "m-capacitaciones" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "m-capacitaciones" && (
                  <ul className="bg-gray-50 px-4 py-2">
                    <li>
                      <Link href="/capacitaciones/cursos" className="block py-2">
                        Cursos
                      </Link>
                    </li>
                    <li>
                      <Link href="/capacitaciones/convenios" className="block py-2">
                        Convenios
                      </Link>
                    </li>
                    <li>
                      <Link href="/capacitaciones/aula-virtual" className="block py-2">
                        Aula Virtual
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="border-b border-gray-200">
                <button
                  onClick={() => toggleDropdown("m-prensa")}
                  className="flex items-center justify-between w-full px-4 py-3"
                >
                  <span>Sala de Prensa</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${activeDropdown === "m-prensa" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "m-prensa" && (
                  <ul className="bg-gray-50 px-4 py-2">
                    <li>
                      <Link href="/sala-prensa/noticias" className="block py-2">
                        Noticias
                      </Link>
                    </li>
                    <li>
                      <Link href="/sala-prensa/comunicados" className="block py-2">
                        Comunicados
                      </Link>
                    </li>
                    <li>
                      <Link href="/sala-prensa/ingeniero-semana" className="block py-2">
                        Ingeniero de la Semana
                      </Link>
                    </li>
                    <li>
                      <Link href="/sala-prensa/tv" className="block py-2">
                        CIP TV
                      </Link>
                    </li>
                    <li>
                      <Link href="/sala-prensa/galeria" className="block py-2">
                        Galería
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="border-b border-gray-200">
                <Link href="/contacto" className="block px-4 py-3">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
