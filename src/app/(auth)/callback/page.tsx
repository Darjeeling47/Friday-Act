'use client'

// import react
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'


export default function Callback() {
  const searchParams = useSearchParams()
  
  // Status variables
  const [isProcessing, setIsProcessing] = useState<boolean>(true)

  // useEffect for processing login
  useEffect(() => {
    const code = searchParams.get('code')
    const state = searchParams.get('state')

    if (code) {
      exchangeCodeForToken(code)
    }
  }, [searchParams])

  const exchangeCodeForToken = async (code: string) => {
    try {
      const response = await fetch(
        'https://cedtintern.cp.eng.chula.ac.th/api/oauth/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: 'cedt-friday-activity',
            client_secret: 'QGbDd8uPaHfegBXubFZKFkUwfIv5DKvq',
            code: code,
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost:3000/callback',
            scope:
              'profile student_contact_info student_academic_badge student_activity_badge',
          }),
        }
      )

      if (response.ok) {
        const data = await response.json()
        console.log(data)
        return
      } else {
        console.error('Failed to exchange code for token')
      }

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  // return
  return (
    <div>
      <p>Processing login...</p>
    </div>
  )
}
