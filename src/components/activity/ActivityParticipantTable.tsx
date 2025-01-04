'use client'
// import react
import { useEffect, useState } from 'react'
// import next
import { useParams } from 'next/navigation'
// import components
import Button from '../basic/Button'
import SearchBar from '../basic/SearchBar'
import ExpandList from '../table/ExpandList'
import TableComponent from '../table/TableComponent'
import TableHeader from '../table/TableHeader'
import getActivityParticipantsClient from '@/libs/activities/getActivityParticipantsClient'

export default function ActivityParticipantTable() {
  // Primary Variable - Data
  const [participants, setParticipants] = useState<any[]>([])
  // Function for fetching Participants
  const params = useParams()
  const id:string = Array.isArray(params.id) ? params.id[0] : params.id
  const fetchParticipants = async ({ id, search }: { id: string, search?: string }) => {
    try {
      const response = await getActivityParticipantsClient({id, search})

      if (response.ok) {
        const data = await response.participants
        console.log(data)
        setParticipants(data)
      } else {
        console.log('Failed to fetch participants with error: ')
        console.log(response)
      }
    } catch (e) {
      console.log(e)
    }
  }

  // handle search
  // WARNING: Mostly not implemented!
  const handleSearch = (search: string) => {
    fetchParticipants({ id, search })
  }

  // Use effect for fetching data first time
  useEffect(() => {
    fetchParticipants({id})
  }, [])

  return (
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
        tableStyle='mt-6 hidden md:table'
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
        data={participants}
      />
      <ExpandList
        title={'Name'}
        breakpoint='md'
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
            <div>
              <p className='text-[12px]'>Status</p>
              <p className='text-[10px]'>{data.status}</p>
            </div>
            <Button
              className='rounded-xl bg-vidva px-3 py-1 text-center text-[10px] text-white'
              href={`/admin/activities/${data.studentId}`}>
              More Details
            </Button>
          </div>
        )}
        listKey={'thaiName'}
        data={participants}
      />
    </div>
  )
}
