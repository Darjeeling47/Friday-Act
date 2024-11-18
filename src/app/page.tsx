// import react
import Image from 'next/image';

// import components
import ActivityCard from '@/components/activity/ActivityCard';
import Button from '@/components/basic/Button';

// api
import getActivities from '@/libs/activities/getActivities';

export default async function Home() {
  const activityData = await getActivities()
  // console.log(activityData.activities[0].tags)
  
  const activities: Activity[] = activityData.activities
  
  return (
    <main className='flex flex-col gap-12 px-4 md:px-8'>
      {/* Hero */}
      <div className='flex lg:flex-row flex-col-reverse items-center gap-8 w-full'>
        <div className='flex flex-col gap-8 w-full lg:w-1/2'>
          <div className='flex flex-col gap-4 text-balance'>
            <h1 className='font-semibold text-4xl text-center text-mgray-1 text-pretty md:text-5xl lg:text-left lg:text-7xl'>
              Friday Activity System
            </h1>
            <p className='text-base text-center text-mgray-2 text-pretty md:text-lg lg:text-left'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className='flex flex-row justify-center items-center gap-2 w-full'>
            <Button>Get Started</Button>
            <Button variant='text'>Learn More</Button>
          </div>
        </div>
        <div className='flex justify-center items-center w-full lg:w-1/2 h-64 lg:h-72 overflow-hidden'>
          <Image
            src='/picture/overview.png'
            alt='heropic'
            width={500}
            height={500}
            className='h-full w-fit object-cover'
            />
        </div>
      </div>

      {/* Features */}
      <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <div className='flex flex-col md:justify-center items-center gap-4 md:gap-3 lg:gap-6 rounded-lg'>
          <Image
            src='/picture/feature1.jpg'
            alt='feature-1'
            width={500}
            height={500}
            className='h-fit w-full rounded'
          />
          <p className='text-sm text-mgray-1 md:text-base'>
            Experience Real-World Opportunities
          </p>
        </div>
        <div className='flex flex-col md:justify-center items-center gap-4 md:gap-3 lg:gap-6 rounded-lg'>
          <Image
            src='/picture/feature2.jpg'
            alt='feature-2'
            width={500}
            height={500}
            className='h-fit w-full rounded'
            />
          <p className='text-sm text-mgray-1 md:text-base'>
            Connect with Top Companies
          </p>
        </div>
        <div className='flex flex-col md:justify-center items-center gap-4 md:gap-3 lg:gap-6 rounded-lg'>
          <Image
            src='/picture/feature3.jpg'
            alt='feature-3'
            width={500}
            height={500}
            className='h-fit w-full rounded'
            />
          <p className='text-sm text-mgray-1 md:text-base'>
            Boost Your Career Prospects
          </p>
        </div>
      </div>

      {/* Incoming Activities */}
      <div className='flex flex-col gap-8'>
        <h2 className='font-medium text-2xl md:text-3xl'>
          Incoming Activities
        </h2>
        <div className='gap-8 grid grid-cols-1 lg:grid-cols-2'>
          {activities.map((activity, i) => (
            <ActivityCard key={i} activity={activity} />
          ))}
        </div>
      </div>
    </main>
  )
}

type Activity = {
  id: number;
  company_id: number;
  semester_id: number;
  company: {
    companyId: number;
    companyNameTh: string;
    companyNameEn: string;
    description: string;
    logoUrl: string;
  };
  semester: {
    id: number;
    year: Date;
    semester: number;
  };
  tags: {
    id: number;
    name: string;
    color: string;
  }[];
  name: string;
  description: string;
  date: string;
  start_time: string;
  end_time: string;
  poster_url: string;
  location: string;
  max_participants: number;
  currentParticipants: number;
  speaker: string;
  createdAt: Date;
  updatedAt: Date;
};