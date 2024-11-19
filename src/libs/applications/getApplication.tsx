// export default async function getApplication(token: string, id: number) {
//     try {
//         const tokeneiei = process.env.NEXT_PUBLIC_TOKEN
//         const response = await fetch(`${process.env.PUBLIC_BACKEND_URL}/api/v1/applications/${id}`, {
//             method: 'GET',
//             headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${tokeneiei}`,
//             },
//         });
//         if (!response.ok) {
//             throw new Error(`Failed to fetch applications id ${response.statusText}`);
//         }
//         return await response.json();
//     } catch (err) {
//         console.error("Error fetching applications id:", err)
//         return null
//     }
// }

import Cookies from 'js-cookie'
export default async function getApplications(group?: string, search?: string) {
  const queryParams = new URLSearchParams()
  if (group) queryParams.append('group-by', group)
  if (search) queryParams.append('search', search)
  // Construct the API endpoint URL dynamically
  const url = `${process.env.PUBLIC_BACKEND_URL}/api/v1/applications?${queryParams.toString()}`
  // Get the token from the cookie
  const token = Cookies.get('access_token')
  // Validate token existence
  if (!token) {
    throw new Error('Authorization token is missing')
  }
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  })
  // Check if the response is successful
  if (!response.ok) {
    throw new Error('Failed to fetch applications')
  }
  // Parse and return the data
  const data = await response.json()
  return data
}