exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("lost")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("lost").insert([
        {
          id: 1,
          name: "Bob",
          species: "cat",
          photo: "./images/cat1.jpg",
          user_id: 1
        },
        {
          id: 2,
          name: "Alice",
          species: "dog",
          photo: "./images/dog1.jpg",
          user_id: 2
        },
        {
          id: 3,
          name: "Worm",
          species: "dog",
          photo: "./images/dog2.jpg",
          user_id: 3
        },
        {
          id: 4,
          name: "Tina",
          species: "cat",
          photo: "./images/cat2.jpg",
          user_id: 1
        },
        {
          id: 5,
          name: "Marcus",
          species: "cat",
          photo: "./images/cat3.jpg",
          user_id: 2
        },
        {
          id: 6,
          name: "Snoop",
          species: "dog",
          photo: "./images/dog4.jpg",
          user_id: 3
        }
      ]);
    });
};
