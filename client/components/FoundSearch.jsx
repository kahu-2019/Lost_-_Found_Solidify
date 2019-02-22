import React, { Component } from "react";
import { connect } from "react-redux";
import { getFoundPets } from "../actions/getFoundPets";
import FoundPets from './FoundPets'
import FoundPetsAll from './FoundPetsAll'

export class FoundSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        species:''
    }
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount = () => {
    this.props.dispatch(getFoundPets());
  };

  onChange(e) {
      this.setState({[e.target.name]:e.target.value})
  }

  render() {
      const animalFilter= this.props.foundPets.foundPetsData.filter(item=> item.species === this.state.species )
     if(this.state.species.length > 0){
      return (
        <div>
        Search:
        <input type='text' value={this.state.species} name='species' onChange={this.onChange}/>
       <FoundPets foundPetsData={animalFilter}/>
      </div>
    )
      } else { return (
        <div>Search:
            <input type='text' value={this.state.species} name='species' onChange={this.onChange}/>
        <FoundPetsAll/>
        </div>
      )
    }
      
  }
}

function mapStateToProps(state) {
  return {
    foundPets: state.foundPets
  };
}

export default connect(mapStateToProps)(FoundSearch);