'use client'
// import react
import { useState, useEffect } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { cn } from '@/utils/utils'

// Debounce Hook
function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

// interface
interface SearchBarProps {
  onChange: (value: string) => void
  wFull?: boolean
  value?: string
  className?: string
}

export default function SearchBar({
  onChange,
  wFull,
  value = '',
  className,
}: SearchBarProps) {
  // Primary variables
  const [searchValue, setSearchValue] = useState<string>(value)
  const debouncedSearch = useDebounce(searchValue, 500)

  // Handle for searching items
  const handleSearch = () => {
    onChange(searchValue)
  }

  // Handle when user press enter key
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  // Handle for input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  // useEffect for handle search when value is empty
  useEffect(() => {
    if (searchValue.length === 0) {
      handleSearch()
    }
  }, [searchValue])

  // useEffect for handle search when debouncedSearch is changed
  useEffect(() => {
    if (debouncedSearch) {
      onChange(debouncedSearch)
    }
  }, [debouncedSearch])

  // return
  return (
    <div
      className={cn(
        'flex flex-row items-center gap-2',
        wFull ? 'w-full' : 'w-80',
        className
      )}>
      <div className='flex w-full flex-row items-center justify-between rounded-3xl bg-neutral-50 px-4 py-1 shadow-2'>
        <input
          type='text'
          placeholder='Search'
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className='text-body placeholder:text-lg w-full border-none bg-neutral-50 font-light text-mgray-1 outline-none placeholder:font-light placeholder:text-mgray-2'
        />
        <button className='h-full px-1' onClick={handleSearch}>
          <MagnifyingGlassIcon stroke='#525252' className='w-4' />
        </button>
      </div>
    </div>

  )



}
