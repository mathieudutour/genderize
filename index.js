module.exports = function (firstname, cb) {
  cb(null, 'they')
}

module.exports.sync = function () {
  return 'they'
}

module.exports.list = function (firstnames, cb) {
  cb(null, firstnames.map(function () { return 'they' }))
}
