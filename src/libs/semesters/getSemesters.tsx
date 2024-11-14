export default async function getSemesters() {
    try {
        const response = await fetch(
          `http://143.198.87.246/api/v1/semesters?search=`
          //   `${process.env.PUBLIC_BACKEND_URL}api/v1/semesters?search=`
        )
        if (!response.ok) {
            throw new Error(`Failed to fetch semesters ${response.statusText}`);
        }
        return await response.json();
    } catch (err) {
        console.error("Error fetching semesters:", err)
        return null
    }
}