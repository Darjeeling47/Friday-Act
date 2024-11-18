import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// function to exchange code for token
async function exchangeCodeForToken(code: string) {
  const response = await fetch(
    'https://cedtintern.cp.eng.chula.ac.th/api/oauth/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: `${process.env.IDP_CLIENT_ID}`,
        client_secret: `${process.env.IDP_CLIENT_SECRET}`,
        code,
        grant_type: 'authorization_code',
        redirect_uri: `${process.env.REDIRECT_URI}`,
        scope:
          'profile student_contact_info student_academic_badge student_activity_badge',
      }).toString(),
    }
  )

  if (!response.ok) {
    throw new Error('Failed to exchange code for token')
  }

  return await response.json()
}

// function to get user profile data
async function getMe(token: string) {
  const url = `${process.env.IDP_URL}/api/oauth/v1/profile`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to get profile data')
  }

  return await response.json()
}

// POST request handler
export async function POST(req: Request) {
  const { code } = await req.json()

  if (!code) {
    return NextResponse.json({ error: 'Code not provided' }, { status: 400 })
  }

  try {
    // Exchange code for token
    const tokenData = await exchangeCodeForToken(code)
    const token = tokenData.access_token
    console.log(token)

    if (!token) {
      throw new Error('Token not found')
    }

    // Fetch user profile data
    const userProfile = await getMe(token)
    // console.log(userProfile)

    // Store data in cookies
    const response = NextResponse.json({ success: true })
    const cookieStore = cookies()

    // Store the token
    cookieStore.set('access_token', token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: tokenData.expires_in,
    })

    // Store user profile data
    cookieStore.set('user_profile', JSON.stringify(userProfile), {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    })

    // Store login state
    cookieStore.set('is_logged_in', 'true', {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    })

    // Redirect user to the homepage
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/`)
  } catch (error) {
    console.error('Error in callback handler:', error)
    return 'error'
  }
}