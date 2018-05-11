'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Events = function Events(sequelize, DataTypes) {
  var EventsModel = sequelize.define('Events', {
    title: DataTypes.TEXT,
    img_url: DataTypes.TEXT,
    description: DataTypes.TEXT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
      allowNull: false,
      defaultValue: 'pending'
    },
    centerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Centers',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'User',
        key: 'id'
      }
    }
  });

  EventsModel.associate = function (models) {
    EventsModel.belongsTo(models.Centers, {
      foreignKey: 'centerId',
      as: 'center',
      onDelete: 'CASCADE'
    });
    EventsModel.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE'
    });
  };
  return EventsModel;
};

exports.default = Events;
//# sourceMappingURL=events.js.map