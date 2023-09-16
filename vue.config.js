
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  pluginOptions: {
    'style-resources-loader': {
      test: /\/.scss$/,
      loaders: ['style', 'css', 'sass'],
    },
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
};
