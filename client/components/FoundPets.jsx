import React, { Component } from "react";
import { connect } from "react-redux";
import { getFoundPetsAction } from "../actions/getFoundPets";

export class FoundPets extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.props.getFoundPets();
  };
  getFoundPets = () => {
    this.props.getFoundPets();
  };

  render() {
    return (
      <div>
        {this.props.state.foundPets.foundPetsData.map(foundPet => {
          return (
            <div key={foundPet.id}>
              <img src={foundPet.photo} />><br />
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

const mapDispatchToProps = dispatch => {
  return {
    getFoundPets: () => dispatch(getFoundPetsAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoundPets);
