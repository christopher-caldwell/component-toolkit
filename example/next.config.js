const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const handleBundleAnalyzer = config => {
  if (process.env.ANALYZE) {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        openAnalyzer: true,
      })
    )
  }
}

const nextConfig = {
  images: {
    disableStaticImages: true,
  },
  trailingSlash: true,
  webpack: config => {
    handleBundleAnalyzer(config)
    return config
  },
}

module.exports = withPlugins([[withOptimizedImages]], nextConfig)
