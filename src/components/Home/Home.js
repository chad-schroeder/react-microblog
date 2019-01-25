import React, { Component } from 'react';
import TitleListContainer from '../../containers/TitleList/TitleListContainer';

class Home extends Component {
  render() {
    console.log('Home', this.props);
    return (
      <>
        <h2 className="lead">
          Welcome to <strong>Microblog</strong>, our innovative site for
          communicating on the information superhighway.
        </h2>
        <div
          className="mt-4 mb-0 py-3 px-4"
          style={{
            borderTop: '3px solid #333',
            backgroundColor: '#e9ecef'
          }}
        >
          <h2
            className="mb-0 h5"
            style={{
              color: '#333',
              fontWeight: 600
            }}
          >
            Posts
          </h2>
          <TitleListContainer {...this.props} />
        </div>
      </>
    );
  }
}

export default Home;
