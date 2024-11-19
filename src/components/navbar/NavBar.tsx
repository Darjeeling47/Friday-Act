'use client'

// import react
import Cookies from 'js-cookie'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

// import components
import DropdownItem from './DropdownItem'
import NavItem from './NavItem'
import { cookies } from 'next/headers'

export default function NavBar() {
  const [pathname, setPathname] = useState<string>(usePathname().split('/')[1])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLogIn, setIsLogIn] = useState<boolean>(false)
  const [firstNameTH, setFirstNameTH] = useState('')
  const [lastNameTH, setLastNameTH] = useState('')
  const [studentID, setStudentID] = useState('')
  const [profileUrl, setProfileUrl] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const login_status = Cookies.get('is_logged_in')
    setIsLogIn(login_status === 'true')

    const user_profile = Cookies.get('user_profile')
    if (user_profile) {
      const profile = JSON.parse(user_profile)
      setFirstNameTH(profile.firstNameTh)
      setLastNameTH(profile.lastNameTh)
      setStudentID(profile.studentId)
      setProfileUrl(profile.profileImageUrl)
      setIsAdmin(profile.isApplicationAdmin)
    }
  }, [])

  const handleLogout = () => {
    Cookies.remove('access_token')
    Cookies.remove('user_profile')
    Cookies.remove('is_logged_in')
    window.location.href = '/login'
  }

  const adminLinks = [
    { href: '/', label: 'Home', icon: 'bi bi-house-door-fill' },
    {
      href: '/admin/activities',
      label: 'Activity',
      icon: 'bi bi-calendar-event-fill',
    },
    { href: '/admin/companies', label: 'Company', icon: 'bi bi-building-fill' },
    { href: '/admin/semesters', label: 'Semester', icon: 'bi bi-clock-fill' },
    { href: '/admin/tags', label: 'Tags', icon: 'bi bi-tags-fill' },
  ]

  const userLinks = [
    {
      href: '/activities',
      label: 'Activity',
      icon: 'bi bi-calendar-event-fill',
    },
    { href: '/companies', label: 'Company', icon: 'bi bi-building-fill' },
  ]

  const navLinks = isAdmin
    ? adminLinks
    : [
        { href: '/', label: 'Home', icon: 'bi bi-house-door-fill' },
        ...userLinks,
      ]

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
              className={`bi bi-x text-3xl absolute inset-0 m-auto text-mgray-3 transition-transform duration-300 ${
                isOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
              }`}></i>
            <i
              className={`bi bi-list text-3xl absolute inset-0 m-auto text-mgray-3 transition-transform duration-300 ${
                isOpen ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
              }`}></i>
          </button>
        </div>

        {/* Mobile Nav Items */}
        {isOpen && (
          <div
            className={`flex flex-col space-y-2 bg-mgray-1 px-8 py-4 transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}>
            {isLogIn && (
              <div className='flex flex-row items-center gap-4 px-4'>
                {profileUrl ? (
                  <Image
                    src={profileUrl}
                    alt='Profile Picture'
                    className='h-[64px] w-[64px] rounded-lg object-contain'
                    width={1500}
                    height={1500}
                  />
                ) : (
                  <div className='h-[64px] w-[64px] rounded-lg bg-mgray-4 object-contain'></div>
                )}
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
            {navLinks.map(({ href, label, icon }) => (
              <DropdownItem key={href} href={href} active={pathname === href}>
                <i className={`${icon} mr-2`}></i>
                {label}
              </DropdownItem>
            ))}
            <line className='border-b border-mgray-2'></line>
            {isLogIn ? (
              <>
                <DropdownItem href='/profile' active={pathname === 'profile'}>
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
        )}
      </div>

      {/* Desktop Nav */}
      <div className='container mx-auto hidden h-full flex-row justify-between lg:flex'>
        <div className='flex h-full flex-row items-center justify-center space-x-6'>
          <Image
            src='/logo/Logo_FA.png'
            alt='logo'
            width={1000}
            height={1000}
            className='mr-4 h-8 w-fit'
          />
          {navLinks.map(({ href, label }) => (
            <NavItem key={href} href={href} active={pathname === href}>
              {label}
            </NavItem>
          ))}
        </div>

        {/* User */}
        <div className='flex h-full w-fit flex-row space-x-6'>
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
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}
