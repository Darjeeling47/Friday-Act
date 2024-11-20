"use client";

import Button from "@/components/basic/Button";
import { useRouter } from 'next/navigation';

export default function ApplicationCheck() {
    const router = useRouter();
    const handleBackClick = () => {
        router.back();
    };

    return (
        <main className='py-16 px-[280px] max-2xl:px-32 max-lg:py-10 max-lg:px-20 max-md:px-4 max-md:py-4 gap-[50px] max-md:gap-7 flex flex-col items-center text-center'>
            <div className='text-5xl font-semibold max-md:text-3xl'>
                <span className='text-mgray-1'>Scan</span>{' '}
                <span className='text-vidva'>Attendance</span>{' '}
                <span className='text-mgray-1'>Qr Code</span>
            </div>
            <div className='w-[400px] h-[400px] max-md:w-60 max-md:h-60 bg-mgray-3 rounded-2xl'></div>
            <Button className='' variant='outline' onClick={handleBackClick}>
                Back
            </Button>
        </main>
    )
}