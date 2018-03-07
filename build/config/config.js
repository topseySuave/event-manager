"use strict";

module.exports = {
    development: {
        username: "admin",
        password: "password1",
        database: "boots",
        host: "127.0.0.1",
        port: 5432,
        dialect: "postgres"
    },
    test: {
        username: "postgres",
        password: "gabmicah",
        database: "boots",
        host: "127.0.0.1",
        port: 5342,
        dialect: "postgres"
    },
    production: {
        use_env_variable: "DATABASE_URL",
        dialect: "postgres"
    }
};

// {
//     "development": {
//         "username": "admin",
//             "password": "password1",
//             "database": "boots",
//             "host": "127.0.0.1",
//             "port": 5432,
//             "dialect": "postgres"
//     },
//     "test": {
//     "username": "postgres",
//         "password": "gabmicah",
//         "database": "boots",
//         "host": "127.0.0.1",
//         "port": 5342,
//         "dialect": "postgres"
// },
//     "production": {
//     "use_env_variable": "DATABASE_URL",
//         "Dialect": "postgres"
// }
// }
//# sourceMappingURL=config.js.map