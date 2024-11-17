export default async function getSemesters(): Promise<any> {
  try {
    const backendUrl = process.env.PUBLIC_BACKEND_URL

    if (!backendUrl) {
      throw new Error(
        'Environment variable PUBLIC_BACKEND_URL is not set correctly'
      )
    }

    const response = await fetch(`${backendUrl}api/v1/semesters?search=`)
    if (!response.ok) {
      throw new Error(`Failed to fetch semesters: ${response.statusText}`)
    }

    return await response.json()
  } catch (err) {
    console.error('Error fetching semesters:', err)
    return null
  }
}
