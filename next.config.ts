/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/powerbi-portfolio',
  assetPrefix: '/powerbi-portfolio/',
  images: {
    unoptimized: true,
    remotePatterns: [],
    domains: [],
    loader: 'default',
    path: '',
  },
  // Adiciona esta configuração para garantir que os assets sejam servidos corretamente
  webpack: (config: { output: any }) => {
    config.output = {
      ...config.output,
      publicPath: `/powerbi-portfolio/_next/`,
    }
    return config
  }
}

export default nextConfig