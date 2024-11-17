export async function getActivities({
  token,
  group,
  limit,
  pagination,
}: {
  token: string;
  group?: string;
  limit?: number;
  pagination?: number;
}) {
  let query = "?";
  if (group) {
    query += `group=${group}&`;
  }
  if (limit) {
    query += `limit=${limit}&`;
  }
  if (pagination) {
    query += `pagination=${pagination}&`;
  }

  // Remove the trailing '&' or '?' if present
  query = query.slice(0, -1);

  try {
    const response = await fetch(
      `${process.env.PUBLIC_BACKEND_URL}api/v1/activities/${query}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-cache",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch activities: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    return null;
  }
}