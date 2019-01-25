import React, { Component } from 'react';
import PostCard from '../PostCard/PostCard';
const uuid = require('uuid/v4');

class Home extends Component {
  static defaultProps = {
    posts: []
  };

  render() {
    const posts = Object.values(this.props.posts).map(post => (
      <li key={uuid()} className="list-group-item">
        <PostCard {...post} />
      </li>
    ));

    return (
      <>
        <div
          className="mb-3 px-4 py-4 bg-dark text-white"
          style={{ borderTop: '4px solid #444' }}
        >
          <h2 style={{ fontSize: '1rem' }}>
            Welcome to <strong>Microblog</strong>, our innovative site for
            communicating on the information&nbsp;superhighway.
          </h2>
        </div>
        <div
          className="mb-0 py-3 px-4"
          style={{
            borderTop: '4px solid #333',
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
        </div>
        <ul className="list-group list-group-flush">{posts}</ul>
      </>
    );
  }
}

export default Home;
