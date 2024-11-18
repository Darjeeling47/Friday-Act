// import cookies
import Cookies from 'js-cookie'

export default async function deleteTag({
  id
}: {
  id: string
}) {
  // Primary variable
  const token = Cookies.get('access_token')

  try {
    const response = await fetch(`${process.env.PUBLIC_BACKEND_URL}/api/v1/tags/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-cache',
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to delete tag: ${response.status} ${errorText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error delete a tag:", err)
    return null
  }
}