'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
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
      associate: function associate(models) {
        // associations can be defined here
        User.hasMany(models.Centers, {
          foreignKey: 'userId',
          as: 'centers',
          onDelete: 'cascade'
        });

        User.hasMany(models.Events, {
          foreignKey: 'userId',
          as: 'events',
          onDelete: 'cascade'
        });
      }
    }
  });
  return User;
};
//# sourceMappingURL=user.js.map