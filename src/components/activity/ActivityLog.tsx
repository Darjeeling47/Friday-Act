'use client'

// import react
import { useState } from 'react'

let activity: any[] = []

for (let i = 0; i < 8; i++) {
  activity.push({
    id: i,
    name: 'Activity Name',
    company: 'Company Name',
    date: '01 OCT 2024',
    status: ['Absent', 'Present', 'Present', 'Present'][i % 4],
  })
}

export default function ActivityLog({
  year = '2024',
  semester = 'Semester 1',
  activities = activity,
}: {
  year?: string
  semester?: string
  activities?: any[]
}) {
  // Status variables
  const [isOpen, setIsOpen] = useState(true)

  // return
  return (
    <div className={`w-full p-3 flex flex-col rounded-md bg-white/80`}>
      <div
        className='p-4 flex flex-row justify-between items-center cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}>
        <span>
          <h2 className='text-lg font-semibold text-mgray-1 text-left'>
            {year}
          </h2>
          <p className='text-mgray-2 text-sm text-left'>{semester}</p>
        </span>
        <span>
          <h2 className='text-lg font-semibold text-mgray-1 text-right'>
            {activities.length}
          </h2>
          <p className='text-mgray-2 text-sm text-right'>Activities</p>
        </span>
      </div>

      <div
        className={`transition-all duration-300 ${
          isOpen ? 'max-h-full opacity-100' : 'collapse max-h-0 opacity-0'
        }`}>
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`p-4 flex flex-row justify-between items-center rounded-md ${
              activity.status === 'Absent' ? 'bg-red-600/10' : ''
            }`}>
            <div className='flex flex-row'>
              <div className='w-10 h-10 bg-slate-400 mr-4 rounded-full'></div>
              <span className='flex flex-col'>
                <h3 className='font-semibold'>{activity.name}</h3>
                <p className='text-sm text-mgray-2'>{activity.company}</p>
              </span>
            </div>
            <span>
              <h3 className='text-mgray-2 text-sm'>{activity.date}</h3>
              <p
                className={`text-sm text-right ${
                  activity.status === 'Absent' ? 'text-rose-600' : 'collapse'
                }`}>
                {activity.status}
              </p>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
