"use client";

import TableHeader from "@/components/basic/TableHeader";
import SearchBar from "@/components/basic/SearchBar";
import TableComponent from "@/components/basic/TableComponent";
import { useEffect, useState } from "react";
import { formatDate_Utc_to_EN } from "@/utils/utils";
import getApplications from "@/libs/applications/getApplications";

interface Application {
  id: number;
  user: {
    id: string;
    thaiName: string;
    studentId: string;
  };
  activity: {
    id: number;
    name: string;
    company: {
      id: number;
      name: string;
    };
    semester: {
      id: number;
      year: number;
      semester: number;
    };
  };
  createdAt: string;
  updatedAt: string;
  isQrGenerated: boolean;
  qrString: string | null;
  qrGeneratedAt: string;
  isApproved: boolean;
  isCanceled: boolean;
  cancellationReason: string | null;
}

export default function Application() {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getApplications()
        const applications = data.applications
        const formattedData = applications.map((application: Application) => ({
          ...application,
          username: application.user.thaiName,
          sid: application.user.id,
          activity: application.activity.name,
          attenddate: application.isApproved ? formatDate_Utc_to_EN(application.updatedAt) : 'Pending',
          applydate: formatDate_Utc_to_EN(application.createdAt),
          status: application.isApproved ? 'Approved' : application.isCanceled ? 'Canceled' : 'Pending',
        }))
        setData(formattedData)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div className='text-xl font-semibold'>Loading...</div>
  if (error) return <div className='text-xl font-semibold'>Error: {error}</div>

  const headers = [
    {"key" : "username", "title" : "User's Name"},
    {"key" : "sid", "title" : "Student ID"},
    {"key" : "activity", "title" : "Activity"},
    {"key" : "attenddate", "title" : "Attend Date"},
    {"key" : "applydate", "title" : "Apply Date"},
    {"key" : "status", "title" : "Status"},
    {"key" : "edit", "title" : ""},
  ];

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    console.log("Search Value:", value);
  };

  return (
    <main className='py-16 max-md:py-10 gap-[30px] flex flex-col max-md:items-center'>
      <TableHeader headerTitle='Application' buttonTitle='Scan Attendance Qr' style='flex' headerStyle='text-4xl font-semibold' buttonStyle='' />
      <div className="flex justify-end max-md:justify-center">
        <SearchBar
          onChange={handleSearchChange}
          filter={[
            { category: "Category 1", options: ["Option 1", "Option 2"] },
            { category: "Category 2", options: ["Option 3", "Option 4"] },
          ]}
        />
      </div>
      <TableComponent headers={headers} data={data} textStyle="max-md:text-xs" headerStyle="max-md:text-xs" />
    </main>
  )
}