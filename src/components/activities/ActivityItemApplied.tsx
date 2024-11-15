'use client'
//import react
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// import components
import Tag from '../basic/Tag'

// import libs
import { getImageAsBase64 } from "@/libs/getImageAsBase64";

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
  const router = useRouter();

  // Function for go to activity page
  const gotoActivityPage = () => {
    router.push(`/activities/${activity.id}`);
  }

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
    <button 
    className="flex flex-row justify-start items-start gap-5 hover:bg-vidva/10 p-5 rounded-[30px] w-full h-full transition-transform duration-300"
    onClick={gotoActivityPage}
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
          <h3 className="font-normal text-headline text-mgray-1">{activity.name}</h3>
          <p className="line-clamp-1 font-light text-mgray-2 text-subheadline">{activity.company?.name}</p>
          <div className="flex flex-wrap gap-2 border-white pt-3 border-t w-full">
            {activity.tags.sort().map((tag: TagItem) => (
              <Tag key={tag.id} text={tag.name} color={tag.color} />
            ))}
          </div>
          <div className="line-clamp-1 sm:line-clamp-2 lg:line-clamp-3 w-full font-light text-footnote text-mgray-2">
            {activity.description}
          </div>
        </div>
        {
          availableSeats ? (
            <p className='text-right text-emerald-500'>{availableSeats} Seat{availableSeats !== 1 ? "s" : ""} left</p>
          ) : (
            <p className='text-right text-rose-600'>Full</p>
          )
        }
      </div>
    </button>
  )
}