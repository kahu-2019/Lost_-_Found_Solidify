import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Login";
import Register from "./Register";
import Nav from "./Nav";
import FoundPets from "./FoundPets";
import FoundForm from "./FoundForm";
import LostForm from "./LostForm";
import LostSearch from './LostSearch'

export function App({ auth }) {
  return (
    <Router>
      <div className="container has-text-centered">
        <div className="hero is-small is-primary">
          <div className="hero-body has-text-centered">
            <Link to="/" className="">
              <h1 className="title is-1">Lost and Found</h1>
            </Link>
            <Nav />
          </div>
        </div>

        <div className="">
          {!auth.isAuthenticated && <Route exact path="/" component={Login} />}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/found" component={FoundPets} />
          <Route path="/lost" component={LostSearch} />
          <Route path="/add-lost-pet" component={LostForm} />
          <Route path="/add-found-pet" component={FoundForm} />
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
// import React from 'react'
// import {HashRouter as Router, Route, Link} from 'react-router-dom'
// import {connect} from 'react-redux'


// import Login from './Login'
// import Register from './Register'
// import Nav from './Nav'
// import PostLostTest from './PostLostTest'
// import LostSearch from './LostSearch'


// export function App({auth}) {
//   return (
//     <Router>
//       <div className="container has-text-centered">

//         <div className="hero is-small is-primary">
//           <div className="hero-body has-text-centered">
//             <Link to='/' className="">
//               <h1 className="title is-1">Lost and Found</h1>
//             </Link>
//             <Nav />
//           </div>
        
//         </div>

//         <div className=''>
//           {!auth.isAuthenticated &&
//             <Route exact path="/" component={Login} />
//           }
//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Register} />
//           {/* <Route path="/found" component={FoundBySpecies} /> */}
//           <Route path="/lost" component={LostSearch} />
//         </div>

//       </div>
//     </Router>
//   )
// }

// const mapStateToProps = ({auth}) => {
//   return {
//     auth
//   }
// }

// export default connect(mapStateToProps)(App)
