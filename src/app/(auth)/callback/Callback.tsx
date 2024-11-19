'use client'

import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function Callback() {
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const code = searchParams.get('code')

    if (code) {
      // Send the code to the server-side route for processing
      fetch('/api/auth/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
        .then((res) => {
          if (res.ok) {
            // Redirect to the homepage on success
            router.replace('/')
          } else {
            console.error('Failed to process login')
          }
        })
        .catch((error) => {
          console.error('Error during login:', error)
        })
    }
  }, [searchParams, router])

  return (
    <div className='flex flex-col items-center justify-center bg-white py-12'>
      <div className='mb-4 text-center'>
        <h2 className='text-xl font-semibold text-gray-700'>
          Processing your login...
        </h2>
        <p className='text-sm text-gray-500'>
          Please wait a moment while we authenticate your session.
        </p>
      </div>
      <div className='flex items-center justify-center space-x-2'>
        <div className='h-12 w-12 animate-spin rounded-full border-4 border-gray-500 border-t-transparent'></div>
      </div>
    </div>
  )
}
