import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBox extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Microblog</h1>
        <p className="lead">Get in the Rithm of blogging!</p>
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
          Add a new post
        </NavLink>
      </div>
    );
  }
}

export default NavBox;
