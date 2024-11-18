// import
// react
import React from 'react'
// components
import CompanyActivity from '@/components/activity/CompanyActivity'

// Variables
// Primary
const sampleActivities = [
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
  { name: 'Activity Name', company: 'Company Name', date: '08 OCT 2024' },
]

// Component
const App: React.FC = () => {
  // return
  return (
    <>
      {/* Company Information Section */}
      <div className='mb-8 flex h-full max-w-full items-stretch p-4'>
        <div className='w-0.9 mt-8 flex flex-1 flex-col justify-between'>
          <div>
            <h1 className='mb-4 text-4xl font-bold text-mgray-2'>
              Company Name
            </h1>
            <p className='max-w-md text-base text-mgray-2'>
              Short description for the company that will tell all about it.
              Like we make it for you.
            </p>
          </div>
          <div className='mt-auto'>
            <div className='my-4 flex gap-5 text-mgray-2'>
              <div className='flex items-center gap-2'>
                <PhoneIcon />
                <span>0 2215 3555</span>
              </div>
              <div className='flex items-center gap-2'>
                <MailIcon />
                <span>pr@chula.ac.th</span>
              </div>
            </div>
            <address className='text-m text-mgray-2 md:w-80 mb-2'>
              จุฬาลงกรณ์มหาวิทยาลัย, 254 ถนนพญาไท แขวงวังใหม่ 
              เขตปทุมวัน กรุงเทพมหานคร 10330
            </address>
            <a href='#' className='text-sm text-blue-600'>
              Link for the company
            </a>
          </div>
        </div>
        <div className='mt-20 h-80 w-72 rounded bg-mgray-3'></div>
      </div>

      {/* Company Activities Section */}
      <div className='mb-8 mt-4 max-w-full'>
        <CompanyActivity
          activities={sampleActivities}
          year='2024'
          semester='Semester 1'
        />
      </div>
      <div className='mb-20 max-w-full'>
        <CompanyActivity
          activities={sampleActivities}
          year='2023'
          semester='Semester 2'
        />
      </div>
    </>
  )
}

// Icon Components
const PhoneIcon: React.FC = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.17.47 2.46.73 3.78.73a1 1 0 011 1v3.5a1 1 0 01-1 1C10.13 22.5 1.5 13.87 1.5 3.5a1 1 0 011-1H6a1 1 0 011 1c0 1.32.26 2.61.73 3.78a1 1 0 01-.21 1.11l-2.2 2.2z'
      fill='currentColor'
    />
  </svg>
)

const MailIcon: React.FC = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm-16 2v10h16V8l-8 5-8-5z'
      fill='currentColor'
    />
  </svg>
)

export default App
