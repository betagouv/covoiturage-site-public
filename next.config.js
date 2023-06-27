/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  webpack: (config, { webpack, isServer }) => {
    config.module.rules.push({
      test: /\.woff2$/,
      type: "asset/resource"
    });
    
    const envs = {};
    
    Object.keys(process.env).forEach(env => {
      if (env.startsWith('NEXT_PUBLIC_')) {
        envs[env] = process.env[env];
      }
    })
    
    if (!isServer) {
      config.plugins.push(new webpack.DefinePlugin({
        'process.env': JSON.stringify(envs),
      }))
    }

    return config
  },
};

module.exports = nextConfig;