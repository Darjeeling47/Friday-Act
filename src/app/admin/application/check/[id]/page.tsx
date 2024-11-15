import Button from '@/components/basic/Button'
import AttendanceDetailTable from '@/components/activity/AttendanceDetailTable'

export default function CheckID() {
  return (
    <main className='flex flex-col gap-[30px] px-72 py-16 max-2xl:px-32 max-lg:px-20 max-lg:py-10 max-md:px-4 max-md:py-4'>
      <div className='text-center text-5xl font-semibold max-md:text-3xl'>
        <span className='text-vidva'>Attendance</span>{' '}
        <span className='text-mgray-1'>Scanned</span>
      </div>
      <div className='flex h-auto w-auto items-center justify-center justify-between'>
        <div className='flex w-[560px] items-center gap-[50px] max-lg:gap-6'>
          <div className='h-[108px] w-[108px] rounded-2xl bg-mgray-3 max-md:h-20 max-md:w-20'></div>
          <div className='text-4xl font-semibold max-md:text-xl'>
            Activity name
          </div>
        </div>
        <Button variant='outline'>View</Button>
      </div>
      <div className='flex h-auto w-auto items-center justify-center justify-between'>
        <div className='flex w-[560px] items-center gap-[50px] max-lg:gap-6'>
          <div className='h-[108px] w-[108px] rounded-2xl bg-mgray-3 max-md:h-20 max-md:w-20'></div>
          <div className='flex h-full w-auto flex-col gap-2.5 max-md:gap-0.5'>
            <div className='text-4xl font-semibold max-md:text-xl'>
              Name Surname
            </div>
            <div className='text-2xl font-light max-md:text-lg'>6630000021</div>
          </div>
        </div>
        <Button variant='outline'>View</Button>
      </div>
      <AttendanceDetailTable
        company='cedt Company'
        date='20/12/2024'
        timestamp='15.56'
        status='eieistatus'
        applydate='20/11/2024'
      />
      <div className='flex w-full gap-5'>
        <Button className='w-full flex-1'>Approve</Button>
        <Button className='w-full flex-1' variant='outline'>
          Reject
        </Button>
      </div>
    </main>
  )
}
