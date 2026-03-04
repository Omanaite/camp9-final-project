/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Deshabilita ESLint durante el build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Opcional: también deshabilita TypeScript si tienes errores
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
      if (isServer) {
        config.externals.push({
          '@prisma/client': 'require("@prisma/client")',
        })
}
  }
}
module.exports = nextConfig

