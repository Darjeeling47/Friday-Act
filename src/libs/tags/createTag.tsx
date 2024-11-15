// import interface
import { TagItem } from "@/interface/tagsInterface";

export default async function createTag({
  tag
}: {
  tag: TagItem
}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);
  const data = {
    name: tag.name,
    color: tag.color,
  }
  
  try {
    const response = await fetch(`${process.env.PUBLIC_BACKEND_URL}api/v1/tags`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      signal: controller.signal, // Attach the AbortController's signal to the fetch request
    });

    // Clear the timeout if the request completes in time
    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to create a tag: ${response.status} ${errorText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error create a tag:", err)
    return null
  }
}