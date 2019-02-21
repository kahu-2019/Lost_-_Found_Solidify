
exports.up = function(knex, Promise) {
    return knex.schema.createTable('found', table => {
        table.increments('id')
        table.string('species')
        table.string('photo')
        table.integer('user_id')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('found')
  };
  