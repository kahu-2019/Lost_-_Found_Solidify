exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("found")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("found").insert([
        { id: 1, species: "labrador", photo: "/images/puppy1", user_id: 1 },
        { id: 2, species: "tabby", photo: "/images/puppy2", user_id: 2 },
        { id: 3, species: "pointer", photo: "/images/puppy3", user_id: 3 }
      ]);
    });
};
