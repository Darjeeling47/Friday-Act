'use client'

// import
// react
import React, { useEffect, useState } from 'react'
// next
import { useParams } from 'next/navigation'
// components
import Tag from '@/components/basic/Tag'
import Button from '@/components/basic/Button'
import TableHeader from '@/components/table/TableHeader'
import TableComponent from '@/components/table/TableComponent'
import ExpandList from '@/components/table/ExpandList'
import SearchBar from '@/components/basic/SearchBar'
// util
import Cookies from 'js-cookie'
import { log } from 'console'
import { formatDate_Utc_to_EN } from '@/utils/utils'

// Mock Participants Data
// Schema: {
//   thaiName: string,
//   studentId: string,
//   faculty: string,
//   department: string,
//   program: string,
//   admissionYear: string,
// }

//}

const mockData = [
  {
    thaiName: 'นายสมชาย ใจดี',
    studentId: '601234567',
    faculty: 'วิศวกรรมศาสตร์',
    department: 'วิศวกรรมคอมพิวเตอร์',
    program: 'วิศวกรรมซอฟต์แวร์',
    admissionYear: '2563',
    status: 'Pending',
  },
  {
    thaiName: 'นางสมหญิง ใจดี',
    studentId: '601234568',
    faculty: 'วิศวกรรมศาสตร์',
    department: 'วิศวกรรมคอมพิวเตอร์',
    program: 'วิศวกรรมซอฟต์แวร์',
    admissionYear: '2563',
    status: 'Approved',
  },
  {
    thaiName: 'นายสมชาย ใจดี',
    studentId: '601234567',
    faculty: 'วิศวกรรมศาสตร์',
    department: 'วิศวกรรมคอมพิวเตอร์',
    program: 'วิศวกรรมซอฟต์แวร์',
    admissionYear: '2563',
    status: 'Pending',
  },
]

// Type for Activity Detail
type ActivityDetailProps = {
  id: string
  name: string
  company: {
    id: number
    companyNameTh: string
    logoUrl: string
  }
  description: string
  date: string
  start_time: string
  end_time: string
  poster_url: string
  location: string
  tags: {
    name: string
    color: string
  }[]
  speaker: string
  current_participants: number
  max_participants: number
}

// Variables
// Primary
const initialSeats = 20
const maxSeats = 100
const HTTP = 'http://143.198.87.246'

