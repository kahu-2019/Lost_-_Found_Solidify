import React, { Component } from "react";
import { connect } from "react-redux";
import { getLostPets } from "../actions/receiveLostPets";

export class LostPets extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.props.dispatch(getLostPets());
  };

  render() {
    return (
      <div>
        {this.props.state.lostPetsData.map(lostPet => {
          return (
            <div key={lostPet.id}>
              <img src={lostPet.photo} />
              <br />
              Name:{lostPet.name}
              <br />
              Species:{lostPet.species}
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.lostPets
  };
}

export default connect(mapStateToProps)(LostPets);
