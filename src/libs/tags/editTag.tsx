// import interface
import { TagItem } from "@/interface/tagsInterface";

export default async function editTag({
  tag
}: {
  tag: TagItem
}) {
  // Create an AbortController instance
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);
  const data = {
    name: tag.name,
    color: tag.color,
  }

  try {
    const response = await fetch(
      `${process.env.PUBLIC_BACKEND_URL}api/v1/tags/${tag.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: controller.signal, // Attach the AbortController's signal to the fetch request
      }
    )

    // Clear the timeout if the request completes in time
    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to edit a tag: ${response.status} ${errorText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error edit a tag:", err)
    return null
  }
}