'use client'
// import react
import { FormEventHandler, useRef, useState } from 'react'

// import components
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

//import util
import { cn } from '@/utils/utils';

export default function SearchBar({
  onChange,
  onSubmit,
  wFull,
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
    <div className={cn("flex flex-row items-center gap-2", wFull ? 'w-full' : 'w-80')}>
      <div className="flex flex-row justify-between items-center bg-neutral-50 shadow-2 px-4 py-1 rounded-3xl w-full">
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-neutral-50 border-none w-full font-light placeholder:font-light text-lg text-mgray-1 placeholder:text-lg placeholder:text-mgray-2 outline-none"
        />
        <button className='px-1 h-full'>
          <MagnifyingGlassIcon stroke="#525252" className="w-4" />
        </button>
      </div>
    </div>
  )
}

