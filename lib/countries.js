const _request = require('./request.js');

module.exports = cb => _request('/countries', cb);
