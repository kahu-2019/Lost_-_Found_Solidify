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

function addFoundAnimal(foundAnimal, testDb) {
  const db = testDb || connection;
  return db("found").insert(foundAnimal);
}

module.exports = {
  getLostPets,
  getFoundPets,
  addLostAnimal,
  addFoundAnimal
};
