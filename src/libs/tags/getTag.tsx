// import interface
import { Tag } from "@/interface/tagsInterface";

export default async function getTag({
  id
}: {
  id: string
}): Promise<Tag | null> {
  // Create an AbortController instance
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

  try {
    const response = await fetch(`${process.env.PUBLIC_BACKEND_URL}/api/v1/tags/${id}`, {
      method: 'GET',
      cache: 'no-cache',
      signal: controller.signal, // Attach the AbortController's signal to the fetch request
    });

    // Clear the timeout if the request completes successfully
    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch a tag: ${response.status} ${errorText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error fetching a tag:", err)
    return null
  }
}