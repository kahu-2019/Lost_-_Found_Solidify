exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("found")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("found").insert([
        { id: 1, species: "cat", photo: "/images/puppy1", user_id: 1 },
        { id: 2, species: "dog", photo: "/images/puppy2", user_id: 2 },
        { id: 3, species: "dog", photo: "/images/puppy3", user_id: 3 }
      ]);
    });
};
