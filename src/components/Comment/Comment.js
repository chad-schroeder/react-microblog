import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
  }

  deleteComment() {
    this.props.deleteComment(this.props.id);
  }

  render() {
    console.log('Comment', this.props);

    return (
      <li className="list-group-item px-4">
        <p className="d-flex justify-content-between align-items-center mb-0 text-capitalize">
          {this.props.text}
          <button
            className="btn btn-link border text-danger mr-3"
            onClick={this.deleteComment}
          >
            <FontAwesomeIcon icon="times" />
          </button>
        </p>
      </li>
    );
  }
}

export default Comment;
