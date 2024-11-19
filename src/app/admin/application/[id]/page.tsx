"use client";

import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { formatDate_Utc_to_EN } from "@/utils/utils";
import Button from "@/components/basic/Button";
import AttendanceDetailTable from "@/components/activity/AttendanceDetailTable";
import getApplication from "@/libs/applications/getApplication";
import { useRouter } from 'next/navigation';
import { ApplicationItem } from "@/interface/applicationsInterface";

export default function ApplicationID() {
  const [applications, setApplications] = useState<ApplicationItem | null>(null);
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

  if (!applications) return <div className='text-xl font-semibold'>No data available</div>;
  return (
    <main className='py-16 px-[280px] max-2xl:px-32 max-lg:py-10 max-lg:px-20 max-md:px-4 max-md:py-4 gap-[50px] flex flex-col'>
      <div className='flex  items-center justify-center w-auto h-auto'>
        <div className='flex w-[560px] gap-[30px] max-lg:gap-4 items-center'>
          <div className='w-[108px] h-[108px] max-md:w-20 max-md:h-20 bg-mgray-3 rounded-2xl'></div>
          <div className='flex flex-col h-full w-auto gap-2.5'>
            <div className='text-3xl max-md:text-xl font-semibold'>{applications.user.thaiName}</div>
            <div className='text-xl max-md:text-lg font-light'>{applications.user.studentId}</div>
          </div>
        </div>
        <Button variant="outline" onClick={handleViewClickProfile}>View</Button>
      </div>
      <div className='flex items-center justify-center w-auto h-auto'>
        <div className='flex w-[560px] gap-[30px] max-lg:gap-4 items-center'>
          <img
            src={applications.activity.company.logoUrl}
            alt="Company Logo"
            className='w-[108px] h-[108px] max-md:w-20 max-md:h-20 bg-mgray-3 rounded-2xl'
          />
          <div className='text-3xl max-md:text-xl font-semibold'>{applications.activity.name}</div>
        </div>
        <Button variant="outline" onClick={() => handleViewClickCompany(applications.activity.company.id)}>View</Button>
      </div>
      <AttendanceDetailTable
        company={applications.activity.company.name}
        date={formatDate_Utc_to_EN(applications.activity.date)}
        timestamp={applications.isApproved || applications.isCanceled ? formatDateTime(applications.updatedAt) : 'Absent'}
        status={applications.status}
        applydate={formatDate_Utc_to_EN(applications.createdAt)}
        cancellationReason={applications.cancellationReason || ''}
      />
    </main>
  );
}