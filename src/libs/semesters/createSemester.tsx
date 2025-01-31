import Cookies from 'js-cookie'

export default async function createSemester(
  year: number,
  semester: number,
  startDate: string,
  endDate: string
): Promise<any> {
  try {
    const token = Cookies.get('access_token')
    const backendUrl = process.env.PUBLIC_BACKEND_URL

    const data = {
      year,
      semester,
      startDate,
      endDate,
    }

    if (!backendUrl || !token) {
      throw new Error('Environment variables are not set correctly')
    }

    const response = await fetch(`${backendUrl}/api/v1/semesters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
      cache: 'no-cache',
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to create semester: ${errorText}`)
    }

    return await response.json()
  } catch (err) {
    console.error('Error creating semester:', err)
    return null
  }
}
