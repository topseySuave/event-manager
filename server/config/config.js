module.exports = {
  secret: '#(@#GYzU#EWERGFXTSWEW(@#YW($EW(',
  development: {
    username: "postgres",
    password: "gabmicah",
    database: "boots",
    host: "localhost",
    port: 5432,
    dialect: "postgres"
  },
  test : {
    username: "postgres",
    password: "gabmicah",
    database: "boots",
    host: "localhost",
    port: 5342,
    dialect: "postgres"
  },
  production : {
    use_env_variable: "DATABASE_URL_PRODUCTION",
    dialect: "postgres"
  }
};
