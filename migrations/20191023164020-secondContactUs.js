'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('contactUs', 'lastName', {
        type:Sequelize.STRING,
        allowNull: true
      }),
      queryInterface.changeColumn('contactUs', 'address', {
        type:Sequelize.STRING,
        allowNull: true
      }),
      queryInterface.changeColumn('contactUs', 'title', {
        type:Sequelize.STRING,
        allowNull: true
      }),
      queryInterface.changeColumn('contactUs', 'phone', {
        type:Sequelize.STRING,
        allowNull: true
      })
      ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
