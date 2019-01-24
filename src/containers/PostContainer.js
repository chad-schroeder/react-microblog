import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../createActions';
import Post from '../components/Post/Post';

class PostContainer extends Component {
  render() {
    console.log('PostContainer', this.props);

    return <Post {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { addPost }
);

export default connectedComponent(PostContainer);
