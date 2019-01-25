import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <>
        <NavLink
          exact
          className="mr-4 py-2 text-decoration-none"
          style={{ fontSize: '1.15rem' }}
          to="/"
        >
          Blog
        </NavLink>
        <NavLink
          exact
          className="py-2 text-decoration-none"
          style={{ fontSize: '1.15rem' }}
          to="/new"
        >
          New Post
        </NavLink>
      </>
    );
  }
}

export default NavBar;
