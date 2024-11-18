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

  return <p>Processing login...</p>
}
