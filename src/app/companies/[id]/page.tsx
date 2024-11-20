'use client';
// import
// react
import React, { useEffect } from "react";
import { useState } from "react";
// components
import CompanyActivity from "@/components/activity/CompanyActivity";
import getCompany from "@/libs/companies/getCompany";
import ActivityLog from "@/components/activity/ActivityLog";


const exampleResponse: SemesterGroupedResponse = {
  success: true,
  count: 10,
  pagination: {
    current: 1,
    last: 2,
    next: 2,
    prev: null,
    limit: 5,
  },
  semesters: [
    {
      semester: {
        year: 2023,
        semester: 1,
      },
      applications: [
        {
          id: 1,
          user: {
            id: 1001,
            thaiName: 'สมชาย ใจดี',
            studentId: '6201010001',
          },
          activity: {
            id: 2001,
            name: 'Community Service',
            company: {
              id: 3001,
              name: 'Goodwill Co.',
            },
            semester: {
              id: 4001,
              year: 2023,
              semester: 1,
            },
          },
          createdAt: '2023-02-10T12:34:56.000Z',
          updatedAt: '2023-02-15T12:34:56.000Z',
          isQrGenerated: true,
          qrString: 'QR12345',
          qrGeneratedAt: '2023-02-11T12:34:56.000Z',
          isApproved: true,
          status: 'Pending',
          isCanceled: false,
          cancellationReason: null,
        },
      ],
    },
  ],
}
// Component
export default function Page({ params }: { params: { id: string } }) {
  const [company, setCompany] = useState<any>(null);
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  // return
  useEffect(() => {
    const fetchCompanyData = async () => {
      const data = await getCompany({ id: params.id });
      setCompany(data?.company);
       console.log(company)
    };
   

    fetchCompanyData();
  }, [params.id]);

  if (!company) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="mb-8 flex flex-col-reverse md:flex-row h-full items-stretch p-4">
        {/* Content Section */}
        <div className="flex flex-1 flex-col justify-between mt-8 md:mt-0 sm:text-left w-full grow">
          <div className="text-left md:text-left sm:text-left">
            <h1 className="mb-4 text-4xl font-bold text-mgray-2 sm:text-left">
              {company.companyNameEn}
            </h1>
            <div className="text-sm text-mgray-d3 mt-1 h-40 truncate text-pretty text-wrap mr-20" dangerouslySetInnerHTML={{ __html: company.description }}></div>
          </div>
          <div className="mt-auto">
            <div className="my-4 flex flex-col gap-2 text-mgray-2 text-left">
{/*               <div className="flex flex-row items-center gap-2 sm:justify-start">
                <PhoneIcon />
                <span>0 2215 3555</span>
              </div>
              <div className="flex flex-row items-center gap-2 sm:justify-start">
                <MailIcon />
                <span>pr@chula.ac.th</span>
              </div> */}
            </div>
            <address className="text-m text-mgray-2 md:w-80 mb-2 text-left sm:text-left">
              {company.building} {company.floor} {company.room} {company.houseNo} {company.street} {company.district} {company.subDistrict} {company.province} {company.postalCode}
            </address>
            <div className="flex justify-start sm:justify-start">
              <a href="#" className="text-sm text-blue-600 sm:text-left">
                {company.website}
              </a>
            </div>
          </div>
        </div>

        {
          (company.logoUrl) ? <img
            src={company.logoUrl}
            alt={"Company Logo"}
            className="md:h-64 md:w-56 rounded bg-mgray-3 sm:mt-8 sm:mb-0 sm:mx-auto md:mb-0 mx-auto"
          /> :
          <div className="h-48 w-40 md:h-64 md:w-56 rounded bg-mgray-3 sm:mt-8 sm:mb-0 sm:mx-auto md:mb-0 mx-auto"></div>
        }
      </div>

      {/* Company Activities Section */}
      <div className="mb-8 mt-4 max-w-full">
        <ActivityLog semesterData={exampleResponse} />
      </div>
    </>
  );
};

// Icon Components
const PhoneIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.17.47 2.46.73 3.78.73a1 1 0 011 1v3.5a1 1 0 01-1 1C10.13 22.5 1.5 13.87 1.5 3.5a1 1 0 011-1H6a1 1 0 011 1c0 1.32.26 2.61.73 3.78a1 1 0 01-.21 1.11l-2.2 2.2z"
      fill="currentColor"
    />
  </svg>
);

const MailIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm-16 2v10h16V8l-8 5-8-5z"
      fill="currentColor"
    />
  </svg>
);

// export default App;
type User = {
  id: number
  thaiName: string
  studentId: string
}

type Company = {
  id: number
  name: string
}

type Semester = {
  id: number
  year: number
  semester: number
}

type Activity = {
  id: number
  name: string
  company: Company
  semester: Semester
}

type Application = {
  id: number
  user: User
  activity: Activity
  createdAt: string
  updatedAt: string
  isQrGenerated: boolean
  qrString: string | null
  qrGeneratedAt: string | null
  isApproved: boolean
  isCanceled: boolean
  status: string
  cancellationReason: string | null
}

type SemesterGroup = {
  semester: {
    year: number
    semester: number
  }
  applications: Application[]
}

type Pagination = {
  current: number
  last: number
  next: number | null
  prev: number | null
  limit: number
}

type SemesterGroupedResponse = {
  success: true
  count: number
  pagination: Pagination
  semesters: SemesterGroup[]
}