'use client'

// import
// react
import React from 'react'
// components
import Tag from '@/components/basic/Tag'
import Button from '@/components/basic/Button'
import { useParams } from 'next/navigation'
import TableHeader from '@/components/table/TableHeader'
import TableComponent from '@/components/table/TableComponent'
import ExpandList from '@/components/table/ExpandList'
import SearchBar from '@/components/basic/SearchBar'

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

// Variables
// Primary
const initialSeats = 20
const maxSeats = 100
const HTTP = 'http://143.198.87.246'

// Component
export default function ActivitityDetail() {
  // Variables - Status
  const { id } = useParams<{ id: string }>()

  // handle click delete
  const handleClickDelete = async () => {
    try {
      const response = await fetch(`${HTTP}/api/v1/activities/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_USER_TOKEN}`,
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
  const handleSearchBar = (value: string) => {
    console.log(value)
    // TODO: Implement search bar logic
  }

  // return
  return (
    <main className='flex flex-col gap-y-5 sm:gap-y-0 mx-auto p-4 container'>
      {/* Content Wrapper */}
      <div className='flex md:flex-row flex-col gap-4 mb-10 md:mb-[100px]'>
        {/* Left: Picture */}
        <div className='flex flex-[0.9] justify-center items-center'>
          <img
            src='/Poster/Psychological.png'
            alt='Psychological Resilience for Success'
            className='rounded-xl w-full max-w-md'
          />
        </div>

        {/* Right: Event Details */}
        <div className="flex flex-col flex-[1.12] justify-between p-2 min-h-full">
          
          {/* Event Title */}
            <div>
            <h2 className="mb-4 font-bold text-lg text-mgray-1 sm:text-3xl">
              Psychological Resilience for Success
            </h2>
            <h2 className='flex justify-between items-center'>
              <div className='flex items-center'>
                <img
                  src='/logo/JBank.png'
                  alt='Logo'
                  className='rounded-lg w-8 h-8'
                />
                <span className='ml-2'>ธนาคารจิตอาสา</span>
              </div>
              <span className='sm:block hidden text-green-500'>{`${initialSeats}/${maxSeats} seats`}</span>
            </h2>
            <hr className="sm:block border-gray-300 hidden my-4 border-t" />
            
            {/* Tags */}
            {/* Desktop */}
            <div className="sm:flex sm:flex-row flex-col flex-wrap gap-2 hidden mt-8 sm:text-base">
              <Tag text="Cyber Security" bgColor="bg-blue-100" textColor="text-blue-600" />
              <Tag text="Cloud" bgColor="bg-orange-100" textColor="text-orange-600" />
              <Tag text="Web Development" bgColor="bg-green-100" textColor="text-green-600" />
            </div>
            {/* Mobile */}
            <div className='flex gap-2 sm:hidden mt-8'>
              <div className='flex items-start'>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6 text-gray-600" 
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                  <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z"/>
                </svg>         
                <h3 className='ml-2 font-normal text-base text-mgray-d3 text-nowrap sm:text-lg'>Tags :</h3>
              </div>
              <div className='flex flex-col gap-y-2 ml-2 w-full'>
                <Tag
                  text='Cyber Security'
                  bgColor='bg-blue-100'
                  textColor='text-blue-600'
                />
                <Tag
                  text='Cloud'
                  bgColor='bg-orange-100'
                  textColor='text-orange-600'
                />
                <Tag
                  text='Web Development'
                  bgColor='bg-green-100'
                  textColor='text-green-600'
                />
              </div>
            </div>

            {/* Participation Mobile */}
            <div className='flex items-center sm:hidden mt-2'>
              <svg
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                className="w-6 h-6 text-gray-600" 
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg> 
              <h3 className='ml-2 font-normal text-base text-mgray-d3 sm:text-lg'>Participation :</h3>
              <span className='ml-2 text-green-500'>{`${initialSeats}/${maxSeats} seats`}</span>
            </div>

            {/* Event Information */}
            <div className="mt-4">
              {/* Time */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm-.5-13h-1v6l5.25 3.15.75-1.23-4.5-2.67V8z"/>
                  </svg>
                  <h3 className="ml-2 font-normal text-base text-mgray-d3 text-nowrap sm:text-lg">Time :</h3>
                  <h3 className="ml-2 font-light text-mgray-d3 text-sm sm:text-l">29 Mar 2024 | 09:00 - 12:00</h3>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5z"/>
                </svg>
                <h3 className="ml-2 font-normal text-base text-mgray-d3 text-nowrap sm:text-lg">Location :</h3>
                <h3 className="ml-2 font-light text-mgray-d3 text-sm sm:text-l">อาคารจุฬาพัฒน์ 4 ชั้น 3 (หลังMBK)</h3>
              </div>
            </div>

            {/* Speaker Information */}
            <div className="flex flex-col items-start mt-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <h3 className="ml-2 font-normal text-base text-mgray-d3 sm:text-lg">Speakers : </h3>
                <h3 className="ml-2 font-light text-mgray-d3 text-sm sm:text-l">Wiset Bumrungwong</h3>
              </div>
              <div className="flex items-center ml-8">
                <h3 className="ml-24 font-light text-mgray-d3 text-sm sm:text-l">Sorrayut Rattanaponjnard, PHD</h3>
              </div>
            </div>

            {/* Event Description */}
            <div>
              <h3 className="mt-4 mb-8 ml-2 font-normal text-m text-mgray-d3">
                Resilience หรือทักษะการฟื้นคืนกิจกรรมดีๆที่จัดโดยพี่ๆ จากธนาคารจิตอาสาที่จะมาช่วยเราสร้างเครื่องมือเพื่อเตีรยมรับมือกับภาวะวิกฤติของชีวิต...
              </h3>
            </div>
          </div>
          {/* Apply Button */}
          <div className='flex content-end gap-x-5 mt-8 text-center'>
            <Button href={`${id}/edit`} className='rounded w-full'>
              Edit
            </Button>
            {/* Desktop: Variant Outline */}
            <Button
              onClick={handleClickDelete}
              variant='outline'
              className='sm:block hidden rounded w-full'>
              Delete
            </Button>
            <Button
              onClick={handleClickDelete}
              variant='text'
              className='sm:hidden rounded w-full'>
              Delete
            </Button>
          </div>
        </div>
      </div>

      {/* Participants Table */}
      <div>
        <div className='flex sm:flex-row flex-col justify-center sm:justify-between gap-y-5'>
          <TableHeader
            headerTitle={'Participants'}
            headerStyle='py-[13px] sm:py-0'
            disableButton
          />
          <SearchBar onChange={handleSearchBar} />
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
          <div className='flex flex-col gap-y-5 px-7 pb-5 border-b border-b-mgray-6 text-mgray-2'>
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
              className='bg-vidva px-3 py-1 rounded-xl text-[10px] text-center text-white'
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
