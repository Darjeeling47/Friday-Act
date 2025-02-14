'use server'
// import
// react
import React from 'react'
// components
import Tag from '@/components/basic/Tag'
import Button from '@/components/basic/Button'
// util
import { formatDate_Utc_to_EN } from '@/utils/utils'
import formatTime from '@/utils/timeUtils'
import getActivity from '@/libs/activities/getActivity'
import { cookies } from 'next/headers'
import ActivityParticipantTable from '@/components/activity/ActivityParticipantTable'
import deleteActivity from '@/libs/activities/deleteActivity'
import ActivityDeleteEditButtons from '@/components/activity/ActivityDeleteEditButtons'

// Function for fetching activity details
const fetchActivityDetail = async ({ id }: { id: string }) => {
  try {
    const response = await getActivity({ id })
    console.log(response)

    if (response.success) {
      const data = response.activity
      console.log(data)
      return data
    } else {
      console.log('Failed to fetch activity details with error: ')
      console.log(response)
      return null
    }
  } catch (e) {
    console.log(e)
  }
  return null
}

// Component
export default async function ActivityDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // Variables - primary
  // token
  const cookieStore = cookies()
  const token = cookieStore.get('acces_token')?.value
  // id
  const id = (await params).id
  const activity = await fetchActivityDetail({ id })

  // return
  if (activity) {
    return (
      <main className='mx-auto flex flex-col gap-y-5 py-4 sm:gap-y-0 lg:-mx-0'>
        {/* Content Wrapper */}
        <div className='mb-10 flex flex-col sm:gap-8 md:mb-[100px] md:flex-row md:gap-12 lg:gap-12'>
          {/* Left: Picture */}
          <div className='flex flex-[0.9] items-center justify-center'>
            <img
              src={`${activity.posterUrl}`}
              alt='Psychological Resilience for Success'
              className='w-full max-w-md rounded-xl'
            />
          </div>

          {/* Right: Event Details */}
          <div className='flex min-h-full flex-[1.12] flex-col justify-between'>
            {/* Event Title */}
            <div className='mt-[60px] flex flex-col gap-y-[30px] sm:mt-0 sm:gap-y-6'>
              <h2 className='text-[17px] font-bold text-mgray-1 sm:text-[24px] md:text-[32px]'>
                {activity.name}
              </h2>
              <h2 className='flex flex-col items-start justify-between lg:flex-row lg:items-center'>
                <div className='flex items-center'>
                  <img
                    src={`${activity.company.logoUrl}`}
                    alt='Logo'
                    className='h-8 w-8 rounded-lg'
                  />
                  <span className='ml-2 mt-2 text-[16px] lg:mt-0 lg:text-[20px]'>
                    {activity.company.companyNameTh}
                  </span>
                </div>
                <span className='hidden text-green-500 sm:block'>{`${activity.currentParticipants}/${activity.maxParticipants} seats`}</span>
              </h2>
              <hr className='hidden border-t border-gray-300 sm:block' />

              {/* Tags */}
              {/* Desktop */}
              <div className='hidden flex-col flex-wrap gap-2 sm:flex sm:flex-row'>
                {activity.tags.map((tag: { name: string; color: string }) => (
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
                  <h3 className='ml-2 text-nowrap font-normal text-mgray-d3 md:font-light'>
                    Tags :
                  </h3>
                </div>
                <div className='ml-2 flex w-full flex-col gap-y-2'>
                  {activity.tags.map((tag: { name: string; color: string }) => (
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
                <h3 className='ml-2 text-[15px] font-normal text-mgray-d3 sm:text-[18px]'>
                  Participation :
                </h3>
                <span className='ml-2 text-green-500'>{`${activity.currentParticipants}/${activity.maxParticipants} seats`}</span>
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
                    <h3 className='ml-2 text-nowrap text-[15px] font-normal text-mgray-d3 lg:text-[18px]'>
                      Time :
                    </h3>
                    <div className='flex flex-col lg:flex-row'>
                      <h3 className='ml-2 text-[15px] text-mgray-d3 md:font-light lg:text-[18px]'>
                        {`${formatDate_Utc_to_EN(activity.date)}`}
                      </h3>
                      <span className='ml-2 hidden lg:block'> |</span>
                      <h3 className='ml-2 text-[15px] text-mgray-d3 md:font-light lg:text-[18px]'>
                        {`${formatTime(activity.startTime)} - ${formatTime(activity.endTime)}`}
                      </h3>
                    </div>
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
                  <h3 className='ml-2 text-nowrap text-[15px] font-normal text-mgray-d3 lg:text-[18px]'>
                    Location :
                  </h3>
                  <h3 className='ml-2 text-[15px] font-normal text-mgray-d3 sm:font-light lg:text-[18px]'>
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
                    <h3 className='ml-2 text-[15px] font-normal text-mgray-d3 lg:text-[18px]'>
                      Speakers :{' '}
                    </h3>
                    <div className='ml-2 flex flex-col text-[15px] font-normal text-mgray-d3 sm:font-light lg:text-[18px]'>
                      {activity.speaker}
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Description */}
              <div>
                <h3 className='mb-8 ml-2 text-[15px] font-normal text-mgray-d3 sm:text-[18px] sm:font-light'>
                  {activity.description}
                </h3>
              </div>
            </div>

            {/* Apply Button */}
           <ActivityDeleteEditButtons id={id}/> 
          </div>
        </div>

        {/* Participants - Client*/}
        <ActivityParticipantTable />
        
      </main>
    )
  }
}
