export default async function deleteSemester(did: number) {
  try {
    const response = await fetch(
      `${process.env.PUBLIC_BACKEND_URL}api/v1/semesters/${did}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.USER_TOKEN}`,
        },
      }
    )
    if (!response.ok) {
      throw new Error('Failed to delete semester')
    }
    return await response.json()
  } catch (err) {
    console.error('Error deleting semester:', err)
    return null
  }
}
