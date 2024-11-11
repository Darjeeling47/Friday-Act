'use client'

// import react
import Image from 'next/image'

// import components
import Button from '@/components/basic/Button'
import ActivityCard from '@/components/activity/ActivityCard'
import { useEffect } from 'react'
import getActivities from '@/libs/activities/getActivities'
import Cookies from 'js-cookie'

export default function Home() {
  // Get the token using js-cookie
  const token = Cookies.get('access_token')

  useEffect(() => {
    // Fetch data
    const a = async () => {
      try {
        const response = await getActivities(token as string)
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    }

    a()
  }, [token]) // Add token as a dependency

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
            className='w-fit h-full object-cover'
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
            className='rounded w-full h-fit'
          />
          <p className='text-mgray-1 text-sm md:text-base'>
            Experience Real-World Opportunities
          </p>
        </div>
        <div className='flex flex-col md:justify-center items-center gap-4 md:gap-3 lg:gap-6 rounded-lg'>
          <Image
            src='/picture/feature2.jpg'
            alt='feature-2'
            width={500}
            height={500}
            className='rounded w-full h-fit'
          />
          <p className='text-mgray-1 text-sm md:text-base'>
            Connect with Top Companies
          </p>
        </div>
        <div className='flex flex-col md:justify-center items-center gap-4 md:gap-3 lg:gap-6 rounded-lg'>
          <Image
            src='/picture/feature3.jpg'
            alt='feature-3'
            width={500}
            height={500}
            className='rounded w-full h-fit'
          />
          <p className='text-mgray-1 text-sm md:text-base'>
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
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </div>
      </div>
    </main>
  )
}
