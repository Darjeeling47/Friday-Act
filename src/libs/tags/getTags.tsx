// import interface
import { Tags } from "@/interface/tagsInterface";

export default async function getTags({
  search
}: {
  search?: string
}): Promise<Tags | null> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(
      `${process.env.PUBLIC_BACKEND_URL}api/v1/tags?search=${search}`,
      {
        method: 'GET',
        signal: controller.signal // Attach the AbortController's signal to the fetch request
      }
    );

    // Clear the timeout if the request completes in time
    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch tags ${response.statusText}`);
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching tags:", err)
    return null
  }
}