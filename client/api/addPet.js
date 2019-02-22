var request = require("superagent");

export function foundPet(foundPet) {
  return request
    .post("/api/found")
    .send({ foundPet })
    .end((err, res) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(res.body);
      }
    });
}

export function lostPet(lostPet) {
  return request
    .post("/api/lost")
    .send({ lostPet })
    .end((err, res) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(res.body);
      }
    });
}
