const jwt = require('jsonwebtoken');
require('dotenv').config();

const signOptions = {
  algorithm: 'RS256',
  expiresIn: '15m',
};

const jwtPublicKey = process.env.JWT_PUBLIC_KEY;
const jwtPrivateKey = process.env.JWT_PRIVATE_KEY;

const sign = (payload) => jwt.sign(payload, jwtPrivateKey, signOptions);

const verify = (token) => new Promise((resolve, reject) => jwt.verify(
  token,
  jwtPublicKey,
  (error, data) => {
    error ? reject(error) : resolve(data);
  },
));

module.exports = {
  sign,
  verify,
};
