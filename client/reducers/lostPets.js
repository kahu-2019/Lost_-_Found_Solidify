const initialState= [
    {id:1, name: 'bob', species: 'cat', photo: './images/sample.png', user_id:1},
    {id:1, name: 'sally', species: 'dog', photo: './images/sample.png', user_id:2},
    {id:1, name: 'floof', species: 'cat', photo: './images/sample.png', user_id:2},
    {id:1, name: 'chim-chim', species: 'dog', photo: './images/sample.png', user_id:4},
    {id:1, name: 'mac', species: 'cat', photo: './images/sample.png', user_id:3},
    {id:1, name: 'uncle', species: 'cat', photo: './images/sample.png', user_id:3}
]

const lostPets = (state =initialState, action =>{
    switch (action.type){
        default:
        return state
    }
})

export default lostPets