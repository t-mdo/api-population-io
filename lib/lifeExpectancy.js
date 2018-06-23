const _request = require('./request.js');
const { checkDataProperties, failureForMissingProperty } = require('./utils.js');

const remaining = (data, cb) => {
  if (!checkDataProperties(data, ['age', 'sex', 'country', 'date'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/life-expectancy/remaining/${data.sex}/${data.country}/${data.date}/${data.age}`, cb);
};

const total = (data, cb) => {
  if (!checkDataProperties(data, ['dob', 'sex', 'country'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/life-expectancy/total/${data.sex}/${data.country}/${data.dob}`, cb);
};

module.exports = {
  remaining,
  total,
};
