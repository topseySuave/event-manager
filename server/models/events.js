'use strict';
const Events = (sequelize, DataTypes) => {
  let EventsModel = sequelize.define('Events', {
    title: DataTypes.TEXT,
    img_url: DataTypes.TEXT,
    description: DataTypes.TEXT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    centerId: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Centers',
          key: 'id',
          as: 'centerId',
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'User',
        key: 'id',
        as: 'userId'
      }
    }
  });

  EventsModel.associate = (models) => {
      EventsModel.belongsTo(models.Centers, {
          foreignKey: 'centerId',
          onDelete: 'CASCADE',
      });
      EventsModel.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
      });
  };
  return EventsModel;
};

export default Events;