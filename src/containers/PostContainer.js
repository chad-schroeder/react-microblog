import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addPost,
  editPost,
  deletePost,
  addComment,
  deleteComment
} from '../createActions';
import Post from '../components/Post/Post';

class PostContainer extends Component {
  render() {
    // get post details + comments from API
    // attach post props to <Post>

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
  { addPost, editPost, deletePost, addComment, deleteComment }
);

export default connectedComponent(PostContainer);
