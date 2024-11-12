import Button from "@/components/basic/Button";
import AttendanceDetailTable from "@/components/AttendanceDetailTable";

export default function CheckID() {
  return (
    <main className='py-16 px-72 gap-[30px] flex flex-col'>
      <div className='text-5xl font-semibold text-center'>
        <span className='text-vidva'>Attendance</span> <span className='text-mgray-1'>Scanned</span>
      </div>
      <div className='flex justify-between items-center justify-center w-auto h-auto'>
        <div className='flex w-[560px] gap-[50px] items-center'>
          <div className='w-[108px] h-[108px] bg-mgray-3 rounded-2xl'></div>
          <div className='text-4xl font-semibold'>Activity name</div>
        </div>
        <Button variant="outline">View</Button>
      </div>
      <div className='flex justify-between items-center justify-center w-auto h-auto'>
        <div className='flex w-[560px] gap-[50px] items-center'>
          <div className='w-[108px] h-[108px] bg-mgray-3 rounded-2xl'></div>
          <div className='flex flex-col h-full w-auto gap-2.5'>
            <div className='text-4xl font-semibold'>Name Surname</div>
            <div className='text-2xl font-light'>6630000021</div>
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