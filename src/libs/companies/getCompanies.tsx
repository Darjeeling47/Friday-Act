// import react
import { cookies } from 'next/headers'

export default async function getCompanies({
  search,
  page,
  limit
}:{
  search?: string,
  page?: string,
  limit?: string
}){
  const cookieStore = cookies()
  const token = cookieStore.get('access_token')?.value
  let queryParams = "?"
  if(search){
    queryParams += `search=${search}&`
  }
  if(page){
    queryParams += `page=${page}&`
  }
  if(limit){
    queryParams += `limit=${limit}&`
  }
  try{
    const response = await fetch(`${process.env.IDP_URL}/internal/v1/companies${queryParams}`,{
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    
    const data = await response.json()
    return data
  } catch (err) {
    console.error("Error create a tag:", err)
    return null
  }
}