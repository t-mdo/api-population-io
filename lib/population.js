const _request = require('./request.js');
const { checkDataProperties, failureForMissingProperty } = require('./utils.js');

const byAgeAndYear = (data, cb) => {
  if (!checkDataProperties(data, ['age', 'year'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/population/${data.year}/aged/${data.age}`, cb);
};

const byAgeAndYearAndCountry = (data, cb) => {
  if (!checkDataProperties(data, ['age', 'year', 'country'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/population/${data.year}/${data.country}/${data.age}`, cb);
};

const byYearAndCountry = (data, cb) => {
  if (!checkDataProperties(data, ['age', 'country'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/population/${data.year}/${data.country}`, cb);
};

const byAgeAndCountry = (data, cb) => {
  if (!checkDataProperties(data, ['age', 'country'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/population/${data.country}/${data.age}`, cb);
};

const byCountryAndDate = (data, cb) => {
  if (!checkDataProperties(data, ['country', 'date'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/population/${data.country}/${data.date}`, cb);
};

const todayAndTomorrow = (data, cb) => {
  if (!checkDataProperties(data, ['country'])) {
    return failureForMissingProperty(cb);
  }
  return _request(`/population/${data.country}/today-and-tomorrow`, cb);
};


module.exports = {
  byAgeAndYear,
  byAgeAndYearAndCountry,
  byAgeAndCountry,
  byYearAndCountry,
  byCountryAndDate,
  todayAndTomorrow,
};
