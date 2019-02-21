
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lost').del()
    .then(function () {
      // Inserts seed entries
      return knex('lost').insert([
        {id: 1, name: 'bob', species: 'labrador', photo: 'url', user_id: 1},
        {id: 2,  name: 'alice', species:'tabby', photo: 'url', user_id: 2},
        {id: 3, name: 'worm', species: 'pointer', photo: 'url', user_id: 3}
      ]);
    });
};