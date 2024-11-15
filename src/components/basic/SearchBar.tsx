'use client'

// import react
import { useState } from 'react';

// import components
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// import util
import { cn } from '@/utils/utils';

// import icon
import { FilterIcon } from '@/assets/icon/filterIcon';

export default function SearchBar({
  onChange,
  wFull,
  value,
  className
}: {
  onChange: Function;
  wFull?: boolean;
  value?: string;
  className?: string
}) {
  // Primary variables
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(value || '');

  // Handle for searching items
  const searchHandle = () => {
    onChange(searchValue);
  }

  // Handle when user press enter key
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchHandle();
    }
  };

  // return
  return (
    <div className={cn("flex flex-row items-center gap-2", wFull ? 'w-full' : 'w-80', className)}>
      <div className="flex flex-row justify-between items-center bg-neutral-50 shadow-2 px-4 py-1 rounded-3xl w-full">
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-neutral-50 border-none w-full font-light placeholder:font-light text-body text-mgray-1 placeholder:text-lg placeholder:text-mgray-2 outline-none"
        />
        <button
          className='px-1 h-full'
          onClick={searchHandle}
        >
          <MagnifyingGlassIcon stroke="#525252" className="w-4" />
        </button>
      </div>
    </div>
  );
}
