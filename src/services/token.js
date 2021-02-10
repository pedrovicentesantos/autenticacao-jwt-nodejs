/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken');

const sign = (payload) => jwt.sign(payload, 'stringsegredo');

const verify = (token) => new Promise((resolve, reject) => jwt.verify(
  token,
  'stringsegredo',
  (error, data) => {
    error ? reject(error) : resolve(data);
  },
));

module.exports = {
  sign,
  verify,
};