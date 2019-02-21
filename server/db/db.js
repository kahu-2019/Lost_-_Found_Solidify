const connection = require("./connection");

function getLostPets(testDb) {
  const db = testDb || connection;

  return db("lost").select();
}

function getFoundPets(testDb) {
  const db = testDb || connection;

  return db("found").select();
}

function addLostAnimal(lostAnimal, testDb) {
  const db = testDb || connection;
  return db("lost").insert(lostAnimal);
}

function addFoundAnimal(species, photo, testDb) {
  const db = testDb || connection;
  return db("found").insert({
    species: species,
    photo: photo
  });
}

module.exports = {
  getLostPets,
  getFoundPets,
  addLostAnimal,
  addFoundAnimal
};
