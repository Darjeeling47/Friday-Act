// import cookies
import Cookies from 'js-cookie'

// import interface
import { TagItem } from "@/interface/tagsInterface";

export default async function editTag({
  tag
}: {
  tag: TagItem
}) {
  // Primary variable
  const token = Cookies.get('access_token')
  const data = {
    name: tag.name,
    color: tag.color,
  }

  try {
    const response = await fetch(
      `${process.env.PUBLIC_BACKEND_URL}/api/v1/tags/${String(tag.id)}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
        cache: 'no-cache',
      }
    )

    return await response.json();
  } catch (err) {
    console.error("Error edit a tag:", err)
    return null
  }
}