
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lost', table => {
      table.increments('id')
      table.string('name')
      table.string('species')
      table.string('photo')
      table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lost')
};
