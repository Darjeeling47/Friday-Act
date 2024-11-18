'use client'
//import react
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// import components
import Tag from '../basic/Tag'

// import libs
import { getImageAsBase64 } from "@/utils/getImageAsBase64";

// import interface
import { ActivityItem } from '@/interface/activitiesInterface'
import { TagItem } from '@/interface/tagsInterface'

export default function ActivityItemApplied({
  activity
}: {
  activity: ActivityItem
}) {
  // Primary variables
  const availableSeats = activity.max_participants - parseInt(activity.currentParticipants);
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);

  // useEffect for get image as base64
  useEffect(() => {
    const fetchImage = async () => {
      const imgSrc = await getImageAsBase64(activity.poster_url);
      setImgSrc(imgSrc);
    }
    fetchImage();
  }, [])

  // return
  return (
    <Link
      className="flex flex-row justify-start items-start gap-5 hover:bg-mgray-3/20 p-5 rounded-[30px] w-full h-full transition-transform duration-300"
      href={`/activity/${activity.id}`}
    >
      <div className="flex justify-center items-center bg-white shadow-1 rounded-3xl h-44 sm:h-56 md:h-64 lg:h-72 aspect-2/3">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={`Activity Image ${activity.name}`}
            width={0}
            height={0}
            className="rounded-3xl w-full h-full object-contain"
          />
        ) : (
          <Image
            src="/logo/Logo_FA_Full.png"
            alt="Activity Image"
            width={240}
            height={320}
            className="rounded-3xl w-full h-full aspect-2/3 object-contain"
          />
        )}
      </div>
      <div className="flex flex-col justify-between items-between w-full h-full">
        <div className="flex flex-col justify-start items-start gap-3 w-full">
          <h3 className="font-normal text-header-3 text-mgray-1">{activity.name}</h3>
          <p className="line-clamp-1 font-light text-mgray-2 text-subtitle">{activity.company?.companyNameEn}</p>
          <div className="flex flex-wrap gap-2 border-white pt-3 border-t w-full">
            {activity.tags.sort().map((tag: TagItem) => (
              <Tag key={tag.id} text={tag.name} color={tag.color} />
            ))}
          </div>
          <div className="line-clamp-1 sm:line-clamp-2 lg:line-clamp-3 w-full font-light text-body-2 text-mgray-2">
            {activity.description}
          </div>
        </div>
        {
          availableSeats ? (
            <p className='text-right text-body-1 text-emerald-500'>{availableSeats} Seat{availableSeats !== 1 ? "s" : ""} left</p>
          ) : (
            <p className='text-right text-body-1 text-rose-600'>Full</p>
          )
        }
      </div>
    </Link>
  )
}