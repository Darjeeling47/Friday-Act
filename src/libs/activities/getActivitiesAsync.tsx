// import cookies
import { cookies } from 'next/headers';

// import interface
import { ActivitiesGroupByDate, ActivitiesGroupBySemester, Activities } from '@/interface/activitiesInterface';

export default async function getActivitiesAsync({
  search,
  group,
  limit,
  page,
}: {
  search?: string,
  group?: string,
  limit?: string,
  page?: string,
}): Promise<ActivitiesGroupByDate | Activities | ActivitiesGroupBySemester | null> {
  // Primary variable
const cookieStore = cookies()
const token = cookieStore.get('access_token')?.value
  let query = '?'
  if (search && search.length > 0) {
    query += `search=${search}&`
  }
  if (group && group.length > 0) {
    query += `group=${group}&`
  }
  if (limit) {
    query += `limit=${limit}&`
  }
  if (page) {
    query += `page=${page}&`
  }

  // Construct the API endpoint URL
  const url = `${process.env.PUBLIC_BACKEND_URL}/api/v1/activities${query}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Check if the response is successful
  if (!response.ok) {
    throw new Error('get activities failed');
  }

  // Return data
  const data = await response.json()
  return data
}
