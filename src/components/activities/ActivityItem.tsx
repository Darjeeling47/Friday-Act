'use client'
//import react
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// import components
import Tag from "../basic/Tag";

// import libs
import { getImageAsBase64 } from "@/utils/getImageAsBase64";

// import interface
import { ActivityItem } from "@/interface/activitiesInterface";
import { TagItem } from "@/interface/tagsInterface";

export default function ActivitiesItem({
  activity,
}: {
  activity: ActivityItem;
}) {
  // Primary variables
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const [nameActivity, setNameActivity] = useState<string>("NaN");
  const [nameCompany, setNameCompany] = useState<string>("NaN");
  const [description, setDescription] = useState<string>("");
  const router = useRouter();

  // useEffect for get image as base64
  useEffect(() => {
    const fetchImage = async () => {

      if (!activity.posterUrl) {
        setImgSrc(undefined);
        return
      }

      const imgSrc = await getImageAsBase64(activity.posterUrl);
      setImgSrc(imgSrc);
    }
    fetchImage();

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
  }, [])

  // return
  return (
    <button
      className="flex flex-row justify-start items-center gap-5 hover:bg-mgray-3/10 p-5 rounded-[30px] w-full max-w-xl h-full transition-transform duration-300"
      onClick={(e) => {
        e.preventDefault();
        router.push(`/activity/${activity.id}`)
      }}
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
      <div className="h-full text-left overflow-hidden grow">
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
          <div className="line-clamp-1 sm:line-clamp-2 lg:line-clamp-3 pt-1 w-full font-light text-body-2 text-left text-mgray-2">
            {description}
          </div>
        </div>
      </div>
    </button>
  );
}