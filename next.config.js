/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PUBLIC_BACKEND_URL: process.env.PUBLIC_BACKEND_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '143.198.87.246',
        port: '',
        pathname: '/**',
      },
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
