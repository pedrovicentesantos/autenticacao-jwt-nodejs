const bcrypt = require('bcrypt');

const hashSaltRounds = 10;

const hash = (value) => bcrypt.hash(value, hashSaltRounds);

const compare = (value, h) => bcrypt.compare(value, h);

module.exports = {
  hash,
  compare,
};
