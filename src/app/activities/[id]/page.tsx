"use client";

import Tag from '@/components/basic/Tag';
import React, { useState } from 'react';

export default function Page() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <main className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        {/* Left: Picture */}
        <div className="flex-[0.9] flex justify-center items-center">
          <img
            src="/Poster/Psychological.png"
            alt="Psychological Resilience for Success"
            className="rounded-lg max-w-md w-full"
          />
        </div>

        {/* Right: Event Details */}
        <div className="flex-[1.2] p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-mgray-1 mb-4">
              Psychological Resilience for Success
            </h2>
            <h2 className="flex justify-between">
              <span> ธนาคารจิตอาสา </span>
              <span className="text-green-500">20/100 seats</span></h2>
            <hr className="my-4 border-t border-gray-300" />
            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              <Tag text="Cyber Security" bgColor="bg-blue-100" textColor="text-blue-600" />
              <Tag text="Cloud" bgColor="bg-orange-100" textColor="text-orange-600" />
              <Tag text="Web Development" bgColor="bg-green-100" textColor="text-green-600" />
            </div>

            {/* Event Information */}
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm-.5-13h-1v6l5.25 3.15.75-1.23-4.5-2.67V8z"/>
                  </svg>
                  <h3 className="text-lg font-normal text-mgray-d3 ml-2">Time :</h3>
                  <h3 className="text-l font-light text-mgray-d3 ml-2">29 Mar 2024 | 09:00 - 12:00</h3>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5z"/>
                </svg>
                <h3 className="text-lg font-normal text-mgray-d3 ml-2">Location :</h3>
                <h3 className="text-l font-light text-mgray-d3 ml-2">อาคารจุฬาพัฒน์ 4 ชั้น 3 (หลังMBK)</h3>
              </div>
            </div>

            {/* Speaker Information */}
            <div className="flex flex-col items-start mt-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <h3 className="text-lg font-normal text-mgray-d3 ml-2">Speakers : </h3>
                <h3 className="text-l font-light text-mgray-d3 ml-2">Wiset Bumrungwong</h3>
              </div>
              <div className="flex items-center ml-8">
                <h3 className="text-l font-light text-mgray-d3 ml-24">Sorrayut Rattanaponjnard, PHD</h3>
              </div>
            </div>
            <div>
              <h3 className="text-m font-normal text-mgray-d3 ml-2 mt-4 mb-8">
                Resilience หรือทักษะการฟื้นคืนกิจกรรมดีๆที่จัดโดยพี่ๆ จากธนาคารจิตอาสาที่จะมาช่วยเราสร้างเครื่องมือเพื่อเตีรยมรับมือกับภาวะวิกฤติของชีวิตที่อาจะเกิดขึ้นได้อย่างเข้าใจ มีสติ ไปจนถึงการมีความหวัง และมองเห็นโอกาสใหม่ๆของชีวิตในช่วงเวลาที่ยากลำบากที่ต้องเจอได้ ช่วยให้เรามีพลังใจมากขึ้น
              </h3>
            </div>
          </div>
          {/* Apply Button */}
          <div className="mt-8 text-center">
            <button
              className={`${
                isClicked ? 'bg-mgray-2' : 'bg-vidva'
              } hover:bg-[#751e2b] active:bg-mgray-3 text-white font-bold py-2 px-60 rounded w-full md:w-auto`}
              onClick={handleClick}
              style={{ maxWidth: '200px' }}
            >
              {isClicked ? 'Cancel Application' : 'Apply Activity'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
