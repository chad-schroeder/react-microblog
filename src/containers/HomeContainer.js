import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(NewHomeContainer);
