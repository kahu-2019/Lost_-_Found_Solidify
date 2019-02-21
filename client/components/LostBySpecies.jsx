import React from 'react'
import {connect} from 'react-redux'

import LostByCat from './LostByCat'
import LostByDog from './LostByDog'
import {navigateLost} from '../actions/navigateLost'
import { getLostPets } from "../actions/receiveLostPets";

export class LostBySpecies extends React.Component{
    constructor(props) {
        super(props);
      }
      componentDidMount = () => {
        // this.props.dispatch(getLostPets());
        this.props.data
      };
    
render(){
   return <p>LostBySpecies</p>
//     const catFilter= this.props.lost.filter(item=> item.species === 'cat' )
//     const dogFilter= this.props.lost.filter(item=> item.species === 'dog' )
// if(props.view === 'lostCats'){
// return (
//     <div>
//         <button onClick={this.props.all}>All</button>
//         <button onClick={this.props.dogs}>Dogs</button>
//         <h1>Lost Cats:</h1>
//         <LostByCat cats={catFilter}/>
//     </div>
// )
// } else if((props.view === 'lostDogs')) {
// return  (
//     <div>
//         <button onClick={this.props.all}>All</button>
//         <button onClick={this.props.cats}>Cats</button>
//         <h1>Lost Dogs:</h1>
//         <LostByDog dogs={dogFilter}/>
//     </div>
//     )
// } else{
//     return (
//     <div>
//         <button onClick={this.props.cats}>Cats</button>
//         <button onClick={this.props.dogs}>Dogs</button>
//         <h1>Lost Animals:(component here)</h1>
//     </div>
//     )}
}}

const mapStateToProps = (state) =>{
    return{
        lost: state.lostPets,
        view: state.lostBySpeciesView
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        cats: ()=>{ dispatch(navigateLost('lostCats'))},
        dogs: ()=>{ dispatch(navigateLost('lostDogs'))},
        all: ()=>{ dispatch(navigateLost('lostAll'))},
        data: ()=>{dispatch(getLostPets())}
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(LostBySpecies)