import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../createActions';
import PostForm from '../components/PostForm/PostForm';

class NewPostContainer extends Component {
  render() {
    return <PostForm {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {};
}

const connectedComponent = connect(
  mapStateToProps,
  { addPost }
);

export default connectedComponent(NewPostContainer);
