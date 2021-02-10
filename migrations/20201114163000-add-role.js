module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users',
    'role',
    {
      type: Sequelize.DataTypes.STRING,
    },
  ),

  down: (queryInterface) => queryInterface.removeColumn('users', 'role'),
};
