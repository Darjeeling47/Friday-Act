// import react
import Cookies from 'js-cookie' 

// import interface
import { Companies } from '../../interface/companiesInterface'

export default async function getCompanies({
  search,
  page = '1',
  limit = '25'
}: {
  search?: string,
  page?: string,
  limit?: string
}): Promise<Companies | null> {
  const token = Cookies.get('access_token')
  let queryParams = "?"
  if (search) {
    queryParams += `search=${search}&`
  }
  if (page) {
    queryParams += `page=${page}&`
  }
  if (limit) {
    queryParams += `limit=${limit}&`
  }
  try {
    const response = await fetch(`${process.env.PUBLIC_BACKEND_URL}/api/v1/companies${queryParams}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })

    if(!response.ok){
      const errorText = await response.text()
      throw new Error(`Failed to fetch companies ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (err) {
    console.error("Error create a tag:", err)
    return null
  }
}