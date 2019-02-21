import React, { Component } from "react";
import { connect } from "react-redux";
import { getFoundPets } from "../actions/getFoundPets";

export class FoundPets extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getFoundPets());
  }

  render() {
    console.log("FoundPets.jsx render this.props:", this.props);
    return (
      <div>
        {this.props.state.foundPetsData.map(foundPet => {
          return (
            <div key={foundPet.id}>
              <img src={foundPet.photo} />
              <br />
              species: {foundPet.species}
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

export default connect(mapStateToProps)(FoundPets);
