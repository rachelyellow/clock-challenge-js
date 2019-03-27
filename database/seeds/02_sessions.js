exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sessions').del()
    .then(function () {
      // Inserts seed entries
      return knex('sessions').insert([
        {teacher_id: 1, date: '03/21/2019', time_in: '8:31 AM', time_out: '12:01 PM'},
        {teacher_id: 1, date: '03/21/2019', time_in: '1:07 PM', time_out: '6:45 PM'},
        {teacher_id: 2, date: '03/21/2019', time_in: '9:43 AM', time_out: '5:45 PM'},
        {teacher_id: 3, date: '03/22/2019', time_in: '8:40 AM', time_out: '4:09 PM'},
        {teacher_id: 1, date: '03/25/2019', time_in: '8:06 AM', time_out: '12:02 PM'},
        {teacher_id: 1, date: '03/25/2019', time_in: '1:06 PM', time_out: '5:01 PM'},
        {teacher_id: 2, date: '03/26/2019', time_in: '9:11 AM', time_out: '5:03 PM'},
        {teacher_id: 1, date: '03/26/2019', time_in: '9:04 AM', time_out: '5:33 PM'},
        {teacher_id: 3, date: '03/26/2019', time_in: '8:51 AM', time_out: '4:58 PM'}
      ]);
    });
};
