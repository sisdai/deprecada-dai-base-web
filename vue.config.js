module.exports = {
  productionSourceMap: true,
  outputDir: 'dist',
  publicPath: process.env.VUE_APP_BASE_ROUTE || '/',
  filenameHashing: process.env.VUE_APP_HASH || false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import \'@/scss/_variables.scss\';',
      },
    },
  },
};
