const initialState = {
    lostPetsData:[]
}

const lostPets = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_LOST_PETS':
        return {...state, 
        lostPetsData:action.lostPets
     }
        default:
        return state
    }
}

export default lostPets