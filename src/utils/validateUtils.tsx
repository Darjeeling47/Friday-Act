export function validateHexColor(color:string) {
  const hexColorRegex = /^[0-9a-f]{6}$/;

  return hexColorRegex.test(color)
}