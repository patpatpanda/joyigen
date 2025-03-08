/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Gör builden mindre och optimerad

  experimental: {
    optimizeCss: true, // Komprimerar CSS
  },

  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: "all",
      maxSize: 2000000, // Maxstorlek 2MB per bundle
    };
    return config;
  },

  images: {
    domains: ["joybilder.blob.core.windows.net"], // Din Blob Storage domän
  },

  compress: true, // Gzip-komprimering för att minska storlek

  productionBrowserSourceMaps: false, // Tar bort sourcemaps för att minska storlek
};

export default nextConfig;
