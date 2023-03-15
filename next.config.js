/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'asset.hankooktire.com',
      },
    ],
  },
}

module.exports = nextConfig
