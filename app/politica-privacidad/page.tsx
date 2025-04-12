import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PoliticaPrivacidad() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-red-700 hover:text-red-800 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al inicio
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b">Política de Privacidad</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introducción</h2>
            <p className="text-gray-700 mb-4">
              El Colegio de Ingenieros del Perú - Consejo Departamental Junín (en adelante, "CIP Junín") está
              comprometido con la protección de la privacidad y los datos personales de nuestros usuarios. Esta Política
              de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos su información cuando visita
              nuestro sitio web o utiliza nuestros servicios.
            </p>
            <p className="text-gray-700">
              Al utilizar nuestro sitio web, usted acepta las prácticas descritas en esta política. Le recomendamos leer
              detenidamente este documento para comprender nuestro enfoque respecto a su información personal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Información que Recopilamos</h2>
            <p className="text-gray-700 mb-4">Podemos recopilar los siguientes tipos de información:</p>

            <h3 className="text-xl font-medium text-gray-800 mb-2">2.1 Información Personal</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Nombre completo</li>
              <li>Número de documento de identidad</li>
              <li>Número de colegiatura</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Dirección postal</li>
              <li>Especialidad profesional</li>
              <li>Historial académico y profesional</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-2">2.2 Información de Uso</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Dirección IP</li>
              <li>Tipo de navegador y dispositivo</li>
              <li>Páginas visitadas y tiempo de permanencia</li>
              <li>Acciones realizadas en el sitio</li>
              <li>Información de cookies y tecnologías similares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Cómo Utilizamos su Información</h2>
            <p className="text-gray-700 mb-4">Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Gestionar su membresía y cuenta en el CIP Junín</li>
              <li>Procesar trámites y solicitudes</li>
              <li>Verificar su identidad y estado de habilitación profesional</li>
              <li>Enviar comunicaciones relevantes sobre eventos, cursos y noticias</li>
              <li>Mejorar nuestros servicios y la experiencia del usuario</li>
              <li>Cumplir con obligaciones legales y reglamentarias</li>
              <li>Proteger nuestros derechos e intereses legítimos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies y Tecnologías Similares</h2>
            <p className="text-gray-700 mb-4">
              Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia, recordar sus
              preferencias y recopilar información sobre cómo interactúa con nuestro sitio.
            </p>
            <p className="text-gray-700 mb-4">Utilizamos los siguientes tipos de cookies:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio
              </li>
              <li>
                <strong>Cookies de preferencias:</strong> Permiten recordar sus preferencias y configuraciones
              </li>
              <li>
                <strong>Cookies analíticas:</strong> Nos ayudan a entender cómo los usuarios interactúan con el sitio
              </li>
              <li>
                <strong>Cookies de marketing:</strong> Utilizadas para mostrar contenido relevante y personalizado
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Compartición de Información</h2>
            <p className="text-gray-700 mb-4">
              Podemos compartir su información personal en las siguientes circunstancias:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Con el Consejo Nacional del CIP y otros Consejos Departamentales cuando sea necesario</li>
              <li>Con proveedores de servicios que nos ayudan a operar nuestro sitio y servicios</li>
              <li>Con entidades gubernamentales cuando sea requerido por ley</li>
              <li>Con terceros en caso de reorganización, fusión o venta</li>
              <li>Con su consentimiento explícito para otros fines</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Derechos de los Usuarios</h2>
            <p className="text-gray-700 mb-4">
              De acuerdo con la Ley de Protección de Datos Personales del Perú (Ley N° 29733), usted tiene los
              siguientes derechos:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Derecho de acceso a sus datos personales</li>
              <li>Derecho de rectificación de datos inexactos</li>
              <li>Derecho de cancelación o supresión</li>
              <li>Derecho de oposición al tratamiento</li>
              <li>Derecho a no ser objeto de decisiones automatizadas</li>
              <li>Derecho a presentar una reclamación ante la autoridad de control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Seguridad de la Información</h2>
            <p className="text-gray-700">
              Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para proteger su
              información personal contra acceso no autorizado, pérdida, alteración o destrucción. Sin embargo, ningún
              sistema de seguridad es completamente impenetrable, por lo que no podemos garantizar la seguridad absoluta
              de su información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Cambios a esta Política</h2>
            <p className="text-gray-700">
              Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas
              o por otros motivos operativos, legales o regulatorios. Le recomendamos revisar esta política
              regularmente. La fecha de la última actualización se indicará al final de este documento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contacto</h2>
            <p className="text-gray-700">
              Si tiene preguntas, comentarios o solicitudes relacionadas con esta Política de Privacidad o el
              tratamiento de sus datos personales, puede contactarnos a través de:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <p className="text-gray-700">
                <strong>Correo electrónico:</strong> privacidad@cipjunin.org.pe
              </p>
              <p className="text-gray-700">
                <strong>Dirección:</strong> Av. Ingenieros 123, Huancayo, Junín, Perú
              </p>
              <p className="text-gray-700">
                <strong>Teléfono:</strong> (064) 123-4567
              </p>
            </div>
          </section>

          <div className="text-sm text-gray-500 pt-6 border-t">
            <p>Última actualización: Abril 2025</p>
          </div>
        </div>
      </div>
    </main>
  )
}
