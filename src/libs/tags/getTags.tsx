// import cookies
import Cookies from 'js-cookie'

// import interface
import { Tags } from "@/interface/tagsInterface";

export default async function getTags({
  search,
  limit,
  page,
}: {
  search?: string
  limit?: number
  page?: number
}): Promise<Tags | null> {
  // Primary variable
  const token = Cookies.get('access_token')

  try {
    let paramsString = '?'
    if (search) {
      paramsString += `search=${search}`
    }
    if (limit) {
      paramsString += `&limit=${limit}`
    }
    if (page) {
      paramsString += `&page=${page}`
    }
    const url = `${process.env.PUBLIC_BACKEND_URL}/api/v1/tags${paramsString}`
    const response = await fetch(
      url,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        },
        cache: 'no-cache',
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch tags ${response.statusText}`);
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching tags:", err)
    return null
  }
}