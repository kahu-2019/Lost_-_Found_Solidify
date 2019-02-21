import {combineReducers} from 'redux'

import auth from './auth'
import lostPets from './lostPets'
import foundPets from './foundPets'
import foundBySpeciesView from './foundBySpeciesView'
import lostBySpeciesView from './lostBySpeciesView'

export default combineReducers({
  auth,
  lostPets,
  foundPets,
  foundBySpeciesView,
  lostBySpeciesView
})
