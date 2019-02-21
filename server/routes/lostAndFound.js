const express = require("express");
const router = express.Router();
// const {getLostPets} = require('../db/db')
// const {getFoundCat} = require('../db/db')

// Get /api/lost

router.get("/lost", (req, res) => {
  // getLostPets()
  //   .then(lostPets => {
  //     res.json(lostPets);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500)({ error: "something went wrong" });
  //   });
  res.send("hi");
});

module.exports = router;
