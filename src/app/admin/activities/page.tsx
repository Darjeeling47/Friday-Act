'use client'
// import react
import { useEffect, useState } from 'react'
// import components
import Button from '@/components/basic/Button'
import ExpandList from '@/components/table/ExpandList'
import SearchBar from '@/components/basic/SearchBar'
import TableComponent from '@/components/table/TableComponent'
// import util
import Cookies from 'js-cookie'

type Activity = {
  id: number
  name: string
  company: string
  start_time: string
  end_time: string
  currentParticipants: number
  max_participants: number
}

// HTTP Constant
const HTTP = 'http://143.198.87.246'

export default function AdminActivities() {
  // Variables - Primary
  // Token
  const token = Cookies.get('token')
  // Data
  const [data, setData] = useState<Activity[]>([])

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
            { title: 'Companies', key: 'company.companyNameTh' },
            { title: 'Start time', key: 'start_time' },
            { title: 'End time', key: 'end_time' },
            { title: 'Participants', key: 'currentParticipants' },
            { title: 'Max participants', key: 'max_participants' },
          ]}
          headerStyle='text-center text-mgray-2'
          textStyle='text-center text-mgray-2'
          data={data}
        />
      </div>
      {/* Mobile Collapsible */}
      <ExpandList
        title='Name'
        data={data}
        children={(data) => (
          <div className='flex flex-col gap-y-5 border-b border-b-mgray-6 px-7 pb-5 text-mgray-2'>
            <div className='flex flex-col'>
              <p className='text-[12px]'>Company</p>
              <p className='text-[10px]'>{data.company.companyNameTh}</p>
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
