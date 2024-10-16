export default function Footer() {
  // Styling variables
  const socialStyle = 'text-vidva text-2xl'
  const listStyle = 'text-mgray-2 font-light text-nowrap'

  // return
  return (
    <footer className='shadow-[0_-1px_1px_rgba(0,0,0,0.05)] pt-12 pb-8'>
      <div className='container grid grid-cols-10 grid-flow-row space-x-3'>

        {/* Brand */}
        <div className='col-span-10 lg:col-span-4 flex flex-col space-y-6 justify-center items-center'>
          <h1 className='text-2xl font-semibold text-center'>
            FRIDAY ACT SYSTEM
          </h1>
          <div className='flex flex-row space-x-8 md:space-x-12'>
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
        <div className='col-span-10 lg:col-span-3 pt-8 lg:pt-0'>
          <h1 className='pb-3 text-lg text-mgray-1'>Menu</h1>
          <ul className='flex flex-col space-y-2'>
            <li>
              <a href='' className={listStyle}>
                Home
              </a>
            </li>
            <li>
              <a href='' className={listStyle}>
                Activities
              </a>
            </li>
            <li>
              <a href='' className={listStyle}>
                Company Detail
              </a>
            </li>
            <li>
              <a href='' className={listStyle}>
                Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className='col-span-10 lg:col-span-3 pt-8 lg:pt-0'>
          <h1 className='pb-3 text-lg text-mgray-1'>ติดต่อสอบถาม</h1>
          <ul className='flex flex-col space-y-2'>
            <li className={listStyle}>086-456-8699 (พี่ตาล)</li>
            <li className={listStyle}>086-305-1959 (อาจารย์...)</li>
            <li className={listStyle}>085-112-5936 (อาจารย์...)</li>
          </ul>
        </div>
        <div className='col-span-10 text-xs text-mgray-2 text-balance text-center mt-10'>
          {`© 2024 Friday Act System All rights reserved. Design & Develop by
        Computer Engineering Chula.`}
        </div>
      </div>
    </footer>
  )
}
