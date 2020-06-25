const path = require('path')

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/professional': { page: '/professional' },
            '/contact': { page: '/contact' },
       }
  },	
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
