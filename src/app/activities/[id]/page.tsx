"use client";

// import
// react
import React, { useState } from "react";
// components
import Tag from "@/components/basic/Tag";
import Button from "@/components/basic/Button";

// Variables
// Primary
const initialSeats = 20;
const maxSeats = 100;

// Component
const Page: React.FC = () => {
  // Variables - Status
  const [isClicked, setIsClicked] = useState(false);

  // handle
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  // return
  return (
    <main className="container mx-auto px-2 sm:px-4 p-4">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-start md:items-start gap-4">
        <div className="flex-[0.9] flex justify-center items-center">
          <img
            src="/Poster/Psychological.png"
            alt="Psychological Resilience for Success"
            className="rounded-lg max-w-md w-full"
          />
        </div>

        <div className="flex-[1.12] p-2 flex flex-col justify-start">
          <div>
            <h2 className="text-3xl font-bold text-mgray-1 mb-4">
              Psychological Resilience for Success
            </h2>
            <h2 className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="/Logo/JBank.png"
                  alt="Logo"
                  className="rounded-lg w-8 h-8"
                />
                <span className="ml-2">ธนาคารจิตอาสา</span>
              </div>
              <span className="text-green-500">{`${initialSeats}/${maxSeats} seats`}</span>
            </h2>
            <hr className="my-4 border-t border-gray-300" />

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              <div className="flex flex-wrap gap-2 mb-4">
              <Tag
                text="Cyber Security"
                color="3b82f6"
              />
              <Tag
                text="Cloud"
                color="f97316"
              />
              <Tag
                text="Web Development"
                color="22c55e"
              />
            </div>
            </div>

            {/* Event Information */}
            <div className="mt-4">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mt-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9.037 4.037 9.037 9-4.037 9-9 9zm-.5-13h-1v6l5.25 3.15.75-1.23-4.5-2.67V8z" />
                  </svg>
                  <h3 className="text-lg md:text-xl font-normal text-gray-700 ml-2">
                    Time:
                  </h3>
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-light text-gray-600">
                  29 Mar 2024 | 09:00 - 12:00
                </h3>
              </div>


              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mt-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5z" />
                  </svg>
                  <h3 className="text-lg md:text-xl font-normal text-gray-700 ml-2">
                    Location:
                  </h3>
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-light text-gray-600">
                  อาคารจุฬาพัฒน์ 4 ชั้น 3 (หลัง MBK)
                </h3>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center mt-4">
                <div className="flex items-start md:items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <h3 className="text-lg font-normal text-mgray-d3 ml-2">
                    Speakers:
                  </h3>
                </div>
                <div className="flex flex-col ml-0 md:ml-4 mt-2 md:mt-0">
                  <h3 className="text-base md:text-lg font-light text-gray-600">
                    Wiset Bumrungwong
                  </h3>
                  <h3 className="text-base md:text-lg font-light text-gray-600">
                    Sorrayut Rattanaponjnard, PHD
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="text-m font-normal text-mgray-d3 mt-4 mb-8">
                  Resilience หรือทักษะการฟื้นคืนกิจกรรมดีๆที่จัดโดยพี่ๆ จากธนาคารจิตอาสาที่จะมาช่วยเราสร้างเครื่องมือเพื่อเตรียมรับมือกับภาวะวิกฤติของชีวิต...
                </h3>
              </div>
            </div>

            <div className="mt-12 sm:mt-8 lg:mt-8 text-center content-end">
              <Button
                onClick={handleClick}
                className={`${
                  isClicked
                    ? "bg-gray-500 hover:bg-gray-600 active:bg-gray-700"
                    : "bg-vidva hover:bg-vidva/80"
                } transition-transform duration-150 text-white font-bold rounded w-full`}
              >
                {isClicked ? "Cancel Application" : "Apply Activity"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
