const _request = require('./request.js');
const { checkDataProperties, failureForMissingProperty } = require('./utils.js');

const today = (data, cb) => {
  if (!checkDataProperties(data, ['dob', 'sex', 'country'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/wp-rank/${data.dob}/${data.sex}/${data.country}/today`, cb);
};

const onDate = (data, cb) => {
  if (!checkDataProperties(data, ['dob', 'sex', 'country', 'date'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/wp-rank/${data.dob}/${data.sex}/${data.country}/on/${data.date}`, cb);
};

const whenAged = (data, cb) => {
  if (!checkDataProperties(data, ['dob', 'sex', 'country', 'age'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/wp-rank/${data.dob}/${data.sex}/${data.country}/aged/${data.age}`, cb);
};

const timeAgo = (data, cb) => {
  if (!checkDataProperties(data, ['dob', 'sex', 'country', 'offset'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/wp-rank/${data.dob}/${data.sex}/${data.country}/ago/${data.offset}`, cb);
};

const inTime = (data, cb) => {
  if (!checkDataProperties(data, ['dob', 'sex', 'country', 'offset'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/wp-rank/${data.dob}/${data.sex}/${data.country}/in/${data.offset}`, cb);
};

const whenRanked = (data, cb) => {
  if (!checkDataProperties(data, ['dob', 'sex', 'country', 'rank'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/wp-rank/${data.dob}/${data.sex}/${data.country}/ranked/${data.rank}`, cb);
};

const wpRank = {
  today,
  onDate,
  whenAged,
  ago: timeAgo,
  in: inTime,
  whenRanked,
};

module.exports = wpRank;
