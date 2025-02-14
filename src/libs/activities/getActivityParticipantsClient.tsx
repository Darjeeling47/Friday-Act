// Workaround for bug: "× You're importing a component that needs next/headers"
import Cookies from 'js-cookie'

export default async function getActivityParticipantsClient({
  id,
  search,
  admission_year,
}: {
  id: string
  search?: string
  admission_year?: number
}) {
  const token = Cookies.get('access_token')

  let query = ''
  if (search || admission_year) {
    query += '?'
  }

  if (search) {
    query += `&search=${search}`
  }

  if (admission_year) {
    query += `&admission_year=${admission_year}`
  }

  // Construct the API endpoint URL
  const url = `${process.env.PUBLIC_BACKEND_URL}/api/v1/activities/${id}/participants`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-cache',
  })

  // Check if the response is successful
  if (!response.ok) {
    throw new Error('get activity participants failed')
  }

  // Return data
  const data = await response.json()
  return data
}
