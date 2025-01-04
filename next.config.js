/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PUBLIC_BACKEND_URL: process.env.PUBLIC_BACKEND_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cedtintern.cp.eng.chula.ac.th',
        port: '',
        pathname: '/**', // Match all paths
      },
    ],
  },
}

module.exports = nextConfig