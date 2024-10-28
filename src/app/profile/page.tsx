// import react
import Image from 'next/image'

// import components
import ActivityLog from '@/components/ActivityLog'

export default function Profile() {
  // return
  return (
    <main className='flex flex-col gap-6'>
      {/* Name */}
      <div className='flex flex-row justify-between px-6'>
        <div className='flex flex-row md:items-center space-x-4'>
          {/* <Image
              src='/logo/Logo_FAC_Full.png'
              alt='Friday Act System'
              className='object-contain w-[100px] md:w-[250px]'
              width={1500}
              height={1500}
            /> */}
          <div className='w-16 h-16 bg-slate-200 rounded-lg'></div>
          <span className='flex flex-col'>
            <h1 className='text-xl md:text-2xl font-medium text-balance'>Nattapon Radwattanakul</h1>
            <p className='text-lg font-light'>6633203321</p>
          </span>
        </div>
        {/* <p>CEDT</p> */}
      </div>

      <div className='grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-6 px-6'>
        {/* Personal Information */}
        <div className='grid grid-cols-12 grid-rows-4 grid-flow-row gap-2 h-full text-mgray-1'>
          <p className='col-span-5 lg:col-span-3 font-medium'>Faculty</p>
          <p className='col-span-7 lg:col-span-9'>Engineering</p>
          <p className='col-span-5 lg:col-span-3 font-medium'>Department</p>
          <p className='col-span-7 lg:col-span-9'>Computer</p>
          <p className='col-span-5 lg:col-span-3 font-medium'>Major</p>
          <p className='col-span-7 lg:col-span-9'>CEDT</p>
          <p className='col-span-5 lg:col-span-3 font-medium'>Degrees</p>
          <p className='col-span-7 lg:col-span-9'>Bachelor’s degree</p>
        </div>

        {/* Activity Count */}
        <div className='flex flex-col space-y-4'>
          <div className='py-4 px-6 border-1 border-mgray-4 rounded-md flex flex-col space-y-1 '>
            <p className='text-mgray-2 text-nowrap text-sm'>Activities Apply</p>
            <p className='text-mgray-1 text-2xl font-medium'>16</p>
          </div>
          <div className='border-1 border-mgray-4 divide-x divide-mgray-4 rounded-md flex flex-row gap-1'>
            <div className='py-4 px-6 w-full'>
              <p className='text-mgray-2 text-nowrap text-sm'>
                Activities Check
              </p>
              <p className='text-emerald-500 text-2xl font-medium'>12</p>
            </div>
            <div className='py-4 px-6 w-full'>
              <p className='text-mgray-2 text-nowrap text-sm'>
                Activities Absent
              </p>
              <p className='text-rose-600 text-2xl font-medium'>4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Log */}
      <ActivityLog />
    </main>
  )
}
