import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../components/PostForm/';

class NewPostContainer extends Component {
  componentDidMount() {}

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return <PostForm {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts
  };
}
export default connect(mapStateToProps)(NewPostContainer);
