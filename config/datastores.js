module.exports.datastores = {
  default: {
    heroku_postgres: {
      adapter: "sails-postgresql",
      url: process.env.DATABASE_URL,
      ssl: false
    }
  }
};
