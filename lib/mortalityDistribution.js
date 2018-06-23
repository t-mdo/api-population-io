const _request = require('./request.js');
const { checkDataProperties, failureForMissingProperty } = require('./utils.js');

const today = (data, cb) => {
  if (!checkDataProperties(data, ['age', 'sex', 'country'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/mortality-distribution/${data.country}/${data.sex}/${data.age}/today`, cb);
};

module.exports = {
  today,
};
