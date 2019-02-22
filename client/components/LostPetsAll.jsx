import React, { Component } from "react";
import { connect } from "react-redux";
import { getLostPets } from "../actions/receiveLostPets";

export class LostPetsALL extends Component {
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
              <p>User: {lostPet.user_name}</p>
              <p>User email: {lostPet.email_address}</p>
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

export default connect(mapStateToProps)(LostPetsALL);