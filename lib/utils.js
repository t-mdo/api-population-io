const checkDataProperties = (obj, keys) => keys.reduce((bool, key) => bool && Object.prototype.hasOwnProperty.call(obj, key), true);

const failureForMissingProperty = (cb) => {
  const err = new Error('Missing property in data parameter');
  if (cb) {
    return cb(err, null);
  }
  return Promise.reject(err);
};

module.exports = {
  checkDataProperties,
  failureForMissingProperty,
};
