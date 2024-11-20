'use client'
// import react
import { useEffect, useState } from 'react'
// import components
import Button from '@/components/basic/Button'
import ExpandList from '@/components/table/ExpandList'
import SearchBar from '@/components/basic/SearchBar'
import TableComponent from '@/components/table/TableComponent'
// import util
import formatTime from '@/utils/timeUtils'
import getActivities from '@/libs/activities/getActivities'
import { ActivityItem } from '@/interface/activitiesInterface'
import { formatDate } from '@/utils/dateUtils'

export default function AdminActivities() {
  // Variables - Primary
  // Data
  const [data, setData] = useState<ActivityItem[]>([])

  // Loading
  const [loading, setLoading] = useState<boolean>(true)

  // Function for fetching data
  const fetchData = async ({
    search, 
    group, 
    limit, 
    page
  }:{
    search?: string,
    group?: string,
    limit?: string,
    page?: string
  }) => {
    try {
      const response = await getActivities({search, group, limit, page});
      if (response && 'activities' in response && response.success) {
        const data = response.activities;
        setData(data);
        setLoading(false);
      } else {
        console.log('Failed to fetch data:')
        console.log(response)
      }
  } catch (e) {
    console.log(e)
  }
}

// Use effect for fetching data first time
useEffect(() => {
  fetchData({})
}, [])

// handle search bar
const handleSearch = (value: string) => {
  fetchData({ search: value })
}

// Return
return (
  <div className='mt-20 flex flex-col gap-y-5 px-2 sm:mt-36 sm:gap-y-7'>
    <div className='flex w-full justify-between'>
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
          { title: 'Companies', key: 'company.companyNameTh' },
          { title: 'Date', key: 'date' },
          { title: 'Start time', key: 'startTime' },
          { title: 'End time', key: 'endTime' },
          { title: 'Participants', key: 'currentParticipants' },
          { title: 'Max participants', key: 'maxParticipants' },
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
      children={(data: ActivityItem) => (
        <div className='flex flex-col gap-y-5 border-b border-b-mgray-6 px-7 pb-5 text-mgray-2'>
          <div className='grid grid-cols-2'>
            <div>
              <p className='text-[12px]'>Company</p>
              <p className='text-[10px]'>{data.company?.companyNameTh}</p>
            </div>
            <div>
              <p className='text-[12px]'>Date</p>
              <p className='text-[10px]'>{formatDate(data.date)}</p>
            </div>
          </div>
          <div className='grid grid-cols-2'>
            <div>
              <p className='text-[12px]'>Start time</p>
              <p className='text-[10px]'>{formatTime(data.startTime)}</p>
            </div>
            <div>
              <p className='text-[12px]'>End time</p>
              <p className='text-[10px]'>{formatTime(data.endTime)}</p>
            </div>
          </div>
          <div className='grid grid-cols-2'>
            <div>
              <p className='text-[12px]'>Participants</p>
              <p className='text-[10px]'>{data.currentParticipants} people</p>
            </div>
            <div>
              <p className='text-[12px]'>Max participants</p>
              <p className='text-[10px]'>{data.maxParticipants} people</p>
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
