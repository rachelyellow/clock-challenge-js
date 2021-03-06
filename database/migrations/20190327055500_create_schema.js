exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('teachers', function(table) {
      table.increments().primary()
      table.string("first_name")
      table.string("last_name")
      table.integer("user_code")
    }),

    knex.schema.createTable('sessions', function(table) {
      table.increments().primary()
      table.integer('teacher_id').references('id').inTable('teachers')
      table.string('date')
      table.string('time_in')
      table.string('time_out')
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('sessions'),
    knex.schema.dropTable('teachers')
  ]);
}