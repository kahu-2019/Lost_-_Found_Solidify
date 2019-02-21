//import React, { Component } from 'react'
import React from "react"
import {connect} from 'react-redux'
//import {getLostPetsAction} from "../actions/receiveLostPets"

function LostPets(props){
// constructor(props){
//      super(props);
//  }
// componentDidMount = () => {
//     this.props.getLostPets();
// }

// getLostPets = () => {
//     this.props.getLostPets();
// }

 
    return (
      <div>
       {props.lostPets.map(lostPet=>{
         return <div key={lostPet.id}>
         <img src={lostPet.photo} /><br/>
         Name:{lostPet.name}
         Species:{lostPet.species}
         </div>
       })}
       
      </div>
    );
  }


const mapStateToProps = (state)=> {
  return {
    lostPets: state.lostPets
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//       getLostPets:()=>dispatch(getLostPetsAction())
//   }
// }

export default connect(
    mapStateToProps
 //   , mapDispatchToProps
    )
    (LostPets);

    //export default connect(mapStateToProps)(LostPets)
