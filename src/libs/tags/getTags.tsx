export default async function getTags({
  search
}:{
  search?:string
}) {
  try {
      const response = await fetch(
        `${process.env.PUBLIC_BACKEND_URL}api/v1/tags?search=${search}`
      )
      if (!response.ok) {
          throw new Error(`Failed to fetch tags ${response.statusText}`);
      }
      return await response.json();
  } catch (err) {
      console.error("Error fetching tags:", err)
      return null
  }
}