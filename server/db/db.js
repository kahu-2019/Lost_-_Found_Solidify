const connection = require("./connection");

function getLostPets(testDb) {
  const db = testDb || connection;

  return db("lost").select();
}

function getFoundPets(testDb) {
  const db = testDb || connection;

  return db("found").select();
}

<<<<<<< HEAD
function addLostAnimal(name, species, photo, testDb) {
  const db = testDb || connection;
  return db("lost").insert({
    name: name,
    species: species,
    photo: photo
  });
}

function addFoundAnimal(species, photo, testDb) {
  const db = testDb || connection;
  return db("found").insert({
    species: species,
    photo: photo
  });
}
=======
function addLostAnimal(lostAnimal, testDb) {
  const db = testDb || connection;
  return db("lost").insert(lostAnimal);
}

function addFoundAnimal(foundAnimal, testDb) {
  const db = testDb || connection;
  return db("found").insert(foundAnimal);
}

>>>>>>> 1468fd718dcd7e298ed8eda6b3e2c9544ead61d4
module.exports = {
  getLostPets,
  getFoundPets,
  addLostAnimal,
  addFoundAnimal
};
