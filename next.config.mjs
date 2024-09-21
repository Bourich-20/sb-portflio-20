/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.pdf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]', // Pour personnaliser le nom du fichier
          },
        },
      });
      return config;
    },
  };
  
  export default nextConfig;
  