// Component
export default function ActivityDetail() {
  // Variables - Primary
  const token = Cookies.get('token')
  const { id } = useParams<{ id: string }>()
  const [activity, setActivity] = useState<ActivityDetailProps>()
  const [participants, setParticipants] = useState<any[]>([])

  // Function for fetching activity details
  const fetchActivityDetail = async () => {
    try {
      const response = await fetch(`${HTTP}/api/v1/activities/${id}`, {
        headers: {
          // TODO: change authorization method
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json().then((data) => data.activity)
        console.log(data)
        const parsedData: ActivityDetailProps = {
          id: data.id,
          name: data.name,
          description: data.description,
          date: data.date,
          start_time: data.start_time,
          end_time: data.end_time,
          poster_url: data.poster_url,
          location: data.location,
          speaker: data.speaker,
          current_participants: data.currentParticipants,
          max_participants: data.max_participants,
          tags: data.tags,
          company: data.company,
        }
        setActivity(parsedData)
        console.log(parsedData)
      } else {
        console.log('Failed to fetch activity details with error: ')
        console.log(response)
      }
    } catch (e) {
      console.log(e)
    }
  }

  // Function for fetching Participants
  const fetchParticipants = async (queryString?: string) => {
    if (!queryString) {
      queryString = ''
    }
    try {
      const response = await fetch(
        `${HTTP}/api/v1/activities/${id}/participants${queryString}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.ok) {
        const data = await response.json()
        setParticipants(data)
      } else {
        console.log('Failed to fetch participants with error: ')
        console.log(response)
      }
    } catch (e) {
      console.log(e)
    }
  }

  // useEffect for fetching activity details
  useEffect(() => {
    fetchActivityDetail()
    console.log(activity)
    fetchParticipants()
  }, [])

  // handle click delete
  const handleClickDelete = async () => {
    try {
      const response = await fetch(`${HTTP}/api/v1/activities/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        console.log('Deleted')
      } else {
        console.log('Deletion failed with response: ' + response)
      }
    } catch (e) {
      console.log(e)
    }
  }

  // handle search bar
  const handleSearch = (value: string) => {
    fetchParticipants(`?search=${value}`)
  }

  // return
  if (activity) {
    return (
      <main className='container mx-auto flex flex-col gap-y-5 p-4 sm:gap-y-0'>
        {/* Content Wrapper */}
        <div className='mb-10 flex flex-col gap-4 md:mb-[100px] md:flex-row'>
          {/* Left: Picture */}
          <div className='flex flex-[0.9] items-center justify-center'>
            <img
              src='/Poster/Psychological.png'
              alt='Psychological Resilience for Success'
              className='w-full max-w-md rounded-xl'
            />
          </div>

          {/* Right: Event Details */}
          <div className='flex min-h-full flex-[1.12] flex-col justify-between'>
            {/* Event Title */}
            <div className='mt-[60px] flex flex-col gap-y-[30px] sm:mt-0 sm:gap-y-6'>
              <h2 className='text-lg sm:text-3xl font-bold text-mgray-1'>
                {activity.name}
              </h2>
              <h2 className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <img
                    src='/logo/JBank.png'
                    alt='Logo'
                    className='h-8 w-8 rounded-lg'
                  />
                  <span className='ml-2'>{activity.company.companyNameTh}</span>
                </div>
                <span className='hidden text-green-500 sm:block'>{`${activity.current_participants}/${activity.max_participants} seats`}</span>
              </h2>
              <hr className='hidden border-t border-gray-300 sm:block' />

              {/* Tags */}
              {/* Desktop */}
              <div className='sm:text-base hidden flex-col flex-wrap gap-2 sm:flex sm:flex-row'>
                {activity.tags.map((tag) => (
                  <Tag text={tag.name} color={tag.color} />
                ))}
              </div>
              {/* Mobile */}
              <div className='flex items-start gap-2 sm:hidden'>
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-gray-600 sm:h-6 sm:w-6'
                    viewBox='0 0 16 16'
                    fill='currentColor'>
                    <path d='M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
                    <path d='M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z' />
                  </svg>
                  <h3 className='sm:text-lg ml-2 text-nowrap text-[15px] font-normal text-mgray-d3 sm:font-light'>
                    Tags :
                  </h3>
                </div>
                <div className='ml-2 flex w-full flex-col gap-y-2'>
                  {activity.tags.map((tag) => (
                    <Tag text={tag.name} color={tag.color} />
                  ))}
                </div>
              </div>

              {/* Participation Mobile */}
              <div className='flex items-center sm:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='h-4 w-4 text-gray-600 sm:h-6 sm:w-6'
                  viewBox='0 0 16 16'>
                  <path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5' />
                </svg>
                <h3 className='sm:text-lg ml-2 text-[15px] font-normal text-mgray-d3'>
                  Participation :
                </h3>
                <span className='ml-2 text-green-500'>{`${activity.current_participants}/${activity.max_participants} seats`}</span>
              </div>

              {/* Event Information */}
              {/* Time */}
              <div className='flex flex-col gap-y-[30px] sm:gap-y-[18px]'>
                <div className='hidden items-center justify-between sm:flex'>
                  <div className='flex items-start'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-gray-600 sm:h-6 sm:w-6'
                      viewBox='0 0 24 24'
                      fill='currentColor'>
                      <path d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm-.5-13h-1v6l5.25 3.15.75-1.23-4.5-2.67V8z' />
                    </svg>
                    <h3 className='sm:text-lg ml-2 text-nowrap text-[15px] font-normal text-mgray-d3'>
                      Time :
                    </h3>
                    <h3 className='sm:text-lg ml-2 text-[15px] font-light text-mgray-d3'>
                      {`${formatDate_Utc_to_EN(activity.date)} | ${activity.start_time} - ${activity.end_time}`}
                    </h3>
                  </div>
                </div>

                {/* Location */}
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-gray-600 sm:h-6 sm:w-6'
                    viewBox='0 0 24 24'
                    fill='currentColor'>
                    <path d='M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5z' />
                  </svg>
                  <h3 className='text-base sm:text-lg ml-2 text-nowrap font-normal text-mgray-d3'>
                    Location :
                  </h3>
                  <h3 className='sm:text-lg ml-2 text-[15px] font-normal text-mgray-d3 sm:font-light'>
                    {activity.location}
                  </h3>
                </div>

                {/* Speaker Information */}
                <div className='flex flex-row items-center'>
                  <div className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-gray-600 sm:h-6 sm:w-6'
                      viewBox='0 0 24 24'
                      fill='currentColor'>
                      <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
                    </svg>
                    <h3 className='sm:text-lg ml-2 text-[15px] font-normal text-mgray-d3'>
                      Speakers :{' '}
                    </h3>
                    <div className='sm:text-lg ml-2 flex flex-col text-[15px] font-normal text-mgray-d3 sm:font-light'>
                      {activity.speaker}
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Description */}
              <div>
                <h3 className='text-m mb-8 ml-2 font-normal text-mgray-d3 sm:font-light'>
                  {activity.description}
                </h3>
              </div>
            </div>
            {/* Apply Button */}
            <div className='mt-8 flex content-end gap-x-5 text-center'>
              <Button href={`${id}/edit`} className='w-full rounded'>
                Edit
              </Button>
              {/* Desktop: Variant Outline */}
              <Button
                onClick={handleClickDelete}
                variant='outline'
                className='hidden w-full rounded sm:block'>
                Delete
              </Button>
              <Button
                onClick={handleClickDelete}
                variant='text'
                className='w-full rounded sm:hidden'>
                Delete
              </Button>
            </div>
          </div>
        </div>

        {/* Participants Table */}
        <div>
          <div className='flex flex-col justify-center gap-y-5 sm:flex-row sm:justify-between'>
            <TableHeader
              headerTitle={'Participants'}
              headerStyle='py-[13px] sm:py-0'
              disableButton
            />
            <SearchBar onChange={handleSearch} />
          </div>
          <TableComponent
            tableStyle='mt-6 hidden sm:table'
            headers={[
              { title: 'Student name', key: 'thaiName' },
              { title: 'Student ID', key: 'studentId' },
              { title: 'Faculty', key: 'faculty' },
              { title: 'Department', key: 'department' },
              { title: 'Major', key: 'program' },
              { title: 'Admission year', key: 'admissionYear' },
              { title: 'Status', key: 'status' },
              { title: '', key: 'edit' },
            ]}
            headerStyle='text-center text-mgray-2'
            textStyle='text-center text-mgray-2'
            data={mockData}
          />
        </div>
        <ExpandList
          title={'Name'}
          children={(data) => (
            <div className='flex flex-col gap-y-5 border-b border-b-mgray-6 px-7 pb-5 text-mgray-2'>
              <div className='flex flex-col'>
                <p className='text-[12px]'>Student ID</p>
                <p className='text-[10px]'>{data.studentId}</p>
              </div>
              <div className='grid grid-cols-2'>
                <div>
                  <p className='text-[12px]'>Faculty</p>
                  <p className='text-[10px]'>{data.faculty}</p>
                </div>
                <div>
                  <p className='text-[12px]'>Department</p>
                  <p className='text-[10px]'>{data.department}</p>
                </div>
              </div>
              <div className='grid grid-cols-2'>
                <div>
                  <p className='text-[12px]'>Major</p>
                  <p className='text-[10px]'>{data.program}</p>
                </div>
                <div>
                  <p className='text-[12px]'>Admission Year</p>
                  <p className='text-[10px]'>{data.admissionYear}</p>
                </div>
              </div>
              <Button
                className='rounded-xl bg-vidva px-3 py-1 text-center text-[10px] text-white'
                href={`/admin/activities/${data.studentId}`}>
                More Details
              </Button>
            </div>
          )}
          listKey={'thaiName'}
          data={mockData}
        />
      </main>
    )
  }
}
