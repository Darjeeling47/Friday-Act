export function validateHexColor(color: string) {
  const hexColorRegex = /^[0-9a-fA-Z]{3,6}$/;

  return hexColorRegex.test(color)
}