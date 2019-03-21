import React, { Component } from 'react';
import PostCard from '../PostCard/PostCard';
import styled from 'styled-components';

const uuid = require('uuid/v4');

/* Styling */

const Header = styled.header`
  border-top: 4px solid #444;
`;

const Lead = styled.h2`
  font-size: 1rem;
`;

const Heading = styled.div`
  border-top: 4px solid #333;
  background-color: #e9ecef;
`;

const Title = styled.h2`
  color: #333;
  font-weight: 600;
`;

class Home extends Component {
  static defaultProps = {
    posts: []
  };

  componentDidMount() {
    this.props.getPostsFromAPI();
  }

  render() {
    const posts = Object.values(this.props.posts).map(post => (
      <li key={uuid()} className="list-group-item">
        <PostCard {...post} />
      </li>
    ));

    return (
      <>
        <Header className="mb-3 px-4 py-4 bg-dark text-white">
          <Lead>
            Welcome to <strong>Microblog</strong>, our innovative site for
            communicating on the information&nbsp;superhighway.
          </Lead>
        </Header>
        <Heading className="mb-0 py-3 px-4">
          <Title className="mb-0 h5">
            Posts
          </Title>
        </Heading>
        <ul className="list-group list-group-flush">{posts}</ul>
      </>
    );
  }
}

export default Home;
