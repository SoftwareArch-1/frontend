/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
    url: process.env.NEXT_PUBLIC_API_GATEWAY_URL, // Pass through env variables
  },
}

module.exports = nextConfig
