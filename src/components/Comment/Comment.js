import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Comment extends Component {
  render() {
    return (
      <li className="list-group-item px-4">
        <p className="d-flex justify-content-between align-items-center mb-0">
          {this.props.text}
          <button
            className="btn btn-link border text-danger"
            onClick={() => this.props.deleteComment(this.props.id)}
          >
            <FontAwesomeIcon icon="times" />
          </button>
        </p>
      </li>
    );
  }
}

export default Comment;
