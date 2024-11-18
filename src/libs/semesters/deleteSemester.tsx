export default async function deleteSemester(did: number): Promise<any> {
  try {
    const backendUrl = process.env.PUBLIC_BACKEND_URL
    const userToken = process.env.USER_TOKEN

    if (!backendUrl || !userToken) {
      throw new Error('Environment variables are not set correctly')
    }

    const response = await fetch(`${backendUrl}/api/v1/semesters/${did}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to delete semester: ${errorText}`)
    }

    return await response.json()
  } catch (err) {
    console.error('Error deleting semester:', err)
    return null
  }
}
