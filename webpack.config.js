// webpack.config.js
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  stats: 'errors-only', // Show only errors in build logs
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
  // Other configurations
};
