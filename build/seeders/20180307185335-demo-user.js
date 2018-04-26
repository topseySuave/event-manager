'use strict';

var bcrypt = require('bcryptjs');

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      id: 1,
      firstName: 'gabriel',
      lastName: 'micah',
      email: 'gabrielsuave17@gmail.com',
      password: bcrypt.hashSync('gabriel', 10),
      role: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      firstName: 'topsey',
      lastName: 'suave',
      email: 'topseysuave17@gmail.com',
      password: bcrypt.hashSync('topsey', 10),
      role: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
//# sourceMappingURL=20180307185335-demo-user.js.map