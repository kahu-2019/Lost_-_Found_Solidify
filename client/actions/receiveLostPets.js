import axios from "axios"

export function getLostPetsAction(){
    axios.get("/api/lost").then(response=>{
        dispatch(receiveLostPets(response.data))
    })

}

function receiveLostPets(lostPets){
    return {
        type: 'RECEIVE_LOST_PETS',
        lostPets
    }
}