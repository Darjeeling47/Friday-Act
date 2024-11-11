// import react
import Button from '@/components/basic/Button'
import Image from 'next/image'
import CompanyActivity from '@/components/basic/CompanyActivity'
import ActivityCard from '@/components/ActivityCard'

export default function Home() {
  return (
    <main className='flex flex-col gap-12'>
      {/* Hero */}
      <div className='w-full flex flex-row gap-8'>      
        <div className='w-1/2 flex flex-col gap-8'>
          <div className='text-balance flex flex-col gap-4'>
            <h1 className='text-7xl font-semibold text-mgray-1'>
              Friday Activity System
            </h1>
            <p className='text-mgray-2'>
              lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </p>
          </div>
          <div className='flex flex-row gap-2 w-full'>
            <Button>Get Started</Button>
            <Button varient='text'>Learn More</Button>
          </div>
        </div>
        <div className='w-1/2 h-72 overflow-clip'>
          <Image src='/Poster/Psychological.png' alt='heropic' width={500} height={500} />
        </div>
      </div>

      {/* Features */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='rounded-lg bg-mgray-3/20 p-4 flex flex-row justify-center items-center gap-4 md:gap-3 lg:gap-6'>
          <i className="text-6xl text-mgray-2 bi bi-globe-asia-australia"></i>
          <p className='text-mgray-1'>Experience Real-World Opportunities</p>
        </div>
        <div className='rounded-lg bg-mgray-3/20 p-4 flex flex-row justify-center items-center gap-4 md:gap-3 lg:gap-6'>
          <i className="text-6xl text-mgray-2 bi bi-globe-asia-australia"></i>
          <p className='text-mgray-1'>Connect with Top Companies</p>
        </div>
        <div className='rounded-lg bg-mgray-3/20 p-4 flex flex-row justify-center items-center gap-4 md:gap-3 lg:gap-6'>
          <i className="text-6xl text-mgray-2 bi bi-globe-asia-australia"></i>
          <p className='text-mgray-1'>Boost Your Career Prospects</p>
        </div>
      </div>

      {/* Incoming Act */}
      <div className='flex flex-col gap-8'>
        <h2 className='text-3xl font-medium'>Incoming Activities</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </div>
      </div>
    </main>
  )
}