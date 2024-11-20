import { Semesters } from '@/interface/semestersInterface'

export default async function getSemesters({
  search,
}: {
  search?: string
}): Promise<Semesters | null> {
  try {
    let paramsString = '?search='
    if (search) {
      paramsString += search
    }
    const backendUrl = process.env.PUBLIC_BACKEND_URL

    if (!backendUrl) {
      throw new Error(
        'Environment variable PUBLIC_BACKEND_URL is not set correctly'
      )
    }

    const response = await fetch(
      `${backendUrl}/api/v1/semesters${paramsString}`
    )
    if (!response.ok) {
      throw new Error(`Failed to fetch semesters: ${response.statusText}`)
    }

    return await response.json()
  } catch (err) {
    console.error('Error fetching semesters:', err)
    return null
  }
}
