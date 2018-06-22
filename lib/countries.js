const _request = require('./request.js');

module.exports = (cb) => {
  return _request('/countries', cb);
}
