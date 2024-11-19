'use client'
//import react
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// import components
import Tag from '../basic/Tag'
import Button from "../basic/Button";

// import libs
import { getImageAsBase64 } from "@/utils/getImageAsBase64";

// import interface
import { ActivityItem } from '@/interface/activitiesInterface'
import { TagItem } from '@/interface/tagsInterface'
import { Skeleton } from "../basic/Skeleton";

export default function ActivityItemApplied({
  activity
}: {
  activity: ActivityItem
}) {
  // Primary variables
  let availableSeats: number = activity.maxParticipants - activity.currentParticipants;
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const [nameActivity, setNameActivity] = useState<string>("NaN");
  const [nameCompany, setNameCompany] = useState<string>("NaN");
  const [description, setDescription] = useState<string>("");
  const [dateActivity, setDateActivity] = useState<string>("");
  const [timeActivity, setTimeActivity] = useState<string>("");
  const router = useRouter();

  // Function for get image as base64
  const fetchImage = async () => {

    if (!activity.posterUrl) {
      setImgSrc(undefined);
      return
    }

    const imgSrc = await getImageAsBase64(activity.posterUrl);
    setImgSrc(imgSrc);
  }

  function formatDate(date: string, start_time?: string, end_time?: string) {
    const dateObj = new Date(date);

    // Format the date as "9 Dec 2024"
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('en-US', { month: 'short' });
    const year = dateObj.getFullYear();

    // Check if start_time and end_time are defined, if not set a default value
    const formattedStartTime = start_time ? start_time.slice(0, 5) : '00:00';
    const formattedEndTime = end_time ? end_time.slice(0, 5) : '00:00';

    // Combine date and time
    setDateActivity(`${day} ${month} ${year}`);
    setTimeActivity(`${formattedStartTime} - ${formattedEndTime}`);
  }

  // useEffect for get image as base64
  useEffect(() => {
    if (activity.name) {
      setNameActivity(activity.name)
    }

    if (activity.company?.companyNameEn && activity.company?.companyNameEn.length > 0) {
      setNameCompany(activity.company.companyNameEn)
    }
    else if (activity.company?.companyNameTh && activity.company?.companyNameTh.length > 0) {
      setNameCompany(activity.company.companyNameTh)
    }

    if (activity.description) {
      setDescription(activity.description)
    }

    fetchImage();

    formatDate(activity.date, activity.startTime, activity.endTime);
  }, [])

  // return
  return (
    <Link
      className="flex flex-row justify-start items-center gap-5 hover:bg-mgray-3/10 p-5 rounded-[30px] w-full xl:max-w-xl h-full transition-transform duration-300"
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
              className="rounded-3xl w-full h-full aspect-2/3 object-cover"
              quality={90}
              sizes="(max-width: 768px) 100vw, 240px"
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
        <div className="flex flex-col justify-between items-start gap-1 w-full h-full">
          <div className="flex flex-col justify-start items-start gap-1 py-1 md:py-2 lg:py-3 w-full">
            <div className="flex flex-col justify-start items-start gap-1 w-full">
              <h3 className="line-clamp-1 font-normal text-mgray-1 text-subtitle">{nameActivity}</h3>
              <p className="line-clamp-1 font-light text-detail-1 text-mgray-2">{nameCompany}</p>
            </div>
            <hr className="w-full" />
            <div className="flex flex-row justify-start items-center gap-2 mt-1 scrollbar-thumb-gray-300 px-1 w-full h-9 md:h-10 lg:h-12 overflow-x-auto scrollbar-thin scrollbar-track-gray-100">
              {activity.tags.sort().slice(0, 3).map((tag: TagItem) => (
                <Tag key={tag.id} text={tag.name} color={tag.color} />
              ))}
            </div>
            <div className="line-clamp-1 md:line-clamp-2 pt-1 w-full font-light text-body-2 text-mgray-2">
              {description}
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 w-full h-fit">
            {/* Tablet Desktop */}
            <div className="sm:flex flex-row justify-start items-center gap-2 hidden w-full">
              <i className='text-mgray-3 bi bi-square-fill' style={{ fontSize: '6px' }}></i>
              <p className="text-detail-1 text-mgray-2 xl:text-detail-1">{dateActivity}, {timeActivity}</p>
            </div>
            {/* Mobile */}
            {/* <div className="justify-start items-center gap-2 sm:hidden grid col-span-1 w-full">
              <div className="flex flex-row justify-start items-center gap-2 col-span-1 w-full">
                <i className='text-mgray-3 bi bi-square-fill' style={{ fontSize: '6px' }}></i>
                <p className="text-detail-1 text-mgray-2 xl:text-detail-1">{dateActivity}</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2 col-span-1 w-full">
                <i className='text-mgray-3 bi bi-square-fill' style={{ fontSize: '6px' }}></i>
                <p className="text-detail-1 text-mgray-2 xl:text-detail-1">{timeActivity}</p>
              </div>
            </div> */}
            {
              activity.isApplied ?
                <>
                  <button
                    className="bg-mgray-2 hover:bg-mgray-2/80 shadow px-4 py-2 line-clamp-1 rounded-md w-full text-center text-detail-2 text-mgray-4 md:text-detail-1"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/activity/${activity.id}`)
                    }}
                  >
                    Applied
                  </button>
                  {availableSeats > 0 ? (
                    <p className='text-right pr-2 w-full text-detail-2 text-emerald-500'>{availableSeats} Seat{availableSeats !== 1 ? "s" : ""} left</p>
                  ) : (
                    <p className='text-right pr-2 w-full text-detail-2 text-rose-600'>Full</p>
                  )}
                </>
                : availableSeats > 0 ? (
                  <>
                    <button
                      className="bg-vidva hover:bg-vidva/80 shadow px-4 py-2 line-clamp-1 rounded-md w-full text-center text-detail-2 text-mgray-4 md:text-detail-1"
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(`/activity/${activity.id}`)
                      }}
                    >
                      Apply Now
                    </button>
                    <p className='text-right pr-2 w-full text-detail-2 text-emerald-500'>{availableSeats} Seat{availableSeats !== 1 ? "s" : ""} left</p>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-mgray-3 shadow px-4 py-2 line-clamp-1 rounded-md w-full text-center text-detail-2 text-mgray-5 md:text-detail-1 cursor-not-allowed"
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(`/activity/${activity.id}`)
                      }}
                    >
                      Out of Seat
                    </button>
                    <p className='text-right pr-2 w-full text-detail-2 text-rose-600'>Full</p>
                  </>
                )}
          </div>
        </div>
      </div>
    </Link >
  )
}