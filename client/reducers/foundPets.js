const initialState = {
  foundPetsData: []
};

const foundPets = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_FOUND_PETS":
      return { ...state, foundPetsData: action.foundPets };
    default:
      return state;
  }
};

export default foundPets;
