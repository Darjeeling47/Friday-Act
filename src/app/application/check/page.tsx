"use client";

import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { formatDate_Utc_to_EN } from "@/utils/utils";
import Button from "@/components/basic/Button";

export default function ApplicationCheck() {
    return (
        <main className='py-16 px-[280px] max-2xl:px-32 max-lg:py-10 max-lg:px-20 max-md:px-4 max-md:py-4 gap-[50px] max-md:gap-7 flex flex-col items-center text-center'>
            <div className='text-5xl font-semibold max-md:text-3xl'>
                <span className='text-mgray-1'>Scan</span>{' '}
                <span className='text-vidva'>Attendance</span>{' '}
                <span className='text-mgray-1'>Qr Code</span>
            </div>
            <div className='w-[740px] h-[740px] max-md:w-60 max-md:h-60 bg-mgray-3 rounded-2xl'></div>
            <Button className='' variant='outline'>
                Back
            </Button>
        </main>
    )
}