'use strict';
module.exports = (sequelize, DataTypes) => {
  const Volunteer = sequelize.define('Volunteer', {
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    services: DataTypes.STRING
  }, {});
  Volunteer.associate = function(models) {
    // associations can be defined here
  };
  return Volunteer;
};