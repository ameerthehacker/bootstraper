class FS {
  constructor() {
    this.__fs = {};
  }

  addFile(path, content) {
    this.__fs[path] = content;
  }

  deleteFile(path) {
    if (this.__fs[path]) {
      delete this.__fs[path];
    }
  }

  getFS() {
    return this.__fs;
  }
}

export default new FS();
