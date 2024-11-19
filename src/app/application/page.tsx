"use client";

import TableHeader from "@/components/table/TableHeader";
import SearchBar from "@/components/basic/SearchBar";
import TableComponent from "@/components/basic/TableComponent";
import { useEffect, useState } from "react";
import { formatDate_Utc_to_EN } from "@/utils/utils";
import getApplications from "@/libs/application/getApplications";
import { useRouter } from 'next/navigation';

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
  status: string;
}

type FormattedApplication = Application & {
  id: number;
  username: string;
  sid: string;
  activity: string;
  attenddate: string;
  applydate: string;
  status: string;
};

export default function Application() {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState<FormattedApplication[]>([]);
  const [filteredData, setFilteredData] = useState<FormattedApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getApplications();
        const applications = data.applications;
        const formattedData = applications.map((application: Application) => ({
          ...application,
          id: application.id,
          username: application.user.thaiName,
          sid: application.user.id,
          activity: application.activity.name,
          attenddate: application.isApproved ? formatDate_Utc_to_EN(application.updatedAt) : application.isCanceled ? 'Canceled' : 'Absent',
          applydate: formatDate_Utc_to_EN(application.createdAt),
          status: application.status,
        }));
        setData(formattedData);
        setFilteredData(formattedData);
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

  useEffect(() => {
    const lowercasedSearchValue = searchValue.toLowerCase();
    const filtered = data.filter((item) =>
      item.username.toLowerCase().includes(lowercasedSearchValue) ||
      item.sid.toLowerCase().includes(lowercasedSearchValue) ||
      item.activity.toLowerCase().includes(lowercasedSearchValue) ||
      item.status.toLowerCase().includes(lowercasedSearchValue)
    );
    setFilteredData(filtered);
  }, [searchValue, data]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  if (loading) return <div className='text-xl font-semibold'>Loading...</div>;
  if (error) return <div className='text-xl font-semibold'>Error: {error}</div>;

  const headers = [
    { key: "username", title: "User's Name" },
    { key: "sid", title: "Student ID" },
    { key: "activity", title: "Activity" },
    { key: "attenddate", title: "Attend Date" },
    { key: "applydate", title: "Apply Date" },
    { key: "status", title: "Status" },
    { key: "edit", title: "" },
  ];

  const router = useRouter();
  const clickEdit = (id: number) => {
    router.push(`/application/${id}`);
  };

  return (
    <main className='py-16 max-md:py-10 gap-[30px] flex flex-col max-md:items-center'>
      <TableHeader headerTitle='Application' buttonTitle='Scan Attendance Qr' style='flex' headerStyle='text-4xl font-semibold' buttonStyle='' />
      <div className="flex justify-end max-md:justify-center">
        <SearchBar
          onChange={handleSearchChange}
        />
      </div>
      <TableComponent
        headers={headers}
        data={filteredData}
        textStyle="max-md:text-xs"
        headerStyle="max-md:text-xs"
        spaceText="100px"
        onClickEdit={clickEdit}
      />
    </main>
  );
}
