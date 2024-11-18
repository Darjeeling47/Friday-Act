export default async function updateSemester(
  uid: number,
  year: number,
  semester: number,
  startDate: string,
  endDate: string
): Promise<any> {
  try {
    const backendUrl = process.env.PUBLIC_BACKEND_URL
    const userToken = process.env.USER_TOKEN

    if (!backendUrl || !userToken) {
      throw new Error('Environment variables are not set correctly')
    }

    const response = await fetch(`${backendUrl}/api/v1/semesters/${uid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        year,
        semester,
        startDate,
        endDate,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to update semester: ${errorText}`)
    }

    return await response.json()
  } catch (err) {
    console.error('Error updating semester:', err)
    return null
  }
}
