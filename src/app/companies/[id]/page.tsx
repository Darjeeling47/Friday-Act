// import
// react
import React from "react";
// components
import CompanyActivity from "@/components/activity/CompanyActivity";

// Variables
// Primary
const sampleActivities = [
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
];

// Component
const App: React.FC = () => {
  // return
  return (
    <>
      <div className="mb-8 flex flex-col-reverse md:flex-row h-full max-w-full items-stretch p-4">
        {/* Content Section */}
        <div className="flex flex-1 flex-col justify-between mt-8 md:mt-0 sm:text-left">
          <div className="text-left md:text-left sm:text-left">
            <h1 className="mb-4 text-4xl font-bold text-mgray-2 sm:text-left">
              Company Name
            </h1>
            <p className="max-w-md text-base text-mgray-2 sm:text-left">
              Short description for the company that will tell all about it.
              Like we make it for you.
            </p>
          </div>
          <div className="mt-auto">
            <div className="my-4 flex flex-col gap-2 text-mgray-2 text-left">
              <div className="flex flex-row items-center gap-2 sm:justify-start">
                <PhoneIcon />
                <span>0 2215 3555</span>
              </div>
              <div className="flex flex-row items-center gap-2 sm:justify-start">
                <MailIcon />
                <span>pr@chula.ac.th</span>
              </div>
            </div>
            <address className="text-m text-mgray-2 md:w-80 mb-2 text-left sm:text-left">
              จุฬาลงกรณ์มหาวิทยาลัย, 254 ถนนพญาไท แขวงวังใหม่ 
              เขตปทุมวัน กรุงเทพมหานคร 10330
            </address>
            <div className="flex justify-start sm:justify-start">
              <a href="#" className="text-sm text-blue-600 sm:text-left">
                Link for the company
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="h-48 w-40 md:h-64 md:w-56 rounded bg-mgray-3 sm:mt-8 sm:mb-0 sm:mx-auto md:mb-0 mx-auto"></div>
      </div>

      {/* Company Activities Section */}
      <div className="mb-8 mt-4 max-w-full">
        <CompanyActivity
          activities={sampleActivities}
          year="2024"
          semester="Semester 1"
        />
      </div>
      <div className="mb-20 max-w-full">
        <CompanyActivity
          activities={sampleActivities}
          year="2023"
          semester="Semester 2"
        />
      </div>
    </>
  );
};

// Icon Components
const PhoneIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.17.47 2.46.73 3.78.73a1 1 0 011 1v3.5a1 1 0 01-1 1C10.13 22.5 1.5 13.87 1.5 3.5a1 1 0 011-1H6a1 1 0 011 1c0 1.32.26 2.61.73 3.78a1 1 0 01-.21 1.11l-2.2 2.2z"
      fill="currentColor"
    />
  </svg>
);

const MailIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm-16 2v10h16V8l-8 5-8-5z"
      fill="currentColor"
    />
  </svg>
);

export default App;
