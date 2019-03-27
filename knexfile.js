// Update with your config settings.

require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'clock_challenge',
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'clock_challenge',
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }

  // production: {
  //   client: 'postgresql',
  //   connection: process.env.DATABASE_URL + '?ssl=true',
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'migrations'
  //   }
  // }

};
