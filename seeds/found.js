
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('found').del()
    .then(function () {
      // Inserts seed entries
      return knex('found').insert([
        {id: 1, species: 'labrador', photo: 'url', user_id: 1},
        {id: 2,  species: 'tabby', photo: 'url', user_id: 2},
        {id: 3, species: 'pointer', photo: 'url', user_id: 3}
      ]);
    });
};
