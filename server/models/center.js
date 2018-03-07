const Centers = (sequelize, DataTypes) => {
  let CentersModel = sequelize.define('Centers', {
    title: DataTypes.TEXT,
    img_url: DataTypes.TEXT,
    location: DataTypes.TEXT,
    description: DataTypes.TEXT,
    facilities: DataTypes.ARRAY(DataTypes.TEXT),
    capacity: DataTypes.INTEGER,
    price: DataTypes.DOUBLE
  });

  CentersModel.associate = (models) => {
    CentersModel.hasMany(models.Events, {
      foreignKey: 'id',
      as: 'events',
      onDelete: 'CASCADE',
    });
  };

  return CentersModel;
};

export default Centers;
