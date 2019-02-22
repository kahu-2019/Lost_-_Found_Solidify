exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("found")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("found").insert([
        { id: 1, species: "cat", photo: "./images/cat4.jpg", user_id: 1 },
        { id: 2, species: "dog", photo: "./images/dog3.jpeg", user_id: 2 },
        { id: 3, species: "dog", photo: "./images/dog6.jpg", user_id: 3 },
        { id: 4, species: "cat", photo: "./images/cat5.jpeg", user_id: 1 },
        { id: 5, species: "dog", photo: "./images/dog5.jpg", user_id: 2 },
        { id: 6, species: "cat", photo: "./images/cat6.jpg", user_id: 3 },
        { id: 7, species: "bird", photo: "./images/bird1.jpg", user_id: 3 }
      ]);
    });
};
