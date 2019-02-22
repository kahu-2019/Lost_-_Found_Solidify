const connection = require("./connection");

function getLostPets(testDb) {
  const db = testDb || connection;

  return db("lost").join('users','users.id','lost.user_id').select('lost.*','user_name','email_address','contact_details');
}

function getFoundPets(testDb) {
  const db = testDb || connection;

  return db("found").join('users','users.id','found.user_id').select('found.*','user_name','email_address','contact_details');
}

function getUserId(lostAnimal, testDb) {
  const db = testDb || connection;
  username = lostAnimal.username;

  return db("users")
    .select()
    .where("user_name", username)
    .first();
  // .then(user => user.id);
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
  addFoundAnimal,
  getUserId
};
