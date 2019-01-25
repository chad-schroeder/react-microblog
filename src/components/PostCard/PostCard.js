import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PostCard extends Component {
  render() {
    const { id, title, description, votes } = this.props;

    return (
      <Link to={`/${id}`} className="text-decoration-none">
        <h4 className="mb-0 h5" style={{ fontWeight: 600 }}>
          {title}
        </h4>
        <p className="m-0 text-muted">{description}</p>
        {/* up/down votes */}
        <div className="d-flex align-items-center">
          <p className="m-0">
            <strong>{votes}</strong> votes
          </p>
          <div className="btn-group" role="group">
            <button
              className="btn btn-link px-3 text-primary"
              style={{ width: '40px' }}
            >
              <FontAwesomeIcon icon="thumbs-up" />
            </button>
            <button
              className="btn btn-link text-danger px-3"
              style={{ width: '40px' }}
            >
              <FontAwesomeIcon icon="thumbs-down" />
            </button>
          </div>
        </div>
      </Link>
    );
  }
}

export default PostCard;
