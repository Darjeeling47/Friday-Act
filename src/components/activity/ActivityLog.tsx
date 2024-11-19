'use client'

// Import react
import { useState } from 'react'

export default function ActivityLog({
  semesterData = exampleResponse,
}: {
  semesterData?: SemesterGroupedResponse
}) {
  const { semesters } = semesterData

  const [isOpen, setIsOpen] = useState(true)

  // return
  return (
    <div className='flex w-full flex-col gap-2 rounded-md'>
      {semesters.map((semesterGroup) => {
        const { semester, applications } = semesterGroup

        const activities = applications.map((app) => ({
          id: app.activity.id,
          name: app.activity.name,
          company: app.activity.company.name,
          date: new Date(app.createdAt).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }),
          status: app.isCanceled
            ? 'Absent'
            : app.isApproved
              ? 'Present'
              : 'Pending',
        }))

        return (
          <div
            key={semester.year + semester.semester}
            className='mb-6 rounded-md bg-white p-3'>
            <div
              className='flex cursor-pointer flex-col items-start justify-between p-4 sm:flex-row sm:items-center'
              onClick={() => setIsOpen((prev) => !prev)}>
              <span className='mb-2 flex flex-row space-x-2 sm:mb-0 md:flex-col'>
                <h2 className='text-lg sm:text-xl font-semibold text-mgray-1'>
                  {semester.year}
                </h2>
                <p className='text-sm sm:text-base text-mgray-2'>
                  Semester {semester.semester}
                </p>
              </span>
              <span className='mb-2 flex flex-row space-x-2 sm:mb-0 md:flex-col'>
                <h2 className='text-lg sm:text-xl text-right font-semibold text-mgray-1'>
                  {activities.length}
                </h2>
                <p className='text-sm sm:text-base text-right text-mgray-2'>
                  Activities
                </p>
              </span>
            </div>

            <div
              className={`transition-all duration-300 ${
                isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
              }`}>
              <hr className='mb-2 border-mgray-3' />
              <div className='flex flex-col gap-4'>
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className={`flex flex-col items-start justify-between gap-2 rounded-md p-4 sm:flex-row sm:items-center sm:gap-4 ${
                      activity.status === 'Absent'
                        ? 'bg-red-600/10'
                        : activity.status === 'Cancel'
                          ? 'bg-mgray-1/10'
                          : ''
                    }`}>
                    <div className='flex flex-row items-center'>
                      {/* <div className='mr-4 h-10 w-10 rounded-full bg-slate-400'></div> */}{' '}
                      {/* Company Logo (no picture) */}
                      <span className='flex flex-col'>
                        <h3 className='text-base sm:text-lg font-semibold'>
                          {activity.name}
                        </h3>
                        <p className='text-sm sm:text-base text-mgray-2'>
                          {activity.company}
                        </p>
                      </span>
                    </div>
                    <span className='flex flex-col items-start text-right sm:items-end'>
                      <h3 className='text-sm sm:text-base text-mgray-2'>
                        {activity.date}
                      </h3>
                      <p
                        className={`text-sm sm:text-base ${
                          activity.status === 'Absent' ? 'text-rose-600' : ''
                        }`}>
                        {activity.status === 'Absent' ? 'Absent' : ''}
                      </p>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Mock data
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
          isCanceled: false,
          cancellationReason: null,
        },
      ],
    },
  ],
}

// Type definitions
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
