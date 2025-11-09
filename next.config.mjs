/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // For Vercel deployment: Remove or comment out the 'experimental' section below
  experimental: {
    // Enables React 19.2 canary features (useEffectEvent, Activity)
    reactCompiler: false,
  },
  // Note: Cloudflare Pages works well with Next.js 16 out of the box
  // No special 'output' configuration needed for hybrid rendering
}

export default nextConfig
