import React from 'react'
import {connect} from 'react-redux'

import FoundByCat from './FoundByCat'
import FoundByDog from './FoundByDog'

function FoundBySpecies(props){

    const catFilter= props.found.filter(item=> item.species === 'cat' )
    const dogFilter= props.found.filter(item=> item.species === 'dog' )
    
if(props.view === 'foundCats'){
return <FoundByCat cats={catFilter}/>
} else {
    return  <FoundByDog dogs={dogFilter}/>
}
}

const mapStateToProps = (state) =>{
    return{
        found: state.foundPets,
        view: state.foundBySpeciesView
    }
}

// function catFilter(item){
//     if(item.species === 'cat'){
//         return true
//     }
// }





export default connect(mapStateToProps)(FoundBySpecies)