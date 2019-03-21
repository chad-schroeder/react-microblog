import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  font-size: 1.15rem;
`;

class NavBar extends Component {
  render() {
    return (
      <>
        <StyledNavLink
          exact
          className="mr-4 py-2 text-decoration-none"
          activeStyle={{ fontWeight: 600 }}
          to="/"
        >
          Blog
        </StyledNavLink>
        <StyledNavLink
          exact
          className="py-2 text-decoration-none"
          activeStyle={{ fontWeight: 600 }}
          to="/new"
        >
          New Post
        </StyledNavLink>
      </>
    );
  }
}

export default NavBar;
