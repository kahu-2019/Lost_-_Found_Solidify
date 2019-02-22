exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("lost")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("lost").insert([
        {
          id: 1,
          name: "bob",
          species: "cat",
          photo: "/images/puppy4",
          user_id: 1
        },
        {
          id: 2,
          name: "alice",
          species: "dog",
          photo: "/images/puppy5",
          user_id: 2
        },
        {
          id: 3,
          name: "worm",
          species: "dog",
          photo: "/images/puppy6",
          user_id: 3
        }
      ]);
    });
};
