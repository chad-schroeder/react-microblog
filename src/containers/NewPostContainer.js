import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../createActions';
import PostForm from '../components/PostForm/PostForm';

class NewPostContainer extends Component {
  render() {
    return <PostForm {...this.props} />;
  }
}

const connectedComponent = connect(
  null,
  { addPost }
);

export default connectedComponent(NewPostContainer);
