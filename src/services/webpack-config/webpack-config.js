class WebpackConfig {
  constructor() {
    this.__config = {
      entry: 'index.js',
      module: {
        rules: []
      }
    };
  }

  addLoader(testRegex, loader, loaderOptions) {
    this.__config.module.rules.push({
      test: testRegex,
      use: [
        loader,
        {
          loader,
          ...loaderOptions
        }
      ]
    });
  }

  getConfig() {
    return this.__config;
  }
}

export default new WebpackConfig();
