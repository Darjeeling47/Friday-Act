// import react
import Image from 'next/image'

// import components
import Button from '@/components/basic/Button'
import ActivityCard from '@/components/ActivityCard'

export default function Home() {
  return (
    <main className='flex flex-col gap-12 px-4 md:px-8'>
      {/* Hero */}
      <div className='w-full flex flex-col lg:flex-row gap-8 items-center'>
        <div className='w-full lg:w-1/2 flex flex-col gap-8'>
          <div className='text-balance flex flex-col gap-4'>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold text-mgray-1'>
              Friday Activity System
            </h1>
            <p className='text-mgray-2 text-base md:text-lg'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className='flex flex-row gap-2 w-full'>
            <Button>Get Started</Button>
            <Button variant='text'>Learn More</Button>
          </div>
        </div>
        <div className='w-full lg:w-1/2 h-64 lg:h-72 overflow-hidden'>
          <Image src='/Poster/Psychological.png' alt='heropic' width={500} height={500} className='object-cover rounded-lg' />
        </div>
      </div>

      {/* Features */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='rounded-lg bg-mgray-3/20 p-4 flex flex-row md:justify-center items-center gap-4 md:gap-3 lg:gap-6'>
          <i className="text-4xl md:text-5xl text-mgray-2 bi bi-globe-asia-australia"></i>
          <p className='text-mgray-1 text-sm md:text-base'>Experience Real-World Opportunities</p>
        </div>
        <div className='rounded-lg bg-mgray-3/20 p-4 flex flex-row md:justify-center items-center gap-4 md:gap-3 lg:gap-6'>
          <i className="text-4xl md:text-5xl text-mgray-2 bi bi-briefcase"></i>
          <p className='text-mgray-1 text-sm md:text-base'>Connect with Top Companies</p>
        </div>
        <div className='rounded-lg bg-mgray-3/20 p-4 flex flex-row md:justify-center items-center gap-4 md:gap-3 lg:gap-6'>
          <i className="text-4xl md:text-5xl text-mgray-2 bi bi-graph-up"></i>
          <p className='text-mgray-1 text-sm md:text-base'>Boost Your Career Prospects</p>
        </div>
      </div>

      {/* Incoming Activities */}
      <div className='flex flex-col gap-8'>
        <h2 className='text-2xl md:text-3xl font-medium'>Incoming Activities</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </div>
      </div>
    </main>
  )
}
