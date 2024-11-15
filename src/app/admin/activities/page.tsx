'use client'
// import components
import Button from '@/components/basic/Button'
import ExpandList from '@/components/basic/ExpandList'
import SearchBar from '@/components/basic/SearchBar'
import TableComponent from '@/components/basic/TableComponent'
import TableHeader from '@/components/basic/TableHeader'
import { useEffect, useState } from 'react'

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

  // Use effect for fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${HTTP}/api/v1/activities`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_USER_TOKEN}`,
          },
        })
        const data = await response.json().then((data) => data.activities)
        setData(data)
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  // handle search bar
  const handleSearch = (value: string) => {
    console.log(value)
    // TODO: handle search logic
  }

  // Return
  return (
    <div className='sm:-mx-24 mt-20 sm:mt-36 px-2 flex flex-col gap-y-5 sm:gap-y-7'>
      <div className='flex justify-between w-full'>
        <p className='text-2xl font-semibold'>Activities</p>
          <Button href='/admin/activities/create'>New Activity</Button>
      </div>
      <div className='flex justify-end p-2'>
        <SearchBar onChange={handleSearch} />
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
          <div className='flex flex-col gap-y-5 px-7 pb-5 border-b border-b-mgray-6 text-mgray-2'>
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
              className='bg-vidva text-white text-center rounded-xl px-3 py-1 text-[10px]'
              href={`/admin/activities/${data.id}`}
            >
              More Details
            </Button>
          </div>
        )} 
        listKey={'name'}> 
        </ExpandList>
    </div>
  )
}
