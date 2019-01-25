import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

class NavBox extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div
              className="jumbotron mb-3 py-4 rounded-0"
              style={{
                borderTop: '8px solid #444'
              }}
            >
              <p
                className="text-muted text-uppercase mb-0"
                style={{ fontSize: '0.85rem' }}
              >
                Get in the Rithm of blogging!
              </p>
              <h1
                className="mt-0 mb-3 text-uppercase"
                style={{
                  fontSize: '2.1rem',
                  lineHeight: '1.1',
                  fontWeight: 600,
                  letterSpacing: '-1px'
                }}
              >
                Microblog
              </h1>

              <NavBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBox;
