import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import styled from 'styled-components';

const Jumbotron = styled.div`
  border-top: 8px solid #444;
`;

const Tagline = styled.p`
  font-size: 0.8rem;
`;

const Title = styled.h1`
  font-size: 2.1rem;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -1px;
`;

class NavBox extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <Jumbotron className="jumbotron mb-3 py-4 rounded-0">
              <Tagline className="text-muted text-uppercase mb-0">
                Get into the Rithm of blogging!
              </Tagline>
              <Title className="mt-0 mb-3 text-uppercase">
                Microblog
              </Title>
              <NavBar />
            </Jumbotron>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBox;
