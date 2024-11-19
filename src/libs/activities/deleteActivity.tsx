import Cookies from 'js-cookie'

export default async function deleteActivity({ id }: { id: string }) {
  // Primary variable
  const token = Cookies.get('access_token')

  try {
    const response = await fetch(
      `${process.env.PUBLIC_BACKEND_URL}/api/v1/activities/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    if (response.ok) {
      console.log('Deleted')
    } else {
      console.log('Deletion failed with response: ' + response)
    }
  } catch (e) {
    console.log(e)
  }
}
