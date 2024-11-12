import Button from "@/components/basic/Button";
import AttendanceDetailTable from "@/components/AttendanceDetailTable";

export default function CheckID() {
  return (
    <main className='py-16 px-72 max-2xl:px-32 max-lg:py-10 max-lg:px-20 max-md:px-4 max-md:py-4 gap-[30px] flex flex-col'>
      <div className='text-5xl max-md:text-3xl font-semibold text-center'>
        <span className='text-vidva'>Attendance</span> <span className='text-mgray-1'>Scanned</span>
      </div>
      <div className='flex justify-between items-center justify-center w-auto h-auto'>
        <div className='flex w-[560px] gap-[50px] max-lg:gap-6 items-center'>
          <div className='w-[108px] h-[108px] max-md:w-20 max-md:h-20 bg-mgray-3 rounded-2xl'></div>
          <div className='text-4xl max-md:text-xl font-semibold'>Activity name</div>
        </div>
        <Button variant="outline">View</Button>
      </div>
      <div className='flex justify-between items-center justify-center w-auto h-auto'>
        <div className='flex w-[560px] gap-[50px] max-lg:gap-6 items-center'>
          <div className='w-[108px] h-[108px] max-md:w-20 max-md:h-20 bg-mgray-3 rounded-2xl'></div>
          <div className='flex flex-col h-full w-auto gap-2.5 max-md:gap-0.5'>
            <div className='text-4xl max-md:text-xl font-semibold'>Name Surname</div>
            <div className='text-2xl max-md:text-lg font-light'>6630000021</div>
          </div>
        </div>
        <Button variant="outline">View</Button>
      </div>
      <AttendanceDetailTable company='cedt Company' date='20/12/2024' timestamp='15.56' status='eieistatus' applydate='20/11/2024' />
      <div className='flex w-full gap-5'>
        <Button className='flex-1 w-full'>Approve</Button>
        <Button className='flex-1 w-full' variant="outline">Reject</Button>
      </div>
    </main>
  )
}