import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Login";
import Register from "./Register";
import Nav from "./Nav";
import FoundSearch from "./FoundSearch";
import FoundForm from "./FoundForm";
import LostForm from "./LostForm";
import LostSearch from './LostSearch'
import FormError from './FormError'

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
          <Route path="/found" component={FoundSearch} />
          <Route path="/lost" component={LostSearch} />

          {auth.isAuthenticated ? [          
          <Route path="/add-lost-pet" component={LostForm} />,
          <Route path="/add-found-pet" component={FoundForm} />]:
          [<Route path="/add-lost-pet" component={FormError} />,
          <Route path="/add-found-pet" component={FormError} />]
        }

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
