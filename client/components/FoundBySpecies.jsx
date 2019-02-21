import React from 'react'
import {connect} from 'react-redux'

import FoundByCat from './FoundByCat'
import FoundByDog from './FoundByDog'
import {navigateFound} from '../actions/navigateFound'

function FoundBySpecies(props){

    const catFilter= props.found.filter(item=> item.species === 'cat' )
    const dogFilter= props.found.filter(item=> item.species === 'dog' )
    


if(props.view === 'foundCats'){
return (
    <div>
        <button onClick={props.all}>All</button>
        <button onClick={props.dogs}>Dogs</button>
        <h1>Found Cats:</h1>
        <FoundByCat cats={catFilter}/>
    </div>
)
} else if((props.view === 'foundDogs')) {
return  (
    <div>
        <button onClick={props.all}>All</button>
        <button onClick={props.cats}>Cats</button>
        <h1>Found Dogs:</h1>
        <FoundByDog dogs={dogFilter}/>
    </div>
    )
} else{
    return (
    <div>
        <button onClick={props.cats}>Cats</button>
        <button onClick={props.dogs}>Dogs</button>
        <h1>Found Animals:(component here)</h1>
    </div>
    )}
}

const mapStateToProps = (state) =>{
    return{
        found: state.foundPets,
        view: state.foundBySpeciesView
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        cats: ()=>{ dispatch(navigateFound('foundCats'))},
        dogs: ()=>{ dispatch(navigateFound('foundDogs'))},
        all: ()=>{ dispatch(navigateFound('foundAll'))}
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(FoundBySpecies)