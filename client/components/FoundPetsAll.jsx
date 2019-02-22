import React, { Component } from "react";
import { connect } from "react-redux";
import { getFoundPets } from "../actions/getFoundPets";

export class FoundPetsAll extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getFoundPets());
  }

  render() {
    return (
      <div>
        {this.props.state.foundPetsData.map(foundPet => {
          return (
            <div key={foundPet.id}>
              <img src={foundPet.photo} />
              <br />
              species: {foundPet.species}
              <p>User: {foundPet.user_name}</p>
              <p>User email: {foundPet.email_address}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.foundPets
  };
}

export default connect(mapStateToProps)(FoundPetsAll);
