import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_post } from '../../actions';
import PostForm from '../../components/PostForm/PostForm';

class NewPostContainer extends Component {
  render() {
    return <PostForm {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  { add_post }
)(NewPostContainer);
