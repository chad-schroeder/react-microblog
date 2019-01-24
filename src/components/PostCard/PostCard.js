import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostCard extends Component {
  render() {
    const { id, title, description } = this.props;

    return (
      <>
        <h4 className="mb-0">
          <Link to={`/${id}`} className="text-decoration-none">
            {title}
          </Link>
        </h4>
        <p className="m-0 text-muted">{description}</p>
      </>
    );
  }
}

export default PostCard;
