export async function getActivities({
  group,
  limit,
  pagination,
}: {
  group?: string
  limit?: number
  pagination?: number
}) {
  let query = "?"
  if (group) { 
    query = query + "group=" + group 
  }
  try {
    const response = await fetch(
      `${process.env.PUBLIC_BACKEND_URL}api/v1/activities/${query}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.USER_TOKEN}`,
        },
      }
    )

  // Check if the response is successful
  if (!response.ok) {
    throw new Error('get activiies failed')
  }

  // Return data
  const data = await response.json()
  console
  return data
}
