const express = require("express");
const router = express.Router();
const { getLostPets } = require("../db/db");
const { getFoundPets } = require("../db/db");

// Get /api/lost

router.get("/lost", (req, res) => {
  getLostPets()
    .then(lostPets => {
      res.json(lostPets);
    })
    .catch(err => {
      console.log(err);
      res.status(500)({ error: "something went wrong" });
    });
});

router.get("/found", (req, res) => {
  getFoundPets()
    .then(foundPets => {
      res.json(foundPets);
    })
    .catch(err => {
      console.log(err);
      res.status(500)({ error: "something went wrong" });
    });
});
module.exports = router;
