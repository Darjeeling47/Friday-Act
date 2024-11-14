'use client'

// import react
import React from 'react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

// import components
import NavItem from './NavItem'
import DropdownItem from './DropdownItem'

export default function NavBar() {
  const [pathname, setPathname] = useState<string>(usePathname().split('/')[1])

  const [isOpen, setIsOpen] = useState<boolean>(false)

  // return
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
            <DropdownItem href='/' active={pathname == ''}>
              Home
            </DropdownItem>
            <DropdownItem href='/activities' active={pathname == 'activities'}>
              Activity
            </DropdownItem>
            <DropdownItem href='/companies' active={pathname == 'companies'}>
              Company
            </DropdownItem>
            <line className='border-b border-mgray-2'></line>
            <a
              href='/login'
              className='text-mgray-3 text-md font-normal text-center h-full px-4 py-3'>
              Login
            </a>
            {/* <a
              href='/register'
              className='text-mgray-3 text-md font-normal text-center h-full px-4 py-3'>
              Register
            </a> */}
          </div>
        ) : (
          <div
            className={`-z-10 collapse flex flex-col bg-mgray-1 transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}>
          </div>
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
            <a
              href='/login'
              className='text-mgray-3 text-md font-normal text-center hover:text-mgray-4
              h-full px-3 flex justify-center items-center'>
              Login
            </a>
            {/* <a
              href='/login'
              className='text-mgray-3 text-md font-normal text-center hover:text-mgray-4
              h-full px-3 flex justify-center items-center'>
              Register
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
