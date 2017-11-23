'use strict';
module.exports = (sequelize, DataTypes) => {
  let Center = sequelize.define('Center', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facility: DataTypes.ENUM,
    price: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Center.hasMany(models.Events, {
          foreignKey: 'eventId',
        });
      }
    }
  });
  return Center;
};