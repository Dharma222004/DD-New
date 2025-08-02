/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // For GitHub Pages deployment
  output: process.env.DEPLOY_TARGET === 'github-pages' ? 'export' : undefined,
  trailingSlash: process.env.DEPLOY_TARGET === 'github-pages' ? true : false,
  images: {
    domains: ['i.ibb.co', 'blob.v0.dev'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blob.v0.dev',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  // Uncomment these lines if deploying to GitHub Pages
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
}

export default nextConfig
