export async function getImageAsBase64(url: string): Promise<string> {
  try {
    const response = await fetch(`${process.env.PUBLIC_BACKEND_URL}${url}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const blob = await response.blob();
    return await convertBlobToBase64(blob);
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
}

function convertBlobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}