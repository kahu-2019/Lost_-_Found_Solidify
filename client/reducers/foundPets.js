<<<<<<< HEAD
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
=======
const initialState= [
    {id:1, species: 'cat', photo: './images/sample.png', user_id:2 },
    {id:2, species: 'dog', photo: './images/sample.png', user_id:1 },
    {id:3, species: 'cat', photo: './images/sample.png', user_id:4 },
    {id:4, species: 'dog', photo: './images/sample.png', user_id:3 },
    {id:5, species: 'parrot', photo: './images/sample.png', user_id:4 }
]


const foundPets = (state =initialState, action) =>{
    switch (action.type){
        default:
        return state
    }
}

export default foundPets
>>>>>>> 0590884739ff5204cc698e865f4fa08b6c636439
