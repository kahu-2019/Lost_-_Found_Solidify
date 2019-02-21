import React, { Component } from "react";
import { connect } from "react-redux";
import { getLostPets } from "../actions/receiveLostPets";
import LostPets from './LostPets'
import LostPetsAll from './LostPetsAll'

export class LostSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        species:''
    }
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount = () => {
    this.props.dispatch(getLostPets());
  };

  onChange(e) {
      this.setState({[e.target.name]:e.target.value})
  }

  render() {
      const animalFilter= this.props.lostPets.lostPetsData.filter(item=> item.species === this.state.species )
     if(this.state.species.length > 0){
      return (
        <div>
        Search:
        <input type='text' value={this.state.species} name='species' onChange={this.onChange}/>
       <LostPets lostPetsData={animalFilter}/>
      </div>
    )
      } else { return (
        <div>Search:
            <input type='text' value={this.state.species} name='species' onChange={this.onChange}/>
        <LostPetsAll/>
        </div>
      )
    }
      
  }
}

function mapStateToProps(state) {
  return {
    lostPets: state.lostPets
  };
}

export default connect(mapStateToProps)(LostSearch);
