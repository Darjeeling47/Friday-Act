/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    PUBLIC_BACKEND_URL: process.env.PUBLIC_BACKEND_URL,
    // USER_TOKEN: process.env.USER_TOKEN,
  },
}

module.exports = nextConfig