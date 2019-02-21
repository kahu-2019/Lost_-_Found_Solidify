var request = require("superagent");

export default function foundPet() {
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
