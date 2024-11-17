export default async function deleteTag({
  id
}: {
  id: string
}) {
  // Create an AbortController instance
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // Set timeout to 5 seconds

  try {
    const response = await fetch(`${process.env.PUBLIC_BACKEND_URL}api/v1/tags/${id}`, {
      method: 'DELETE',
      signal: controller.signal, // Attach the AbortController's signal to the fetch request
    });

    // Clear the timeout if the request completes in time
    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to delete tag: ${response.status} ${errorText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error delete a tag:", err)
    return null
  }
}