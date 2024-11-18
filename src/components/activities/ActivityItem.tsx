'use client'
//import react
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// import components
import Tag from "../basic/Tag";

// import libs
import { getImageAsBase64 } from "@/utils/getImageAsBase64";

// import util
import { cn } from "@/utils/utils";

// import interface
import { ActivityItem } from "@/interface/activitiesInterface";
import { TagItem } from "@/interface/tagsInterface";

export default function ActivitiesItem({
  activity,
}: {
  activity: ActivityItem;
}) {
  // Primary variables
  let availableSeats = activity.max_participants - parseInt(activity.currentParticipants);
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);

  if (availableSeats < 0) {
    availableSeats = 0;
  }

  // useEffect for get image as base64
  useEffect(() => {
    const fetchImage = async () => {

      if (!activity.poster_url) {
        setImgSrc(undefined);
        return
      }

      const imgSrc = await getImageAsBase64(activity.poster_url);
      setImgSrc(imgSrc);
    }
    fetchImage();
  }, [])

  // return
  return (
    <Link
      className="flex flex-row justify-start items-center gap-5 hover:bg-mgray-3/10 p-5 rounded-[30px] w-full max-w-lg h-full transition-transform duration-300"
      href={`/activity/${activity.id}`}
    >
      <div className="grow-0">
        <div className="flex justify-center items-center bg-white shadow-1 rounded-3xl h-44 sm:h-56 md:h-64 lg:h-72 aspect-2/3">
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={`Activity Image ${activity.name}`}
              width={240}
              height={320}
              className="rounded-3xl w-full h-full object-contain"
            />
          ) : (
            <Image
              src="/logo/Logo_FA_Full.png"
              alt="Activity Image"
              width={240}
              height={320}
              className="rounded-3xl w-3/4 aspect-2/3 object-contain"
            />
          )}
        </div>
      </div>
      <div className="h-full overflow-hidden grow">
        <div className="flex flex-col justify-between items-between w-full h-full">
          <div className="flex flex-col justify-start items-start gap-2 py-3 w-full">
            <div className="flex flex-col justify-start items-start gap-1 w-full">
              <h3 className="line-clamp-1 font-normal text-mgray-1 text-subtitle">{activity.name}</h3>
              <p className="line-clamp-1 font-light text-detail text-mgray-2">{activity.company?.companyNameEn ? activity.company.companyNameEn : activity.company?.companyNameTh}</p>
            </div>
            <hr className="pt-1 md:pt-0 w-full" />
            <div className="flex flex-row justify-start items-center gap-2 scrollbar-thumb-gray-300 px-1 w-full h-8 md:h-10 lg:h-12 overflow-x-auto scrollbar-thin scrollbar-track-gray-100">
              {activity.tags.sort().slice(0, 3).map((tag: TagItem) => (
                <Tag key={tag.id} text={tag.name} color={tag.color} />
              ))}
            </div>
            <div className="line-clamp-1 sm:line-clamp-2 lg:line-clamp-3 pt-1 w-full font-light text-body-2 text-mgray-2">
              {activity.description}
            </div>
          </div>
          <div className="w-full text-left">
            {
              availableSeats && availableSeats != 0 ? (
                <p className='text-body-2 text-emerald-500'>{availableSeats} Seat{availableSeats !== 1 ? "s" : ""} left</p>
              ) : (
                <p className='text-body-2 text-rose-600'>Full</p>
              )
            }
          </div>
        </div>
      </div>
    </Link>
  );
}