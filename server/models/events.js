'use strict';
module.exports = (sequelize, DataTypes) => {
  let Events = sequelize.define('Events', {
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    img_url: DataTypes.TEXT,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    centerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Events.belongsTo(models.Center, {
          foreignKey: 'centerId'
        });
        Events.belongsTo(models.User, {
            foreignKey: 'userId'
        });
      }
    }
  });
  return Events;
};