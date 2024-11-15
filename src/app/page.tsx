// import react
import Image from 'next/image'

// import components
import Button from '@/components/basic/Button'
import ActivityCard from '@/components/activity/ActivityCard'

export default function Home() {
  return (
    <main className='flex flex-col gap-12 px-4 md:px-8'>
      {/* Hero */}
      <div className='flex w-full flex-col-reverse items-center gap-8 lg:flex-row'>
        <div className='flex w-full flex-col gap-8 lg:w-1/2'>
          <div className='flex flex-col gap-4 text-balance'>
            <h1 className='text-center text-4xl font-semibold text-mgray-1 md:text-5xl lg:text-7xl'>
              Friday Activity System
            </h1>
            <p className='text-center text-base text-mgray-2 md:text-lg'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className='flex w-full flex-row items-center justify-center gap-2'>
            <Button>Get Started</Button>
            <Button variant='text'>Learn More</Button>
          </div>
        </div>
        <div className='flex h-64 w-full items-center justify-center overflow-hidden lg:h-72 lg:w-1/2'>
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
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        <div className='flex flex-col items-center gap-4 rounded-lg md:justify-center md:gap-3 lg:gap-6'>
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
        <div className='flex flex-col items-center gap-4 rounded-lg md:justify-center md:gap-3 lg:gap-6'>
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
        <div className='flex flex-col items-center gap-4 rounded-lg md:justify-center md:gap-3 lg:gap-6'>
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
        <h2 className='text-2xl font-medium md:text-3xl'>
          Incoming Activities
        </h2>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </div>
      </div>
    </main>
  )
}
