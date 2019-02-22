import React, { Component } from "react";
import { connect } from "react-redux";


export class FoundPets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.foundPetsData.map(foundPet => {
          return (
            <div key={foundPet.id}>
              <img src={foundPet.photo} />
              <br />
              Name:{foundPet.name}
              <br />
              Species:{foundPet.species}
              <p>User: {foundPet.user_name}</p>
              <p>User email: {foundPet.email_address}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FoundPets