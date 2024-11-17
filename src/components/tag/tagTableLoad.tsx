// import components
import { Skeleton } from "../basic/Skeleton";

export default function TagTableLoad() {
  // Secondary variable
  const mockTag = new Array(5).fill(null);

  // return
  return (
    <table className="table-fixed w-full">
      <thead>
        <tr className="border border-r-0 border-l-0 font-semibold text-body-1">
          <th className='p-1 sm:p-2 w-5/12 lg:w-7/12 text-left'>Name</th>
          <th className='p-1 sm:p-2 w-2/12 lg:w-1/12 text-center'>Color</th>
          <th className='p-1 sm:p-2 w-3/12 lg:w-2/12 text-center'>Hex</th>
          <th className='p-1 sm:p-2 w-1/12 lg:w-1/12 text-center text-transparent'>Edit</th>
          <th className='p-1 sm:p-2 w-1/12 lg:w-1/12 text-center text-transparent'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {mockTag.map((_, index) => (
          <tr key={index} className='border border-r-0 border-l-0 w-full text-body-2'>
            <td className='p-1 sm:p-2 w-5/12 lg:w-7/12'>
              <Skeleton className="w-full h-6" />
            </td>
            <td className='p-1 sm:p-2 w-2/12 lg:w-1/12'>
              <div className="flex justify-center items-center p-2 sm:p-0 w-full h-full">
                <Skeleton className='rounded-lg w-full sm:w-1/2 max-w-6 md:max-w-7 aspect-square' />
              </div>
            </td>
            <td className='p-1 sm:p-2 w-3/12 lg:w-2/12 text-center'>
              <Skeleton className="w-full h-6" />
            </td>
            <td className='p-1 sm:p-2 w-1/12 lg:w-1/12'>
              <div className="flex justify-center items-center w-full h-full">
                <Skeleton className="rounded-lg w-full sm:w-1/2 max-w-6 md:max-w-7 aspect-square" />
              </div>
            </td>
            <td className='p-1 sm:p-2 w-1/12 lg:w-1/12'>
              <div className="flex justify-center items-center w-full h-full">
                <Skeleton className="rounded-lg w-full sm:w-1/2 max-w-6 md:max-w-7 aspect-square" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}