import React, { Component } from "react";

class LostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      species: this.state.species,
      photo: this.state.photo
    };
  }
  render() {
    return (
      <React.Fragment>
        <form>
          <div>
            <label>Species:</label> <br />
            <textarea
              name="speicies"
              onChange={this.onChange}
              value={this.state.species}
            />
          </div>
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
export default FoundForm;
