// import react
import Image from 'next/image'

// import components
import ActivityLog from '@/components/ActivityLog'
import CompanyActivity from '@/components/activity/CompanyActivity'

const sampleActivities = [
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
]

export default function Profile() {
  // return
  return (
    <main className='flex flex-col gap-6'>
      {/* Name */}
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row space-x-4 md:items-center'>
          {/* <Image
              src='/logo/Logo_FAC_Full.png'
              alt='Friday Act System'
              className='object-contain w-[100px] md:w-[250px]'
              width={1500}
              height={1500}
            /> */}
          <div className='h-16 w-16 rounded-lg bg-slate-200'></div>
          <span className='flex flex-col'>
            <h1 className='text-balance text-xl font-medium md:text-2xl'>
              Nattapon Anhdaihdgda
            </h1>
            <p className='mt-1 text-lg font-light'>6633403321</p>
          </span>
        </div>
        {/* <p>CEDT</p> */}
      </div>

      <div className='grid grid-cols-1 grid-rows-2 gap-6 rounded bg-white p-6 md:grid-cols-2 md:grid-rows-1'>
        {/* Personal Information */}
        <div className='grid h-full grid-flow-row grid-cols-12 grid-rows-4 gap-2 text-mgray-1'>
          <div className='col-span-12 flex items-center justify-between border-b border-mgray-4 pr-4'>
            <p className='col-span-5 font-medium lg:col-span-3'>Faculty</p>
            <p className='col-span-7 lg:col-span-9'>Engineering</p>
          </div>
          <div className='col-span-12 flex items-center justify-between border-b border-mgray-4 pr-4'>
            <p className='col-span-5 font-medium lg:col-span-3'>Department</p>
            <p className='col-span-7 lg:col-span-9'>Computer</p>
          </div>
          <div className='col-span-12 flex items-center justify-between border-b border-mgray-4 pr-4'>
            <p className='col-span-5 font-medium lg:col-span-3'>Major</p>
            <p className='col-span-7 lg:col-span-9'>CEDT</p>
          </div>
          <div className='col-span-12 flex items-center justify-between border-b border-mgray-4 pr-4'>
            <p className='col-span-5 font-medium lg:col-span-3'>Degrees</p>
            <p className='col-span-7 lg:col-span-9'>Bachelor’s degree</p>
          </div>
        </div>

        {/* Activity Count */}
        <div className='flex flex-col space-y-4'>
          <div className='flex flex-col space-y-1 rounded-md border-1 border-mgray-4 px-6 py-4'>
            <p className='text-nowrap text-sm text-mgray-2'>Activities Apply</p>
            <p className='text-2xl font-medium text-mgray-1'>16</p>
          </div>
          <div className='flex flex-row gap-1 divide-x divide-mgray-4 rounded-md border-1 border-mgray-4'>
            <div className='w-full px-6 py-4'>
              <p className='text-nowrap text-sm text-mgray-2'>
                Activities Check
              </p>
              <p className='text-2xl font-medium text-emerald-500'>12</p>
            </div>
            <div className='w-full px-6 py-4'>
              <p className='text-nowrap text-sm text-mgray-2'>
                Activities Absent
              </p>
              <p className='text-2xl font-medium text-rose-600'>4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Log */}
      {/* <ActivityLog /> */}
      <CompanyActivity
        activities={sampleActivities}
        year='2024'
        semester='Semester 1'
      />
    </main>
  )
}
