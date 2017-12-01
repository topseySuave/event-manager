'use strict';
module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    role: {
      type: DataTypes.BOOLEAN,
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Event, {
          foreignKey: null,
          as: 'events'
        })
      }
    }
  });
  return User;
};