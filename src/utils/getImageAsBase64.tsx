export async function getImageAsBase64(url: string): Promise<string | undefined> {
  try {
    const imgSrc = `${process.env.PUBLIC_BACKEND_URL}${url}`;
    // console.log(imgSrc);
    const response = await fetch(imgSrc);
    if (!response.ok) {
      return undefined;
    }

    const blob = await response.blob();
    return await convertBlobToBase64(blob);
  } catch (error) {
    console.error("Error fetching image:", error);
    return undefined;
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