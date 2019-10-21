'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Member.associate = function(models) {
    // associations can be defined here
  };
  return Member;
};