const axios = require('axios');

const URL = 'https://d6wn6bmjj722w.population.io/1.0/';

module.exports = (path, cb) => new Promise((resolve, reject) => {
  axios.get(`${URL}${path}`)
    .then(({ data }) => { 
      if (cb) {
        return cb(null, data);
      }
      return resolve(data);
    })
    .catch((err) => {
      if (cb) {
        return cb(err.response.data, null);
      }
      return reject(err.response.data);
    });
});
