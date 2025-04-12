import { Skeleton } from "@/components/ui/skeleton"

export default function JobDetailLoading() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Cabecera */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Skeleton className="h-5 w-40 bg-gray-200" />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Detalles de la oferta */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col md:flex-row">
                <Skeleton className="w-24 h-24 rounded-lg bg-gray-200 md:mr-6 mb-4 md:mb-0" />
                <div className="flex-grow">
                  <Skeleton className="h-8 w-3/4 bg-gray-200 mb-2" />
                  <Skeleton className="h-6 w-1/2 bg-gray-200 mb-4" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    <Skeleton className="h-5 w-full bg-gray-200" />
                    <Skeleton className="h-5 w-full bg-gray-200" />
                    <Skeleton className="h-5 w-full bg-gray-200" />
                    <Skeleton className="h-5 w-full bg-gray-200" />
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <Skeleton className="h-6 w-32 bg-gray-200" />
                    <Skeleton className="h-5 w-24 bg-gray-200 ml-auto" />
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                    <Skeleton className="h-10 w-32 bg-gray-200" />
                    <Skeleton className="h-10 w-32 bg-gray-200" />
                    <Skeleton className="h-10 w-32 bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs de información */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="flex">
                  <Skeleton className="h-10 w-28 bg-gray-200 mx-2" />
                  <Skeleton className="h-10 w-28 bg-gray-200 mx-2" />
                  <Skeleton className="h-10 w-28 bg-gray-200 mx-2" />
                </div>
              </div>

              <div className="p-6">
                <Skeleton className="h-7 w-48 bg-gray-200 mb-4" />
                <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
                <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
                <Skeleton className="h-4 w-3/4 bg-gray-200 mb-6" />

                <Skeleton className="h-6 w-40 bg-gray-200 mb-3" />
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <Skeleton className="h-5 w-5 bg-gray-200 mr-2 shrink-0 mt-0.5" />
                    <Skeleton className="h-5 w-full bg-gray-200" />
                  </div>
                  <div className="flex items-start">
                    <Skeleton className="h-5 w-5 bg-gray-200 mr-2 shrink-0 mt-0.5" />
                    <Skeleton className="h-5 w-full bg-gray-200" />
                  </div>
                  <div className="flex items-start">
                    <Skeleton className="h-5 w-5 bg-gray-200 mr-2 shrink-0 mt-0.5" />
                    <Skeleton className="h-5 w-full bg-gray-200" />
                  </div>
                  <div className="flex items-start">
                    <Skeleton className="h-5 w-5 bg-gray-200 mr-2 shrink-0 mt-0.5" />
                    <Skeleton className="h-5 w-full bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Resumen de la oferta */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Skeleton className="h-7 w-40 bg-gray-200 mb-4" />
              <ul className="space-y-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex justify-between">
                    <Skeleton className="h-5 w-24 bg-gray-200" />
                    <Skeleton className="h-5 w-32 bg-gray-200" />
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Skeleton className="h-10 w-full bg-gray-200" />
              </div>
            </div>

            {/* Ofertas similares */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Skeleton className="h-7 w-40 bg-gray-200 mb-4" />
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <Skeleton className="h-5 w-full bg-gray-200 mb-1" />
                    <Skeleton className="h-4 w-1/2 bg-gray-200 mb-1" />
                    <div className="flex justify-between items-center mt-1">
                      <Skeleton className="h-3 w-24 bg-gray-200" />
                      <Skeleton className="h-3 w-20 bg-gray-200" />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Skeleton className="h-5 w-40 bg-gray-200" />
              </div>
            </div>

            {/* Compartir oferta */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Skeleton className="h-7 w-40 bg-gray-200 mb-3" />
              <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
              <Skeleton className="h-4 w-5/6 bg-gray-200 mb-4" />
              <div className="flex space-x-2">
                <Skeleton className="h-10 flex-1 bg-gray-200" />
                <Skeleton className="h-10 flex-1 bg-gray-200" />
                <Skeleton className="h-10 flex-1 bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
