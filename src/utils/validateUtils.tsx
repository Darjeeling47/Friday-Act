

export function validateHexColor(color:string) {
  const hexRegex = /^[0-9a-f]{6}$/;

  if (!hexRegex.test(color)) {
    return {
      status: 400,
      message: "The color format is not in HEX format.",
    };
  }

  return {
    status: 200,
    message: "The color format is valid.",
  };
}