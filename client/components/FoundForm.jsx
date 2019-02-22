import React, { Component } from "react";
import { connect } from "react-redux";
import { foundPet } from "../api/addPet";

class FoundForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      species: "",
      photo: ""
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
      species: this.state.species,
      photo: this.state.photo,
      username: this.props.auth.user.user_name,
      user_id:null
    };

    foundPet(post);
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Species:</label> <br />
            <textarea
              name="species"
              onChange={this.onChange}
              value={this.state.species}
            />
          </div>
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

export default connect(mapStateToProps)(FoundForm);
