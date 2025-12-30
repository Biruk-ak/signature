/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    resolveAlias: {
      canvas: './empty-module.js',
    },
    root: process.cwd(),
  },
}

export default nextConfig
