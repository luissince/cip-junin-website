import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TerminosCondiciones() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-red-700 hover:text-red-800 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al inicio
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b">Términos y Condiciones</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introducción</h2>
            <p className="text-gray-700 mb-4">
              Bienvenido al sitio web del Colegio de Ingenieros del Perú - Consejo Departamental Junín (en adelante,
              "CIP Junín", "nosotros", o "nuestro"). Al acceder y utilizar este sitio web, usted acepta cumplir y quedar
              vinculado por los siguientes términos y condiciones de uso.
            </p>
            <p className="text-gray-700">
              Le recomendamos leer detenidamente estos términos antes de utilizar nuestro sitio web. Si no está de
              acuerdo con alguna parte de estos términos, le pedimos que no utilice nuestro sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Uso del Sitio Web</h2>

            <h3 className="text-xl font-medium text-gray-800 mb-2">2.1 Condiciones Generales</h3>
            <p className="text-gray-700 mb-4">
              Este sitio web está destinado a proporcionar información sobre el CIP Junín, sus servicios, actividades y
              recursos para ingenieros colegiados y público en general. Usted se compromete a utilizar este sitio
              únicamente para fines lícitos y de acuerdo con estos términos.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-2">2.2 Restricciones de Uso</h3>
            <p className="text-gray-700 mb-4">Usted acepta no:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                Utilizar el sitio de manera que pueda dañar, deshabilitar o sobrecargar nuestros servidores o redes
              </li>
              <li>Acceder o intentar acceder a información a la que no tiene derecho</li>
              <li>Realizar actividades de hacking, scraping o extracción no autorizada de datos</li>
              <li>Publicar o transmitir material ilegal, amenazante, difamatorio, obsceno o discriminatorio</li>
              <li>Utilizar el sitio para enviar publicidad no solicitada o spam</li>
              <li>Suplantar la identidad de otra persona o entidad</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Cuentas de Usuario</h2>
            <p className="text-gray-700 mb-4">
              Algunas secciones de nuestro sitio web requieren que los usuarios se registren o inicien sesión. Si crea
              una cuenta en nuestro sitio:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Es responsable de mantener la confidencialidad de su contraseña</li>
              <li>Acepta la responsabilidad por todas las actividades que ocurran bajo su cuenta</li>
              <li>Se compromete a proporcionar información precisa, actualizada y completa</li>
              <li>Debe notificarnos inmediatamente sobre cualquier uso no autorizado de su cuenta</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Propiedad Intelectual</h2>
            <p className="text-gray-700 mb-4">
              Todo el contenido presente en este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos,
              iconos, imágenes, clips de audio, descargas digitales, compilaciones de datos y software, es propiedad del
              CIP Junín o de sus proveedores de contenido y está protegido por las leyes peruanas e internacionales de
              propiedad intelectual.
            </p>
            <p className="text-gray-700">
              Queda prohibida la reproducción, distribución, modificación, exhibición pública, o cualquier otro uso del
              contenido de este sitio sin autorización previa por escrito del CIP Junín.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Enlaces a Sitios de Terceros</h2>
            <p className="text-gray-700">
              Nuestro sitio web puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan
              únicamente para su conveniencia. No tenemos control sobre el contenido de estos sitios y no somos
              responsables de su contenido o prácticas de privacidad. La inclusión de cualquier enlace no implica
              respaldo, aprobación o control por parte del CIP Junín sobre el sitio enlazado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Trámites y Servicios en Línea</h2>
            <p className="text-gray-700 mb-4">
              El CIP Junín ofrece diversos trámites y servicios a través de su sitio web. Al utilizar estos servicios:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Usted acepta proporcionar información veraz y completa</li>
              <li>Reconoce que algunos trámites pueden requerir verificación adicional o documentación física</li>
              <li>
                Entiende que los pagos realizados por servicios están sujetos a las políticas de reembolso específicas
                de cada servicio
              </li>
              <li>Acepta cumplir con los plazos y requisitos establecidos para cada trámite</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 mb-4">
              El CIP Junín se esfuerza por mantener la información de este sitio web actualizada y precisa. Sin embargo:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Todo el contenido se proporciona "tal cual", sin garantías de ningún tipo</li>
              <li>No garantizamos que el sitio web funcione sin interrupciones o errores</li>
              <li>
                No somos responsables por daños directos, indirectos, incidentales o consecuentes que resulten del uso o
                la imposibilidad de usar nuestro sitio
              </li>
              <li>
                Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del sitio en
                cualquier momento
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Indemnización</h2>
            <p className="text-gray-700">
              Usted acepta defender, indemnizar y mantener indemne al CIP Junín, sus directivos, empleados y agentes, de
              cualquier reclamación, responsabilidad, daño, costo y gasto, incluyendo honorarios legales razonables, que
              surjan de su uso del sitio web o de cualquier violación de estos términos y condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Ley Aplicable y Jurisdicción</h2>
            <p className="text-gray-700">
              Estos términos y condiciones se rigen por las leyes de la República del Perú. Cualquier disputa
              relacionada con estos términos o con el uso del sitio web será sometida a la jurisdicción exclusiva de los
              tribunales competentes de la ciudad de Huancayo, Perú.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Modificaciones</h2>
            <p className="text-gray-700">
              El CIP Junín se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las
              modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web. Su uso
              continuado del sitio después de cualquier modificación constituye su aceptación de los términos
              modificados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contacto</h2>
            <p className="text-gray-700">
              Si tiene preguntas o comentarios sobre estos Términos y Condiciones, puede contactarnos a través de:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <p className="text-gray-700">
                <strong>Correo electrónico:</strong> legal@cipjunin.org.pe
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
