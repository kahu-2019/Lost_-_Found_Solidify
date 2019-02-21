import {combineReducers} from 'redux'

import auth from './auth'
import lostPets from './lostPets'
import foundPets from './foundPets'
import foundBySpeciesView from './foundBySpeciesView'

export default combineReducers({
  auth,
  lostPets,
  foundPets,
  foundBySpeciesView
})
