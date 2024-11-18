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
    <nav className='fixed left-0 right-0 top-0 h-14 w-full bg-mgray-1'>
      {/* Mobile Nav */}
      <div className='flex flex-col lg:hidden'>
        {/* Mobile Nav Header */}
        <div className='z-10 flex h-14 flex-row items-center justify-between px-8'>
          <div className='flex h-full flex-row items-center justify-center'>
            <Image
              src='/logo/Logo_FA.png'
              alt='logo'
              width={1000}
              height={1000}
              className='mr-4 h-8 w-fit'
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='relative h-8 w-8'>
            <i
              className={`bi bi-x absolute inset-0 m-auto text-3xl text-mgray-3 transition-transform duration-300 ${
                isOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
              }`}></i>
            <i
              className={`bi bi-list absolute inset-0 m-auto text-3xl text-mgray-3 transition-transform duration-300 ${
                isOpen ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
              }`}></i>
          </button>
        </div>

        {/* Mobile Nav Items */}
        {isOpen ? (
          <div
            className={`flex flex-col space-y-2 bg-mgray-1 px-8 py-4 transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}>
            {isLogIn && (
              <div className='flex flex-row items-center gap-4 px-4'>
                <Image
                  src={profileUrl}
                  alt='Profile Picture'
                  className='w-[64px] rounded-lg object-contain'
                  width={1500}
                  height={1500}
                />
                <p className='flex flex-col gap-1'>
                  <span className='font-nor text-lg text-mgray-3'>
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
                  className='text-md h-full rounded-md px-4 py-3 text-left font-normal text-mgray-3 hover:bg-mgray-2'>
                  <i className='bi bi-box-arrow-right mr-2'></i>
                  Log out
                </a>
              </>
            ) : (
              <a
                href='/login'
                className='text-md h-full px-4 py-3 text-left font-normal text-mgray-3'>
                <i className='bi bi-box-arrow-in-right mr-2'></i>
                Login
              </a>
            )}
          </div>
        ) : (
          <div
            className={`collapse -z-10 flex flex-col bg-mgray-1 transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}></div>
        )}
      </div>

      {/* Desktop Nav */}
      <div className='container mx-auto hidden h-full flex-row justify-between lg:flex'>
        <div className='flex h-full flex-row items-center justify-center space-x-6'>
          {/* Logo */}
          <Image
            src='/logo/Logo_FA.png'
            alt='logo'
            width={1000}
            height={1000}
            className='mr-4 h-8 w-fit'
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
        <div className='flex h-full w-fit flex-row space-x-6'>
          <div className='flex h-full w-fit flex-row space-x-2'>
            {isLogIn ? (
              <div className='flex flex-row items-center justify-center gap-2'>
                <a
                  href='/profile'
                  className='text-md flex h-full items-center justify-center px-3 text-center font-normal text-mgray-3 hover:text-mgray-4'>
                  {`${firstNameTH} ${lastNameTH}`}
                </a>
                <a
                  href='#'
                  onClick={handleLogout}
                  className='text-md rounded-md font-normal text-mgray-3'>
                  <i className='bi bi-box-arrow-right mr-2'></i>
                </a>
              </div>
            ) : (
              <a
                href='/login'
                className='text-md flex h-full items-center justify-center px-3 text-center font-normal text-mgray-3 hover:text-mgray-4'>
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
