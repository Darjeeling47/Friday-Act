'use client'

// import react
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Cookies from 'js-cookie'

// import components
import CompanyActivity from '@/components/activity/CompanyActivity'
import ActivityLog from '@/components/activity/ActivityLog'

// api
import getApplications from '@/libs/applications/getApplications'

export default function Profile() {
  // useEffect to check if user is logged in
  useEffect(() => {
    const isLogIn = Cookies.get('is_logged_in')
    if (!isLogIn) {
      window.location.href = '/login'
    }
  }, [])

  // Primart variables
  const [profileUrl, setProfileUrl] = useState('')
  const [firstNameTH, setFirstNameTH] = useState('')
  const [lastNameTH, setLastNameTH] = useState('')
  const [firstNameEN, setFirstNameEN] = useState('')
  const [lastNameEN, setLastNameEN] = useState('')
  const [studentID, setStudentID] = useState('')
  const [applications, setApplications] =
    useState<SemesterGroupedResponse | null>(null)

  // Secondary variables
  const [faculty, setFaculty] = useState('')
  const [department, setDepartment] = useState('')
  const [major, setMajor] = useState('')
  const [admissionYear, setAdmissionYear] = useState('')
  const [activitiesCheck, setActivitiesCheck] = useState(0)
  const [activitiesAbsent, setActivitiesAbsent] = useState(0)

  // useEffect to get user profile from cookies
  useEffect(() => {
    const user_profile = Cookies.get('user_profile')
    if (user_profile) {
      const profile = JSON.parse(user_profile)

      setFirstNameTH(profile.firstNameTh)
      setLastNameTH(profile.lastNameTh)
      setFirstNameEN(profile.firstNameEn)
      setLastNameEN(profile.lastNameEn)

      setProfileUrl(profile.profileImageUrl)
      setStudentID(profile.studentId)

      setFaculty(profile.faculty.facultyName)
      setDepartment(profile.department.departmentName)
      setMajor(profile.program.programName)
      setAdmissionYear(profile.admissionYear)
    }
  }, [])

  // useEffect to get user applications
  useEffect(() => {
    const fetchApplications = async () => {
      const group = 'semester'
      const search = studentID

      try {
        const applications: SemesterGroupedResponse = await getApplications(
          group,
          search
        )
        setApplications(applications)
        // console.log('applications:', applications)

        // Process activity counts
        let checkCount = 0
        let absentCount = 0

        applications.semesters.forEach((semester) => {
          semester.applications.forEach((activity) => {
            if (activity.isApproved) {
              checkCount++
            } else {
              absentCount++
            }
          })
        })

        setActivitiesCheck(checkCount)
        setActivitiesAbsent(absentCount)
      } catch (error) {
        console.error('Error fetching applications:', error)
      }
    }

    if (studentID) {
      fetchApplications()
    }
  }, [studentID])

  // return
  return (
    <main className='flex flex-col gap-6'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row space-x-4 md:items-center'>
          {profileUrl ? (
            <Image
              src={profileUrl}
              alt='Profile Picture'
              className='h-[100px] w-[100px] rounded-lg object-contain'
              width={1500}
              height={1500}
            />
          ) : (
            <div className='h-[100px] w-[100px] rounded-lg bg-mgray-4 object-contain'></div>
          )}
          <span className='flex flex-col'>
            <h1 className='text-balance text-xl font-medium md:text-2xl'>
              {`${firstNameTH} ${lastNameTH}`}
            </h1>
            <p className='text-md text-balance font-normal md:text-lg'>
              {`${firstNameEN} ${lastNameEN}`}
            </p>
            <p className='text-md mt-1 font-light'>{studentID}</p>
          </span>
        </div>
      </div>

      <div className='grid grid-cols-1 grid-rows-2 gap-6 rounded bg-white p-6 md:grid-cols-2 md:grid-rows-1'>
        <div className='grid h-full grid-flow-row grid-cols-12 grid-rows-4 gap-2 text-mgray-1'>
          <div className='col-span-12 flex flex-col gap-1 border-b border-mgray-4 pr-4 md:flex-row md:items-center md:justify-between'>
            <p className='col-span-5 font-medium lg:col-span-3'>Faculty</p>
            <p className='col-span-7 lg:col-span-9'>{faculty}</p>
          </div>
          <div className='col-span-12 flex flex-col gap-1 border-b border-mgray-4 pr-4 md:flex-row md:items-center md:justify-between'>
            <p className='col-span-5 font-medium lg:col-span-3'>Department</p>
            <p className='col-span-7 lg:col-span-9'>{department}</p>
          </div>
          <div className='col-span-12 flex flex-col gap-1 text-pretty border-b border-mgray-4 pr-4 md:flex-row md:items-center md:justify-between'>
            <p className='col-span-5 font-medium lg:col-span-3'>Major</p>
            <p className='col-span-7 md:text-right lg:col-span-9'>{major}</p>
          </div>
          <div className='col-span-12 flex flex-col gap-1 border-b border-mgray-4 pr-4 md:flex-row md:items-center md:justify-between'>
            <p className='col-span-5 font-medium lg:col-span-3'>
              Admission Year
            </p>
            <p className='col-span-7 lg:col-span-9'>{admissionYear}</p>
          </div>
        </div>

        <div className='flex flex-col space-y-4'>
          <div className='flex flex-col space-y-1 rounded-md border-1 border-mgray-4 px-6 py-4'>
            <p className='text-nowrap text-sm text-mgray-2'>Activities Apply</p>
            <p className='text-2xl font-medium text-mgray-1'>
              {applications ? applications.count : 0}
            </p>
          </div>
          <div className='flex flex-col space-y-1 rounded-md border-1 border-mgray-4 px-6 py-4'>
            <p className='text-nowrap text-sm text-mgray-2'>Activities Check</p>
            <p className='text-2xl font-medium text-emerald-500'>
              {activitiesCheck}
            </p>
          </div>
          {/* <div className='flex flex-col gap-1 divide-y divide-mgray-4 rounded-md border-1 border-mgray-4 md:flex-row md:divide-x md:divide-y-0'>
            <div className='w-full px-6 py-4'>
              <p className='text-sm text-mgray-2'>Activities Check</p>
              <p className='text-2xl font-medium text-emerald-500'>
                {activitiesCheck}
              </p>
            </div>
            <div className='w-full px-6 py-4'>
              <p className='text-sm text-mgray-2'>Activities Absent</p>
              <p className='text-2xl font-medium text-rose-600'>
                {activitiesAbsent}
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Activities Log */}
      {applications ? <ActivityLog semesterData={applications} /> : null}
    </main>
  )
}

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
  status: string
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
