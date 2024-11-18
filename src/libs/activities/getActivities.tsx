export default async function getActivities(token: string, group?: string) {
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
  console
  return data
}
