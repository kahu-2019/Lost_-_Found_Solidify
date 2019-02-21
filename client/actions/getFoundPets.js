import axios from "axios";

export function getFoundPets() {
  return function(dispatch) {
    axios.get("/api/found").then(response => {
      dispatch(receiveFoundPets(response.data));
    });
  };
}

function receiveFoundPets(foundPets) {
  return {
    type: "RECEIVE_FOUND_PETS",
    foundPets: foundPets
  };
}
