import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBox extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h1 className="display-4 mb-0">Microblog</h1>

              <p className="lead mb-3">Get in the Rithm of blogging!</p>
              <NavLink
                exact
                className="mr-4 lead text-decoration-none"
                activeClassName="text-dark"
                to="/"
              >
                Blog
              </NavLink>
              <NavLink
                exact
                className="lead text-decoration-none"
                activeClassName="text-dark"
                to="/new"
              >
                New Post
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBox;
