'use strict';
module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    role: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Events, {
          foreignKey: null,
          as: 'events'
        })
      }
    }
  });
  return User;
};