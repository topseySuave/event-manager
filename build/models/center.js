'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Centers = function Centers(sequelize, DataTypes) {
  var CentersModel = sequelize.define('Centers', {
    title: DataTypes.TEXT,
    img_url: DataTypes.TEXT,
    location: DataTypes.TEXT,
    description: DataTypes.TEXT,
    facilities: DataTypes.ARRAY(DataTypes.TEXT),
    capacity: DataTypes.INTEGER,
    price: DataTypes.DOUBLE
  });

  CentersModel.associate = function (models) {
    CentersModel.hasMany(models.Events, {
      foreignKey: 'id',
      as: 'events',
      onDelete: 'CASCADE'
    });
  };

  return CentersModel;
};

exports.default = Centers;
//# sourceMappingURL=center.js.map