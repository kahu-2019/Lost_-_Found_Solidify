import React, { Component } from "react";
import { connect } from "react-redux";
import { getLostPets } from "../actions/receiveLostPets";

export class LostPets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
console.log(this.props.lostPetsData)
    return (
      <div>
        {this.props.lostPetsData.map(lostPet => {
          console.log(lostPet)
          return (
            <div key={lostPet.id}>
              <img src={lostPet.photo} />
              <br />
              Name:{lostPet.name}
              <br />
              Species:{lostPet.species}
              <p>User: {lostPet.user_name}</p>
              <p>User email: {lostPet.email_address}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LostPets
