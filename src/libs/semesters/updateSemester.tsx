export default async function updateSemester(
  uid: number,
  year: number,
  semester: number,
  startDate: string,
  endDate: string
) {
  try {
    const response = await fetch(
      `${process.env.PUBLIC_BACKEND_URL}api/v1/semesters/${uid}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.USER_TOKEN}`,
        },
        body: JSON.stringify({
          year,
          semester,
          startDate,
          endDate,
        }),
      }
    )
    if (!response.ok) {
      throw new Error('Failed to update semester')
    }
    return await response.json()
  } catch (err) {
    console.error('Error updating semester:', err)
    return null
  }
}
