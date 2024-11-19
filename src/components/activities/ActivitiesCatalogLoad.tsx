// import component
import { Skeleton } from "../basic/Skeleton";

export default function ActivitiesCatalogLoad() {
  const mockDate = new Array(1).fill(null)
  const mockActivities = new Array(2).fill(null)
  const mockTags = new Array(2).fill(null)
  return (
    <>
      {
        mockDate.map((_, index) => (
          <div key={index} className="flex flex-col justify-start items-start gap-8 py-8 border-b-1 border-b-mgray-3 w-full">
            <Skeleton className="w-1/2 md:w-52 h-6 md:h-8" />
            <div className="justify-start gap-8 grid grid-cols-1 lg:grid-cols-2 w-full">
              {
                mockActivities.map((_, index) => (
                  <div key={index} className="col-span-1 w-full overflow-hidden">
                    <div
                      className="flex flex-row justify-start items-center gap-5 p-5 rounded-[30px] w-full max-w-lg h-full transition-transform duration-300"
                    >
                      <div className="grow-0">
                        <div className="flex justify-center items-center rounded-3xl h-44 sm:h-56 md:h-64 lg:h-72 aspect-2/3">
                          <Skeleton className="rounded-3xl w-full h-full object-contain" />
                        </div>
                      </div>
                      <div className="h-full text-left overflow-hidden grow">
                        <div className="flex flex-col justify-start items-start gap-1 py-1 md:py-2 lg:py-3 w-full">
                          <div className="flex flex-col justify-start items-start gap-2 pb-1 w-full">
                            <Skeleton className="w-full h-5 md:h-6" />
                            <Skeleton className="w-full h-4" />
                          </div>
                          <Skeleton className="w-full h-1" />
                          <div className="flex flex-row justify-start items-center gap-2 mt-1 scrollbar-thumb-gray-300 px-1 w-full h-9 md:h-10 lg:h-12 overflow-x-auto scrollbar-thin scrollbar-track-gray-100">
                            {
                              mockTags.map((_, index) => (
                                <Skeleton key={index} className="rounded-full w-1/2 md:w-1/3 h-4 md:h-5" />
                              ))}
                          </div>
                          <div className="flex flex-col justify-start items-start gap-1 w-full">
                          <Skeleton className="w-full h-4 md:h-4" />
                          <Skeleton className="w-full h-4 md:h-4" />
                          <Skeleton className="w-1/2 h-4 md:h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </>
  )
}