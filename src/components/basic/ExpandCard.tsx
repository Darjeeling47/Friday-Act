// Import react
import React, { useState } from 'react'

export default function ExpandCard({
  title,
  children
}: {
  title: string
  children: React.ReactNode 
}) {
  // Variable - Primary
  const [expanded, setExpanded] = useState(false)

  // Return
  return (
    <div className='border-b-bg-d' onClick={() => setExpanded(!expanded)}>
      { /* Collapsed */ }
      <div className={`flex items-center justify-between py-3 pl-7 pr-2 text-sm font-medium ${expanded ? 'text-vidva' : 'text-mgray-2 border-b border-b-mgray-6'}`}>
        <p className='font-medium text-[13px]'>{title}</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='10'
          height='10'
          fill='currentColor'
          className={`bi bi-caret-down-fill ${expanded ? 'transform rotate-180 fill-vidva' : ''}`}
          viewBox='0 0 16 16'
        >
          <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
        </svg>
      </div>
      { /* Expanded */ }
      <div className={`${expanded ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  )
}
