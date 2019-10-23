'use strict';
module.exports = (sequelize, DataTypes) => {
  const contactUs = sequelize.define('contactUs', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    purposeForContact: DataTypes.STRING
  }, {});
  contactUs.associate = function(models) {
    // associations can be defined here
  };
  return contactUs;
};