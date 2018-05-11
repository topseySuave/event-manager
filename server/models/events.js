const Events = (sequelize, DataTypes) => {
  let EventsModel = sequelize.define('Events', {
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
