import React, { Component } from "react";
import { connect } from "react-redux";
import { lostPet } from "../api/addPet";

class LostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      species: "",
      photo: "",
      username: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      name: this.state.name,
      species: this.state.species,
      photo: this.state.photo,
      username: this.props.auth.user.user_name,
      user_id: null
    };
    console.log(post);
    lostPet(post);
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Pet-Name:</label> <br />
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <br />
          <div>
            <label>Species:</label> <br />
            <textarea
              name="species"
              onChange={this.onChange}
              value={this.state.species}
            />
          </div>
          <br />
          <br />
          <div>
            <label>Photo:</label> <br />
            <input
              type="file"
              name="photo"
              onChange={this.onChange}
              value={this.state.photo}
            />
          </div>
          <div className="control">
            <button className="button is-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(LostForm);
