import Image from 'next/image'

export default function Footer() {
  // Styling variables
  const socialStyle = 'text-vidva text-2xl'
  const listStyle = 'text-mgray-2 font-light text-nowrap'

  // return
  return (
    <footer className='shadow-[0_-1px_1px_rgba(0,0,0,0.05)] pt-12 pb-8'>
      <div className='space-x-3 grid grid-cols-10 lg:grid-cols-10 md:grid-rows-2 lg:grid-rows-1 grid-flow-row lg:grid-flow-row md:grid-flow-col container'>
        {/* Brand */}
        <div className='flex flex-col justify-center items-center space-y-6 md:space-y-12 col-span-10 md:col-span-5 lg:col-span-4 md:row-span-2 lg:row-span-1'>
          <Image
            src='/logo/Logo_FAC_Full.png'
            alt='Friday Act System'
            className='w-[180px] md:w-[250px] object-contain'
            width={1500}
            height={1500}
            priority
          />
          <div className='flex flex-row space-x-8'>
            <a href=''>
              <i className={`bi bi-facebook ${socialStyle}`}></i>
            </a>
            <a href=''>
              <i className={`bi bi-instagram ${socialStyle}`}></i>
            </a>
            <a href=''>
              <i className={`bi bi-line ${socialStyle}`}></i>
            </a>
            <a href=''>
              <i className={`bi bi-discord ${socialStyle}`}></i>
            </a>
          </div>
        </div>

        {/* Menu */}
        <div className='col-span-10 md:col-span-5 lg:col-span-3 pt-8 lg:pt-0'>
          <h1 className='pb-3 text-lg text-mgray-1'>Menu</h1>
          <ul className='flex flex-col space-y-2'>
            <li>
              <a href='/' className={listStyle}>
                Home
              </a>
            </li>
            <li>
              <a href='/activities' className={listStyle}>
                Activities
              </a>
            </li>
            <li>
              <a href='/companies' className={listStyle}>
                Company Detail
              </a>
            </li>
            <li>
              <a href='/profile' className={listStyle}>
                Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className='col-span-10 md:col-span-5 lg:col-span-3 pt-8 lg:pt-0'>
          <h1 className='pb-3 text-lg text-mgray-1'>ติดต่อสอบถาม</h1>
          <ul className='flex flex-col space-y-2'>
            <li className={listStyle}>086-456-8699 (พี่ตาล)</li>
            <li className={listStyle}>086-305-1959 (อาจารย์...)</li>
            <li className={listStyle}>085-112-5936 (อาจารย์...)</li>
          </ul>
        </div>
      </div>

      {/* Copy Right */}
      <div className='col-span-10 mt-10 text-balance text-center text-mgray-2 text-xs'>
        {`© 2024 Friday Act System All rights reserved. Design & Develop by
        Computer Engineering Chula.`}
      </div>
    </footer>
  )
}
