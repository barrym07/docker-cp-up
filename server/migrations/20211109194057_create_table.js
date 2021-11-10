
exports.up = function (knex) {
  return knex.schema.createTable('gooby', table => {
    table.increments('id'); // adds an auto incrementing PK column
    table.string('info').notNullable();

  });

};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('gooby');

};