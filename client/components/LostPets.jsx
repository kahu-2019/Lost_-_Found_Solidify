import React, { Component } from 'react'
import React from "react"
import { connect } from 'react-redux'
import {getLostPetsAction} from "../actions/receiveLostPets"

export class LostPets extends Component {
constructor(props){
     super(props);
 }
componentDidMount = () => {
    this.props.getLostPets();
}

getLostPets = () => {
    this.props.getLostPets();
}

getLostPets = () => {
    this.props.getLostPets();
}

  render() {
    return (
      <div>
       {this.props.state.lostPetsData.map(lostPet=>{
         return <div key={lostPet.id}>
         <img src={lostPet.photo} /><br/>
         Name:{lostPet.name}
         Species:{lostPet.species}
         </div>
       })}
      </div>
    );
  }
}

function  mapStateToProps (state) {
  return {
    state: state.LostPets
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getLostPets:()=>dispatch(getLostPetsAction())
  }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (LostPets);
