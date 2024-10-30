import React from "react";
import CompanyActivity from "@/components/basic/CompanyActivity";

const sampleActivities = [
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" },
  { name: "Activity Name", company: "Company Name", date: "08 OCT 2024" }
];

const App: React.FC = () => {
  return (
    <>
      <div 
        className="flex p-4 max-w-full mt-4 h-full items-stretch mb-8"
      >
        <div className="flex-1 flex flex-col justify-between mt-20">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-mgray-2">Company Name</h1>
            <p className="text-base max-w-md text-mgray-2">
              Short description for the company that will tell all about it. Like we make it for you.
            </p>
          </div>
          <div className="mt-auto">
            <div className="flex gap-5 my-4 text-mgray-2">
              <div className="flex items-center gap-2">
                <PhoneIcon />
                <span>0 2215 3555</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon />
                <span>pr@chula.ac.th</span>
              </div>
            </div>
            <address className="text-m text-mgray-2">
              จุฬาลงกรณ์มหาวิทยาลัย, 254 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330
            </address>
            <a href="#" className="text-sm text-blue-600">Link for the company</a>
          </div>
        </div>
        <div className="w-80 h-80 bg-mgray-3 rounded mt-20"></div>
      </div>
      
      <div className="max-w-full mb-8">
        <CompanyActivity
          activities={sampleActivities}
          year="2024"
          semester="Semester 1"
        />
      </div>
      <div className="max-w-full mb-20">
        <CompanyActivity
          activities={sampleActivities}
          year="2023"
          semester="Semester 2"
        />
      </div>
    </>
  );
};

const PhoneIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.17.47 2.46.73 3.78.73a1 1 0 011 1v3.5a1 1 0 01-1 1C10.13 22.5 1.5 13.87 1.5 3.5a1 1 0 011-1H6a1 1 0 011 1c0 1.32.26 2.61.73 3.78a1 1 0 01-.21 1.11l-2.2 2.2z"
      fill="currentColor"
    />
  </svg>
);

const MailIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2.5 2v.01L12 13l7.5-6.99V6H4.5z"
      fill="currentColor"
    />
  </svg>
);

export default App;
