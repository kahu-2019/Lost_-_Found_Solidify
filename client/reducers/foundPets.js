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