require('dotenv').config();

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'clock_challenge',
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  }
});

module.exports = knex;