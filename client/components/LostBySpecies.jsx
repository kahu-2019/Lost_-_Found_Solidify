import React from 'react'
import {connect} from 'react-redux'

import LostByCat from './LostByCat'
import LostByDog from './LostByDog'
import {navigateLost} from '../actions/navigateLost'

function LostBySpecies(props){

    const catFilter= props.lost.filter(item=> item.species === 'cat' )
    const dogFilter= props.lost.filter(item=> item.species === 'dog' )
    


if(props.view === 'lostCats'){
return (
    <div>
        <button onClick={props.all}>All</button>
        <button onClick={props.dogs}>Dogs</button>
        <h1>Lost Cats:</h1>
        <LostByCat cats={catFilter}/>
    </div>
)
} else if((props.view === 'lostDogs')) {
return  (
    <div>
        <button onClick={props.all}>All</button>
        <button onClick={props.cats}>Cats</button>
        <h1>Lost Dogs:</h1>
        <LostByDog dogs={dogFilter}/>
    </div>
    )
} else{
    return (
    <div>
        <button onClick={props.cats}>Cats</button>
        <button onClick={props.dogs}>Dogs</button>
        <h1>Lost Animals:(component here)</h1>
    </div>
    )}
}

const mapStateToProps = (state) =>{
    return{
        lost: state.lostPets,
        view: state.lostBySpeciesView
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        cats: ()=>{ dispatch(navigateLost('lostCats'))},
        dogs: ()=>{ dispatch(navigateLost('lostDogs'))},
        all: ()=>{ dispatch(navigateLost('lostAll'))}
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(LostBySpecies)