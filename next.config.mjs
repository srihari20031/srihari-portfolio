/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "/fonts/[name].[ext]",
          },
        },
      });

      config.module.rules.push({
        test: /\.pdf$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            outputPath: "/pdfs",
            name: "[name].[ext]",
          },
        },
      });
    }
    return config;
  },
};

export default nextConfig;
