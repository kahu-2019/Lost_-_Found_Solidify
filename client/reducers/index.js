import { combineReducers } from "redux";

import auth from "./auth";
import foundPets from "./foundPets";
import lostPets from "./lostPets";

export default combineReducers({
  auth,
  foundPets,
  lostPets
});
