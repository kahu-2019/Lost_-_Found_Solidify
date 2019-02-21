const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const { getLostPets } = require("../db/db");
const { getFoundPets } = require("../db/db");
=======
const db = require("../db/db");
>>>>>>> 1468fd718dcd7e298ed8eda6b3e2c9544ead61d4

// Get /api/lost

router.get("/lost", (req, res) => {
<<<<<<< HEAD
  getLostPets()
=======
  db.getLostPets()
>>>>>>> 1468fd718dcd7e298ed8eda6b3e2c9544ead61d4
    .then(lostPets => {
      res.json(lostPets);
    })
    .catch(err => {
      console.log(err);
      res.status(500)({ error: "something went wrong" });
    });
});

router.get("/found", (req, res) => {
<<<<<<< HEAD
  getFoundPets()
=======
  db.getFoundPets()
>>>>>>> 1468fd718dcd7e298ed8eda6b3e2c9544ead61d4
    .then(foundPets => {
      res.json(foundPets);
    })
    .catch(err => {
      console.log(err);
      res.status(500)({ error: "something went wrong" });
    });
});
<<<<<<< HEAD
=======

router.post("/lost", (req, res) => {
  lostAnimal = req.body;
  db.addLostAnimal(lostAnimal)
    .then(response => {
      res.send("successfully added");
    })
    .catch(err => {
      console.log(err);
      res.status(500)({ error: "something went wrong" });
    });
});

router.post("/found", (req, res) => {
  foundAnimal = req.body;
  db.addFoundAnimal(foundAnimal)
    .then(response => {
      res.send("successfully added");
    })
    .catch(err => {
      console.log(err);
      res.status(500)({ error: "something went wrong" });
    });
});

>>>>>>> 1468fd718dcd7e298ed8eda6b3e2c9544ead61d4
module.exports = router;
