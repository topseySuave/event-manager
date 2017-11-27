'use strict';
module.exports = (sequelize, DataTypes) => {
  let Center = sequelize.define('Center', {
    title: DataTypes.TEXT,
    img_url: DataTypes.TEXT,
    location: DataTypes.TEXT,
    description: DataTypes.TEXT,
    facilities: DataTypes.ARRAY(DataTypes.TEXT),
    capacity: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    eventId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Center.hasMany(models.Events, {
          foreignKey: 'eventId'
        });
      }
    }
  });
  return Center;
};