import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Cabecera */}
      <div className="bg-gradient-to-r from-red-800 to-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Skeleton className="h-10 w-64 bg-white/20 mb-4" />
          <Skeleton className="h-6 w-96 max-w-full bg-white/20" />
        </div>
      </div>

      {/* Buscador y filtros */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 -mt-16 relative z-10">
          <div className="flex flex-col md:flex-row gap-4">
            <Skeleton className="h-10 flex-grow bg-gray-200" />
            <Skeleton className="h-10 w-32 bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Listado de ofertas */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-6">
              <Skeleton className="h-8 w-48 bg-gray-200" />
              <Skeleton className="h-6 w-32 bg-gray-200" />
            </div>

            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row">
                    <Skeleton className="w-16 h-16 rounded-lg bg-gray-200 md:mr-4 mb-4 md:mb-0" />
                    <div className="flex-grow">
                      <Skeleton className="h-7 w-3/4 bg-gray-200 mb-2" />
                      <Skeleton className="h-5 w-1/2 bg-gray-200 mb-4" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                        <Skeleton className="h-5 w-full bg-gray-200" />
                        <Skeleton className="h-5 w-full bg-gray-200" />
                        <Skeleton className="h-5 w-full bg-gray-200" />
                        <Skeleton className="h-5 w-full bg-gray-200" />
                      </div>

                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex justify-between">
                          <Skeleton className="h-6 w-32 bg-gray-200" />
                          <Skeleton className="h-5 w-24 bg-gray-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-lg shadow-md p-6">
              <Skeleton className="h-7 w-48 bg-white/20 mb-3" />
              <Skeleton className="h-4 w-full bg-white/20 mb-2" />
              <Skeleton className="h-4 w-5/6 bg-white/20 mb-4" />

              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <Skeleton className="h-10 w-10 rounded-full bg-white/20 mr-3" />
                  <div>
                    <Skeleton className="h-5 w-40 bg-white/20 mb-1" />
                    <Skeleton className="h-4 w-32 bg-white/20" />
                  </div>
                </div>
                <div className="flex items-start">
                  <Skeleton className="h-10 w-10 rounded-full bg-white/20 mr-3" />
                  <div>
                    <Skeleton className="h-5 w-40 bg-white/20 mb-1" />
                    <Skeleton className="h-4 w-32 bg-white/20" />
                  </div>
                </div>
              </div>

              <Skeleton className="h-10 w-full bg-white/20" />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <Skeleton className="h-7 w-32 bg-gray-200 mb-4" />
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <Skeleton className="h-4 w-32 bg-gray-200" />
                    <Skeleton className="h-4 w-8 bg-gray-200" />
                  </div>
                  <Skeleton className="h-2 w-full bg-gray-200" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <Skeleton className="h-4 w-32 bg-gray-200" />
                    <Skeleton className="h-4 w-8 bg-gray-200" />
                  </div>
                  <Skeleton className="h-2 w-full bg-gray-200" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <Skeleton className="h-4 w-32 bg-gray-200" />
                    <Skeleton className="h-4 w-8 bg-gray-200" />
                  </div>
                  <Skeleton className="h-2 w-full bg-gray-200" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <Skeleton className="h-7 w-40 bg-gray-200 mb-3" />
              <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
              <Skeleton className="h-4 w-5/6 bg-gray-200 mb-4" />

              <div className="space-y-3 mb-4">
                <Skeleton className="h-10 w-full bg-gray-200" />
                <Skeleton className="h-10 w-full bg-gray-200" />
                <Skeleton className="h-5 w-full bg-gray-200" />
              </div>

              <Skeleton className="h-10 w-full bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
