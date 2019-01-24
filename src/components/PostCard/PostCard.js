import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostCard extends Component {
  render() {
    const { id, title, description } = this.props;

    return (
      <Link to={`/${id}`} className="text-decoration-none">
        <h4 className="mb-0">{title}</h4>
        <p className="m-0 text-muted">{description}</p>
      </Link>
    );
  }
}

export default PostCard;
