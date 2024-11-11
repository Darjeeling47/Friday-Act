import Button from "@/components/basic/Button";
import AttendanceDetailTable from "@/components/AttendanceDetailTable";

export default function Application() {
  // return
  return (
    <main className='py-[100px] px-[280px] gap-[50px] flex flex-col'>
      <div className='flex justify-between items-center justify-center w-auto h-auto'>
        <div className='flex w-[560px] gap-[50px] items-center'>
          <div className='w-[108px] h-[108px] bg-mgray-3 rounded-2xl'></div>
          <div className='flex flex-col h-full w-auto gap-2.5'>
            <div className='text-4xl font-semibold'>Name Surname</div>
            <div className='text-2xl font-light'>6630000021</div>
          </div>
        </div>
        <Button varient="outline">View</Button>
      </div>
      <div className='flex justify-between items-center justify-center w-auto h-auto'>
        <div className='flex w-[560px] gap-[50px] items-center'>
          <div className='w-[108px] h-[108px] bg-mgray-3 rounded-2xl'></div>
          <div className='text-4xl font-semibold'>Activity name</div>
        </div>
        <Button varient="outline">View</Button>
      </div>
      <AttendanceDetailTable company='cedt Company' date='20/12/2024' timestamp='15.56' status='eieistatus' applydate='20/11/2024' />
      <div className='flex w-full justify-end gap-5'>
        <Button className='px-20'>Edit</Button>
      </div>
    </main>
  )
}