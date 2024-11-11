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
}: {
  onChange: Function;
  wFull?: boolean;
  value?: string;
}) {
  // Primary variables
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // return
  return (
    <div className={cn("flex flex-row items-center gap-2", wFull ? 'w-full' : 'w-80')}>
      <div className="w-full flex flex-row items-center justify-between rounded-3xl bg-neutral-50 px-4 py-1 shadow-2">
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border-none bg-neutral-50 text-lg font-light text-mgray-1 outline-none placeholder:font-light placeholder:text-lg placeholder:text-mgray-2"
        />
        <button className='px-1 h-full'>
          <MagnifyingGlassIcon stroke="#525252" className="w-4" />
        </button>
      </div>
    </div>
  );
}
