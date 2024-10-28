// import react
import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
      {/* Hero */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
        <Image
          src='/logo/Logo_FA_Full.png'
          alt='Friday Activity Logo'
          width={1000}
          height={1000}
          className='h-fit w-full md:w-1/2 px-6'
        />
        <div className='w-full md:w-1/2'>
          <span>
            <h1 className='text-lg font-medium text-mgray-1 text-nowrap'>
              Friday Activity,
            </h1>
            <p className='text-mgray-2 text-balance'>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s orem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsu
            </p>
          </span>
          <div>
          </div>
        </div>
      </div>
    </main>
  )
}
