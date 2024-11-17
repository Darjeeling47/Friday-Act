'use client'
// import react
import { FormEventHandler, useRef, useState } from 'react'

// import components
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

//import util
import { cn } from '@/utils/utils'

const FilterIcon = () => {
  return (
    <svg
      className='w-4'
      viewBox='0 0 19 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M0.125 11.2411C0.125 11.0162 0.20731 10.8004 0.353823 10.6414C0.500336 10.4823 0.69905 10.3929 0.90625 10.3929H5.59375C5.80095 10.3929 5.99966 10.4823 6.14618 10.6414C6.29269 10.8004 6.375 11.0162 6.375 11.2411C6.375 11.4661 6.29269 11.6818 6.14618 11.8409C5.99966 12 5.80095 12.0894 5.59375 12.0894H0.90625C0.69905 12.0894 0.500336 12 0.353823 11.8409C0.20731 11.6818 0.125 11.4661 0.125 11.2411ZM0.125 6.15186C0.125 5.9269 0.20731 5.71115 0.353823 5.55208C0.500336 5.39301 0.69905 5.30364 0.90625 5.30364H11.8438C12.051 5.30364 12.2497 5.39301 12.3962 5.55208C12.5427 5.71115 12.625 5.9269 12.625 6.15186C12.625 6.37682 12.5427 6.59256 12.3962 6.75163C12.2497 6.9107 12.051 7.00007 11.8438 7.00007H0.90625C0.69905 7.00007 0.500336 6.9107 0.353823 6.75163C0.20731 6.59256 0.125 6.37682 0.125 6.15186ZM0.125 1.06257C0.125 0.837609 0.20731 0.621863 0.353823 0.462792C0.500336 0.303721 0.69905 0.214355 0.90625 0.214355H18.0938C18.301 0.214355 18.4997 0.303721 18.6462 0.462792C18.7927 0.621863 18.875 0.837609 18.875 1.06257C18.875 1.28753 18.7927 1.50328 18.6462 1.66235C18.4997 1.82142 18.301 1.91078 18.0938 1.91078H0.90625C0.69905 1.91078 0.500336 1.82142 0.353823 1.66235C0.20731 1.50328 0.125 1.28753 0.125 1.06257Z'
        fill='#525252'
      />
    </svg>
  )
}

export default function SearchBar({
  onChange,
  onSubmit,
  wFull,
  filter,
  value,
}: {
  onChange?: Function
  onSubmit: Function
  wFull?: boolean
  filter?: any[]
  value?: string
}) {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div
      className={cn(
        'flex flex-row items-center gap-2',
        wFull ? 'w-full' : 'w-80'
      )}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (inputRef.current) {
            onSubmit(inputRef.current?.value)
            inputRef.current.value = ''
            inputRef.current.blur()
          }
        }}>
        <div className='flex w-full flex-row items-center justify-between rounded-3xl bg-neutral-50 px-4 py-1 shadow-2'>
          <input
            type='text'
            placeholder='Search'
            value={value}
            onChange={(e) => {
              if (onChange) {
                onChange(e.target.value)
              }
            }}
            className='w-full border-none bg-neutral-50 text-lg font-light text-mgray-1 outline-none placeholder:text-lg placeholder:font-light placeholder:text-mgray-2'
            ref={inputRef}
          />
          <button className='h-full px-1' type='submit'>
            <MagnifyingGlassIcon stroke='#525252' className='w-4' />
          </button>
        </div>
      </form>

      {filter && (
        <>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className='flex flex-row items-center justify-between gap-2 rounded-3xl bg-neutral-50 px-4 py-1 shadow-2'>
            <FilterIcon />
            <p className='text-lg font-light text-neutral-600'>Filter</p>
          </button>
          {/* <div className='relative'>
            {
              isFilterOpen && (
                <div className='absolute py-1 px-4 w-fit bg-neutral-50 shadow-2'>
                  {
                    filter.map((item, index) => (
                      <div key={index} className='flex flex-col gap-2 w-fit max-w-80'>
                        <p className='w-full font-light text-md text-neutral-600'>{item.category}</p>
                        <div className='flex flex-row gap-2 w-full'>
                          {item.options.map((option: any, index: number) => (
                            <button 
                              key={index} 
                              className='inline-block py-1 px-4 rounded-3xl border bg-neutral-50 border-neutral-600'
                              
                            >
                              <p className='font-light text-md text-neutral-600'>{option}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              )
            }
          </div> */}
        </>
      )}
    </div>
  )
}

