
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('gooby').del()
    .then(function () {
      // Inserts seed entries
      return knex('gooby').insert([
        { id: 1, info: 'Brian' },
        { id: 2, info: 'Barry' },
        { id: 3, info: 'Jim/James - pick the day and the name' }
      ]);
    });
};
