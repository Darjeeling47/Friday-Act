import Button from '@/components/basic/Button'
import AttendanceDetailTable from '@/components/activity/AttendanceDetailTable'

export default function Application() {
  // return
  return (
    <main className='flex flex-col gap-[50px] px-[280px] py-16 max-2xl:px-32 max-lg:px-20 max-lg:py-10 max-md:px-4 max-md:py-4'>
      <div className='flex h-auto w-auto items-center justify-center justify-between'>
        <div className='flex w-[560px] items-center gap-[50px] max-lg:gap-6'>
          <div className='h-[108px] w-[108px] rounded-2xl bg-mgray-3 max-md:h-20 max-md:w-20'></div>
          <div className='flex h-full w-auto flex-col gap-2.5'>
            <div className='text-4xl font-semibold max-md:text-xl'>
              Name Surname
            </div>
            <div className='text-2xl font-light max-md:text-lg'>6630000021</div>
          </div>
        </div>
        <Button variant='outline'>View</Button>
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
      <AttendanceDetailTable
        company='cedt Company'
        date='20/12/2024'
        timestamp='15.56'
        status='eieistatus'
        applydate='20/11/2024'
      />
      <div className='flex w-full justify-end gap-5'>
        <Button className='px-20'>Edit</Button>
      </div>
    </main>
  )
}
