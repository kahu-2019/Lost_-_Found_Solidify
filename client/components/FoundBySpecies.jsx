import React from 'react'
import {connect} from 'react-redux'

function FoundBySpecies(props){
return(

    <div>foundbyspecies</div>
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