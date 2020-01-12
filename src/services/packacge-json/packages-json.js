class PackageJson {
  constructor() {
    this.__packages = {
      name: 'bootstrapper',
      dependencies: {},
      devDependencies: {}
    };
  }

  addDependency(packageName) {
    // TODO: get the latest version of the package from unpkg
    this.__packages.dependencies[packageName] = 'latest';
  }

  addDevDependency(packageName) {
    // TODO: get the latest version of the package from unpkg
    this.__packages.devDependencies[packageName] = 'latest';
  }

  getPackageJson() {
    return this.__packages;
  }
}

export default new PackageJson();
