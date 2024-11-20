'use client'

import Button from '@/components/basic/Button'
import Image from 'next/image'

export default function Login() {
  const handleLogin = () => {
    const clientId = 'cedt-friday-activity'
    const redirectUri = encodeURIComponent(`${process.env.REDIRECT_URI}`)
    const scope = encodeURIComponent(
      'profile student_contact_info student_academic_badge student_activity_badge'
    )
    const state = 'xyz' // You can generate a unique state for CSRF protection

    const oauthUrl = `https://cedtintern.cp.eng.chula.ac.th/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code&state=${state}`

    // Redirect to the OAuth authorization endpoint
    window.location.href = oauthUrl
  }

  // return
  return (
    <div className='mx-auto flex w-80 flex-col items-center justify-center gap-6 md:w-96'>
      <Image
        src='/logo/Logo_FA.png'
        alt='logo'
        width={1000}
        height={1000}
        className='mr-4 h-14 w-fit'
      />
      <h1 className='text-2xl font-semibold text-mgray-1 md:text-3xl'>
        Friday Activity System
      </h1>
      <Button onClick={handleLogin} className='w-full'>
        เข้าสู่ระบบด้วยบัญชี myCourseVille
      </Button>
    </div>
  )
}
