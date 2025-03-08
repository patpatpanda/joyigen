/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Gör builden mindre och optimerad

  experimental: {
    optimizeCss: true, // Minskar storleken på CSS-filer
    turboMode: true, // Förbättrar build-hastigheten
  },

  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: "all",
      maxSize: 2000000, // Dela upp stora filer i mindre bitar (2MB)
    };
    return config;
  },

  images: {
    domains: ["joybilder.blob.core.windows.net"], // Din Blob Storage domän
  },
};

export default nextConfig;
