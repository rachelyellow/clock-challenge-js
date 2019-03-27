const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'clock_challenge'
  }
});

module.exports = knex;