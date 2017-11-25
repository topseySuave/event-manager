'use strict';
module.exports = (sequelize, DataTypes) => {
  let Events = sequelize.define('Events', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    complete: DataTypes.BOOLEAN,
    centerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Center',
        key: 'id',
        as: 'centerId',
      }
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Events.belongsTo(models.Center, {
          foreignKey: 'centerId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Events;
};