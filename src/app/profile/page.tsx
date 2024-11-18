'use client'

// import react
import Image from 'next/image'
import Cookies from 'js-cookie'
import { useState } from 'react'

// import components
import ActivityLog from '@/components/activity/ActivityLog'
import CompanyActivity from '@/components/activity/CompanyActivity'
import { useEffect } from 'react'

const sampleActivities = [
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
]

export default function Profile() {
  // const router = Router.useRouter()
  // const isLogIn = Cookies.get('user_profile')
  // if (!isLogIn) {
  //   router.push('/login')
  // }

  // Primary variables
  const [firstNameTH, setFirstNameTH] = useState('')
  const [lastNameTH, setLastNameTH] = useState('')
  const [firstNameEN, setFirstNameEN] = useState('')
  const [lastNameEN, setLastNameEN] = useState('')
  const [studentID, setStudentID] = useState('')
  const [faculty, setFaculty] = useState('')
  const [department, setDepartment] = useState('')
  const [major, setMajor] = useState('')
  const [admissionYear, setAdmissionYear] = useState('')
  const [profileUrl, setProfileUrl] = useState('')

  useEffect(() => {
    const user_profile = Cookies.get('user_profile')
    console.log(user_profile)

    if (user_profile) {
      const profile = JSON.parse(user_profile)
      setFirstNameTH(profile.firstNameTh)
      setLastNameTH(profile.lastNameTh)
      setFirstNameEN(profile.firstNameEn)
      setLastNameEN(profile.lastNameEn)
      setStudentID(profile.studentId)
      setFaculty(profile.faculty.facultyName)
      setDepartment(profile.department.departmentName)
      setMajor(profile.program.programName)
      setAdmissionYear(profile.admissionYear)
      setProfileUrl(profile.profileImageUrl)
    }
  }, [])

  // return
  return (
    <main className='flex flex-col gap-6'>
      {/* Name */}
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row space-x-4 md:items-center'>
          <Image
            src={profileUrl}
            alt='Profile Picture'
            className='w-[100px] rounded-lg object-contain md:w-[100px]'
            width={1500}
            height={1500}
          />
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
        {/* Personal Information */}
        <div className='grid h-full grid-flow-row grid-cols-12 grid-rows-4 gap-2 text-mgray-1'>
          <div className='col-span-12 flex items-center justify-between border-b border-mgray-4 pr-4'>
            <p className='col-span-5 font-medium lg:col-span-3'>Faculty</p>
            <p className='col-span-7 lg:col-span-9'>{faculty}</p>
          </div>
          <div className='col-span-12 flex items-center justify-between border-b border-mgray-4 pr-4'>
            <p className='col-span-5 font-medium lg:col-span-3'>Department</p>
            <p className='col-span-7 lg:col-span-9'>{department}</p>
          </div>
          <div className='col-span-12 flex items-center justify-between border-b border-mgray-4 pr-4'>
            <p className='col-span-5 font-medium lg:col-span-3'>Major</p>
            <p className='col-span-7 lg:col-span-9'>{major}</p>
          </div>
          <div className='col-span-12 flex items-center justify-between border-b border-mgray-4 pr-4'>
            <p className='col-span-5 font-medium lg:col-span-3'>
              Admission Year
            </p>
            <p className='col-span-7 lg:col-span-9'>{admissionYear}</p>
          </div>
        </div>

        {/* Activity Count */}
        <div className='flex flex-col space-y-4'>
          <div className='flex flex-col space-y-1 rounded-md border-1 border-mgray-4 px-6 py-4'>
            <p className='text-nowrap text-sm text-mgray-2'>Activities Apply</p>
            <p className='text-2xl font-medium text-mgray-1'>16</p>
          </div>
          <div className='flex flex-row gap-1 divide-x divide-mgray-4 rounded-md border-1 border-mgray-4'>
            <div className='w-full px-6 py-4'>
              <p className='text-nowrap text-sm text-mgray-2'>
                Activities Check
              </p>
              <p className='text-2xl font-medium text-emerald-500'>12</p>
            </div>
            <div className='w-full px-6 py-4'>
              <p className='text-nowrap text-sm text-mgray-2'>
                Activities Absent
              </p>
              <p className='text-2xl font-medium text-rose-600'>4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Log */}
      {/* <ActivityLog /> */}
      <CompanyActivity
        activities={sampleActivities}
        year='2024'
        semester='Semester 1'
      />
    </main>
  )
}
