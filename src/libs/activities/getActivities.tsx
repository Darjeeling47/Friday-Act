import { cookies } from 'next/headers'

export default async function getActivities(group?: string) {
  const cookieStore = cookies()
  const token = cookieStore.get('access_token')?.value

  // Construct the API endpoint URL
  const url = `${process.env.PUBLIC_BACKEND_URL}/api/v1/activities${group ? `?group=${group}` : ''}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  })

  // Check if the response is successful
  if (!response.ok) {
    throw new Error('get activiies failed')
  }

  // Return data
  const data = await response.json()
  return data
}
