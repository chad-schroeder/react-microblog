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
      <li className="list-group-item">
        <p className="mb-0 text-capitalize">
          <button
            className="btn btn-link border text-danger mr-3"
            onClick={this.deleteComment}
          >
            <FontAwesomeIcon icon="times" />
          </button>
          {this.props.text}
        </p>
      </li>
    );
  }
}

export default Comment;
