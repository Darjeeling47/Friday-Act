'use client'

// import react
import Link from 'next/link'

export default function Button({
  varient = 'primary',
  children,
  className,
  onClick,
  href,
  target,
}: {
  varient?: 'primary' | 'secondary' | 'outline' | 'text' | 'disabled'
  children: React.ReactNode
  className?: string
  onClick?: Function
  href?: string
  target?: string
}) {
  // Styling variables
  let theme = 'text-mgray-4 bg-vidva hover:bg-vidva/80'
  if (varient === 'secondary')
    theme = 'text-mgray-4 bg-mgray-2 hover:bg-mgray-2/80'
  if (varient === 'outline')
    theme =
      'text-mgray-2 border-2 border-mgray-2 hover:text-vidva hover:border-vidva shadow-none'
  if (varient === 'text') theme = 'text-vidva hover:text-vidva/50 shadow-none'
  if (varient === 'disabled')
    theme = 'text-mgray-5 bg-mgray-3 cursor-not-allowed'

  // return
  if (href) {
    return (
      <Link href={href}>
        <a
          target={target}
          className={`px-4 py-2 rounded-md shadow ${theme} ${className}`}>
          {children}
        </a>
      </Link>
    )
  } else {
    return (
      <button
        onClick={() => {
          onClick ? onClick() : ''
        }}
        className={`px-4 py-2 rounded-md shadow ${theme} ${className}`}>
        {children}
      </button>
    )
  }
}
