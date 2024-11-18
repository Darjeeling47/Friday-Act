export default async function getActivity({
  id
}:{
  id:string
}) {
  try {
    const response = await fetch(
      `${process.env.PUBLIC_BACKEND_URL}api/v1/activities/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.USER_TOKEN}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch activities: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching activities:", error)
    return null
  }
}