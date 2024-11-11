import React from 'react';

interface AttendanceDetailTableProps {
  company: string;
  date: string;
  timestamp: string;
  status: string;
  applydate: string;
}

export default function AttendanceDetailTable({
  company,
  date,
  timestamp,
  status,
  applydate
}: AttendanceDetailTableProps) {
  return (
    <div className='w-full h-auto'>
        <div className='grid grid-cols-4 h-16 items-center text-xl border-b border-mgray-3'>
            <div className='col-span-1 font-medium'>Company</div>
            <div className='col-span-3 font-normal'>{company}</div>
        </div>
        <div className='grid grid-cols-4 h-16 items-center text-xl border-b border-mgray-3'>
            <div className='col-span-1 font-medium'>Date</div>
            <div className='col-span-3 font-normal'>{date}</div>
        </div>
        <div className='grid grid-cols-4 h-16 items-center text-xl border-b border-mgray-3'>
            <div className='col-span-1 font-medium'>Timestamp</div>
            <div className='col-span-3 font-normal'>{timestamp}</div>
        </div>
        <div className='grid grid-cols-4 h-16 items-center text-xl border-b border-mgray-3'>
            <div className='col-span-1 font-medium'>Status</div>
            <div className='col-span-3 font-normal'>{status}</div>
        </div>
        <div className='grid grid-cols-4 h-16 items-center text-xl'>
            <div className='col-span-1 font-medium'>Apply Date</div>
            <div className='col-span-3 font-normal'>{applydate}</div>
        </div>
    </div>
  );
}