import Cookies from 'js-cookie';

export const requestAttendance = async (applicationId: number) => {
  // Construct the API endpoint URL dynamically
  const url = `${process.env.PUBLIC_BACKEND_URL}/api/v1/application/${applicationId}`;
  
  // Get the token from the cookie
  const token = Cookies.get('access_token');
  
  // Validate token existence
  if (!token) {
    throw new Error('Authorization token is missing');
  }
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  
  // Check if the response is successful
  if (!response.ok) {
    throw new Error('Failed to fetch application data');
  }
  
  // Parse and return the data
  const data = await response.json();
  return data;
};