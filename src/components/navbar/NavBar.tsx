'use client'

// import react
import Cookies from 'js-cookie'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

// import components
import DropdownItem from './DropdownItem'
import NavItem from './NavItem'

export default function NavBar() {
  const [pathname, setPathname] = useState<string>(usePathname().split('/')[1])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLogIn, setIsLogIn] = useState<boolean>(false)
  const [firstNameTH, setFirstNameTH] = useState('')
  const [lastNameTH, setLastNameTH] = useState('')
  const [studentID, setStudentID] = useState('')
  const [profileUrl, setProfileUrl] = useState('')

  useEffect(() => {
    // get login status from cookies
    const login_status = Cookies.get('is_logged_in')
    setIsLogIn(login_status == 'true')

    // get user profile from cookies
    const user_profile = Cookies.get('user_profile')

    if (user_profile) {
      const profile = JSON.parse(user_profile)
      setFirstNameTH(profile.firstNameTh)
      setLastNameTH(profile.lastNameTh)
      setStudentID(profile.studentId)
      setProfileUrl(profile.profileImageUrl)
    }
  }, [])

  const handleLogout = () => {
    // Delete cookies
    Cookies.remove('access_token')
    Cookies.remove('user_profile')
    Cookies.remove('is_logged_in')

    // Redirect to login page
    window.location.href = '/login'
  }

  return (
    <nav className='h-14 w-full top-0 right-0 left-0 fixed bg-mgray-1'>
      {/* Mobile Nav */}
      <div className='lg:hidden flex flex-col'>
        {/* Mobile Nav Header */}
        <div className='z-10 px-8 h-14 flex flex-row justify-between items-center'>
          <div className='flex flex-row justify-center items-center h-full'>
            <Image
              src='/logo/Logo_FA.png'
              alt='logo'
              width={1000}
              height={1000}
              className='h-8 w-fit mr-4'
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='relative h-8 w-8'>
            <i
              className={`bi bi-x text-mgray-3 text-3xl absolute inset-0 m-auto transition-transform duration-300 ${
                isOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
              }`}></i>
            <i
              className={`bi bi-list text-mgray-3 text-3xl absolute inset-0 m-auto transition-transform duration-300 ${
                isOpen ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
              }`}></i>
          </button>
        </div>

        {/* Mobile Nav Items */}
        {isOpen ? (
          <div
            className={`flex flex-col space-y-2 px-8 py-4 bg-mgray-1 transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}>
            {isLogIn && (
              <div className='flex flex-row gap-4 items-center px-4'>
                <Image
                  src={profileUrl}
                  alt='Profile Picture'
                  className='w-[64px] rounded-lg object-contain'
                  width={1500}
                  height={1500}
                />
                <p className='flex flex-col gap-1'>
                  <span className='text-lg font-nor text-mgray-3'>
                    {`${firstNameTH} ${lastNameTH}`}
                  </span>
                  <span className='text-md font-light text-mgray-3'>
                    {`${studentID}`}
                  </span>
                </p>
              </div>
            )}
            <line className='border-b border-mgray-2'></line>
            <DropdownItem href='/' active={pathname == ''}>
              <i className='bi bi-house-door-fill mr-2'></i>
              Home
            </DropdownItem>
            <DropdownItem href='/activities' active={pathname == 'activities'}>
              <i className='bi bi-calendar-event-fill mr-2'></i>
              Activity
            </DropdownItem>
            <DropdownItem href='/companies' active={pathname == 'companies'}>
              <i className='bi bi-building-fill mr-2'></i>
              Company
            </DropdownItem>
            <line className='border-b border-mgray-2'></line>
            {isLogIn ? (
              <>
                <DropdownItem href='/profile' active={pathname == 'profile'}>
                  <i className='bi bi-person-circle mr-2'></i>
                  My Profile
                </DropdownItem>
                <a
                  href='#'
                  onClick={handleLogout}
                  className='text-mgray-3 text-md font-normal text-left h-full px-4 py-3 hover:bg-mgray-2 rounded-md'>
                  <i className='bi bi-box-arrow-right mr-2'></i>
                  Log out
                </a>
              </>
            ) : (
              <a
                href='/login'
                className='text-mgray-3 text-md font-normal text-left h-full px-4 py-3'>
                <i className='bi bi-box-arrow-in-right mr-2'></i>
                Login
              </a>
            )}
          </div>
        ) : (
          <div
            className={`-z-10 collapse flex flex-col bg-mgray-1 transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}></div>
        )}
      </div>

      {/* Desktop Nav */}
      <div className='container mx-auto h-full hidden lg:flex flex-row justify-between'>
        <div className='flex flex-row justify-center items-center space-x-6 h-full'>
          {/* Logo */}
          <Image
            src='/logo/Logo_FA.png'
            alt='logo'
            width={1000}
            height={1000}
            className='h-8 w-fit mr-4'
          />

          {/* Nav Items */}
          <NavItem href='/' active={pathname == ''}>
            Home
          </NavItem>
          <NavItem href='/activities' active={pathname == 'activities'}>
            Activity
          </NavItem>
          <NavItem href='/companies' active={pathname == 'companies'}>
            Company
          </NavItem>
        </div>

        {/* User */}
        <div className='flex flex-row space-x-6 w-fit h-full'>
          <div className='flex flex-row space-x-2 w-fit h-full'>
            {isLogIn ? (
              <div className='flex flex-row gap-2 items-center justify-center'>
                <span className='text-mgray-3 text-md font-normal text-center hover:text-mgray-4 h-full px-3 flex justify-center items-center'>
                  {`${firstNameTH} ${lastNameTH}`}
                </span>
                <a
                  href='#'
                  onClick={handleLogout}
                  className='text-mgray-3 text-md font-normal rounded-md'>
                  <i className='bi bi-box-arrow-right mr-2'></i>
                </a>
              </div>
            ) : (
              <a
                href='/login'
                className='text-mgray-3 text-md font-normal text-center hover:text-mgray-4 h-full px-3 flex justify-center items-center'>
                <i className='bi bi-box-arrow-in-right mr-2'></i>
                Login
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
