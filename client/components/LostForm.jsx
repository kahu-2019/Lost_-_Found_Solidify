import React, { Component } from "react";

class LostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      species: "",
      photo: ""
    };
    this.onChange = this.onchange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefult();

    const post = {
      username: this.state.username,
      name: this.state.name,
      species: this.state.species,
      photo: this.state.photo
    };
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>User-Name:</label> <br />
            <input
              type="text"
              name="username"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <br />
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
              name="speicies"
              onChange={this.onChange}
              value={this.state.species}
            />
          </div>
          <br />
          <br />
          <div>
            <label>Photo:</label> <br />
            <textarea
              name="photo"
              onChange={this.onChange}
              value={this.state.photo}
            />
          </div>
          <div class="control">
            <button class="button is-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default LostForm;
