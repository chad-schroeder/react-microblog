import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getPost,
  addPost,
  editPost,
  deletePost,
  addComment,
  deleteComment
} from '../createActions';
import Post from '../components/Post/Post';

class PostContainer extends Component {
  render() {
    return <Post post={this.props.post} />;
  }
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  console.log('Post', state.posts[id]);

  return {
    post: state.posts[id]
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { getPost, addPost, editPost, deletePost, addComment, deleteComment }
);

export default connectedComponent(PostContainer);
