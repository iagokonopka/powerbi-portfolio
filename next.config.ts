/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/powerbi-portfolio',
  assetPrefix: '/powerbi-portfolio/',
  images: {
    unoptimized: true,
  }
}

export default nextConfig;