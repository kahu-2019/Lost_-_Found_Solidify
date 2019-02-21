import React from 'react'
import {connect} from 'react-redux'

import FoundByCat from './FoundByCat'
import FoundByDog from './FoundByDog'

function FoundBySpecies(props){

    const catFilter= props.found.filter(item=> item.species === 'cat' )
    const dogFilter= props.found.filter(item=> item.species === 'dog' )
    

return(
    <React.Fragment>
        <FoundByCat cats={catFilter}/>
        <FoundByDog dogs={dogFilter}/>
    </React.Fragment>


    
)
}

const mapStateToProps = (state) =>{
    return{
        found: state.foundPets
    }
}

// function catFilter(item){
//     if(item.species === 'cat'){
//         return true
//     }
// }





export default connect(mapStateToProps)(FoundBySpecies)