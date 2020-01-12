import fs from './fs';
import webpackConfig from './webpack-config';
import packageJson from './packages-json';

class Bootstrapper {
  constructor(state) {
    this.__state = state;
  }

  bootstrap() {
    this.configureTranspilers(this.__state.transpilers);
    fs.addFile('webpack.config.js', webpackConfig.getConfig());
    fs.addFile('package.json', packageJson.getPackageJson());
  }

  configureTranspilers(transpilers) {
    for (const transpiler in transpilers) {
      if (transpilers[transpiler].isRequired) {
        this.configureTranspiler(transpiler, transpilers[transpiler]);
      }
    }
  }

  configureTranspiler(transpiler, transpilerOptions) {
    switch (transpiler) {
      case 'babel':
        /* eslint-disable no-useless-escape */
        webpackConfig.addLoader('/^.js$/', transpiler, {
          presets: ['@babel/preset-env'],
          ...transpilerOptions
        });
        packageJson.addDevDependency('@babel/core');
        packageJson.addDevDependency('@babel/preset-env');
        break;
      case 'typescript':
        // TODO: add the loaders required for typescript
        break;
      case 'flow':
        // TODO: add the loaders required for flow
        break;
      default:
        throw new Error(`unknow transpiler ${transpiler}`);
    }
  }

  exportAsZip() {
    // TODO: implement a zip download feature
    console.log(fs.getFS());
  }
}

export default Bootstrapper;
