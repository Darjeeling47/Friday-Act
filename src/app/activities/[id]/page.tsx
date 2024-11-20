'use client';

import { useEffect, useState } from "react";

import Tag from "@/components/basic/Tag";
import Button from "@/components/basic/Button";

import { getImageAsBase64 } from '@/utils/getImageAsBase64';
import getActivity from "@/libs/activities/getActivity";
import ApplyActivity from "@/libs/activities/applyActivity";
import CancelActivity from "@/libs/activities/cancelActivity";


// ฟังก์ชันสำหรับฟอร์แมตวันที่
const formatDate = (dateString: string) => {
  return new Date(dateString).toISOString().split("T")[0];
};

export default function Page({ params }: { params: { id: string } }) {
  const [activityData, setActivityData] = useState<any>(null);
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const [isClicked, setIsClicked] = useState<boolean>(false);


  const fetchActivityData = async () => {
    const data = await getActivity({ id: params.id });
    setActivityData(data);

    if (data.activity.posterUrl) {
      const imgBase64 = await getImageAsBase64(data.activity.posterUrl);
      setImgSrc(imgBase64);
    }
  };

  useEffect(() => {
    fetchActivityData();
    console.log(activityData)
    console.log(activityData?.activity.application)
  }, [params.id, isClicked]);

  if (!activityData) {
    return <div>Loading...</div>;
  }

  const handleApplyActivity = async () => {
    setIsClicked(true);
    console.log('Apply Activity');
    await ApplyActivity(params.id)
      .then((data) => {
        // console.log(data);
        setIsClicked(true);
      })
      .catch((error) => {
        console.error(error);
      });
    location.reload();
  }

  const handleCancelActivity = async () => {
    setIsClicked(false);
    await CancelActivity(params.id)
      .then((data) => {
        // console.log(data);
        setIsClicked(false);
      })
      .catch((error) => {
        console.error(error);
      });

    location.reload();
  }

  // const handleClick = () => {
  //   setIsClicked((prev) => !prev);
  //   console.log(isClicked ? 'Cancelled Application' : 'Applied for Activity');
  // };

  return (
    <main className="mx-auto px-2 sm:px-4 p-4 container">
      <div className="flex md:flex-row flex-col items-start md:items-start gap-4">
        {/* Left Column */}
        <div className="flex flex-[0.9] justify-center items-center">
          <img
            src={imgSrc || "/Poster/Psychological.png"}
            alt={activityData.activity.name}
            className="rounded-lg w-full max-w-md"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col flex-[1.12] justify-between p-2">
          <div>
            <h2 className="mb-6 font-bold text-3xl text-mgray-1">
              {activityData.activity.name}
            </h2>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="/Logo/JBank.png"
                  alt="Logo"
                  className="rounded-lg w-8 h-8"
                />
                <span className="ml-2">{activityData.activity.name}</span>
              </div>
              <span className="text-green-500">
                {`${activityData.activity.currentParticipants}/${activityData.activity.maxParticipants || '0'}  seats`}
              </span>
            </div>
            <hr className="border-gray-300 my-4 border-t" />

            <div className="flex flex-wrap gap-2 mt-8 mb-8">
              <Tag text="Cyber Security" color="3b82f6" />
              <Tag text="Cloud" color="f97316" />
              <Tag text="Web Development" color="22c55e" />
            </div>

            <div className="mt-4">
              <div className="flex md:flex-row flex-col items-start gap-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9.037 4.037 9.037 9-4.037 9-9 9zm-.5-13h-1v6l5.25 3.15.75-1.23-4.5-2.67V8z" />
                  </svg>
                  <h3 className="ml-2 font-normal text-gray-700 text-lg md:text-xl">
                    Time:
                  </h3>
                </div>
                <h3 className="font-light text-base text-gray-600 md:text-lg lg:text-xl">
                  {`${formatDate(activityData.activity.date)} | ${activityData.activity.startTime} - ${activityData.activity.endTime}`}
                </h3>
              </div>

              <div className="flex md:flex-row flex-col items-start gap-2 mt-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5z" />
                  </svg>
                  <h3 className="ml-2 font-normal text-gray-700 text-lg md:text-xl">
                    Location:
                  </h3>
                </div>
                <h3 className="font-light text-base text-gray-600 md:text-lg lg:text-xl">
                  {activityData.activity.location}
                </h3>
              </div>

              <div className="flex md:flex-row flex-col items-start mt-4">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <h3 className="ml-2 font-normal text-lg text-mgray-d3">
                    Speakers:
                  </h3>
                </div>
                <div className="flex flex-col mt-2 md:mt-0 ml-0 md:ml-4">
                  <h3 className="font-light text-base text-gray-600 md:text-lg">
                    {activityData.activity.speaker}
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="mt-4 mb-8 sm:mb-12 font-normal text-m text-mgray-d3">
                  {activityData.activity.description}
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-20 text-center">
            {
              activityData.activity.maxParticipants - activityData.activity.currentParticipants == 0 ?
                <Button
                  variant="disabled"
                  className="w-full"
                >Full
                </Button>
                :
                activityData.activity.application ?
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={handleCancelActivity}
                  >
                    Cancel Application
                  </Button>
                  :
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={handleApplyActivity}
                  >
                    Apply Activity
                  </Button>
            }
          </div>
        </div>
      </div>
    </main>
  );
}
