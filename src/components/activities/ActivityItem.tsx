'use client'
//import react
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// import components
import Tag from '../basic/Tag'

// import libs
import { getImageAsBase64 } from '@/utils/getImageAsBase64'

// import interface
import { ActivityItem } from '@/interface/activitiesInterface'
import { TagItem } from '@/interface/tagsInterface'

export default function ActivitiesItem({
  activity,
}: {
  activity: ActivityItem
}) {
  // Primary variables
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined)
  const [nameActivity, setNameActivity] = useState<string>('NaN')
  const [nameCompany, setNameCompany] = useState<string>('NaN')
  const [description, setDescription] = useState<string>('')
  const router = useRouter()

  // useEffect for get image as base64
  useEffect(() => {
    const fetchImage = async () => {
      if (!activity.posterUrl) {
        setImgSrc(undefined)
        return
      }

      const imgSrc = await getImageAsBase64(activity.posterUrl)
      setImgSrc(imgSrc)
    }
    fetchImage()

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
  }, [])

  // return
  return (
    <button
      className='flex h-full w-full max-w-xl flex-row items-center justify-start gap-5 rounded-md p-5 transition-transform duration-300 hover:bg-mgray-3/10'
      onClick={(e) => {
        e.preventDefault()
        router.push(`/activities/${activity.id}`)
      }}>
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
      <div className='h-full grow overflow-hidden text-left'>
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
          <div className='line-clamp-1 w-full pt-1 text-left text-body-2 font-light text-mgray-2 sm:line-clamp-2 lg:line-clamp-3'>
            {description}
          </div>
        </div>
      </div>
    </button>
  )
}
