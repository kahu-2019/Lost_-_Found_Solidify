var request = require("superagent");

export function foundPet() {
  return request
    .post("/api/lost")
    .send({ foundPet })
    .end((err, res) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(res.body);
      }
    });
}

export function lostPet() {
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
