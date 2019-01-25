import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostsFromAPI } from '../createActions';
import Home from '../components/Home/Home';

class NewHomeContainer extends Component {
  render() {
    return <Home {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { getPostsFromAPI }
);

export default connectedComponent(NewHomeContainer);
