export default async function createTag({
  tagName,
  tagColor
}: {
  tagName: string,
  tagColor: string
}) {
  const data = {
    name: tagName,
    color: tagColor,
  }
  
  try {
    const response = await fetch(`${process.env.PUBLIC_BACKEND_URL}/api/v1/tags`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      cache: 'no-cache',
    });

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