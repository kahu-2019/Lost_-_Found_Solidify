export const NAVIGATE = 'NAVIGATE'

const foundBySpeciesView = (state = 'foundAll', action) => {
  switch (action.type) {
    case NAVIGATE:
      return action.view
    default:
      return state
  }
}

export default foundBySpeciesView