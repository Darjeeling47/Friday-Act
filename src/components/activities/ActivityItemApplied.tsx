'use client'
//import react
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// import components
import Tag from '../basic/Tag'
import Button from '../basic/Button'

// import libs
import { getImageAsBase64 } from '@/utils/getImageAsBase64'

// import interface
import { ActivityItem } from '@/interface/activitiesInterface'
import { TagItem } from '@/interface/tagsInterface'
import { Skeleton } from '../basic/Skeleton'

export default function ActivityItemApplied({
  activity,
}: {
  activity: ActivityItem
}) {
  // Primary variables
  let availableSeats: number =
    activity.maxParticipants - activity.currentParticipants
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined)
  const [nameActivity, setNameActivity] = useState<string>('NaN')
  const [nameCompany, setNameCompany] = useState<string>('NaN')
  const [description, setDescription] = useState<string>('')
  const [dateActivity, setDateActivity] = useState<string>('')
  const [timeActivity, setTimeActivity] = useState<string>('')
  const router = useRouter()

  // Function for get image as base64
  const fetchImage = async () => {
    if (!activity.posterUrl) {
      setImgSrc(undefined)
      return
    }

    const imgSrc = await getImageAsBase64(activity.posterUrl)
    setImgSrc(imgSrc)
  }

  function formatDate(date: string, start_time?: string, end_time?: string) {
    const dateObj = new Date(date)

    // Format the date as "9 Dec 2024"
    const day = dateObj.getDate()
    const month = dateObj.toLocaleString('en-US', { month: 'short' })
    const year = dateObj.getFullYear()

    // Check if start_time and end_time are defined, if not set a default value
    const formattedStartTime = start_time ? start_time.slice(0, 5) : '00:00'
    const formattedEndTime = end_time ? end_time.slice(0, 5) : '00:00'

    // Combine date and time
    setDateActivity(`${day} ${month} ${year}`)
    setTimeActivity(`${formattedStartTime} - ${formattedEndTime}`)
  }

  // useEffect for get image as base64
  useEffect(() => {
    if (activity.name) {
      setNameActivity(activity.name)
    }

    if (
      activity.company?.companyNameEn &&
      activity.company?.companyNameEn.length > 0
    ) {
      setNameCompany(activity.company.companyNameEn)
    } else if (
      activity.company?.companyNameTh &&
      activity.company?.companyNameTh.length > 0
    ) {
      setNameCompany(activity.company.companyNameTh)
    }

    if (activity.description) {
      setDescription(activity.description)
    }

    fetchImage()

    formatDate(activity.date, activity.startTime, activity.endTime)
  }, [])

  // return
  return (
    <Link
      className='flex h-full w-full max-w-xl flex-row items-center justify-start gap-5 rounded-md p-5 transition-transform duration-300 hover:bg-mgray-3/10'
      href={`/activity/${activity.id}`}>
      <div className='grow-0'>
        <div className='flex aspect-2/3 h-44 items-center justify-center rounded-md bg-white shadow-1 sm:h-56 md:h-64 lg:h-72'>
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={`Activity Image ${activity.name}`}
              width={240}
              height={320}
              className='aspect-2/3 h-full w-full rounded-md object-cover'
              quality={90}
              sizes='(max-width: 768px) 100vw, 240px'
            />
          ) : (
            <Image
              src='/logo/Logo_FA_Full.png'
              alt='Activity Image'
              width={240}
              height={320}
              className='aspect-2/3 w-3/4 rounded-md object-contain'
            />
          )}
        </div>
      </div>
      <div className='h-44 grow overflow-hidden sm:h-56 md:h-64 lg:h-72'>
        <div className='items-between flex h-full w-full flex-col justify-between'>
          <div className='flex w-full flex-col items-start justify-start gap-1 py-1 md:py-2 lg:py-3'>
            <div className='flex w-full flex-col items-start justify-start gap-1'>
              <h3 className='line-clamp-1 text-subtitle font-normal text-mgray-1'>
                {nameActivity}
              </h3>
              <p className='text-detail-1 line-clamp-1 font-light text-mgray-2'>
                {nameCompany}
              </p>
            </div>
            <hr className='w-full' />
            <div className='mt-1 flex h-9 w-full flex-row items-center justify-start gap-2 overflow-x-auto px-1 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 md:h-10 lg:h-12'>
              {activity.tags
                .sort()
                .slice(0, 3)
                .map((tag: TagItem) => (
                  <Tag key={tag.id} text={tag.name} color={tag.color} />
                ))}
            </div>
            <div className='line-clamp-1 w-full pt-1 text-body-2 font-light text-mgray-2 md:line-clamp-2'>
              {description.length > 0
                ? description
                : 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            </div>
          </div>
          <div className='flex w-full flex-col gap-1'>
            {activity.isApplied ? (
              <>
                <button
                  className='shadow text-detail-2 md:text-detail-1 line-clamp-1 w-full rounded-md bg-mgray-2 px-4 py-2 text-center text-mgray-4 hover:bg-mgray-2/80'
                  onClick={(e) => {
                    e.preventDefault()
                    router.push(`/activity/${activity.id}`)
                  }}>
                  Applied
                </button>
                {availableSeats > 0 ? (
                  <p className='text-detail-2 w-full pr-2 text-right text-emerald-500'>
                    {availableSeats} Seat{availableSeats !== 1 ? 's' : ''} left
                  </p>
                ) : (
                  <p className='text-detail-2 w-full pr-2 text-right text-rose-600'>
                    Full
                  </p>
                )}
              </>
            ) : availableSeats > 0 ? (
              <>
                <button
                  className='shadow text-detail-2 md:text-detail-1 line-clamp-1 w-full rounded-md bg-vidva px-4 py-2 text-center text-mgray-4 hover:bg-vidva/80'
                  onClick={(e) => {
                    e.preventDefault()
                    router.push(`/activity/${activity.id}`)
                  }}>
                  Apply Now
                </button>
                <p className='text-detail-2 w-full pr-2 text-right text-emerald-500'>
                  {availableSeats} Seat{availableSeats !== 1 ? 's' : ''} left
                </p>
              </>
            ) : (
              <>
                <button
                  className='shadow text-detail-2 md:text-detail-1 line-clamp-1 w-full cursor-not-allowed rounded-md bg-mgray-3 px-4 py-2 text-center text-mgray-5'
                  onClick={(e) => {
                    e.preventDefault()
                    router.push(`/activity/${activity.id}`)
                  }}>
                  Out of Seat
                </button>
                <p className='text-detail-2 w-full pr-2 text-right text-rose-600'>
                  Full
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
