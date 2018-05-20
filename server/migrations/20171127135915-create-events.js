'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      img_url: {
        type: Sequelize.TEXT
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
          type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM,
        values: ['pending', 'accepted', 'rejected'],
        defaultValue: 'pending'
      },
      private: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      centerId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
            model: 'Centers',
            key: 'id',
            as: 'centerId',
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Users',
            key: 'id',
            as: 'userId',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};