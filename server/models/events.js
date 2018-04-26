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
        model: 'Center',
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

  EventsModel.associate = (models) => {
    EventsModel.belongsTo(models.Centers, {
      foreignKey: 'centerId',
      as: 'center',
      onDelete: 'CASCADE',
    });
    EventsModel.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };
  return EventsModel;
};

export default Events;
