// import components
import { Skeleton } from "../basic/Skeleton";

export default function CompanyTableLoad() {
  // Secondary variable
  const mockTag = new Array(5).fill(null);
  return (

    <table className="table-fixed w-full">
      <thead>
        <tr className="border border-r-0 border-l-0 font-semibold text-body-1">
          <th className='p-1 sm:p-2 w-6/12 md:w-5/12 lg:w-3/12 text-left'>Name</th>
          <th className='p-1 sm:p-2 w-4/12 md:w-4/12 lg:w-6/12 text-left'>Description</th>
          <th className='p-1 sm:p-2 w-2/12 md:w-3/12 lg:w-3/12 text-left text-transparent md:text-black'>Website</th>
        </tr>
      </thead>
      <tbody>
        {
          mockTag.map((_, index) => {
            return (
              <tr key={index} className="border border-r-0 border-l-0 font-semibold text-body-1">
                <td className='p-1 sm:p-2 w-6/12 md:w-5/12 lg:w-3/12 text-left'>
                  <Skeleton className="w-full h-6" />
                </td>
                <td className='p-1 sm:p-2 w-4/12 md:w-4/12 lg:w-6/12 text-left'>
                  <Skeleton className="w-full h-6" />
                </td>
                <td className='p-1 sm:p-2 w-2/12 md:w-3/12 lg:w-3/12 text-left'>
                  <div className="flex justify-center items-center md:hidden w-full h-full">
                    <Skeleton className="rounded-lg w-full sm:w-1/2 max-w-6 md:max-w-7 aspect-square" />
                  </div>
                  <Skeleton className="md:block hidden w-full h-6" />
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}