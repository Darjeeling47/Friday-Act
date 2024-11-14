export default async function createSemester(
  year: number,
  semester: number,
  startDate: string,
  endDate: string
) {
  try {
    const response = await fetch(
      `${process.env.PUBLIC_BACKEND_URL}api/v1/semesters`,
      {
        method: 'POST',
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
      throw new Error('Failed to create semester')
    }
    return await response.json()
  } catch (err) {
    console.error('Error creating semester:', err)
    return null
  }
}
