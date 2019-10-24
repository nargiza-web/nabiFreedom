'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(
      "Members",[
        {
          email: "kety@gmail.com", password:"12345", first_name: "kety",  last_name:"cossey", phone_number:"123-456-7890", address: "123 happy st.", createdAt: new Date(), updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Members", null, {})
  }
};
