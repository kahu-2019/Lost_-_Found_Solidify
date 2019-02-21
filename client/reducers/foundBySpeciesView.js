export const NAVIGATE = 'NAVIGATE'

const foundBySpeciesView = (state = 'foundCats', action) => {
  switch (action.type) {
    case NAVIGATE:
      return action.destination
    default:
      return state
  }
}

export default foundBySpeciesView