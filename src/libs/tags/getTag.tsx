// import cookies
import Cookies from 'js-cookie'

// import interface
import { Tag } from "@/interface/tagsInterface";

export default async function getTag({
  id
}: {
  id: string
}): Promise<Tag | null> {
  // Primary variable
  const token = Cookies.get('access_token')

  try {
    const response = await fetch(`${process.env.PUBLIC_BACKEND_URL}/api/v1/tags/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      },
      cache: 'no-cache',
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch a tag: ${response.status} ${errorText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error fetching a tag:", err)
    return null
  }
}