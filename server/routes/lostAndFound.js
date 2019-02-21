const express = require("express");
const router = express.Router();
const db = require("../db/db");

// Get /api/lost

router.get("/lost", (req, res) => {
  db.getLostPets()
    .then(lostPets => {
      res.json(lostPets);
    })
    .catch(err => {
      console.log(err);
      res.status(500)({ error: "something went wrong" });
    });
});

router.get("/found", (req, res) => {
  db.getFoundPets()
    .then(foundPets => {
      res.json(foundPets);
    })
    .catch(err => {
      console.log(err);
      res.status(500)({ error: "something went wrong" });
    });
});

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

module.exports = router;
