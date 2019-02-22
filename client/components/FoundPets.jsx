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
            </div>
          );
        })}
      </div>
    );
  }
}

export default FoundPets