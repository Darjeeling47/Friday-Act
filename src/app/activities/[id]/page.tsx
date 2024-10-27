import Tag from '@/components/basic/Tag';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

export default function Activities() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Activities</h1>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        {/* Left: Picture */}
        <div className="flex-1">
          <img
            src="link-to-your-image"
            alt="Psychological Resilience for Success"
            className="rounded-lg w-full"
          />
        </div>

        {/* Right: Event Details */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">
            Psychological Resilience for Success
          </h2>
          <p className="text-sm text-gray-600">สำหรับนิสิต (For Students)</p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag text="Cyber Security" bgColor="bg-blue-100" textColor="text-blue-600" />
            <Tag text="Cloud" bgColor="bg-orange-100" textColor="text-orange-600" />
            <Tag text="Web Development" bgColor="bg-green-100" textColor="text-green-600" />
          </div>

          {/* Event Time and Location */}
          <div className="mt-4">
            <div className="flex items-center text-gray-600 text-sm">
            <FontAwesomeIcon icon={faClock} className="text-gray-600 mr-2" size="xs"/>
              <p>29 Mar 2024 | 09:00 - 12:00</p>
            </div>
          </div>

          {/* Event Information */}
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">29 Mar 2024 | 09:00 - 12:00</h3>
                <p className="text-sm text-gray-600">Location: อาคารจุฬาพัฒน์ 4 ชั้น 3</p>
              </div>
              <div>
                <p className="text-green-600 font-bold">20 / 100 Seats</p>
              </div>
            </div>

            {/* Apply Button */}
            <div className="mt-8 text-center">
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
                Apply Activity
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
