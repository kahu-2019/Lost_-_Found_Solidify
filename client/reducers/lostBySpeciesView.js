export const NAVIGATE_LOST = 'NAVIGATE_LOST'

const lostBySpeciesView = (state = 'lostAll', action) => {
  switch (action.type) {
    case NAVIGATE_LOST:
      return action.view
    default:
      return state
  }
}

export default lostBySpeciesView