"use client";


import Button from '@/components/basic/Button'
import AttendanceDetailTable from '@/components/activity/AttendanceDetailTable'
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { formatDate_Utc_to_EN } from "@/utils/utils";
import getApplication from "@/libs/applications/getApplication";
import { useRouter } from 'next/navigation';

interface Application {
  id: number;
  user: {
    thaiName: string;
    studentId: string;
  };
  activity: {
    id: number;
    name: string;
    company: {
      id: number;
      name: string;
      logoUrl: string;
    };
    semester: {
      year: number;
      semester: number;
    };
    date: string;
  };
  createdAt: string;
  updatedAt: string;
  isQrGenerated: boolean;
  qrString: string | null;
  qrGeneratedAt: string;
  isApproved: boolean;
  isCanceled: boolean;
  cancellationReason: string | null;
  status: string;
}

export default function CheckID() {
  const [applications, setApplications] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {

        if (!id) {
          throw new Error('ID is required');
        }

        const data = await getApplication(Array.isArray(id) ? id[0] : id);
        const applications = data.application;
        setApplications(applications);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className='text-xl font-semibold'>Loading...</div>;
  if (error) return <div className='text-xl font-semibold'>Error: {error}</div>;

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate} ${formattedTime}`;
  };

  const router = useRouter();
  const handleViewClickCompany = (id: number) => {
    router.push(`/companies/${id}`);
  };
  const handleViewClickProfile = (id: number) => {
    router.push(`/profile`);
  };
  const handleRejectClick = () => {
    router.back();
  };

  if (!applications) return <div className='text-xl font-semibold'>No data available</div>;
  return (
    <main className='flex flex-col gap-[30px] px-72 py-16 max-2xl:px-32 max-lg:px-20 max-lg:py-10 max-md:px-4 max-md:py-4'>
      <div className='text-center text-5xl font-semibold max-md:text-3xl'>
        <span className='text-vidva'>Attendance</span>{' '}
        <span className='text-mgray-1'>Scanned</span>
      </div>
      <div className='flex h-auto w-auto items-center justify-between'>
        <div className='flex w-[560px] items-center gap-[30px] max-lg:gap-6'>
          <img
              src={applications.activity.company.logoUrl}
              alt="Company Logo"
              className='w-[108px] h-[108px] max-md:w-20 max-md:h-20 bg-mgray-3 rounded-2xl'
            />
          <div className='text-3xl font-semibold max-md:text-xl'>
            {applications.activity.name}
          </div>
        </div>
        <Button variant='outline' onClick={() => handleViewClickCompany(applications.activity.company.id)}>View</Button>
      </div>
      <div className='flex h-auto w-auto items-center justify-between'>
        <div className='flex w-[560px] items-center gap-[30px] max-lg:gap-6'>
          <div className='h-[108px] w-[108px] rounded-2xl bg-mgray-3 max-md:h-20 max-md:w-20'></div>
          <div className='flex h-full w-auto flex-col gap-2.5 max-md:gap-0.5'>
            <div className='text-3xl font-semibold max-md:text-xl'>
              {applications.user.thaiName}
            </div>
            <div className='text-xl font-light max-md:text-lg'>{applications.user.studentId}</div>
          </div>
        </div>
        <Button variant='outline' onClick={handleViewClickProfile}>View</Button>
      </div>
      <AttendanceDetailTable
        company={applications.activity.company.name}
        date={formatDate_Utc_to_EN(applications.activity.date)}
        timestamp={applications.isApproved || applications.isCanceled ? formatDateTime(applications.updatedAt) : 'Absent'}
        status={applications.status}
        applydate={formatDate_Utc_to_EN(applications.createdAt)}
        cancellationReason={applications.cancellationReason || ''}   
      />
      <div className='flex w-full gap-5'>
          {applications.isApproved ? (
            <Button variant='disabled' className='w-full flex-1 cursor-not-allowed'>
              Approved
            </Button>
          ) : (
            <Button
              className='w-full flex-1'
              onClick={() => console.log('approved')}
            >
              Approve
            </Button>
          )}
          <Button className='w-full flex-1' variant='outline' onClick={handleRejectClick}>
            Reject
          </Button>
        </div>
    </main>
  )
}
