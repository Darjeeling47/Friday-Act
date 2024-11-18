import { Semesters } from '@/interface/semestersInterface'

export default async function getSemesters({
  search,
  limit,
  page,
}: {
  search?: string
  limit?: number
  page?: number
}): Promise<Semesters | null> {
  try {
    let paramsString = '?search='
    if (search) {
      paramsString += `search=${search}`
    }
    if (limit) {
      paramsString += `&limit=${limit}`
    }
    if (page) {
      paramsString += `&page=${page}`
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
