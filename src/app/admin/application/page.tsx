'use client'

import TableHeader from '@/components/table/TableHeader'
import SearchBar from '@/components/basic/SearchBar'
import TableComponent from '@/components/table/TableComponent'
import { useState } from 'react'
import { formatDate_Utc_to_EN } from '@/utils/utils'

export default function Application() {
  const [searchValue, setSearchValue] = useState('')

  const headers = [
    { key: 'username', title: "User's Name" },
    { key: 'sid', title: 'Student ID' },
    { key: 'activity', title: 'Activity' },
    { key: 'date', title: 'Date' },
    { key: 'applydate', title: 'Apply Date' },
    { key: 'status', title: 'Status' },
    { key: 'edit', title: '' },
  ]
  const tablemock = {
    data: [
      {
        username: 'Amphikapha Thathong',
        sid: '6630000021',
        activity: 'Activity name',
        date: '2024-12-20T15:56:00Z',
        applydate: '2024-12-20T15:56:00Z',
        status: 'eieistatus',
      },
      {
        username: 'Jaitnipat Thongthawee',
        sid: '6630000021',
        activity: 'Activity name',
        date: '2024-12-20T15:56:00Z',
        applydate: '2024-12-20T15:56:00Z',
        status: 'eieistatus',
      },
      {
        username: 'Jiramet Wannasiwaporn',
        sid: '6630000021',
        activity: 'Activity name',
        date: '2024-12-20T15:56:00Z',
        applydate: '2024-12-20T15:56:00Z',
        status: 'eieistatus',
      },
    ],
  }

  const data = tablemock.data.map((data) => ({
    ...data,
    date: formatDate_Utc_to_EN(data.date),
    applydate: formatDate_Utc_to_EN(data.applydate),
  }))

  const handleSearchChange = (value: string) => {
    setSearchValue(value)
    console.log('Search Value:', value)
  }

  const filteredData = tablemock.data.filter(
    (item) =>
      item.username.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.sid.includes(searchValue) ||
      item.activity.toLowerCase().includes(searchValue.toLowerCase()) ||
      formatDate_Utc_to_EN(item.date).includes(searchValue) ||
      formatDate_Utc_to_EN(item.applydate).includes(searchValue) ||
      item.status.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <main className='flex flex-col max-md:items-center gap-[30px] py-16 max-md:py-10'>
      <TableHeader
        headerTitle='Application'
        buttonTitle='Scan Attendance Qr'
        style='flex'
        headerStyle='text-4xl font-semibold'
        buttonStyle=''
      />
      <div className='flex justify-end max-md:justify-center'>
        <SearchBar
          onChange={handleSearchChange}
        />
      </div>
      {/* <div className="flex w-full overflow-x-auto"> */}
      <TableComponent
        headers={headers}
        data={data}
        textStyle='max-md:text-xs'
        headerStyle='max-md:text-xs'
      />
      {/* </div> */}
    </main>
  )
}
