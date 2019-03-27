exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teachers').del()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        {first_name: 'Ashley', last_name: 'Wong', user_code: 1234},
        {first_name: 'Natasha', last_name: 'Catala', user_code: 5678},
        {first_name: 'Rachel', last_name: 'Goffenberg', user_code: 2468}
      ]);
    });
};
