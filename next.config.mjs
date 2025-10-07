/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '**',
      },
    ],
  },
  webpack(config, { dev }) {
    if (!dev) {
      if (!config.optimization) config.optimization = {};
      config.optimization.minimize = true;
      config.optimization.minimizer = [];
    }
    return config;
  }
};

export default nextConfig;
