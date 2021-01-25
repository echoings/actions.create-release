function filterPackageJson(files: Array<string>) {
  return files.filter((f) => f.match(/package.json$/));
}

export {
  filterPackageJson
}
