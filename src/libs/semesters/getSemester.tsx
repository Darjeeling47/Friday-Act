import { Semester } from '@/interface/semestersInterface'

export default async function getSemester(
  id: number
): Promise<Semester | null> {
  try {
    const backendUrl = process.env.PUBLIC_BACKEND_URL

    if (!backendUrl) {
      throw new Error(
        'Environment variable PUBLIC_BACKEND_URL is not set correctly'
      )
    }

    const response = await fetch(`${backendUrl}/api/v1/semesters/${id}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch semesters: ${response.statusText}`)
    }

    return await response.json()
  } catch (err) {
    console.error('Error fetching semesters:', err)
    return null
  }
}
