// import interface
import { Company } from '../../interface/companiesInterface'

export default async function getCompany({
  id
}: {
  id:string
}): Promise<Company | null>{
    const url =`${process.env.PUBLIC_BACKEND_URL}/api/v1/companies/${id}`
    console.log(url)
    const response = await fetch(`${process.env.PUBLIC_BACKEND_URL}/api/v1/companies/${id}`, {
      method: "GET",
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Convert response to JSON
    })
    .then(data => {
      if(data)
        return data
      else
        return null
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      return null
    });
    console.log(response)
    return response

}