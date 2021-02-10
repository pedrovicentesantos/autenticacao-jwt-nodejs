module.exports = {
  up: (queryInterface) => queryInterface.addIndex('users', ['email'], { unique: true, name: 'users_email_unique' }),

  down: (queryInterface) => queryInterface.removeIndex('users', 'users_email_unique'),
};
