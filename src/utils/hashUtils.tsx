// Helper function to clean the Base64 string (removes invalid characters and adjusts padding)
function cleanBase64Input(input: string): string {
  // Decode URL-encoded characters first (e.g., %3D to =)
  const urlDecodedInput = decodeURIComponent(input);

  // Remove non-base64 characters
  const cleanedInput = urlDecodedInput.replace(/[^A-Za-z0-9+/=]/g, '');

  // Calculate the required padding
  const padding = (4 - (cleanedInput.length % 4)) % 4;

  // Add padding if necessary
  if (padding > 0) {
    return cleanedInput + '='.repeat(padding);
  }
  return cleanedInput;
}

// Universal Base64 Encoder & Decoder
export function encodeBase64(value: string): string {
  // Encode the input to Base64
  return Buffer.from(value, 'utf8').toString('base64');
}

export function decodeBase64(encodedValue: string): string {
  // Clean the Base64 input before decoding
  const cleanedInput = cleanBase64Input(encodedValue);

  // Decode the cleaned Base64 input
  try {
    return Buffer.from(cleanedInput, 'base64').toString('utf8');
  } catch (error) {
    // Handle decoding errors gracefully
    console.error('Decoding error:', error);
    throw new Error('Invalid Base64 string');
  }
}
