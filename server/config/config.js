require('dotenv').config();
module.exports = {
  secret: '#(@#GYzU#EWERGFXTSWEW(@#YW($EW(',
  development: {
      username: "rbymklmi",
      password: "zdD4ebEejyZBWRJLqajpqs0c0OT0lfEl",
      database: "rbymklmi",
      host: "baasu.db.elephantsql.com",
      port: 5432,
      dialect: "postgres"
  },
  test : {
      username: "rbymklmi",
      password: "zdD4ebEejyZBWRJLqajpqs0c0OT0lfEl",
      database: "rbymklmi",
      host: "baasu.db.elephantsql.com",
      port: 5432,
      dialect: "postgres"
  },
  production : {
    use_env_variable: process.env.DATABASE_URL_PRODUCTION,
    dialect: "postgres"
  }
};
