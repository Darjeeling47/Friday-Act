// import component
import { Skeleton } from "../basic/Skeleton";

export default function ActivityCardLoad() {
  const mockActivities = new Array(2).fill(null);
  const mockTags = new Array(2).fill(null);
  return (
    <>
      {
        mockActivities.map((_, index) => (
          <div key={index} className="flex flex-row justify-start items-center gap-5 p-5 rounded-[30px] w-full xl:max-w-xl h-full transition-transform duration-300" >
            <div className="grow-0">
              <div className="flex justify-center items-center bg-white shadow-1 rounded-3xl h-44 sm:h-56 md:h-64 lg:h-72 aspect-2/3">
                <Skeleton className="rounded-3xl w-full h-full aspect-2/3 object-cover" />
              </div>
            </div>

            <div className="overflow-hidden grow">
              <div className="flex flex-col justify-between items-start w-full h-44 sm:h-56 md:h-64 lg:h-72">
                <div className="flex flex-col justify-start items-start gap-2 py-1 md:py-2 lg:py-3 w-full">
                  <div className="flex flex-col justify-start items-start gap-2 w-full">
                    <Skeleton className="w-full h-6 lg:h-8" />
                    <Skeleton className="w-full h-4 lg:h-5" />
                  </div>
                  <Skeleton className="w-full h-1" />
                  <div className="flex flex-row justify-start items-center gap-2 px-1 w-full">
                    {mockTags.map((_, index) => (
                      <Skeleton key={index} className="rounded-full w-1/2 sm:w-1/3 h-4 md:h-5" />
                    ))}
                  </div>
                  <Skeleton className="w-full h-4 md:h-5" />
                  <Skeleton className="md:block hidden w-full h-4 md:h-5" />
                </div>

                <div className="flex flex-col items-center gap-1 w-full">
                  {/* Tablet Desktop */}
                  <div className="sm:flex flex-row justify-start items-center gap-2 hidden w-full">
                    <Skeleton className='w-4 lg:w-5 h-4 lg:h-5' />
                    <Skeleton className="w-full h-4 lg:h-5" />
                  </div>
                  {/* Mobile */}
                  {/* <div className="justify-start items-center gap-2 sm:hidden grid col-span-1 w-full">
              <div className="flex flex-row justify-start items-center col-span-1 w-full">
                <Skeleton className='w-4 h-3' />
                <Skeleton className="w-full h-3" />
              </div>
              <div className="flex flex-row justify-start items-center col-span-1 w-full">
                <Skeleton className='w-4 h-3' />
                <Skeleton className="w-full h-3" />
              </div>
            </div> */}
                  <div className="flex flex-col justify-start items-end gap-1 w-full">
                    <Skeleton className="w-full h-6 lg:h-8" />
                    <Skeleton className='w-1/3 h-4 lg:h-5' />
                  </div>
                </div>
              </div>
            </div >
          </div>
        ))}
    </>
  )
}