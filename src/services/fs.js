class FS {
  constructor() {
    this.fs = {};
  }

  addFile(path, content) {
    this.fs[path] = content;
  }

  deleteFile(path) {
    if (this.fs[path]) {
      delete this.fs[path];
    }
  }

  exportAsZip() {
    // TODO: implement a zip download feature
    console.log(this.fs);
  }
}

export default new FS();
