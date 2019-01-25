import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getPostFromAPI,
  addPost,
  editPost,
  deletePost,
  addComment,
  deleteComment
} from '../createActions';
import Post from '../components/Post/Post';

class PostContainer extends Component {
  render() {
    return <Post post={this.props.post} {...this.props} />;
  }
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  return {
    post: state.posts[id]
  };
}

const connectedComponent = connect(
  mapStateToProps,
  {
    getPostFromAPI,
    addPost,
    editPost,
    deletePost,
    addComment,
    deleteComment
  }
);

export default connectedComponent(PostContainer);
