'use strict';

module.exports = {
  development: {
    username: 'postgres',
    password: '12345',
    database: 'boots',
    host: '127.0.0.1',
    port: 5432,
    operatorsAliases: false,
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: '12345',
    database: 'boots_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  }
};

// {
//   "development": {
//       "username": "postgres",
//       "password": "12345",
//       "database": "boots_test",
//       "host": "127.0.0.1",
//       "port": 5432,
//       "dialect": "postgres"
//   },
//   "test": {
//       "username": "postgres",
//       "password": "12345",
//       "database": "boots",
//       "host": "127.0.0.1",
//       "port": 5342,
//       "dialect": "postgres"
// },
//   "production": {
//   "use_env_variable": "DATABASE_URL",
//       "Dialect": "postgres"
// }
// }
//# sourceMappingURL=config.js.map