import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
  }

  handleCommentDelete() {
    this.props.deleteComment(this.props.text);
  }

  render() {
    console.log('Comment props', this.props);

    return (
      <p className="mb-1">
        <button
          className="btn btn-link text-danger mr-3"
          onClick={this.handleCommentDelete}
        >
          <FontAwesomeIcon icon="times" />
        </button>
        {this.props.text}
      </p>
    );
  }
}

export default Comment;
