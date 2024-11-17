'use client'
// import react
import { useEffect, useState } from 'react'
// import components
import Button from '@/components/basic/Button'
import ExpandList from '@/components/table/ExpandList'
import SearchBar from '@/components/basic/SearchBar'
import TableComponent from '@/components/table/TableComponent'
import TableHeader from '@/components/table/TableHeader'
// import util
import Cookies from 'js-cookie'

// HTTP Constant
const HTTP = 'http://143.198.87.246'

const mockData = [
  {
    id: 1,
    name: 'Activity 1',
    company: 'Company 1',
    start_time: '12:00',
    end_time: '13:00',
    currentParticipants: 5,
    max_participants: 10,
  },
  {
    id: 2,
    name: 'Activity 2',
    company: 'Company 2',
    start_time: '14:00',
    end_time: '15:00',
    currentParticipants: 7,
    max_participants: 10,
  },
  {
    id: 3,
    name: 'Activity 3',
    company: 'Company 3',
    start_time: '16:00',
    end_time: '17:00',
    currentParticipants: 8,
    max_participants: 10,
  },
  {
    id: 4,
    name: 'Activity 4',
    company: 'Company 4',
    start_time: '18:00',
    end_time: '19:00',
    currentParticipants: 9,
    max_participants: 10,
  },
  {
    id: 5,
    name: 'Activity 5',
    company: 'Company 5',
    start_time: '20:00',
    end_time: '21:00',
    currentParticipants: 10,
    max_participants: 10,
  },
]

export default function AdminActivities() {
  // Variables - Primary
  // Token
  const token = Cookies.get('token')
  // Data
  const [data, setData] = useState<
    {
      id: number
      name: string
      company: string
      start_time: string
      end_time: string
      currentParticipants: number
      max_participants: number
    }[]
  >([])

  // Function for fetching data
  const fetchData = async (queryString?: string) => {
    if (!queryString) {
      queryString = ''
    }
    try {
      const response = await fetch(`${HTTP}/api/v1/activities${queryString}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await response.json().then((data) => data.activities)
      setData(data)
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  // Use effect for fetching data first time
  useEffect(() => {
    fetchData()
  }, [])

  // handle search bar
  const handleSearch = (value: string) => {
    fetchData(`?search=${value}`)
  }

  // Return
  return (
    <div className='mt-20 flex flex-col gap-y-5 px-2 sm:-mx-24 sm:mt-36 sm:gap-y-7'>
      <div className='flex w-full justify-between'>
        <p className='text-2xl font-semibold'>Activities</p>
        <Button href='/admin/activities/create'>New Activity</Button>
      </div>
      <div className='flex justify-end p-2'>
        <SearchBar onSubmit={handleSearch} />
      </div>
      <div className='hidden sm:flex'>
        <TableComponent
          headers={[
            { title: 'Name', key: 'name' },
            { title: 'Companies', key: 'company' },
            { title: 'Start time', key: 'start_time' },
            { title: 'End time', key: 'end_time' },
            { title: 'Participants', key: 'currentParticipants' },
            { title: 'Max participants', key: 'max_participants' },
          ]}
          headerStyle='text-center text-mgray-2'
          textStyle='text-center text-mgray-2'
          data={mockData}
        />
      </div>
      {/* Mobile Collapsible */}
      <ExpandList
        title='Name'
        data={mockData}
        children={(data) => (
          <div className='flex flex-col gap-y-5 border-b border-b-mgray-6 px-7 pb-5 text-mgray-2'>
            <div className='flex flex-col'>
              <p className='text-[12px]'>Company</p>
              <p className='text-[10px]'>{data.company}</p>
            </div>
            <div className='grid grid-cols-2'>
              <div>
                <p className='text-[12px]'>Start time</p>
                <p className='text-[10px]'>{data.start_time}</p>
              </div>
              <div>
                <p className='text-[12px]'>End time</p>
                <p className='text-[10px]'>{data.end_time}</p>
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <div>
                <p className='text-[12px]'>Participants</p>
                <p className='text-[10px]'>{data.currentParticipants} people</p>
              </div>
              <div>
                <p className='text-[12px]'>Max participants</p>
                <p className='text-[10px]'>{data.max_participants} people</p>
              </div>
            </div>
            <Button
              className='rounded-xl bg-vidva px-3 py-1 text-center text-[10px] text-white'
              href={`/admin/activities/${data.id}`}>
              More Details
            </Button>
          </div>
        )}
        listKey={'name'}></ExpandList>
    </div>
  )
}
