import Cookies from 'js-cookie'

export default async function ApplyActivity(id: string) {
  const token = Cookies.get('access_token')

  // Construct the API endpoint URL
  const url = `${process.env.PUBLIC_BACKEND_URL}/api/v1/activities/${id}/apply`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-cache',
  });

  // Check if the response is successful
  if (!response.ok) {
    throw new Error('apply failed');
  }

  // Return data
  const data = await response.json()
  return data
}