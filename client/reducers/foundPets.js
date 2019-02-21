const initialState = {
  foundPetsData: []
};

const foundPets = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_FOUND_PETS":
      return action.foundPets;
    default:
      return { ...state, foundPetsData: action.foundPets };
  }
};

export default foundPets;
